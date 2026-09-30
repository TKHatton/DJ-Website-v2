/**
 * Published Gumroad courses, for the Academy page's self-updating catalog.
 *
 * The academy page used to list courses as hand-written HTML, so a course only
 * appeared on the site if someone remembered to edit this repo and redeploy.
 * It fetches this endpoint instead: publish a product on Gumroad and it shows
 * up here within the cache window, with no deploy.
 *
 * Only published products are returned, so an unpublished draft stays private
 * exactly as it does on Gumroad. That makes the Publish button the single
 * control over what the public sees.
 *
 * Requires GUMROAD_ACCESS_TOKEN as a site environment variable. The token
 * never reaches the browser: it is read here and the response carries only
 * public product fields.
 */

const GUMROAD_API = 'https://api.gumroad.com/v2/products';

/**
 * Permalinks that are published on Gumroad but do not belong in the catalog.
 * Defaults to the book, which has its own section further down the academy
 * page. Override with ACADEMY_EXCLUDED_PERMALINKS as a comma-separated list,
 * so hiding a product from this page never needs a code change.
 */
function excludedPermalinks(): Set<string> {
  const raw = process.env.ACADEMY_EXCLUDED_PERMALINKS ?? 'nwom';
  return new Set(
    raw
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean)
  );
}

const CACHE_SECONDS = 300;

type GumroadProduct = {
  id?: string;
  name?: string;
  short_url?: string;
  price?: number;
  published?: boolean;
  description?: string;
  preview_url?: string | null;
  custom_permalink?: string | null;
};

type Course = {
  id: string;
  name: string;
  url: string;
  price: string;
  summary: string;
  image: string | null;
};

/**
 * Every product on the account.
 *
 * Gumroad returns at most 10 products per page plus a next_page_url. Reading
 * only the first page quietly drops courses once the account passes ten, which
 * on this page would look like a published course simply not existing. Gumroad
 * hands back a next_page_url even on the final page, so a page that adds
 * nothing new ends the loop.
 */
async function fetchAllProducts(token: string): Promise<GumroadProduct[]> {
  const products: GumroadProduct[] = [];
  const seen = new Set<string>();
  let url: string | null = `${GUMROAD_API}?access_token=${encodeURIComponent(token)}`;
  let guard = 0;

  while (url && guard < 20) {
    guard += 1;
    const resp: Response = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Gumroad API returned ${resp.status}`);
    }
    const payload = await resp.json();
    if (payload.success === false) {
      throw new Error('Gumroad API reported failure');
    }

    const page: GumroadProduct[] = payload.products ?? [];
    const fresh = page.filter((p) => p.id && !seen.has(p.id));
    fresh.forEach((p) => seen.add(p.id as string));
    products.push(...fresh);

    if (!payload.next_page_url || fresh.length === 0) break;
    const next: string = payload.next_page_url;
    const absolute = next.startsWith('/') ? `https://api.gumroad.com${next}` : next;
    url = `${absolute}${absolute.includes('?') ? '&' : '?'}access_token=${encodeURIComponent(token)}`;
  }

  return products;
}

/** Strip the listing HTML down to one plain-text line for the card. */
function summarize(description: string | undefined, limit = 180): string {
  if (!description) return '';
  const text = description
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= limit) return text;
  // Cut on a word boundary so the card never ends mid-word.
  return `${text.slice(0, text.lastIndexOf(' ', limit))}…`;
}

/** Gumroad prices are in cents. */
function formatPrice(cents: number | undefined): string {
  if (!cents) return 'Free';
  const dollars = cents / 100;
  return Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`;
}

function permalinkOf(product: GumroadProduct): string {
  return (product.short_url ?? '').split('/').pop() ?? '';
}

function toCourse(product: GumroadProduct): Course {
  return {
    id: product.id as string,
    name: product.name ?? 'Untitled',
    url: product.short_url ?? '',
    price: formatPrice(product.price),
    summary: summarize(product.description),
    image: product.preview_url ?? null,
  };
}

export default async (_req: Request) => {
  const token = process.env.GUMROAD_ACCESS_TOKEN;

  if (!token) {
    console.error('courses: GUMROAD_ACCESS_TOKEN is not set on this site');
    // An empty list rather than an error: the academy page keeps its
    // hand-written fallback content when this returns nothing.
    return Response.json(
      { courses: [], error: 'not configured' },
      { status: 200, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  try {
    const excluded = excludedPermalinks();
    const products = await fetchAllProducts(token);
    const courses = products
      .filter((p) => p.published)
      .filter((p) => !excluded.has(permalinkOf(p)))
      .filter((p) => !excluded.has(p.custom_permalink ?? ''))
      .map(toCourse);

    return Response.json(
      { courses },
      {
        status: 200,
        headers: {
          'Cache-Control': `public, max-age=60, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=600`,
        },
      }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('courses error:', message);
    return Response.json(
      { courses: [], error: 'unavailable' },
      { status: 200, headers: { 'Cache-Control': 'no-store' } }
    );
  }
};

export const config = {
  path: '/api/courses',
};
