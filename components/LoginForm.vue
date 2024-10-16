<template>
  <form
    class="container mt-5 p-4 border rounded"
    @submit.prevent="userStore.login"
  >
    <h3 class="text-center">Welcome back!</h3>
    <div class="mb-3">
      <label for="phone" class="form-label"> Phone </label>
      <div class="input-group">
        <input
          type="text"
          v-model="userStore.phone"
          id="phone"
          class="form-control"
        />
      </div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label"> Password </label>
      <div class="input-group">
        <input
          type="password"
          v-model="userStore.password"
          id="password"
          class="form-control"
        />
      </div>
    </div>
    <button type="submit" class="btn btn-success w-100">
      <font-awesome-icon icon="fa-solid fa-sign-in-alt" /> Login
    </button>
  </form>
</template>

<script setup>
import { createUserStore } from "~/stores/user";
const { $api } = useNuxtApp();

const useUserStore = createUserStore($api);

const userStore = useUserStore();
</script>
