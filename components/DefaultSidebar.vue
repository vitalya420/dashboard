<template>
  <div
    class="sidebar"
    :class="{ 'sidebar-expanded': expanded }"
    @mouseenter="expand"
    @mouseleave="collapse"
  >
    <div class="sidebar-header">
      <img v-if="logo" :src="logo" alt="Logo" class="logo" />
      <button class="toggle-sidebar-button" @click="toggleSidebar">
        <font-awesome-icon
          :icon="
            expanded ? 'fa-solid fa-chevron-left' : 'fa-solid fa-chevron-right'
          "
        />
      </button>
    </div>
    <div class="sidebar-body">
      <router-link
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="sidebar-button"
        :class="{ active: $route.path === item.to }"
      >
        <div class="sidebar-button-icon">
          <font-awesome-icon :icon="item.icon" />
        </div>
        <div class="sidebar-button-text" :class="{ hidden: !expanded }">
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    logo: {
      type: String,
      default: "",
    },
    mobileBreakpoint: {
      type: Number,
      default: 768,
    },
  },
  setup(props) {
    const expanded = ref(false);
    const route = useRoute();
    const isMobile = ref(window.innerWidth < props.mobileBreakpoint);

    const expand = () => {
      if (!isMobile.value) expanded.value = true;
    };

    const collapse = () => {
      if (!isMobile.value) expanded.value = false;
    };

    const toggleSidebar = () => {
      expanded.value = !expanded.value;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth < props.mobileBreakpoint;
      if (isMobile.value) expanded.value = false;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      expanded,
      expand,
      collapse,
      toggleSidebar,
      route,
    };
  },
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 60px;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
}

.sidebar-expanded {
  width: 240px;
}

.sidebar-header {
  height: 60px;
  background: #4a90e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
}

.logo {
  max-height: 40px;
  max-width: 100%;
}

.sidebar-body {
  margin-top: 20px;
}

.sidebar-button {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
  transition: all 0.2s ease;
}

.sidebar-button:hover,
.sidebar-button.active {
  background-color: #e9ecef;
}

.sidebar-button-icon {
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: #4a90e2;
}

.sidebar-button-text {
  margin-left: 10px;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.sidebar-button-text.hidden {
  opacity: 0;
}

.toggle-sidebar-button {
  width: 30px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  color: white;
  background: #2c3e50;
  position: absolute;
  top: 15px;
  right: -15px;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toggle-sidebar-button:hover {
  background-color: #34495e;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    z-index: 1000;
  }

  .sidebar:not(.sidebar-expanded) {
    transform: translateX(-100%);
  }
}
</style>
