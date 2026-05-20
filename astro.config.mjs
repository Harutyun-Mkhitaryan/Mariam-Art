import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://Harutyun-Mkhitaryan.github.io',
  base: '/Mariam-Art',
  integrations: [tailwind()],
  adapter: cloudflare()
});