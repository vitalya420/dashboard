<!-- layouts/default.vue -->
<template>
  <div class="app-layout">
    <DefaultSidebar />
    <div class="right-side">
      <NavigationBar :onSupportButton="() => showSupport = !showSupport"></NavigationBar>
      <div class="main-content">
        <NuxtPage />
      </div>
    </div>
    <SupportSidebar v-if="showSupport"></SupportSidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSupport: false,
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.app-layout {
  display: flex;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}

.right-side{
  flex-grow: 1;
  /* display: flex; */
}
</style>