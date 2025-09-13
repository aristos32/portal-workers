import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue({
      customElement: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/@webcomponents/index.ts"),
      name: "WebComponents",
      fileName: (format) => `webcomponents.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        exports: "named",
      },
    },
    outDir: "dist-webcomponent",
    emptyOutDir: true,
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
});
