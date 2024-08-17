import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      strict: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/shopping-cart' : ''
    }
  },
  preprocess: vitePreprocess()
};

export default config;
