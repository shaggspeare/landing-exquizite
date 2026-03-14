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
        createHtmlPlugin({
          minify: true,
          inject: {
            data: {
              title: 'Calleo - Master Languages Through Smart, Interactive Practice',
              description: 'Create custom word sets, play engaging games, and accelerate your language learning journey. 40+ languages, 4 game modes, AI-powered tools. Available on iOS and web.',
              keywords: 'language learning, vocabulary app, flashcards, language games, AI language learning, learn languages, iOS app, web app, multilingual, vocabulary builder',
              ogTitle: 'Calleo - Master Any Language, Your Way',
              ogDescription: 'Learn languages with AI-powered flashcards, games, and smart practice tools. 40+ languages supported. Start free on iOS or web.',
              ogImage: 'https://calleo.xyz/images/og-image.png',
              ogUrl: 'https://calleo.xyz/',
              twitterCard: 'summary_large_image',
              twitterTitle: 'Calleo - Master Languages Through Smart Practice',
              twitterDescription: 'AI-powered language learning with flashcards, games, and 40+ languages. Free on iOS and web.',
              twitterImage: 'https://calleo.xyz/images/twitter-card.png',
            }
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
