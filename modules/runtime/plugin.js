import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const apiClient = {
    async get(endpoint) {
      return await $fetch(endpoint, {
        baseURL: config.public.api.baseURL,
        method: "GET",
      });
    },
    async post(endpoint, data) {
      return await $fetch(endpoint, {
        baseURL: config.public.api.baseURL,
        method: "POST",
        body: data,
      });
    },
    // Add other methods (PUT, DELETE, etc.) as needed
  };

  return {
    provide: {
      api: apiClient,
    },
  };
});
