import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — always needed
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Animation library — loaded separately
          'framer-motion': ['framer-motion'],
          // Supabase — only needed on pages that query DB
          'supabase': ['@supabase/supabase-js'],
          // 3D rendering — only on heavy pages
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // UI components
          'radix-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-tabs',
            '@radix-ui/react-select',
          ],
          // Rich text editor — only on admin pages
          'tiptap': ['@tiptap/react', '@tiptap/starter-kit', '@tiptap/extension-link'],
          // Chart — only on admin/dashboard
          'recharts': ['recharts'],
          // Icons
          'lucide': ['lucide-react'],
        },
      },
    },
    // Increase warning limit slightly to avoid noise — real savings are in chunking
    chunkSizeWarningLimit: 600,
  },
}));

