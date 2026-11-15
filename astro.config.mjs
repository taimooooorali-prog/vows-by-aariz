import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vows-by-aariz.vercel.app/',
  integrations: [tailwind()],
  output: 'static',
});
