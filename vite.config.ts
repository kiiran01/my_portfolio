import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/',  // Required for GitHub Pages asset paths
  optimizeDeps: {
    exclude: ['lucide-react'],  // Preserves your existing optimization
  },
  build: {
    outDir: 'docs',  // New: Output files directly to /docs instead of /dist
    chunkSizeWarningLimit: 1000,  // Optional: Silence large chunk warnings
  },
});