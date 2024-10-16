<template>
  <div class="settings-page">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title text-muted">
          <font-awesome-icon icon="fa-solid fa-gear"></font-awesome-icon>
          Settings
        </h2>
        <hr />
        <h4 class="text-muted">
          <font-awesome-icon icon="fa-pen-to-square" />
          Update Business Information
        </h4>
        <div class="business-form-wrapper">
          <BusinessForm></BusinessForm>
        </div>
        <hr />
        <h4 class="text-muted">
          <font-awesome-icon icon="fa-desktop" />
          Logged in devices
        </h4>
        <TokensTable></TokensTable>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-page {
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
}
.business-form-wrapper {
  width: min(100%, 400px);
}
</style>

<script>
export default {
  data() {
    return {
      showDeviceList: false,
    };
  },
};
</script>
