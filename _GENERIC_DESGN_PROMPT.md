# REUSABLE WEBSITE / LANDING PAGE CREATION PROMPT

## 1. PROJECT DIRECTIVES — FILL THIS IN FOR EACH NEW WEBSITE

<!-- Replace this entire block with the brief for the specific client and website. Add links or files for brand assets and factual source material. Leave the reusable instructions below in place. -->

**Client / brand:** [Name and what the organization does]

**Website to create:** [Landing page, portfolio, business site, campaign, web app, etc.; new build or redesign]

**Audience and context:** [Who visits, where they arrive from, and what they need]

**Primary goal and action:** [What success means and the one most important action]

**Pages / sections / features:** [Required scope, interactions, forms, integrations, and content]

**Brand direction:** [Personality, references, visual assets, existing identity, and things to avoid]

**Content and proof:** [Approved copy, claims, photographs, testimonials, pricing, legal text, and their sources]

**Languages and markets:** [Locales and default language, if applicable]

**Technical and business constraints:** [Hosting, domain, CMS, analytics, budget, deadlines, existing URLs, compliance, etc.]

**Existing project or reference files:** [Repository, design files, documents, and URLs to inspect]

**Explicit decisions already made:** [Anything the agent should treat as settled]

---

## 2. YOUR JOB

Create a complete, original, production-quality website suited to the project directives above. Treat those directives and verified client material as the source of truth. Use the rules below as defaults; adapt them when a specific project's needs clearly call for a different solution. Do not import the colors, fonts, artist imagery, concert structure, four-language roster, or fixed URLs of another project.

Work through discovery, design choice, implementation, verification, and handoff. Make routine implementation decisions yourself. Ask only for missing information that materially changes the product or for the explicit design choice described below. Do not invent factual claims, testimonials, customers, event dates, availability, prices, awards, metrics, or legal statements. Mark illustrative content clearly when real client content is unavailable and list what must be replaced before publication.

## 3. DISCOVER THE PRODUCT AND CHOOSE THE STACK

Before coding, inspect the brief, existing repository (if any), assets, content, routes, hosting, integrations, and user journeys. For an existing site, record what must be preserved: content, brand commitments, behavior, public URLs, SEO, and working integrations. Give me a concise assessment and identify the primary visitor action.

**Evaluate Astro explicitly for every project.** Tell me whether Astro is a good fit and why. Prefer current Astro with TypeScript, static output, reusable components, semantic HTML, clean CSS, and minimal browser JavaScript for content-led sites and landing pages. If the project needs substantial authenticated application state, server features, or interaction that Astro does not serve cleanly, recommend a more suitable stack and explain the tradeoff. Do not turn a mostly static marketing site into a client-rendered SPA by habit. Add a backend, database, CMS, UI framework, styling framework, or large JavaScript dependency only when a concrete requirement justifies it. Use current official integration guidance for the selected stack.

If using Astro, keep route entries thin, share page implementations and layouts where appropriate, put reusable UI in components, and keep static assets separate from source. Never edit generated build output. Use the project's supported runtime and package scripts; run the complete production build before handoff.

## 4. USE IMPECCABLE AND SHOW ME THE DESIGN BOARD

Use the **Impeccable** design skill/workflow for new visual work. First inspect the installed skill and its current instructions. Check whether an official update is available and whether it is compatible with the project; report the installed and available versions when they can be verified. Apply an appropriate update using the official method before design work when it is safe and supported. Do not guess command names or follow an old prompt over the installed version. Impeccable is a development/design aid, never a production runtime dependency.

