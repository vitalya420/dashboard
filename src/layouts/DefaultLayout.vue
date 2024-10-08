<template>
  <v-app>
    <DashboardSidebar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import DashboardSidebar from "../components/DashboardSidebar.vue";
</script>