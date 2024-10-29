<template>

  <v-layout class="d-flex flex-column">
    <v-layout>
      <Sidebar/>
      <v-main>
        <NuxtPage/>
      </v-main>
    </v-layout>
    <Footer class="mt-auto"/>
  </v-layout>

</template>

<script lang="ts" setup>
import Footer from '~/components/footer.vue'
import Sidebar from '~/components/sidebar.vue'
</script>


<style scoped>

</style>