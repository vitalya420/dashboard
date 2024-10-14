<template>
  <form class="business-form">
    <div class="form-group">
      <label for="name">Business Name:</label>
      <input type="text" id="name" placeholder="Coffee shop" />
    </div>
    <div class="form-group">
      <label for="desc">Business description:</label>
      <textarea id="desc"></textarea>
    </div>
    <div>
      <input type="submit" value="Update" />
    </div>
  </form>
</template>

<style scoped>
.image-preview {
  width: 50px;
  height: 50px;
  background: black;
}
.image-preview:hover {
  cursor: pointer;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.business-form {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>
