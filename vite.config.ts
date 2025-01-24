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
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js` // Format-specific file names.
    },
    rollupOptions: {
      onwarn(warning) {
        console.warn(warning);
      },
      external: ['react', 'react-dom'], // Ensure React and ReactDOM are external.
      output: {
        globals: {
          react: 'React', // Global variable for React in UMD builds.
          'react-dom': 'ReactDOM' // Global variable for ReactDOM in UMD builds.
        }
      }
    },
    sourcemap: false, // Optionally generate source maps.
    outDir: resolve(__dirname, 'dist'), // Output directory.
    emptyOutDir: true // Clear output directory before building.
  },
  plugins: [
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-jsx']
      },
      include: '**/*.svg?react'
    }),
    react(),
    dts({ rollupTypes: true })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
});
