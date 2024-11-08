<template>

  <v-container class="main-content">
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <v-app-bar class="divider-box" elevation="6"/>
        <section id="about">
          <v-container fluid>
            <h1>About me</h1>
            <v-card class="mx-auto my-5" max-width="600">
              <v-card-text>
                <p>
                  Hello! I’m Dat Vuong, a Computer Science student specializing in Digital Media and Games at Hochschule
                  Trier.
                  My studies have provided me with a solid foundation in programming and design, allowing me to explore
                  the exciting intersection of technology and creativity.
                </p>
                <p>
                  My journey into the world of technology began when I developed my first game as a hobby.
                  This experience ignited my passion for creating engaging and interactive experiences.
                  Currently, I am working with Vue and TypeScript, which allows me to create dynamic web applications
                  while building on my JavaScript knowledge.
                </p>
                <p>
                  I welcome any questions, collaboration ideas, or simply a chance to connect!
                  I’m eager to share my journey and learn from others in the industry.
                </p>
              </v-card-text>
            </v-card>
          </v-container>
        </section>

        <section id="projects">
          <h1>Projects</h1>
          <div v-for="(project, index) in projects" :key="index" class="my-4">
            <!-- Toggle Button for each project -->
            <v-btn class="project-btn"
                   color="#00dc82"
                   height="10vh"
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
          <v-container fluid>
            <h1>Get in Touch</h1>
            <v-card class="mx-auto my-5" width="90%">
              <v-card-text>
                <p>
                  If you have any questions, feel free to reach out to me:
                </p>

                <v-list dense>
                  <v-list-item>
                    <v-icon color="#00dc82">mdi-email</v-icon>
                    <v-list-item-title>E-mail:</v-list-item-title>
                    <v-list-item-subtitle>datvuong@gmx.de</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <v-icon color="#00dc82">mdi-phone</v-icon>
                    <v-list-item-title>Phone:</v-list-item-title>
                    <v-list-item-subtitle>01578/7379794</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <v-icon color="#00dc82">mdi-map-marker</v-icon>
                    <v-list-item-title>Based:</v-list-item-title>
                    <v-list-item-subtitle>Trier, Germany</v-list-item-subtitle>
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

h1 {
  font-size: 3rem;
  margin-top: 100px;
}

.divider-box {
  height: 2vh;
  background-color: #e2e2e2;
}

.main-content {
  padding: 0;
  background-color: #666666;
}

.project-btn {
  margin-bottom: 0;
}

.project-card {
  margin-top: 0;
}
</style>