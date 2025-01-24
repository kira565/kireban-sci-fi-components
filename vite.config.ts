import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'), // Library entry point.
      name: 'kireban-sci-fi-components', // Library name for UMD build.
      fileName: (format) => `index.${format}.js` // Format-specific file names.
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'gsap'], // Ensure React and ReactDOM are external.
      output: {
        globals: {
          react: 'React', // Global variable for React in UMD builds.
          'react-dom': 'ReactDOM', // Global variable for ReactDOM in UMD builds.
          gsap: 'gsap'
        }
      }
    },
    sourcemap: true, // Optionally generate source maps.
    outDir: resolve(__dirname, 'dist'), // Output directory.
    emptyOutDir: true // Clear output directory before building.
  },
  plugins: [svgr(), react(), dts({ rollupTypes: true })],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
});
