# Romina Lauzensky website · implementation plan

## Agreed result

Build the complete German-first, English-equivalent psychotherapist website in Astro, publish it from [maxwilsonpereira/romina-website](https://github.com/maxwilsonpereira/romina-website) with GitHub Actions to free GitHub Pages, and return the working share link. The visual direction is **The Quiet Threshold**; the approved homepage composition is **Doorway** (`.impeccable/mocks/comp-2-doorway.png`). The doorway in the mockup is an illustrative frame: build it with CSS around the unchanged original room photograph.

## Source audit

The live source site, its sitemap, current page text, and image URLs were checked on 2026-11-02. The original photographs are in `.impeccable/source-images/`; their source URLs are in `manifest.json`. Full page text is in `.impeccable/source-content.json` and page, heading, link, and image mapping is in `.impeccable/source-inventory.json`.

Romina describes a person-centered approach that emphasizes the therapeutic relationship, respect, personal pace, and safety. Her site lists individual, couples, family, trauma, creative/experiential, and alpaca-assisted psychotherapy. The practical-terms page explains the first meeting, audience, confidentiality, cancellation, and costs. Her biography includes cultural and social anthropology, ceramics, and oil painting. These details support a personal, calm, culturally literate design without generic clinical styling.

## Routes to preserve

| German route | Purpose | English equivalent |
| --- | --- | --- |
| `/` | Home | `/en/` |
| `/methode-schwerpunkte/` | Therapeutisches Angebot overview | `/en/therapeutic-offer/` |
| `/einzeltherapie-moedling-wien/` | Individual therapy | `/en/individual-therapy/` |
| `/paartherapie-moedling-wien/` | Couples therapy | `/en/couples-therapy/` |
| `/familientherapie-moedling-wien/` | Family therapy | `/en/family-therapy/` |
| `/traumapsychotherapie-moedling-wien/` | Trauma psychotherapy | `/en/trauma-psychotherapy/` |
| `/psychotherapie-mit-kuenstlerischen-und-erlebnisorientierten-elementen/` | Creative and experiential work | `/en/creative-psychotherapy/` |
| `/tiergestuetzte-psychotherapie-mit-alpakas/` | Alpaca-assisted work | `/en/alpaca-assisted-psychotherapy/` |
| `/therapeutischer-ablauf/` | Rahmenbedingungen | `/en/practical-information/` |
| `/ueber-mich/` | About Romina | `/en/about/` |
| `/kontakt/` | Contact and both practices | `/en/contact/` |
| `/impressum/` | Imprint | `/en/imprint/` |

The source privacy URL `/datenschutzerklaerung/` currently returns 404. Restore a privacy page after its text is verified. Keep equivalent language switching and reciprocal `hreflang` on every published pair.

## Work list

- [x] Read the live site, sitemap, content, images, and public routes.
- [x] Update Impeccable locally to 4.8.0, create the direction board, and record the chosen direction and composition.
- [x] Map the approved composition in the Impeccable spec and document the original-photo substitution in `DESIGN.md`. The plate gate remains open because it requires regenerated mockup photography and an additional user review, contrary to the explicit source-photo instruction.
- [x] Scaffold Astro with TypeScript, static output, shared layout, components, content data, and German and English routes.
- [x] Build responsive desktop and mobile navigation, service dropdown, equivalent-page language switch, first-contact area, footer, and all content pages.
- [x] Use the eleven downloaded original images unchanged; SHA-256 comparisons pass.
- [x] Implement the user-requested local form notice; no data is sent or stored. Direct email and phone links work.
- [x] Retain the source imprint and practical content, label reimbursement amounts as historical and advise checking current rates, and add the user-requested privacy placeholder on the prior URL and in English.
- [x] Add metadata, canonicals, `hreflang`, sitemap, robots, and structured data limited to verified facts.
- [x] Run Astro check, production build, route and image validation, browser layout and interaction checks, and sampled WCAG A/AA audit. Impeccable detect is clear; its comp-diff is contradicted by the illustrative photo alterations and therefore not a binding fidelity score. `DESIGN.md` records the result.
- [ ] Configure GitHub Actions, push the site to the named repository, enable Pages if needed, verify the live URL, and hand back that URL.

## Decisions resolved for this release

1. The form is demonstrative only and shows a local notice on submit. Direct email and phone links remain the working contact paths.
2. The privacy route is a placeholder explaining that the former policy was unavailable. It is excluded from search indexing and can be replaced when approved policy text is available. Historical reimbursement amounts are clearly marked as such.
