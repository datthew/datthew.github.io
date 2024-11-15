<template>

  <Home/>

  <v-layout class="d-flex">

    <Sidebar/>
    <v-layout class="d-flex flex-column flex-grow-1">

      <v-main style="background-color: #2C3333;padding-top: 0">
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