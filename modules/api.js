import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxt-api-module",
    configKey: "api",
  },
  defaults: {
    baseURL: "http://localhost:8000",
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Add plugin to handle API calls
    addPlugin(resolver.resolve("./runtime/plugin"));

    // Expose options to the rest of the app
    nuxt.options.runtimeConfig.public.api = options;
  },
});
