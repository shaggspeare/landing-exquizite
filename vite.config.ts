import fs from 'node:fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // index.html has no <%= %> placeholders; this is here purely to minify it.
        createHtmlPlugin({ minify: true })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        // Drop /videos/demo.mp4 in and rebuild: the hero's centre phone plays it
        // instead of its screenshot. Absent, nothing is requested.
        __HAS_HERO_VIDEO__: JSON.stringify(
          fs.existsSync(path.resolve(__dirname, 'public/videos/demo.mp4'))
        ),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
