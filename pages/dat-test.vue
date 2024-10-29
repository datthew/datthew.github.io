<template>

  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="box">Home</div>
      </v-col>

      <v-col cols="12">
        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>
      </v-col>

      <section id="about">
        <v-col cols="6">
          <div class="box">About</div>
        </v-col>
      </section>

      <v-col cols="12">
        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>
      </v-col>

      <section id="projects">
        <v-col cols="6">
          <div class="box">Projects</div>
        </v-col>
      </section>

      <v-col cols="12">
        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>
      </v-col>

      <section id="contact">
        <v-col cols="12">
          <div class="box">Contact</div>
        </v-col>
      </section>

      <v-col cols="12">
        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'mainpage-layout'
})
</script>

<style scoped>
.testing {
  padding-bottom: 300px;
  padding-top: 300px;
}
</style>