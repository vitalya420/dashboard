import { defineStore } from "pinia";

export const createUserStore = ($api) => {
  return defineStore("user", {
    state: () => ({
      phone: "",
      password: "",
    }),

    actions: {
      async login() {
        await $api.get("/posts");
        console.log("login", this.phone, this.password);
      },
    },
  });
};
