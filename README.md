# Romina Lauzensky website

German-first, English-equivalent Astro website for Mag. Romina Lauzensky. The original images are preserved in `public/images`; provenance is in `.impeccable/source-images/manifest.json`.

## Develop

Use Node.js 24 or later.

```sh
npm ci
npm run dev
npm run check
npm run build
```

The site deploys automatically from `main` through `.github/workflows/deploy.yml` to [GitHub Pages](https://maxwilsonpereira.github.io/romina-website/).

The contact form currently displays a local notice instead of sending data. Email and phone links work. The privacy page is a user-requested placeholder because the old policy URL was unavailable when this site was built.
