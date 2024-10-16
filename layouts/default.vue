<!-- layouts/default.vue -->
<template>
  <div class="app-layout">
    <DefaultSidebar />
    <div class="right-side">
      <NavigationBar
        :onSupportButton="() => (showSupport = !showSupport)"
      ></NavigationBar>
      <div class="main-content h-100">
        <NuxtPage />
      </div>
    </div>
    <SupportSidebar v-if="showSupport"></SupportSidebar>
  </div>
</template>

<script>
const route = useRoute();
console.log(route.path);

export default {
  data() {
    return {
      showSupport: false,
      sidebarItems: [
        {
          label: "Dashboard",
          icon: "fa-solid fa-house",
          active: route.path === "/",
        },
      ],
    };
  },
};
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
  padding: 10px;
  min-height: 50%;
}

.right-side {
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  /* display: flex; */
}
</style>
