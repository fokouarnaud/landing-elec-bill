import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  server: {
    port: 3000,
    host: "localhost",
  },
  optimizeDeps: {
    include: ["@radix-ui/react-toast", "@radix-ui/react-label", "@radix-ui/react-slot"],
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            '@remix-run/react',
            '@radix-ui/react-toast',
            '@radix-ui/react-label',
            '@radix-ui/react-slot'
          ]
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Netlify specific optimizations
  ssr: {
    noExternal: ['@remix-run/*', '@radix-ui/*']
  }
});
