<template>
  <v-app-bar app>


    <!--    <v-app-bar-nav-icon elevation="5" @click="navigateTo('/')">-->
    <!--      <v-icon>mdi-home</v-icon> &lt;!&ndash; Beispiel-Icon &ndash;&gt;-->
    <!--    </v-app-bar-nav-icon>-->

    <!--    <v-divider/>-->

    <!--    <v-app-bar-nav-icon elevation="5" @click="navigateTo('/dat-test')">-->
    <!--      <v-icon>mdi-lamp</v-icon> &lt;!&ndash; Beispiel-Icon &ndash;&gt;-->
    <!--    </v-app-bar-nav-icon>-->

    <v-app-bar-title>Portfolio</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn to="/">Home</v-btn>
    <v-btn text to="/dat-test">Test</v-btn>

  </v-app-bar>
</template>


<script lang="ts" setup>

</script>


<style scoped>

</style>