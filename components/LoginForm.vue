<template>
  <form class="login-form" @submit.prevent="handleSubmit">
    <h3 class="title">Login</h3>
    <div class="input-group">
      <label for="phone">Phone</label>
      <input type="text" v-model="phone" id="phone" />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" v-model="password" id="password" />
    </div>
    <input type="submit" value="Login" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      password: '',
    }
  },
  methods: {
    handleSubmit(){
      console.log("fuck");
    }
  }
}
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
}

.title {
  text-align: center;
}
</style>