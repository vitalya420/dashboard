<template>
  <div class="default-layout">
    <DefaultSidebar :items="sidebarItems" />
    <div class="app-content flex-grow-1">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<script setup>
const sidebarItems = [
  {
    name: "Dashboard",
    icon: "fa-house",
    to: "/",
  },
  {
    name: "Menu",
    icon: "fa-mug-saucer",
    to: "/menu",
  },
  {
    name: "Users",
    icon: "fa-users",
    to: "/users",
  },
  {
    name: "Staff",
    icon: "fa-user-pen",
    to: "/users?staff=true",
  },
  {
    name: "Feedbacks",
    icon: "fa-star",
    to: "/feedbacks",
  },
  {
    name: "Settings",
    icon: "fa-gear",
    to: "/settings",
  },
];
</script>

<style>
.default-layout {
  display: flex;
  background: whitesmoke;
}

.app-content {
  margin: 25px;
}
</style>
