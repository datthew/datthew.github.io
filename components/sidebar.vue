<template>

  <v-navigation-drawer v-if="visible" app class="sidebar position-fixed" color="green" permanent>

    <v-list-item subtitle="Vuetify" title="My Application"></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item link title="Home" to="dat-test"></v-list-item>
      <v-list-item link title="About" to="#about"></v-list-item>
      <v-list-item link title="Projects" to="#projects"></v-list-item>
      <v-list-item link title="Contact" to="#contact"></v-list-item>
      <v-list-item v-if="visible" link title="index" to="/"></v-list-item>
    </v-list>

  </v-navigation-drawer>

</template>


<script lang="ts" setup>

// Initialisierung der Ref-Werte
const scrollY = ref<number>(0)
const visible = ref<boolean>(false)

// Beobachter für `scrollY`, der den Sichtbarkeitsstatus aktualisiert
watch(scrollY, (newScrollY) => {
  visible.value = newScrollY > 800
})

// Funktion zur Aktualisierung des `scrollY`-Wertes bei Scroll-Events
const updateScroll = () => {
  scrollY.value = window.scrollY
}

// Event-Listener hinzufügen und entfernen
onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>


<style>
:root {
  --sidebar-width: 256px;
}
</style>