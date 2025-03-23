import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.jsx", // Expose the Button component
      },
      shared: ["react", "react-dom"], // Share dependencies
    }),
  ],
});
