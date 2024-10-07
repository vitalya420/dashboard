<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
  },
};
</script>

<template>
  <v-card
    class="login-card pa-4 d-flex flex-column"
    elevation="2"
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
        />

        <v-text-field
          label="Password"
          type="password"
        />

        <v-btn
          block
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

<style scoped>
.login-card {
  width: min(100%, 400px);
}
</style>