import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/',  // This is the crucial line for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});