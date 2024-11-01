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
                   width="90%"
                   @click="project.isExpanded = !project.isExpanded">
              {{ project.title }} - {{ project.isExpanded ? 'Erweiterte Ansicht' : 'Kleinere Ansicht' }}
            </v-btn>

            <!-- Card, only visible when project.isExpanded is true -->
            <v-expand-transition>
              <v-card v-if="project.isExpanded"
                      class="project-card mx-auto"
                      elevation="12"
                      height="550"
                      width="90%"
              >
                <v-card-text>
                  {{ project.details }}
                </v-card-text>
              </v-card>
            </v-expand-transition>
          </div>
        </section>

        <section id="contact">
          <h2>Get in Touch</h2>

          <v-container fluid>
            <v-card class="mx-auto my-5" max-width="600">
              <v-card-text>
                <p>
                  If you have any questions, feel free to reach out to me:
                </p>

                <!-- Contact Details List -->
                <v-list dense>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="primary">mdi-email</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>E-mail:</v-list-item-title>
                      <v-list-item-subtitle>datvuong@gmx.de</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="primary">mdi-phone</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Phone:</v-list-item-title>
                      <v-list-item-subtitle>015787379794</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="primary">mdi-map-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Based:</v-list-item-title>
                      <v-list-item-subtitle>Trier, Germany</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <p>
                  You can also reach me through my social media profiles—just check the links below.
                </p>
              </v-card-text>
            </v-card>
          </v-container>
        </section>

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