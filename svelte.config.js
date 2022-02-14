import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import dsv from '@rollup/plugin-dsv';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [dsv()],
      resolve: {
        alias: {
          $data: path.resolve('./src/data'),
          $components: path.resolve('./src/components'),
          $styles: path.resolve('./src/styles')
        }
      }
    }
  },
  preprocess: preprocess({
    scss: {
      prependData: `@import 'src/styles/variables.scss';`
    }
  })
};

export default config;
