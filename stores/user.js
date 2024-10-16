import { defineStore } from "pinia";

export const createUserStore = ($api) => {
  return defineStore("user", {
    state: () => ({
      phone: "",
      password: "",
      user: null,
      business: null,
      tokens: null,
    }),

    actions: {
      async login() {
        try {
          const res = await $api.post("/api/common/v1/auth/", {
            phone: this.phone,
            password: this.password,
            realm: "web",
          });

          const { user, business, tokens } = res; // Ensure you access the correct property

          // Save the result to the store state
          this.user = user;
          this.business = business;
          this.tokens = tokens;

          // Save to local storage
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("business", JSON.stringify(business));
          localStorage.setItem("tokens", JSON.stringify(tokens));
        } catch (error) {
          console.error("Login failed:", error);
          // Handle error (e.g., show a notification)
        }
      },
    },
  });
};
