<template>

  <v-footer class="flex-column align-center" color="#b4aa99" elevation="24" height="120">
    <div class="footer-content">
      <v-btn
          v-for="(icon,index) in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          size="small"
          variant="plain"
          :href="links[index]"
          target="_blank"
          rel="noopener noreferrer"
      ></v-btn>


      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Dat Vuong</strong>
      </v-col>
    </div>
  </v-footer>

</template>


<script lang="ts" setup>
const icons = ['mdi-github', 'mdi-instagram']
//
const links = [
  'https://github.com/datthew',
  'https://www.instagram.com/datthew.de/',
]
</script>


<style scoped>

</style>