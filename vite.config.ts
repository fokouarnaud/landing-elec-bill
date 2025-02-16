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
  },
});
