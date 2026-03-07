// @ts-check

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://jvc.pages.dev',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],

  adapter: cloudflare(),
});