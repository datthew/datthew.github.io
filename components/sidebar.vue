<template>
  <div>
    <v-card class="hover-box" flat @mouseenter="showSidebar" @mouseleave="hideSidebar"></v-card>
  </div>

  <v-navigation-drawer v-if="visible"
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
// Initialisierung der Ref-Werte
// const scrollY = ref<number>(0)
// const visible = ref<boolean>(false)
//
// // Beobachter für `scrollY`, der den Sichtbarkeitsstatus aktualisiert
// watch(scrollY, (newScrollY) => {
//   visible.value = newScrollY > 800
// })
//
// // Funktion zur Aktualisierung des `scrollY`-Wertes bei Scroll-Events
// const updateScroll = () => {
//   scrollY.value = window.scrollY
// }
//
// // Event-Listener hinzufügen und entfernen
// onMounted(() => {
//   window.addEventListener('scroll', updateScroll)
// })
//
// onUnmounted(() => {
//   window.removeEventListener('scroll', updateScroll)
// })

const visible = ref<boolean>(false)
let timer: ReturnType<typeof setTimeout>

const showSidebar = () => {
  clearTimeout(timer)
  visible.value = true
}
const hideSidebar = () => {
  timer = setTimeout(() => {
    visible.value = false
  }, 1000)
}
</script>

<style>
.sidebar {
  color: #222222;
  background-color: #00dc82;
  min-height: 100vh;
  top: 0;
  z-index: 10;
}

.hover-box {
  width: 8vh;
  height: 100vh;
  background-color: #1a1a1a;
  opacity: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>