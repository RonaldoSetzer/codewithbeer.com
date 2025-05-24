// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  integrations: [react(), vue()],
  vite: {
    resolve: {
      alias: {
        '@lab-react': path.resolve(__dirname, '../../packages/lab-react'),
        '@lab-vue': path.resolve(__dirname, '../../packages/lab-vue'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
  },
});
