import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
    },
    prerender: {
      handleHttpError: ({ status, path, referrer, referenceType }) => {
        if (status === 404) {
          return { redirect: `${base}/404.html` };
        }
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;
