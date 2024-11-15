<template>
  <div>
    <v-card class="hover-box" flat @mouseenter="showSidebar" @mouseleave="hideSidebar"></v-card>
  </div>

  <v-navigation-drawer :class="{'sidebar-visible': visible}"
                       app
                       class="sidebar position-sticky"
                       permanent

                       @mouseenter="showSidebar"
                       @mouseleave="hideSidebar">
    <v-list-item subtitle="Portfolio" title="Dat Vuong"></v-list-item>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item link title="Home" to="/"></v-list-item>
      <v-list-item link title="About Me" to="#about"></v-list-item>
      <v-list-item link title="Projects" to="#projects"></v-list-item>
      <v-list-item link title="Get in Touch" to="#contact"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script lang="ts" setup>
const visible = ref<boolean>(false)

const showSidebar = () => {
  visible.value = true
}
const hideSidebar = () => {
  setTimeout(() => {
    visible.value = false
  }, 1600)
}
</script>

<style>
.sidebar {
  color: #303030;
  background-color: #00bda4;
  border: #b4aa99 4px solid;
  min-height: 100vh;
  max-width: 4px;
  top: 0;
  z-index: 10;
  transition: max-width 0.5s ease-in-out, box-shadow 1s ease-in-out;
  box-shadow: 4px 0 40px 2px rgba(0, 0, 0, 1);
}

.sidebar-visible {
  max-width: 100%;
  transition: max-width 0.5s ease-in-out;
  box-shadow: 4px 0 40px 2px rgba(0, 0, 0, 0);
  font-size: 3rem;
}

.hover-box {
  width: 10vh;
  height: 100vh;
  background-color: #1a1a1a;
  opacity: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>