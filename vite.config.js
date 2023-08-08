import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-HardikDudeja/', // for github pages
  // we can define entry point as index.js or any other file
})
