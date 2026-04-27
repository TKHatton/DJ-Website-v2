# Digital Jaywalking — page build brief for Claude Code

A handoff document for building the remaining pages of digitaljaywalking.com. Use this with Claude Code (or any AI coding assistant) to build each page consistent with the established brand.

**How to use this:**
1. Paste the "Master prompt" section into Claude Code at the start of every page-building session
2. Then paste the relevant **page spec** for whichever page you're building
3. Claude Code has access to your `index.html`, `Digital_Jaywalking_brand_guide.md`, and `Complete_Guide_to_Avoiding_AI-Sounding_Language.md` — make sure those are in the repo so they can be referenced

---

## Master prompt — paste this first, every session

> You are building a page for **Digital Jaywalking** — a digital products studio for working professionals. You have access to three reference files in this repository: `index.html` (the homepage, locked and shipped), `Digital_Jaywalking_brand_guide.md` (the complete brand and design system), and `Complete_Guide_to_Avoiding_AI-Sounding_Language.md` (the copy filter).
>
> **Before writing any code**, read those three files. Match the existing system exactly. Do not improvise on color, type, spacing, voice, or layout patterns.
>
> **Hard rules that override anything else:**
>
> - **Founders:** Julian Bass — Founder & CEO. Lenise Kenney — Head of Product Development & Applied Learning. **Julian's name is always listed first** wherever both appear. This includes copy, schema, footers, page metadata.
> - **Voice:** First-person plural — "we" / "our". Never "I" / "my" in public-facing copy. Confident understatement. No buzzwords from the AI-language avoidance file.
> - **No text below 11px.** Hard floor.
> - **All text must pass WCAG AA contrast** (4.5:1 normal, 3:1 large). Use `--signal-text` (#BF3D14) for orange small-text on light backgrounds, `--signal` (#FF5C2A) for visual brand elements and text on dark backgrounds, `--muted` (#A8A6A0) for caption text on dark.
> - **Static HTML only.** No SPA frameworks, no client-side rendering. Content, schema, meta tags must all be in the initial server response. Test with View Source and disabled-JS before declaring done.
> - **Every page needs:** lang="en" on <html>, semantic HTML5 (<header>, <main>, <section>, <nav>, <footer>), ARIA roles on landmarks, aria-labelledby on sections, focus-visible CSS, prefers-reduced-motion respected, skip-to-main-content link, all images with alt text (or alt="" if decorative), schema.org JSON-LD specific to the page type, OpenGraph and Twitter card meta tags, canonical URL.
> - **Header and footer must match index.html exactly.** Do not redesign them per page.
> - **Match the type system, color tokens, spacing, animation patterns from index.html.** All CSS variables are defined in the homepage `:root` block — extract those to a shared CSS file if you haven't already.
>
> **What to avoid:**
> - No swirling hexagon AI logos, no glow effects, no gradients except in data viz
> - No "AI-powered" anywhere in copy
> - No carousels, popups, exit-intent modals, chat bubbles
> - No "Most Popular" / "Best Value" e-commerce badges
> - No hidden pricing on Studio products (transparent pricing only)
> - No backdated journal posts
> - No buzzwords from the AI-language avoidance file
>
> **When in doubt:** match the homepage. The homepage is the locked reference for everything visual and structural.

---

## Recommended file structure

If you haven't already, refactor for shared assets so each page doesn't duplicate the CSS:

```
/
├── index.html
├── studio.html
├── studio/
│   ├── operational-system-template.html
│   ├── content-command-center.html
│   ├── foldersort.html
│   └── inboxtosheet.html
├── academy.html
├── journal.html
├── journal/
│   └── {post-slug}.html
├── about.html
├── contact.html
├── build-something.html
├── privacy.html
├── terms.html
├── 404.html
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/
    │   └── main.css         (extracted from index.html)
    ├── js/
    │   └── main.js          (animations, form handlers)
    └── fonts/               (self-hosted Inter Tight, Inter, JetBrains Mono)
```

**First refactor task:** extract the CSS from `index.html` into `assets/css/main.css` and link it from every page. Same for the JavaScript.

---

## Page specs

Each page below includes:
- **Purpose** — what the page does
- **Sections** — what goes on the page, in order
- **Schema** — what JSON-LD to embed
- **Open items** — content gaps that need real input from Lenise

---

### `/studio` — full product catalog

**Purpose:** Show every product Digital Jaywalking sells, organized by category. The homepage shows wow products only — this page shows everything.

**Sections (in order):**

1. **Header** (matches index.html)
2. **Page hero** — eyebrow `00 / THE STUDIO`, H1 `What we build.`, sub: `One-time pricing. No lock-in. Bring your own AI key. Built by us, for us first — then made ready for you.`
3. **Category filter row** — pills: All / Operational Systems / Automations / Agents / Apps. Filtering happens client-side with simple show/hide JS. All button is selected by default.
4. **Product grid** — every product in the catalog. Each product card matches the homepage card pattern exactly (category eyebrow, status pill, product name, description, price, CTA). Cards link to their `/studio/{slug}` detail page.
5. **Custom Builds feature card** — same as homepage, "Starting at $5,000 · Inquire →"
6. **Footer** (matches index.html)

**Products to include:** Operational System Template ($2,500), Content Command Center (waitlist), FolderSort ($97), InboxToSheet ($67 / $500 DFY), and any others in the live catalog. Get current list from Lenise.

**Schema:** `CollectionPage` schema with an `ItemList` of all products. Each item is a `Product` schema with name, description, price, availability.

**Open items:** Final list of all products with current pricing and status pills. Get from Lenise before building.

---

### `/studio/{slug}` — individual product detail pages

**Purpose:** Detailed information on a single product. Where the buy decision happens.

**One detail page per product. Build them one at a time.**

**Sections (in order):**

1. **Header** (matches index.html)
2. **Breadcrumb** — `Studio › [Product Name]` in mono caps, slate, 11px
3. **Product hero** — split layout. Left: eyebrow `[CATEGORY]`, H1 product name, sub-headline (one-line description), price, primary CTA (Buy now / Join waitlist / Inquire). Right: product visual (screenshot, video walkthrough, or illustration — placeholder if not yet produced).
4. **What it does** — H2, one paragraph plain language summary
5. **What's included** — H2, bullet list of features. Use the README for each product to populate this. For Operational System Template: 99 agent specs, 52 commands, 32 templates, 6 industry playbooks, full documentation, etc.
6. **How it works** — H2 + supporting copy or screenshots. Optional walkthrough video slot (placeholder until recorded).
7. **Specs / requirements** — H2, table or definition list. Platform support, system requirements, what comes in the package, file formats, etc.
8. **Pricing** — repeat the price prominently with the buy CTA. Include any "starting at" notes or DFY upsells.
9. **Customization tweak offering** — small section: `Need this customized for your specific use case? Starting at $250. Inquire →`. Only show on products where customization makes sense.
10. **Hand-off to Academy** — small line: `Want to learn how this works? See it taught in DJ Academy →`
11. **Footer** (matches index.html)

**Schema:** `Product` schema with name, description, image, brand, sku (if applicable), offers (price, priceCurrency, availability, url). Include `BreadcrumbList` schema for the breadcrumb.

**Open items:** Real product screenshots/videos. Final feature lists per product. Specs and system requirements per product.

---

### `/academy` — Academy page

**Purpose:** Where teaching lives. Courses, the book, future workshops, lead magnet (when ready).

**Sections (in order):**

1. **Header** (matches index.html — note: header stays the same on Academy pages, no special Academy lockup yet)
2. **Hero** — eyebrow `00 / DJ ACADEMY`, H1 `Don't want to buy it. Want to build it.`, sub: `DJ Academy teaches the craft behind everything in the Studio. Live sessions, self-paced courses, and the book.`
3. **Featured course / next live session** — call-out box for whatever's next. If nothing is scheduled, hide this section.
4. **Course catalog** — grid of all courses. Each card: course name, level (Beginner / Intermediate / Advanced), duration, format (live or self-paced), short description, CTA. Cards have the same hover treatment as Studio cards.
5. **The book** — featured prominently. Real cover image (when available), title, subtitle, both purchase paths (Kindle live $4.99, paperback launches May 4 2026). Link to Kindle: `https://a.co/d/0dRmFq5s`
6. **Lead magnet** (when built) — eyebrow + small section with the free thing on offer + email capture. Until the community vote happens, hide this section.
7. **Speaking & events** — small section with upcoming or past speaking appearances. DJ Summit when announced.
8. **Hand-off to Studio** — `Don't want to build it? Buy it ready-made in the Studio →`
9. **Footer** (matches index.html)

**Schema:** `EducationalOrganization` schema for DJ Academy. `Course` schema for each course offering. `Book` schema for *Protect Your Genius* with author Lenise Kenney.

**Open items:** Final course catalog with descriptions and pricing. Real book cover image. Speaking events to feature. Lead magnet content.

---

### `/journal` — journal index

**Purpose:** Reverse-chronological list of all posts.

**Sections:**

1. **Header**
2. **Page hero** — eyebrow `00 / JOURNAL`, H1 `Field notes from the studio.`, sub: `Posts come from the work. When we ship something or learn something worth writing about, we write.`
3. **Post list** — each entry: post title (h2), publication date in mono caps, 1-2 sentence preview, "Read →" link. List in reverse chronological order. No tags initially. No pagination until volume justifies it.
4. **Footer**

**Schema:** `Blog` schema with `blogPost` items linking to each entry.

**Open items:** None — structure is generic. Just needs the three seed posts to exist.

---

### `/journal/{slug}` — individual journal posts

**Purpose:** A single field note.

**Sections:**

1. **Header**
2. **Article hero** — eyebrow with category or date, H1 post title, byline (`by Lenise Kenney` or `Lenise Kenney & Julian Bass`), publication date in mono
3. **Article body** — markdown-rendered content. Prose in Inter, max-width ~680px for readability. Code blocks if needed (JetBrains Mono, light gray background). Headings, lists, links all styled per brand.
4. **Article footer** — small mono line: `Filed under [category]. Published [date].` Plus a "More from the Journal →" link
5. **Footer**

**Schema:** `Article` schema with author (linked to Person schema for Lenise/Julian), datePublished, dateModified, headline, image (if any), articleBody.

**Voice rules for posts:**
- **Retrospective only.** Posts come from work that's been done.
- **Evergreen** — focus on the journey, the realizations, what was tried and what worked
- **No SEO listicles** ("10 tips for X")
- **No backdating** — publication date is the actual ship date
- **No forced cadence** — write when there's something real to say

**Three seed posts to build first:**
1. *Why preview mode matters more than people think* — about FolderSort's design principle of "show before you sort"
2. *What we learned shipping the Operational System Template* — about packaging 99 agent specs and 6 industry playbooks for sale
3. *Two weeks running the Content Command Center* — coordinating content across multiple brands without slop

**Open items:** Lenise writes the actual posts. Build the page templates and structure first.

---

### `/about` — About page

**Purpose:** Who built Digital Jaywalking, briefly and warmly.

**Sections:**

1. **Header**
2. **Page hero** — eyebrow `00 / ABOUT`, H1 `Built by two people who needed it themselves.`
3. **Founders** — two side-by-side bio blocks, **Julian first, Lenise second**. Each block: photo (when available), name, role, bio paragraph. If Julian doesn't want a photo yet, leave a clean placeholder block with just his name + role + minimal bio.
4. **Origin / what we're doing** — short paragraph block, ~3-4 sentences. The "we built this for ourselves first" story.
5. **Values / philosophy** — pull-quote treatment of `We cut the corners on the right things.` plus 2-3 short paragraphs reinforcing brand posture.
6. **What we're working on** — small bullet list of what's currently in development (MAOS, productized CCC, etc.). Keep it light, no roadmap commitments.
7. **Get in touch** — link to /contact
8. **Footer**

**Schema:** `AboutPage` wrapper. `Person` schemas for both founders linked to the `Organization` schema.

**Founder bios — locked starting points:**

> **Julian Bass — Founder & CEO**
> [Bio TK from Julian. He may want this minimal. Get whatever he's comfortable with.]

> **Lenise Kenney — Head of Product Development & Applied Learning**
> [Bio TK from Lenise. Should reference 20+ years teaching experience and product development background. Mention the book Protect Your Genius.]

**Open items:** Julian's bio (and optional photo). Lenise's bio + photo. Origin paragraph language.

---

### `/contact` — Contact page

**Purpose:** Single inquiry form covering general contact + custom build inquiries.

**Sections:**

1. **Header**
2. **Page hero** — eyebrow `00 / CONTACT`, H1 `Tell us what you need.`, sub: `We respond within a few business days. For Custom Build inquiries, include as much detail as you can.`
3. **Two columns:**
   - **Left:** Inquiry form with fields: Name, Email, Subject (dropdown: General question / Custom build inquiry / Press / Other), Message (textarea). Submit button: `Send →`
   - **Right:** Contact details — email `jaywalking@digitaljaywalking.com`. Response time note. No phone, no address listed.
4. **Footer**

**Schema:** `ContactPage` schema.

**Form behavior:** Posts to `/api/contact` (placeholder — wire to Resend or whatever email service). On success, show a confirmation message: `Thank you. We've got your message and will respond within a few business days.`

**Open items:** Backend wiring for the form.

---

### `/build-something` — Wishlist page

**Purpose:** People can submit ideas for tools/agents/automations they wish existed.

**Sections:**

1. **Header**
2. **Page hero** — eyebrow `00 / BUILD SOMETHING`, H1 `Have an idea we should build?`, sub: `Real ideas, real submissions. We can't promise we'll build everything we hear, but we read everything that comes in.`
3. **Submission form:**
   - Your name
   - Email
   - What should it do? (textarea, large)
   - Submit button
4. **What happens next** — small note: `We'll take your suggestion into consideration. We may reach out if it's a direction we decide to follow. No promises, just real attention.`
5. **Footer**

**Schema:** Standard `WebPage` schema.

**Form behavior:** Posts to `/api/wishlist` (placeholder). On success: `Thank you. Your idea is in our consideration queue. We may reach out if it's something we decide to build.`

**Open items:** Backend wiring.

---

### `/privacy` — Privacy Policy

**Purpose:** Legally required for any site collecting emails or processing payments.

**Build approach:** Don't draft this yourself. Use one of:
- **Termly** (~$10/month, generates compliant policy)
- **iubenda** (~$30/year, more options)
- **A flat-fee lawyer review** (~$300 one-time)

**What the page needs visually:**
1. Header
2. Page title `Privacy Policy`
3. Last updated date
4. Body content (provided by your tool/lawyer of choice)
5. Footer

The page should match the brand visually but the legal content is non-negotiable. Use the type system and spacing from the rest of the site, but don't try to make legal content "premium-looking" — just make it clean and readable.

**Schema:** `WebPage` schema with `mainEntity` of type `PrivacyPolicy` if your tool supports it.

---

### `/terms` — Terms & Conditions

**Purpose:** Legally required for selling products. Includes Custom Build license terms, refund policy, liability caps, etc.

**Build approach:** Same as Privacy — use Termly, iubenda, or a lawyer. Don't draft yourself.

**Critical content this needs to cover** (give this list to your tool/lawyer):
- License terms for purchased products (perpetual license to use)
- Custom Build clause: client gets perpetual license; Digital Jaywalking retains rights to develop and sell generalized versions of underlying methods/architecture, excluding client-specific data, branding, or proprietary business logic
- Refund policy
- Liability cap (typically capped at the purchase price)
- Termination clauses
- Dispute resolution
- Governing jurisdiction

**Visual treatment:** Same as Privacy Policy — clean and readable, not "premium-looking."

**Schema:** `WebPage` schema.

---

### `/404` — Custom 404 page

**Purpose:** When someone hits a broken or missing URL, give them a brand moment instead of a generic browser error.

**The concept:** The rebel pixel from the homepage has wandered off the page. Reuse the grid visual but with the rebel pixel missing entirely (or hopping around outside the grid in the corner of the page).

**Sections:**

1. **Header**
2. **Centered content block:**
   - Eyebrow `404 / OFF THE GRID`
   - H1 `Looks like our pixel wandered off.`
   - Sub: `This page doesn't exist, or it moved. Here's where to go instead.`
   - Animated grid visual with the rebel pixel hopping outside its boundaries
3. **Recovery links** — three CTA buttons: `Back to home →`, `Browse the Studio →`, `Read the Journal →`
4. **Footer**

**Schema:** Standard `WebPage`. Set `noindex` meta tag.

**Server config:** Make sure the web host is configured to serve this page on any 404 response (not redirect to home — actual 404 status with this page).

---

## Sitemap and robots — required at launch

**`sitemap.xml`** — list every public URL. Generate dynamically or maintain manually. Submit to Google Search Console and Bing Webmaster Tools after launch.

**`robots.txt`** — minimum content:

```
User-agent: *
Allow: /

Sitemap: https://digitaljaywalking.com/sitemap.xml
```

If there are pages that should not be indexed (admin pages, draft posts), disallow them here.

---

## Per-session checklist for Claude Code

Before declaring any page done, run through this:

- [ ] Header and footer match index.html exactly (extracted from shared CSS/HTML if possible)
- [ ] Page has unique `<title>` and `<meta name="description">` under 160 chars
- [ ] Page has OpenGraph and Twitter card meta tags
- [ ] Page has canonical URL link
- [ ] Page has appropriate JSON-LD schema
- [ ] All text passes WCAG AA contrast (test with browser dev tools or Stark plugin)
- [ ] All text is 11px or larger
- [ ] All interactive elements have visible focus state (the orange ring)
- [ ] All forms have explicit `<label>` elements
- [ ] All images have alt text (or `alt=""` if decorative)
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Page renders without JavaScript (test: View Source shows real content)
- [ ] Page renders correctly on phone, tablet, desktop
- [ ] Skip-to-main-content link works
- [ ] Julian Bass listed first wherever both founders are mentioned

---

## Brand reminders for every page

- **Founders:** Julian Bass (Founder & CEO) listed first. Lenise Kenney (Head of Product Development & Applied Learning) listed second.
- **Voice:** "We" / "our" — never "I" / "my" in public copy
- **No buzzwords** from the AI-language avoidance file
- **No fake urgency,** no popups, no "Most Popular" badges
- **Transparent pricing** — never hide a number
- **The manifesto closes with:** *We cut the corners on the right things.*
- **The hero line is:** *Cross where you need to.*

---

*This brief is a living document. When new patterns emerge or new pages get added, update this file so future builds stay consistent.*

— v1 / April 2026
