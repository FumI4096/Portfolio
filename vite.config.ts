import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'client/dist', // Output relative to root (which is the client folder)
    emptyOutDir: true, // Clean the output directory before building
  },
})
