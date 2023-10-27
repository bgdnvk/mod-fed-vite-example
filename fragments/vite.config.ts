import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
   react(),
   federation({
       name: 'fragments',
       filename: 'remoteEntry.js',
       exposes: {
         './Button': './src/Button.tsx',
         './Header': './src/Header.tsx',
       },
      shared: ['react','react-dom'] 
     }),
  ],
  build: {
    target: 'esnext' // needed to final build
  },
})
