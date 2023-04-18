import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.prod.js',
      name: 'Ibentau',
      fileName: 'ibentau',
      formats: ['es'],
    },
  },
  plugins: [svelte()]
})
