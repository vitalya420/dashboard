<template>
  <form class="login-form" @submit.prevent="userStore.login">
    <h3 class="title">Login</h3>
    <div class="input-group">
      <label for="phone">Phone</label>
      <input type="text" v-model="userStore.phone" id="phone" />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" v-model="userStore.password" id="password" />
    </div>
    <input type="submit" value="Login" />
  </form>
</template>

<script setup>
import { createUserStore } from "~/stores/user";
const { $api } = useNuxtApp();

const useUserStore = createUserStore($api);

const userStore = useUserStore();
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.title {
  text-align: center;
}
</style>
