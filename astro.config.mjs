// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves from a sub-path; Vercel (test site) serves from the root.
const onVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  site: onVercel ? undefined : 'https://lafernandes22.github.io',
  base: onVercel ? '/' : '/comeecalate-web',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
});
