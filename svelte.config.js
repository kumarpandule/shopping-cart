import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '200.html' // This will serve 200.html for all routes
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/shopping-cart' : ''
    }
  },
  preprocess: vitePreprocess()
};

export default config;
