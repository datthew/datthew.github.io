<template>

  <v-container class="main-content" style="color: #00bda4">
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <v-app-bar class="divider-box" elevation="6"/>
        <section id="about">
          <v-container fluid>
            <h1>About me</h1>
            <v-card class="mx-auto my-5 text-color card-border" max-width="1000" style="background-color: #2C3333"
                    width="90%">
              <v-card-text style="font-size: 1.4rem">
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
            <v-btn
                :class="['project-btn text-color', {'project-dummy-game': project.title === 'Dummy Game'}]"
                color="#303030"
                height="16vh"
                max-width="1000px"
                style="border-radius:10px;border: #b4aa99 2px solid"
                width="90%"
                @click="project.isExpanded = !project.isExpanded">
              {{ project.title }}
            </v-btn>

            <!-- Card, only visible when project.isExpanded is true -->
            <v-expand-transition>
              <v-card v-if="project.isExpanded"
                      class="project-card mx-auto text-color"
                      color="#4d4637"
                      elevation="12"
                      max-width="1000px"
                      style="border-radius: 10px; border-left: #b4aa99 2px solid; border-right: #b4aa99 2px solid; border-bottom: #b4aa99 2px solid"
                      width="90%"
              >
                <v-container>
                  <v-row>
                    <!-- Linke Spalte für Beschreibung -->
                    <v-col cols="12" md="6">
                      <v-card-text class="text-color">
                        <h3 class="text-h5 mb-4">{{ project.title }}</h3>
                        <p>{{ project.details }}</p>

                        <!-- Technologien/Tags -->
                        <div class="mt-4">
                          <v-chip
                              v-for="(tech, i) in project.technologies"
                              :key="i"
                              class="mr-2 mb-2"
                              color="#00bda4"
                              text-color="white"
                          >
                            {{ tech }}
                          </v-chip>
                        </div>
                      </v-card-text>
                    </v-col>

                    <!-- Rechte Spalte für Medien -->
                    <v-col cols="12" md="6">
                      <!-- Bilder Carousel -->
                      <v-carousel
                          v-if="project.images && project.images.length"
                          height="300"
                          hide-delimiters
                          show-arrows="hover"
                      >
                        <v-carousel-item
                            v-for="(image, i) in project.images"
                            :key="i"
                        >
                          <v-img
                              :src="image.src"
                              :alt="image.caption"
                              cover
                              height="300"
                          >
                            <div class="image-caption text-subtitle-1">
                              {{ image.caption }}
                            </div>
                          </v-img>
                        </v-carousel-item>
                      </v-carousel>

                      <!-- Video Section -->
                      <div v-if="project.video" class="mt-4">
                        <video
                            controls
                            width="100%"
                            height="auto"
                            class="project-video"
                        >
                          <source :src="project.video" type="video/mp4">
                          Ihr Browser unterstützt das Videoformat nicht.
                        </video>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-expand-transition>
          </div>
        </section>

        <section id="contact">
          <v-container fluid>
            <h1>Get in Touch</h1>
            <v-card class="mx-auto my-5 text-color card-border" max-width="1000" style="background-color: #2C3333"
                    width="90%">
              <v-card-text class="text-color">
                <p>
                  If you have any questions, feel free to reach out to me:
                </p>

                <v-list dense style="background-color: #2C3333; color: #e2e2e2">
                  <v-list-item>
                    <v-icon color="#00f7da">mdi-email</v-icon>
                    <v-list-item-title>E-mail:</v-list-item-title>
                    <v-list-item-subtitle>datvuong@gmx.de</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <v-icon color="#00f7da">mdi-phone</v-icon>
                    <v-list-item-title>Phone:</v-list-item-title>
                    <v-list-item-subtitle>01578/7379794</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <v-icon color="#00f7da">mdi-map-marker</v-icon>
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

const dummyGame = new URL('@/assets/dummy-game-ingame.png', import.meta.url).href

const projects = ref([
  {
    title: 'Dummy Game',
    details: 'Dummy Game is a small online PvP game where players compete to shoot or headbutt their enemies off platforms in order to win. The game features simple, fast-paced gameplay with a focus on fun and strategy as players try to outmaneuver each other and claim victory.',
    isExpanded: false,
    technologies: ['Unity', 'C#'],
    images: [
      {
        src: dummyGame,
        caption: 'Screenshot des Spiels'
      }
    ],
    video: null
  },
  {
    title: 'Projekt 2',
    details: 'Erweiterte Informationen über Projekt 2',
    isExpanded: false,
    technologies: ['Vue.js', 'TypeScript', 'Unity'],
    images: [],
    video: null
  },
  {
    title: 'Projekt 3',
    details: 'Erweiterte Informationen über Projekt 3',
    isExpanded: false,
    technologies: ['Vue.js', 'TypeScript', 'Unity'],
    images: [],
    video: null
  },
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
  height: 2px;
  background-color: #b4aa99;
}

.main-content {
  padding: 0;
  background-color: #1A2121;
  max-width: 1500px;
}

.project-btn {
  margin-bottom: 0;
  font-size: 1.5rem;
}

.project-dummy-game {
  background-image: url('@/assets/dummy-game.JPG') !important;
  background-size: cover !important;
  background-position: center !important;
}

.project-video {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  text-align: center;
}

/* Ensure images in carousel maintain aspect ratio */
.v-carousel {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.v-chip {
  margin-right: 8px;
  margin-bottom: 8px;
}

.project-card {
  margin-top: 0;
}

.text-color {
  color: #e2e2e2;
}

.card-border {
  border: #b4aa99 2px solid;
  border-radius: 10px;
}
</style>