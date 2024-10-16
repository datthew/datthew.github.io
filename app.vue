<template>
  <NuxtLayout>
    <v-app>

<Header/>
      <NuxtPage />




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