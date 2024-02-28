import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import vitePluginRequire from 'vite-plugin-require';

// https://vitejs.dev/config
export default defineConfig({
  // https://github.com/wangzongming/vite-plugin-require/issues/40
  plugins: [(vitePluginRequire as any).default()],
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        dir: '.vite/build',
      },
      plugins: [
        typescript({
          target: 'ES2022',
        }),
      ],
    },
  },
});
