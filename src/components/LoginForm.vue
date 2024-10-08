<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    async login() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.loading = false;
    },
  },
};
</script>

<template>
  <v-card
    class="pa-4 d-flex flex-column"
    elevation="2"
    style="width: min(100%, 400px);"
  >
    <div class="login-card-header text-center">
      <h2 class="poppins-regular">
        Welcome!
      </h2>
      <p class="poppins-regular">
        Provide your credentials
      </p>
    </div>
    <div class="flex-grow-1 py-10">
      <v-form>
        <v-text-field
          label="Phone Number"
          :disabled="loading"
        />

        <v-text-field
          label="Password"
          type="password"
          :disabled="loading"
        />

        <v-btn
          block
          :loading="loading"
          @click="login"
        >
          Login
        </v-btn>
      </v-form>
    </div>
    <div class="text-center">
      <v-btn
        variant="plain"
        @click="openDialog"
      >
        Having troubles logging in?
      </v-btn>
    </div>
  </v-card>

  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <v-card
      max-width="400"
      prepend-icon="mdi-help"
      text="Contact us via email to get help: hello@gmail.com"
      title="Help"
    >
      <template #actions>
        <v-btn
          class="ms-auto"
          text="Ok"
          @click="dialog = false"
        />
      </template>
    </v-card>
  </v-dialog>
</template>
