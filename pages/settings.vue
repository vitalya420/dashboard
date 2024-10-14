<template>
  <div class="settings-page">
    <h3>Settings</h3>

    <h5>Update Business Information</h5>
    <div class="business-form-wrapper">
      <BusinessForm></BusinessForm>
    </div>

    <h5>Logged in Device</h5>
    <div>
      <button @click="showDeviceList = !showDeviceList">Show</button>
    </div>
    <TokensTable v-if="showDeviceList"></TokensTable>
  </div>
</template>

<style scoped>
.settings-page {
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
}
.business-form-wrapper {
  width: min(100%, 300px);
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
