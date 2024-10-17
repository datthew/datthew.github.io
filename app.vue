<template>
  <NuxtLayout>
    <v-app>

      <Header/>
      <v-main>
        <NuxtPage/>
      </v-main>
      <Footer/>

    </v-app>
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
    },
  ],
})
</script>

<style scoped>

</style>
