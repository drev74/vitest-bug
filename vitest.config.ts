import path from 'path';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// FIXME - this is a workaround for path resolution
// import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar(),
    // tsconfigPaths(),
  ],

  // add extra resolver to supports includes like `src/components/TodoApp`
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },

  // https://vitest.dev/config/#environment
  test: {
    globals: true,
    environment: 'happy-dom',
    includeSource: ['src/**/*.{js,ts,vue}'],
    exclude: ['node_modules'],
  },
};
