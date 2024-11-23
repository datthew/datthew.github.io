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
                  Hello! I’m Dat Vuong, a Computer Science student specializing in Digital Media at Hochschule
                  Trier.
                  My studies have provided me with a solid foundation in programming and design, allowing me to explore
                  the exciting intersection of technology and creativity.
                </p>
                <p>
                  My journey into the world of technology began when I developed my first game as a hobby.
                  Currently, I am exploring the world of web development, allowing me to create dynamic applications and
                  expand my skills in this field.
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
          <v-container fluid>
            <h1>Projects</h1>
            <div v-for="(project, index) in projects" :key="index" class="my-4">
              <!-- Toggle Button for each project -->
              <v-btn
                  :class="['project-title', {'project-dummy-game': project.title === 'Ultimate Dummy'}, {'project-website': project.title === 'datthew.github.io'}]"
                  color="#97b0aa"
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
                        class="project-card mx-auto"
                        color="#2C3333"
                        elevation="12"
                        max-width="1000px"
                        style="border-radius: 10px; border-left: #b4aa99 2px solid; border-right: #b4aa99 2px solid; border-bottom: #b4aa99 2px solid"
                        width="90%"
                >
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10" class="d-flex flex-column mx-auto">

                        <v-card-text class="text-color" style="font-size: 1.4rem">
                          <p>{{ project.details }}</p>
                        </v-card-text>

                        <v-btn v-for="(buttons, i) in project.buttons"
                               :key="i"
                               :href="buttons.href"
                               class="view-code-button"
                               target="_blank"
                        >
                          {{ buttons.text }}
                        </v-btn>

                        <!-- picture carousel -->
                        <v-carousel class="mt-8"
                                    v-if="project.images && project.images.length"
                                    height="450"
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
                                height="450"
                            >
                              <div class="image-caption text-subtitle-1">
                                {{ image.caption }}
                              </div>
                            </v-img>
                          </v-carousel-item>
                        </v-carousel>

                        <!-- video -->
                        <div v-if="project.video" class="mt-8">
                          <video
                              controls
                              width="100%"
                              height="auto"
                              class="project-video"
                          >
                            <source :src="project.video" type="video/mp4">
                            Your browser does not support the video format.
                          </video>
                        </div>

                        <!-- technologies/tags -->
                        <div class="mt-8" style="margin-top: auto;">
                          <v-chip
                              v-for="(tech, i) in project.technologies"
                              :key="i"
                              class="mr-2 mb-2"
                              color="#00bda4"
                          >
                            <a
                                :href="tech.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="color: inherit; text-decoration: none"
                            >
                              {{ tech.name }}
                            </a>
                          </v-chip>
                        </div>

                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-expand-transition>

            </div>
          </v-container>
        </section>

        <section id="contact">
          <v-container fluid>
            <h1>Get in Touch</h1>
            <v-card class="mx-auto my-5 text-color card-border" max-width="1000" style="background-color: #2C3333"
                    width="90%">
              <v-card-text class="text-color" style="font-size: 1.4rem">
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
const projects = ref([
  {
    title: 'Ultimate Dummy',
    details: 'Ultimate Dummy is a small online PvP game where players compete to shoot or headbutt their enemies off platforms in order to win. The game features simple, fast-paced gameplay with a focus on fun and strategy as players try to outmaneuver each other and claim victory.',
    isExpanded: false,
    buttons: [],
    technologies: [
      {
        name: 'Unity',
        url: 'https://unity.com/'
      },
      {
        name: 'C#',
        url: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
      }
    ],
    images: [
      {
        src: 'dummy-game-ingame.png',
        caption: '1/7'
      },
      {
        src: 'dummy-game-ingame2.png',
        caption: '2/7'
      },
      {
        src: 'dummy-game-ingame3.png',
        caption: '3/7'
      },
      {
        src: 'dummy-game-ingame4.png',
        caption: '4/7'
      },
      {
        src: 'dummy-game-ingame5.png',
        caption: '5/7'
      },
      {
        src: 'dummy-game-ingame6.png',
        caption: '6/7'
      },
      {
        src: 'dummy-game-ingame7.png',
        caption: '7/7'
      }
    ],
    video: '/dummy-video.mp4'
  },
  {
    title: 'datthew.github.io',
    details: 'This portfolio website showcases my projects and skills as a Computer Science student. Built with Vue, Nuxt, and Vuetify, it combines responsive design with a layout that reflects my learning journey. As a student, I applied the knowledge I\'ve gained to create a site that represents my growth and passion for development.',
    isExpanded: false,
    buttons: [
      {
        text: 'View source code',
        href: "https://github.com/datthew/datthew.github.io"
      }
    ],
    technologies: [
      {
        name: 'Vue.js',
        url: 'https://vuejs.org'
      },
      {
        name: 'Vuetify',
        url: 'https://vuetifyjs.com/en/'
      },
      {
        name: 'Nuxt',
        url: 'https://nuxt.com/'
      },
      {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org/'
      },
      {
        name: 'HTML',
        url: 'https://www.w3schools.com/html/'
      },
      {
        name: 'CSS',
        url: 'https://www.w3schools.com/css/'
      }
    ],
    images: [],
    video: null
  },
  {
    title: 'Upcoming Project',
    details: 'This section will soon feature a new project. Stay tuned for updates on my latest developments in game design and web technologies.',
    isExpanded: false,
    buttons: [],
    technologies: [
      {
        name: 'Java',
        url: 'https://www.oracle.com/java/'
      }
    ],
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

.project-title {
  margin-bottom: 0;
  font-size: 1.5rem;
}

.project-dummy-game {
  background-image: url('/dummy-game-banner.png') !important;
  background-size: cover !important;
  background-position: center !important;
}

.project-website {
  background-image: url('/website-banner.png') !important;
  background-size: cover !important;
  background-position: center !important;
}

.project-video {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.view-code-button {
  color: #00bda4;
  background-color: #2C3333;
  border-radius: 10px;
  max-width: 240px;
  align-self: center;
  margin-top: 8px;
}

.view-code-button:hover {
  color: #00bda4;
  border: #00bda4 2px solid;
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

.v-chip:hover {
  color: #00bda4;
  border: #00bda4 2px solid;
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