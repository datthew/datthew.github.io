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

    <div class="sidebar-header">
      <div class="title-text">Dat Vuong</div>
      <div class="subtitle-text">Portfolio</div>
    </div>

    <v-divider></v-divider>

    <v-list density="compact">
      <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          class="custom-list-item"
          @click="handleItemClick(item)"
      >
        <template v-slot:default>
          <span class="nav-text">{{ item.title }}</span>
        </template>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>


<script lang="ts" setup>
const visible = ref<boolean>(false)
const isHovering = ref<boolean>(false)

const menuItems = [
  {title: 'Home', to: '/'},
  {title: 'About Me', to: '#about'},
  {title: 'Projects', to: '#projects'},
  {title: 'Get in Touch', to: '#contact'}
]

const showSidebar = () => {
  visible.value = true
  isHovering.value = true
}
const hideSidebar = () => {
  isHovering.value = false
  setTimeout(() => {
    if (!isHovering.value) {
      visible.value = false
    }
  }, 500)
}
const handleItemClick = (item: { title: string, to: string }) => {
  if (item.title === 'Home') {
    window.scrollTo({top: 0, behavior: 'smooth'}) // Scroll to top
  }
}
</script>

<style>
.sidebar {
  color: #303030;
  background-color: #00bda4;
  border-right: #b4aa99 4px solid;
  border-top: #b4aa99 4px solid;

  min-height: 100vh;
  max-width: 0;
  top: 0;
  z-index: 10;
  transition: max-width 0.5s ease-in-out, box-shadow 1s ease-in-out;
  box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 1);
}

.sidebar-visible {
  max-width: 100%;
  transition: max-width 0.5s ease-in-out;
  box-shadow: 4px 0 40px 2px rgba(0, 0, 0, 0);
}

.sidebar-header {
  padding: 16px;
}

.title-text {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
}

.subtitle-text {
  font-size: 1rem;
  opacity: 0.7;
}

.nav-text {
  font-size: 1rem;
  font-weight: 500;
}

.custom-list-item {
  padding: 12px 16px;
  margin: 4px 0;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.hover-box {
  width: 10vh;
  height: 100vh;
  background-color: #2C3333;
  opacity: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>