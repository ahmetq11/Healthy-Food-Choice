import { fileURLToPath } from "url";
// import { VitePWA } from "vite-plugin-pwa";
import viteSvgIcons from "vite-plugin-svg-icons";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
    // VitePWA({
    //   strategies: 'injectManifest',
    //   base: "/",
    //   mode: "development",
    //   srcDir: "src",
    //   includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
    //   manifest: {
    //     name: "Diyetisyen",
    //     short_name: "Diyetisyen",
    //     description: "Sağlığınız için size özel yemek planı",
    //     theme_color: "#ffffff",
    //     icons: [
    //       {
    //         src: "pwa-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any maskable",
    //       },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
