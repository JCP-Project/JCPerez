import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/JCPerez/', // 👈 This is for GitHub Pages
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
});
