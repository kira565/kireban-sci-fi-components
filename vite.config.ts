import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'), // Specifies the entry point for building the library.
      name: 'kireban-sci-fi-components', // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js` // Generates the output file name based on the format.
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Defines external dependencies for Rollup bundling.
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true // Clears the output directory before building.
  },
  plugins: [svgr(), react(), dts({ rollupTypes: true }), cssInjectedByJsPlugin()]
});
