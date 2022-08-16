import { fileURLToPath, URL } from "url";
import { qrcode } from "vite-plugin-qrcode";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qrcode({ filter: (url) => url === "http://192.168.1.1:4173" }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
