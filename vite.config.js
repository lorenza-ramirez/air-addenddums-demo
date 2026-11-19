import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work from any path (Vercel, GitHub Pages, a folder).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
