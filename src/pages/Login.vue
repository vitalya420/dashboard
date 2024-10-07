<script>
import { useAuthStore } from "../stores/auth.js";
import OtpLogin from "../components/OtpLogin.vue";

export default {
  components: {OtpLogin},
  data() {
    return {
      phone: '',
      otp: '',
    };
  },
  computed: {
    showPhoneInput() {
      return this.authStore.showPhoneInput;
    },
    showOtpInput() {
      return this.authStore.showOtpInput;
    },
    isLoading() {
      return this.authStore.isLoading;
    },
    lastError() {
      return this.authStore.lastError;
    },
  },
  methods: {
    handleSubmit() {
      if (this.showPhoneInput && this.phone) {
        this.authStore.phone = this.phone;
        this.authStore.nextStep(); // Move to OTP input step
      } else if (this.showOtpInput && this.otp) {
        this.authStore.otp = this.otp;
        // Handle OTP submission logic, e.g., API call
        // You can update `isLoading` and handle the response in the store
      } else {
        this.authStore.lastError = "Please fill in the required fields.";
      }
    },
  },
  created() {
    this.authStore = useAuthStore();
  },
};
</script>

<template>
  <div class="login-page-background">
    <v-container class="d-flex justify-center align-center" style="height: 100vh">
      <v-card class="login-card py-5" elevation="1">
        <OtpLogin></OtpLogin>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.login-page-background {
  min-height: 100vh;
  background: #E0EAFC;
  background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);
  background: linear-gradient(to right, #CFDEF3, #E0EAFC);
}

.login-card {
  width: min(100%, 400px);
  height: min(100%, 600px);

}
</style>