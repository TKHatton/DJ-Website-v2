# Project Memory: Digital Jaywalking Website (v2)

## What This Project Is
The main website for Digital Jaywalking, LLC. A company that designs and builds multi-agent AI systems for small-to-medium businesses. Co-founded by Lenise (LT) Kenney and Julian Kenney, based in Durham, NC.

## Tech Stack
- React 19 + TypeScript
- Vite 6 (build tool)
- Tailwind CSS (via CDN in index.html)
- Single-page app with client-side routing (no React Router, custom state-based routing)
- Deployed on Netlify at digitaljaywalkingv2.netlify.app (will move to primary domain)

## Brand
- **Colors**: cream (#FDFBF7), charcoal (#1A1A1A), terracotta (#E2725B), honey (#EBC06D), teal (#4A7C7A), plum (#6B4E71)
- **Fonts**: Sora (body), Playfair Display (headings/accent)
- **Blog name**: Against Traffic
- **Newsletter name**: The Blind Spot
- **Tagline**: "Intelligent agents. Architected for you."
- **No em dashes anywhere, ever.**

## Site Structure
| Route | Page | Purpose |
|-------|------|---------|
| home | Home.tsx | Landing page with hero, services overview, projects, CTA |
| studio | StudioPage.tsx | Full service breakdown (3 tiers + blueprint + add-ons) |
| academy | AcademyPage.tsx | Workshops, courses, schedule, instructor bios |
| blog | BlogPage.tsx | Against Traffic blog + The Blind Spot newsletter signup + lead magnet |
| approach | ApproachPage.tsx | How We Build (5-step process) |
| about | AboutPage.tsx | Co-founder bios, company story, values |
| start | StartAProjectPage.tsx | Project intake form |

## Service Model
- **Agent Starter** (1-3 agents): Single workflow solutions
- **Agent System** (4-10 agents): Multi-workflow orchestration (core offering)
- **Agent Infrastructure** (10+ agents): Full operational systems
- **Agent Blueprint**: Architecture plan only with 2 check-in calls (standalone entry offer)
- **Add-ons**: Team Training, Ongoing Optimization Retainer
- Clients get ACCESS to systems (slash commands, dashboards), never the code. Repos stay private.

## Key Files
- App.tsx: Main router
- components/Navbar.tsx: Fixed nav with mobile menu
- components/Footer.tsx: Sitemap, links, em dash joke
- templates/blog-post-template.html: Against Traffic blog post HTML template
- templates/newsletter-template.html: The Blind Spot newsletter HTML template

## Design Patterns
- Rounded corners: rounded-[40px] for cards, rounded-[60px] for dark sections
- Card hover: translateY(-8px) scale(1.02)
- Grainy texture overlay on body
- Float animation (6s ease-in-out)
- Dark charcoal sections for CTAs and emphasis
- Accessibility: skip-to-content, focus-visible outlines, aria labels, keyboard nav
