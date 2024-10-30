<template>

  <v-container class="main-content">
    <v-row justify="center">
      <v-col class="text-center" cols="12">

        <section id="home">
          <h2>Home</h2>
        </section>

        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>

        <section id="about">
          <h2>About</h2>
        </section>

        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>

        <section id="projects">
          <h2>Projekte</h2>
          <div v-for="(project, index) in projects" :key="index" class="my-4">
            <!-- Toggle Button for each project -->
            <v-btn class="project-btn"
                   color="primary"
                   width="100%"
                   @click="project.isExpanded = !project.isExpanded">
              {{ project.title }} - {{ project.isExpanded ? 'Erweiterte Ansicht' : 'Kleinere Ansicht' }}
            </v-btn>

            <!-- Card, only visible when project.isExpanded is true -->
            <v-expand-transition>
              <v-card v-if="project.isExpanded"
                      class="project-card mx-auto"
                      elevation="12"
                      height="550"
                      width="100%"
              >
                <v-card-text>
                  {{ project.details }}
                </v-card-text>
              </v-card>
            </v-expand-transition>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>

        <v-btn class="testing" color="primary">Willkommen bei Vuetify</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>

const projects = ref([
  {title: 'Projekt 122', details: 'Erweiterte Informationen über Projekt 1213', isExpanded: false},
  {title: 'Projekt 2', details: 'Erweiterte Informationen über Projekt 2', isExpanded: false},
  {title: 'Projekt 3', details: 'Erweiterte Informationen über Projekt 3', isExpanded: false},
])

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
  padding: 0;
}

.project-btn {
  margin-bottom: 0;
}

.project-card {
  margin-top: 0;
}
</style>