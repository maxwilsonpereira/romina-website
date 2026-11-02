import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maxwilsonpereira.github.io',
  base: '/romina-website',
  trailingSlash: 'always',
  output: 'static',
  devToolbar: { enabled: false },
  vite: { server: { watch: { ignored: ['**/.impeccable/**', '**/.npm-cache/**'] } } },
  integrations: [sitemap({ filter: (url) => !url.endsWith('/datenschutzerklaerung/') && !url.endsWith('/en/privacy/') })],
});
