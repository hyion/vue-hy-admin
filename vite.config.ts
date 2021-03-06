import type { UserConfig, Resolver } from 'vite';
import { resolve } from 'path';
import { createProxy } from './build/vite/proxy';
import { loadEnv } from './build/utils';
const pkg = require('./package.json');
import svgLoader from 'vite-svg-loader';

const pathResolve = (dir: string) => {
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  '/@/': pathResolve('src'),
};

const viteEnv = loadEnv();

const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE, VITE_DYNAMIC_IMPORT } = viteEnv;

/**当前工作目录 */
const root: string = process.cwd();

const resolvers: Resolver[] = [];

const viteConfig: UserConfig = {
  root,
  alias,
  port: VITE_PORT,
  base: VITE_PUBLIC_PATH,
  esbuildTarget: 'es2019',
  terserOptions: {
    compress: {
      keep_infinity: true,
      drop_console: VITE_DROP_CONSOLE,
    },
  },

  define: {
    __VERSION__: pkg.version,
  },

  cssPreprocessOptions: {
    sass: {
      includePaths: ['path/to/sass/deps'],
    },
  },

  optimizeDeps: {
    include: [
      'axios',
      '@kangc/v-md-editor/lib/theme/vuepress.js',
      '@kangc/v-md-editor/lib/preview',
    ],
  },
  plugins: [svgLoader()],
  // proxy: createProxy(VITE_PROXY)
};

export default viteConfig;
