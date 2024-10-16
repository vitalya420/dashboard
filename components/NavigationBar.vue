<template>
  <nav class="navbar border-bottom px-3">
    <div></div>
    <button
      class="btn btn-sm btn-outline-secondary"
      type="button"
      @click="onSupportButton"
      aria-label="Online Support"
    >
      <font-awesome-icon icon="fa-solid fa-headset" />
      Online Support
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    onSupportButton: {
      type: Function,
      required: true,
    },
  },
};
</script>
