import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: '/',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      // Make sure to bundle all dependencies including three.js
      external: []
    }
  }
});