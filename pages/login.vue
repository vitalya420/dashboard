<template>
  <div class="login-page">
    <div class="login-form-wrapper">
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
}

.login-form-wrapper {
  width: min(100%, 400px);
  align-self: center;
}
</style>
