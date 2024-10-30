<template>

  <v-card class="d-flex flex-column align-center justify-end" color="grey" height="100vh">
    
    <div class="box">
      <v-btn class="welcome" color="primary" to="#home">Welcome</v-btn>
    </div>

  </v-card>

</template>


<script lang="ts" setup>
const icons = ['mdi-github', 'mdi-email', 'mdi-instagram']


</script>


<style scoped>
.box {
  margin-bottom: 20vh;
}

.welcome {
  padding: 50px;
}
</style>