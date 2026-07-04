import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,  // For Docker/network access
    watch: {
      usePolling: true,  // Fix for WSL/Windows file watching
      interval: 100
    },
    hmr: {
      overlay: true  // Show errors in browser
    }
  }
})

