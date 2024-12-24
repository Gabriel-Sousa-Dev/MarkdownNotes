import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname,  "./src/components/"),
      
    }
  },
  build: {
    outDir: './dist-react'
  }
})
