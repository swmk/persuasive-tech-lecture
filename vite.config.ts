import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

const redirectGrabfoodPlugin = (): Plugin => ({
  name: 'redirect-grabfood',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url ? req.url.split('?')[0] : '';
      if (url === '/grabfood' || url === '/grabfood/' || url === '/grabfood/index.html') {
        res.writeHead(302, { Location: '/grabfood-deck.html' });
        res.end();
        return;
      }
      next();
    });
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), redirectGrabfoodPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          grabfood: path.resolve(__dirname, 'grabfood/index.html'),
          grabfoodDeck: path.resolve(__dirname, 'grabfood-deck.html'),
          grabfoodAnalysis: path.resolve(__dirname, 'grabfood-analysis.html'),
          grabfoodImproved: path.resolve(__dirname, 'grabfood-improved.html'),
        },
      },
    },
  };
});
