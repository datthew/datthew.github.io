<template>
  <div>
    <v-card class="hover-box" flat @mouseenter="showSidebar" @mouseleave="hideSidebar"></v-card>

  </div>
  <v-expand-x-transition>
    <v-navigation-drawer v-if="visible" v-show="showSidebar" app class="sidebar position-sticky" permanent
                         @mouseenter="showSidebar" @mouseleave="hideSidebar">
      <v-list-item subtitle="Vuetify" title="My Application"></v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item link title="Home" to="/"></v-list-item>
        <v-list-item link title="About" to="#about"></v-list-item>
        <v-list-item link title="Projects" to="#projects"></v-list-item>
        <v-list-item link title="Contact" to="#contact"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-expand-x-transition>

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

const showSidebar = () => {
  visible.value = true
}
const hideSidebar = () => {
  visible.value = false
}
</script>


<style>
.sidebar {
  color: #00dc82;
  background-color: green;
  min-height: 100vh;
  position: sticky;
  top: 0;
  z-index: 10;
}

.hover-box {
  width: 5vh;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>