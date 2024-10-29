<template>

  <v-footer class="d-flex flex-column align-center pb-16" elevation="24" height="120">
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
const icons = ['mdi-github', 'mdi-email', 'mdi-instagram']


</script>


<style scoped>
.footer-content {
  margin-left: var(--sidebar-width);
}
</style>