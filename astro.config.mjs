// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from "rehype-pretty-code";

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
    vue(),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        [rehypePrettyCode, {
          theme: 'gruvbox-dark-hard',
          keepBackground: false,
          copyButton: true,
          copyButtonText: "📋", 
          copyButtonSuccessText: "✓", 
          
          onVisitHighlightedLine(node) {
            node.properties.className = node.properties.className || [];
            node.properties.className.push('highlighted');
          },
          onVisitTitle(node) {
            node.properties.className = node.properties.className || [];
            node.properties.className.push('code-title');
          }
        }]
      ]
    })
  ],
  vite: {
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
  },
});
