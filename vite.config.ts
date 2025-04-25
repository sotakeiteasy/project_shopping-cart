/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      utils: path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
