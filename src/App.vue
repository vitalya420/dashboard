<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue';

export default {
  computed: {
    layout() {
      const currentRoute = this.$route;
      return currentRoute.meta.layout === 'default' ? DefaultLayout : 'div';
    }
  }
};
</script>
