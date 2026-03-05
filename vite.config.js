import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['three', '@react-three/fiber', '@react-three/drei'],
    include: [
      'react', 
      'react-dom',
      'framer-motion'
    ]
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          r3f: ['@react-three/fiber', '@react-three/drei']
        }
      }
    }
  },
  resolve: {
    alias: {
      three: 'three/build/three.module.js'
    }
  }
})