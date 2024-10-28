<template>

  <v-navigation-drawer app class="sidebar position-fixed" color="green" permanent>

    <v-list-item subtitle="Vuetify" title="My Application"></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item link title="Home" to="dat-test"></v-list-item>
      <v-list-item link title="About" to="#about"></v-list-item>
      <v-list-item link title="Projects" to="#projects"></v-list-item>
      <v-list-item link title="Contact" to="#contact"></v-list-item>
      <v-list-item link title="index bild" to="/"></v-list-item>
    </v-list>

  </v-navigation-drawer>

</template>


<script lang="ts" setup>

</script>


<style>

</style>