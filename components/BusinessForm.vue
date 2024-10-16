<template>
  <form class="business-form container mt-4">
    <FileUpload></FileUpload>

    <div class="form-group">
      <label for="name">Business Name:</label>
      <input
        type="text"
        id="name"
        class="form-control"
        placeholder="Coffee shop"
      />
    </div>

    <div class="form-group">
      <label for="desc">Business Description:</label>
      <textarea id="desc" class="form-control" rows="4"></textarea>
    </div>

    <div class="my-2">
      <button type="submit" class="btn btn-outline-success btn-sm">
        Update
      </button>
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
</style>
