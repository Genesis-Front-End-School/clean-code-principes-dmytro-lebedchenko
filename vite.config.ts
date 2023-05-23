import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'node:path';
import dts from 'vite-plugin-dts';

const cwd = process.cwd();
const REPOSITORY_NAME = cwd.split('\\').pop();

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${REPOSITORY_NAME}/`,
  server: {
    https: true
  },
  plugins: [
    react(),
    basicSsl(),
    reactRefresh(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './library/index.ts'),
      name: 'courses-app-ui-tools',
      formats: ['es', 'umd'],
      fileName: (format) => `courses-app-ui-tools.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    minify: 'esbuild',
    sourcemap: true,
    reportCompressedSize: true,
    emptyOutDir: true,
    copyPublicDir: false,
  },
})
