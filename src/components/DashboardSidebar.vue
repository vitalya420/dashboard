<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    variant="rail"
    permanent
    :rail="rail"
    @click="rail = false"
  >
    <v-list>
      <v-list-item
        nav
      >
        <template #append>
          <v-btn
            :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
            variant="text"
            @click.stop="rail = !rail"
          />
        </template>
      </v-list-item>
      <v-divider />
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :prepend-icon="item.icon"
        :title="item.title"
        href="#"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DashboardSidebar',
  data() {
    return {
      drawer: true,
      rail: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
        { title: 'Profile', icon: 'mdi-account', route: '/profile' },
        { title: 'Settings', icon: 'mdi-cog', route: '/settings' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
