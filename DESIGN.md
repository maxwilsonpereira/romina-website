# The Quiet Threshold

The site is a calm entrance to Mag. Romina Lauzensky's real practice in Vienna and Mödling. Its first view pairs the original practice-room photograph with a generous contact area. A CSS doorway frames the original photo without modifying it. The approved image mockup in `.impeccable/mocks/comp-2-doorway.png` guided the composition; its changed photography and generated wording were illustrative, as the user specified.

## Visual system

- Warm plaster `#e9e2d7`, light paper `#f6f3ed`, green ink `#112521`, muted green `#4b5b52`, and terracotta `#ad5746`.
- Libre Caslon Text for headings and Manrope for interface and body copy, both bundled locally through `@fontsource`.
- Large, quiet serif headings; open reading columns; thin rules and direct text links. The terracotta action is reserved for contact.
- Original photography remains unaltered. All eleven files in `public/images` match `.impeccable/source-images` by SHA-256. Source URLs and original file sizes are recorded in `.impeccable/source-images/manifest.json` rather than embedded in the images, preserving their bytes.
- Motion is limited to subtle link/button response and native page scroll. Reduced-motion preference is respected.

## Structure

The German URLs match the existing public routes. Every page has an English equivalent under `/en/`, with a switch to the same page in the other language. The five main destinations and six offer submenu pages remain discoverable on desktop and mobile. Interior pages use an image-led header, a readable article column, and direct contact links. All routes use the same footer.

## Contact and privacy

The contact form is a visual placeholder: submit is intercepted in the browser and shows a notice that nothing was sent or saved. The direct email and phone links work. The privacy pages explain that the prior site's policy was unavailable when this new site was built, as requested by the user. The prior reimbursement figures are retained as historical values with an instruction to confirm current amounts with the insurer.

## Production notes

The site is static Astro with no tracking scripts, forms service, or client-side framework. It builds for the GitHub Pages project path `/romina-website/`. Metadata, canonicals, reciprocal `hreflang`, a sitemap, and structured data cover verified facts. The privacy placeholders are `noindex` and excluded from the sitemap.
