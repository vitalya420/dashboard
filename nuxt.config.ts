// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "~/modules/api"],
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: "client" },
    "~/plugins/fontawesome.js",
  ],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  build: {
    transpile: ["bootstrap"],
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