Capture the product truth in `PRODUCT.md` (or the project's equivalent) and use the current Impeccable workflow for a new surface or visual identity. Respect any established brand instead of replacing it without authorization. If Impeccable provides a direction board or decision page, **open it for me and show the actual visual options**. This is a required part of the workflow, not an optional summary in text.

**Before implementing the visual design:**

1. Develop several materially distinct, project-specific design directions based on the audience, real content, brand, and visitor goal. Follow the installed Impeccable procedure for generating and selecting directions.
2. Present the **Impeccable board** with the options together. Each option should show its design thesis, palette/material character, typography direction, first-viewport idea, visitor path, and an honest tradeoff. Include visual sketches/previews when the current workflow and tools support them. Make the board accessible to me in the browser; if that is impossible, present the same choices with images and a structured choice question.
3. **Wait for my choice of design direction.** Do not silently select one or start building the page while this choice is pending, unless I explicitly delegate the choice.
4. When the selected direction still leaves meaningful composition choices, follow Impeccable's current visualization workflow: show the required compositional options together (currently three when image generation is available), ask which to carry forward, and wait for my approval or explicit delegation before implementation.

Preserve the chosen direction during development. Translate previews into real, responsive, semantic UI; do not use a flattened mockup as the live interface. Record the approved direction and composition in the project's design documentation. If the current Impeccable version changes its workflow, follow its current instructions while preserving my requirement to see and choose from a visual board before the build.

## 5. CREATE A DISTINCT DESIGN SYSTEM

Build the design from this client's world, audience, assets, and content. Avoid a generic template or a predictable category cliché. Study references for craft, not for copying. Give the first viewport a clear identity, message, and primary action. Let the homepage tell a coherent story; each subsequent section should add evidence or move the visitor toward a useful decision. Use authentic, licensed, or client-provided imagery when the subject calls for it, with deliberate crops and focal points. Do not use synthetic imagery as false evidence of a real person, place, product, or result.

Define and reuse meaningful tokens for color, typography, spacing, widths, radii, borders, and motion. Create a clear type hierarchy and comfortable reading measures. Choose colors and typefaces for the specific brand, with glyph coverage for every requested language. Use whitespace, scale, alignment, imagery, and contrast intentionally. Cards, gradients, glass, shadows, pills, icons, and animation are allowed only when they serve the chosen direction; do not add them as default decoration. Keep primary and secondary actions distinct and consistent.

Document the implemented visual system in `DESIGN.md` or the project's equivalent: creative direction, palette and tokens, type roles, layout, components, imagery, responsive rules, motion, accessibility, and named decisions. For a new visual identity, document the system that was actually built. If modifying an existing site, preserve established design outside the approved scope and update the documentation only where the system truly changed.

## 6. BUILD MOBILE FIRST AND KEEP THE CODE MAINTAINABLE

Design the small-screen experience deliberately, including navigation, hero, imagery, forms, overlays, and short viewports. Expand to tablet and desktop with fluid sizing and purposeful breakpoints. Test long content, narrow screens, zoom, and every specified locale. Do not assume the desktop crop or section order works on mobile.

Use shared components and styles for repeated patterns. Keep language differences in content/data rather than copying page implementations. When changing CSS, find the original rule and all its usages, then fix the shared source. Avoid bottom-of-file override chains, duplicate declarations, unnecessary specificity, and `!important` patches. Prefer a small coherent CSS system and native HTML/CSS behavior; justify any framework or animation library that adds weight. Keep animations purposeful, content visible without JavaScript, and a usable reduced-motion experience.

## 7. ACCESSIBILITY, PERFORMANCE, SEO, AND TRUST

Use meaningful landmarks and headings, readable contrast, visible keyboard focus, descriptive alternative text, labels, sensible hit targets, and accessible menu/dialog behavior. Verify keyboard operation and media behavior. Do not let effects or overlays block the primary action. Preserve core content in crawlable HTML whenever possible.

Optimize the actual user experience: responsive image sizes and formats, correct first-viewport image priority, lazy loading below the fold, stable layout, sensible font loading, and lightweight third-party embeds. Keep browser JavaScript and dependencies proportional to the need. Check mobile and desktop rendering and fix material defects in a bounded review.

Provide unique titles and descriptions, canonical URLs, Open Graph metadata, semantic internal links, sitemap and robots handling, and suitable structured data based on verified facts. If multilingual, use real locale routes, localized metadata, reciprocal `hreflang`, a shared implementation, and language switching to equivalent pages. Preserve existing URLs or provide deliberate redirects when redesigning a live site. Do not claim search features are supported without checking their current requirements.

## 8. VERIFY AND HAND OFF

After building, run the project's production build and relevant checks. Inspect representative mobile and desktop views, important interactions, forms, navigation, links, media, accessibility, and localized pages. Use Impeccable's applicable critique/audit/finish workflow, following the installed version. Compare the result with the approved board and composition; resolve meaningful differences or report them plainly.

At handoff, give me the working result and a brief account of the chosen stack, selected design direction, files created or changed, checks run, and any real content/assets or external credentials still needed. Do not call the project finished while the required design choice, core build, or production verification is still outstanding.
