import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                // so you don't need to import `describe`, `it`, etc.
    environment: 'happy-dom',          // simulates browser environment
    setupFiles: './src/test/setup.js',  // optional setup file
    pool: 'threads', 
  }
})
