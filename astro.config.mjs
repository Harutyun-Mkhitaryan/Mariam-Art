import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Harutyun-Mkhitaryan.github.io',
  base: '/Mariam-Art',
  integrations: [tailwind()]
});