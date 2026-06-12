import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://gaia-agent.com',
  trailingSlash: 'always',
  build: { assets: 'assets' },
  integrations: [tailwind(), sitemap(), icon()],
});
