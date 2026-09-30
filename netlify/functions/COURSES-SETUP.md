# Academy course catalog: setup

<!-- prose-check: off — file names the course slug spotting-ai-real-or-fake -->

The course list on `/academy` is no longer hand-written HTML. It is rendered
from the products that are **published** on Gumroad, so publishing a course
there puts it on the site with no code change and no deploy.

## How it works

1. `netlify/functions/courses.mts` serves `/api/courses`. It reads the Gumroad
   API with the site's own access token, keeps only products with
   `published: true`, and returns name, price, summary, image and buy URL.
2. `brand/assets/js/courses.js` fetches that on the academy page and inserts a
   card per course at the top of the existing grid.
3. The hand-written live-session cards in `brand/academy/index.html` stay put,
   below the self-paced courses.

An unpublished Gumroad draft never appears. The Publish button on Gumroad is
the only control over what the public sees.

## One-time setup

Set one environment variable on this Netlify site:

| Variable | Required | Purpose |
|---|---|---|
| `GUMROAD_ACCESS_TOKEN` | Yes | Reads the product list. Same token the course-cannon repo uses. |
| `ACADEMY_EXCLUDED_PERMALINKS` | No | Comma-separated permalinks to keep out of the catalog. Defaults to `nwom`, the book, which has its own section on the page. |

```bash
netlify env:set GUMROAD_ACCESS_TOKEN <value>
```

Or use Site configuration, then Environment variables, in the Netlify
dashboard. The token is read server-side only and never reaches the browser.

Without the variable the endpoint returns an empty list rather than an error,
and the academy page keeps the hand-written cards already in its markup. The
page is never broken by a missing token, only less complete.

## Caching

Responses carry `s-maxage=300`, so a newly published course appears within
about five minutes. `stale-while-revalidate=600` means visitors never wait on
a slow Gumroad response.

## Checking it

```bash
curl https://digitaljaywalking.com/api/courses
```

Expect `{"courses":[...]}`. An empty array with no `error` field means the
token works and nothing is published yet. `"error":"not configured"` means the
environment variable is missing.

## What is still hand-written on that page

The live-session cards, the events list, and the book section. Those are not
Gumroad products, so nothing reads them from anywhere. Edit
`brand/academy/index.html` directly when they change.
