import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'frontend-b',
        filename: 'remoteEntry.js',
        remotes: {
          fragments: 'fragments@http://localhost:3002/remoteEntry.js',
        },
      }),
  ],
})
