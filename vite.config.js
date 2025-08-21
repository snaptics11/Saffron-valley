import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',   // ✅ relative paths work on Netlify
  plugins: [react()],
})
