<template>
  <!--  <v-layout>-->
  <!--    <Sidebar/>-->
  <!--    <v-main>-->
  <!--      <NuxtPage/>-->
  <!--    </v-main>-->
  <!--    <Footer/>-->
  <!--  </v-layout>-->

  <v-app>
    <v-layout row>
      <Sidebar/>
      <v-main>
        <NuxtPage/>
      </v-main>
    </v-layout>
    <Footer/>
  </v-app>

</template>

<script lang="ts" setup>
import Footer from '~/components/footer.vue'
import Sidebar from '~/components/sidebar.vue'
</script>

<style>

/* v-main füllt den restlichen Raum zwischen Sidebar und Footer */
v-main {
  flex: 1;
}
</style>