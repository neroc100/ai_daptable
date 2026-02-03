import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  root: 'src',
  build: {
    outDir: '../dist',  // Output relative to root (src)
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
})