<template>

  <Home/>

  <v-layout class="d-flex">

    <Sidebar/>

    <v-layout class="d-flex flex-column flex-grow-1">

      <v-main>
        <NuxtPage/>
      </v-main>

      <Footer class="mt-auto"/>

    </v-layout>

  </v-layout>
  
</template>

<script lang="ts" setup>
</script>


<style scoped>

</style>