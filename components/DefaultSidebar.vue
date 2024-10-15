<template>
  <div class="sidebar" :class="{ 'collapsed': isCollapsed }">
    <div class="sidebar-header w-100 position-relative">
      <button @click="toggleSidebar" class="toggle-btn">
        <font-awesome-icon v-if="isCollapsed" icon="fa-solid fa-chevron-right"></font-awesome-icon>
        <font-awesome-icon v-else icon="fa-solid fa-chevron-left"></font-awesome-icon>
      </button>
      <div class="logo">
      </div>    
    </div>
    <hr>
    <ul class="nav flex-column flex-sm-row px-1">
      <li class="nav-item w-100">
        <NuxtLink class="btn btn-primary p-1 w-100" style="text-align: left;">
          <font-awesome-icon icon="fa-solid fa-house" /> Hell Yeah
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
      isCollapsed: false,
      items: [
        { label: 'Dashboard', icon: 'fa-solid fa-house' },
        { label: 'Staff', icon: 'fa-solid fa-user-pen' }
      ],
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  border: 1px #f0f0f0 solid;
  transition: width 0.3s ease;
}

.sidebar-header{
  height: 60px;
}

.logo {
  background: url('https://placehold.co/200x60');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 15px;
  height: 100%;
}

.sidebar.collapsed {
  width: 50px;
}

.toggle-btn {
  width: 30px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 50%;
  color: white;
  background: DodgerBlue;
  position: absolute;
  top: 15px;
  right: -15px;
  z-index: 1000;
}

.toggle-btn:hover {
  background-color: RoyalBlue;
}

nav ul {
  list-style-type: none;
  padding: 20px;
}

nav ul li {
  margin-bottom: 10px;
}

.collapsed nav {
  display: none;
}
</style>