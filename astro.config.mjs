// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

// const REPO_NAME = 'codewithbeer.com';
const CUSTOM_DOMAIN = process.env.CUSTOM_DOMAIN;

export default defineConfig({
  site: CUSTOM_DOMAIN ? `https://${CUSTOM_DOMAIN}`: `https://RonaldoSetzer.github.io`,
  base: '/',
  outDir: 'dist',
  build: {
    assets: 'assets',
  },
  integrations: [
    react(), 
    vue()
  ],
  vite: {
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
  },
  build: {
    assets: '_assets'
  }
});
