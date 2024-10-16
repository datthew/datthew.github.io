<script setup lang="ts">

</script>

<template>

  <v-app-bar elevation="5">


    <v-app-bar-nav-icon elevation="5" @click="navigateTo('/')" >
      <v-icon>mdi-home</v-icon> <!-- Beispiel-Icon -->
    </v-app-bar-nav-icon>

    <v-divider/>

    <v-app-bar-nav-icon elevation="5" @click="navigateTo('/dat-test')">
      <v-icon>mdi-lamp</v-icon> <!-- Beispiel-Icon -->
    </v-app-bar-nav-icon>

  </v-app-bar>

</template>

<style scoped>

</style>