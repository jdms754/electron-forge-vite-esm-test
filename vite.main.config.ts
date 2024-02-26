import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config
export default defineConfig({
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
