<template>
  <div class="wrapper">
    <div class="sidebar">
      <DefaultSidebar></DefaultSidebar>
    </div>
    <div class="content">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.sidebar {
  width: 200px;
  background: whitesmoke;
  height: 100vh;
}

.content {
  margin: 10px;
  padding: 10px;
  background: whitesmoke;
  flex-grow: 2;
  border-radius: 2px;
}
</style>
