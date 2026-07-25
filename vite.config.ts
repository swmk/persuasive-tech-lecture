import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

const getHtmlInputs = () => {
  const inputs: Record<string, string> = {
    main: path.resolve(__dirname, 'index.html'),
  };

  const rootFiles = fs.readdirSync(__dirname);
  for (const file of rootFiles) {
    if (file.endsWith('.html')) {
      const key = file.replace(/\.html$/, '').replace(/[^a-zA-Z0-9]/g, '_');
      inputs[key] = path.resolve(__dirname, file);
    }
  }

  if (fs.existsSync(path.resolve(__dirname, 'grabfood/index.html'))) {
    inputs['grabfood'] = path.resolve(__dirname, 'grabfood/index.html');
  }

  return inputs;
};

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
      if (url === '/grabfood-assessment' || url === '/grabfood-assessment.html') {
        res.writeHead(302, { Location: '/grabfood_assessment.html' });
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
        input: getHtmlInputs(),
      },
    },
  };
});
