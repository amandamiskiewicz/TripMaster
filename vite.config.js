import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/TripMaster/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'TripMaster',
        short_name: 'TripMaster',
        start_url: '/TripMaster/', 
        scope: '/TripMaster/',     
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#42b883',
        icons: [
          {
            src: './icons/icon-192x192.png', 
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        navigateFallback: '/TripMaster/index.html',
        globPatterns: ['**/*.{js,css,html,png,svg}'], 
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/amandamiskiewicz\.github\.io\/TripMaster\/.*/i,
            handler: 'NetworkFirst'
          }
        ]
      },
      devOptions: {
        enabled: false 
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)) 
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})