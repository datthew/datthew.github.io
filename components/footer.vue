<template>

  <v-footer class="flex-column align-center" color="#b4aa99" elevation="24" height="120">
    <div class="footer-content">
      <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          size="small"
          variant="plain"
      ></v-btn>


      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Dat Vuong</strong>
      </v-col>
    </div>
  </v-footer>

</template>


<script lang="ts" setup>
const icons = ['mdi-github', 'mdi-gitlab', 'mdi-instagram']


</script>


<style scoped>

</style>