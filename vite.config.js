/// <reference types="vitest/config"/>

import { defineConfig } from "vite";
import commonjs from "vite-plugin-commonjs";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  base: "/recipe-website",
  define: {
    "process.env": process.env, // This maps process.env for compatibility
  },
});
