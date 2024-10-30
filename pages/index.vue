<template>

  <v-container class="main-content">
    <v-row justify="center">
      <v-col class="text-center" cols="12">

        <section id="home">
          <div class="box">Homee</div>
        </section>

        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>

        <section id="about">
          <div class="box">About</div>
        </section>

        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>

        <section id="projects">
          <div class="box">Projects</div>
        </section>

        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>

        <section id="contact">
          <div class="box">Contact</div>
        </section>


        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'index-layout'
})
</script>

<style scoped>
.testing {
  padding-bottom: 300px;
  padding-top: 300px;
}

.main-content {
  color: red;
  background-color: yellow;
  padding: 0;
}

.box {
  margin: 2rem 0;
}
</style>