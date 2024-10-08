<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    variant="rail"
    permanent
    :rail="rail"
    @click="rail = false"
    :width="width"
  >
    <v-list class="h-100 d-flex flex-column">
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

      <div class="flex-grow-1" />
      <v-divider />
      <v-list-item
        prepend-icon="mdi-logout"
      >
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
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
      width: 280,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
        { title: 'Staff', icon: 'mdi-account-group', route: '/staff' },
        { title: 'Menu Positions', icon: 'mdi-view-list', route: '/menu' },
        { title: 'Advertisements', icon: 'mdi-advertisements', route: '/ads' },
        { title: 'Feedbacks', icon: 'mdi-star-check', route: '/feedbacks' },
        { title: 'Settings', icon: 'mdi-cog', route: '/settings' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
