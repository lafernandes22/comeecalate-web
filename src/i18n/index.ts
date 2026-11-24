import en from './en.json';
import pt from './pt.json';

export const locales = ['en', 'pt'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

const strings = { en, pt };
export type Strings = typeof en;

export const getStrings = (lang: Lang): Strings => strings[lang];

// BASE_URL is "/" on Vercel and "/comeecalate-web" on GitHub Pages.
const base = () => import.meta.env.BASE_URL.replace(/\/$/, '');

/** Path to a file in /public, respecting the site base. */
export const assetPath = (path: string) => `${base()}${path}`;

/** Home page for a language: English at "/", Portuguese at "/pt/". */
export const pagePath = (lang: Lang) =>
  lang === defaultLang ? `${base()}/` : `${base()}/${lang}/`;
