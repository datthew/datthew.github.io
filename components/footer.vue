<template>

  <v-footer app class="d-flex flex-column" elevation="24">
    <div>
      <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          size="small"
          variant="plain"
      ></v-btn>
    </div>

    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Dat Vuong</strong>
    </v-col>
  </v-footer>

</template>


<script lang="ts" setup>
const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
</script>


<style scoped>

</style>