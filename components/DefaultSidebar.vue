<template>
  <div class="default-sidebar">
    <ul class="nav-items">
      <li v-for="(item, index) in items" :key="index" class="nav-item">
        <nuxt-link
          :to="item.href"
          class="nav-link"
          :class="{ active: $route.path == item.href }"
          >{{ item.title }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.nav-link {
  text-decoration: none;
}
.nav-items {
  list-style-type: none;
}
.active {
  color: black;
}
</style>

<script setup>
const items = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Users",
    href: "/users",
  },
  {
    title: "Menu",
    href: "/menu",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Feedbacks",
    href: "/feedbacks",
  },
  {
    title: "History",
    href: "/history",
  },
  {
    title: "Settings",
    href: "/settings",
  },
];

console.log(items);
</script>
