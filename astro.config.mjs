// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Update `site` to your final domain once it is live (used for SEO + sitemaps).
  site: 'https://www.ravimonani.com',
  server: {
    port: 4321,
    host: true,
  },
});
