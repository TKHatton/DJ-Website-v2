# Repo Audit for Studio Catalog Inclusion

Generated 2026-04-26. Source: CORE/repos.md, CORE/status.md.

This file is for review. **Nothing has been auto-added to the live site beyond Run the Books.** Tell Claude Code which products to add in a follow-up session.

---

## Summary recommendations

**Strong adds (premium-feeling, deployed, sellable as-is or after light packaging):**
- Daily Brief Agent → Automations
- Opportunity Tracker → Automations
- Personal CRM → Automations
- What's Next Decision Agent → Agent Systems (would unblock the empty Agent Systems category)
- Weekly Review Agent → Agent Systems

**Hold for later (need work or repositioning):**
- Routine Anchor (blocked on Twilio, code complete)
- PageSpeak (Chrome extension, in progress, no OCR yet)
- Proof of Work (CLI, narrow audience)
- The Drop (cross-brand intelligence layer, internal posture)

**Skip from catalog (not brand-fit or not for sale):**
- Course Cannon (lives in Academy backend, not a Studio product)
- Crock'n Roll (personal/family business)
- Soft Strength Retreat (sister's site)
- All hackathon experiments (CueBoard, Signal Vault, etc.)
- All client-facing ventures (Signal & Structure AI, StormIQ, Academy itself)

---

## Operational Systems candidates

### Operational System Template
- **Status:** Deployed, in active use across multiple ventures
- **Sellability:** Ready as-is, $2,500 price set
- **Brand fit:** Premium
- **Suggested catalog placement:** Operational Systems (already there)
- **Suggested action:** Already on the site. Continue.
- **Why:** Flagship, the system the studio runs on its own work.

### Run the Books
- **Status:** Fully specced, building this week
- **Sellability:** Ships within weeks, waitlist now
- **Brand fit:** Premium
- **Suggested catalog placement:** Operational Systems (added in this pass)
- **Suggested action:** Already added with waitlist CTA.
- **Why:** Second flagship, fills the financial-ops gap with a clean product.

### Content Command Center
- **Status:** Deployed, running internal use, not yet packaged
- **Sellability:** Needs work before public release. Some venture-specific naming inside.
- **Brand fit:** Premium with work
- **Suggested catalog placement:** Don't include for now (detail page kept in codebase, unlinked from catalog)
- **Suggested action:** Hold for later. Re-add when the timeline firms up and the venture-name leakage is removed.
- **Why:** Featuring two waitlist products at once weakens the brand's "things you can actually buy" promise. Run the Books takes the second flagship slot.

---

## Automations candidates

### FolderSort
- **Status:** Active, beta running, $97 set
- **Sellability:** Ready as-is
- **Brand fit:** Premium
- **Suggested catalog placement:** Automations (already there)
- **Suggested action:** Continue.
- **Why:** Real product, real users, clean Gumroad flow.

### InboxToSheet
- **Status:** Active, beta running, $67 set
- **Sellability:** Ready as-is
- **Brand fit:** Premium
- **Suggested catalog placement:** Automations (already there)
- **Suggested action:** Continue.
- **Why:** Real product, real users, clean Gumroad flow.

### Daily Brief Agent
- **Status:** Deployed on Railway, running daily, in active personal use
- **Sellability:** Needs light stripping. Currently personal-use, but the engine is generalizable. Pulls from calendar, opportunity tracker, CRM. The "stack of integrations" version is what would sell.
- **Brand fit:** Premium with work
- **Suggested catalog placement:** Automations
- **Suggested action:** Add after stripping. Frame as "your operations brief, every morning, without watching it."
- **Why:** Strong premium add. Real value, real running code, clean story.

### Opportunity Tracker
- **Status:** Deployed on Railway as cron job, 13 real opportunities loaded, $82K pipeline tracked
- **Sellability:** Needs stripping. Currently pure CLI plus daily HTML email. Would sell better with a small dashboard view.
- **Brand fit:** Premium
- **Suggested catalog placement:** Automations
- **Suggested action:** Add after stripping. Could ship as a CLI-first product for technical buyers, then build the optional UI later.
- **Why:** Real product, real category (revenue pipeline tracking), clean architecture.

### Personal CRM
- **Status:** Deployed on Railway as cron job, 24 contacts seeded, 14 commands working
- **Sellability:** Ready as-is for technical buyers. Would benefit from a small UI for non-technical buyers.
- **Brand fit:** Premium
- **Suggested catalog placement:** Automations
- **Suggested action:** Add as-is for technical buyers, or after a small UI pass for general audience.
- **Why:** Real product, distinct from Opportunity Tracker (CRM is people, OT is deals).

### Routine Anchor
- **Status:** Code complete, blocked on Twilio number procurement
- **Sellability:** Not yet, needs the Twilio piece unblocked
- **Brand fit:** Premium when shipped
- **Suggested catalog placement:** Automations (when ready)
- **Suggested action:** Hold for later.
- **Why:** Real product, but blocked on infra.

### Weekly Review Agent
- **Status:** Deployed on Railway, Sunday email, real use
- **Sellability:** Light stripping needed
- **Brand fit:** Premium
- **Suggested catalog placement:** Could go in Automations or Agent Systems. Better fit for Agent Systems since it reads across data sources and synthesizes.
- **Suggested action:** Add to Agent Systems after stripping.
- **Why:** Solid add, demonstrates the agent-system thesis (one agent reading multiple sources to produce one output).

---

## Agent Systems candidates

### What's Next Decision Agent
- **Status:** Built, currently local (not on Railway yet)
- **Sellability:** Ready as-is for technical buyers, light packaging for everyone else
- **Brand fit:** Premium, brand-fit story (capability-scoped agent that reads across sources)
- **Suggested catalog placement:** Agent Systems
- **Suggested action:** Add this one. It's the cleanest example of what we mean by "agent systems" instead of "agents."
- **Why:** Reads across OT, CRM, Routine Anchor. Outputs PRIMARY/WHY/SECONDARY/SKIP TODAY. Health-aware. The exact right shape for a flagship Agent Systems product.

### Weekly Review Agent
(Listed above under Automations. Better fit for Agent Systems if shown there.)

### Daily Briefing Agent v2
- **Status:** Building this weekend (target Monday April 27 6:30 AM)
- **Sellability:** Soon
- **Brand fit:** Premium with work
- **Suggested catalog placement:** Agent Systems (after v2 ships)
- **Suggested action:** Hold for later this week, add once v2 is stable.
- **Why:** Could replace the existing Daily Brief Agent listing with a more premium "agent system" story.

---

## Apps candidates

### PageSpeak
- **Status:** In progress. Browser extension, text-to-speech on web pages, no OCR yet
- **Sellability:** Not yet
- **Brand fit:** Premium when shipped
- **Suggested catalog placement:** Apps (when ready)
- **Suggested action:** Hold for later. Until OCR ships, the product story is incomplete.
- **Why:** Real product idea, just not ready.

### Proof of Work
- **Status:** Built, CLI for capturing project work
- **Sellability:** Possible, narrow audience (other builders documenting their work)
- **Brand fit:** Premium-with-work
- **Suggested catalog placement:** Apps or Automations
- **Suggested action:** Hold for later. Niche product, might fit better as a free or low-cost lead magnet rather than a paid catalog item.
- **Why:** Useful but narrow. Better as a giveaway than a product.

### Daily Clarity
- **Status:** Live at dailyclarity.netlify.app, free mode
- **Sellability:** Free product, validation phase
- **Brand fit:** Off-brand for this catalog. Belongs on its own URL or in a separate brand context.
- **Suggested catalog placement:** Don't include
- **Suggested action:** Skip. Already removed in this pass.
- **Why:** Different product story (an AI-powered thinking assistant for individuals) than the Studio's premium operational tools. Distracts from positioning.

---

## Skip list

These are real, but not catalog-fit:

- **Crock'n Roll** — personal family business, not a venture
- **Soft Strength Retreat** — sister's site, not a venture
- **Course Cannon** — Academy infrastructure, not a Studio product
- **The Drop** — cross-brand internal intelligence layer, not a sellable product
- **Signal Vault, CueBoard** — hackathon submissions, not productized
- **Signal & Structure AI repos (signal-pulse-api, signal-engine, signal-ops-dashboard, ss-client-portal, ss-platform-dashboard, S-S-Tier3_Templated_OS)** — separate brand, separate site
- **StormSight, StormIQ-Landing-Page, SewerSentinel-Agent, ClearWay** — Municipality branch (StormIQ), separate brand
- **All WF-* repos** — course exercises, not products
- **All Fashion / She Is AI / client repos** — old client engagements, dormant
- **Old portfolios, old DJ websites, old course generators** — superseded
- **Personal experiments (Tesseract, Repetition-Detection, games, etc.)** — not for sale

---

## Recommended next adds (in order)

If the user wants to add catalog products in a follow-up session, the highest-confidence picks are:

1. **What's Next Decision Agent** → Agent Systems. Unblocks the empty category. Strong brand-fit story.
2. **Personal CRM** → Automations. Already running, real value, distinct from OT.
3. **Opportunity Tracker** → Automations. Pairs well with Personal CRM (the deals/people split).
4. **Daily Brief Agent** → Automations OR Agent Systems. Useful either way.
5. **Weekly Review Agent** → Agent Systems. Synthesizes across data sources.

Hold until ready: Routine Anchor, PageSpeak, Daily Briefing v2.

Skip permanently from this catalog: Daily Clarity, Crock'n Roll, anything client-facing or in another brand.

---

*This audit is a snapshot. Re-run when new products ship or the brand position changes.*
