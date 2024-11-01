<template>

  <v-card class="d-flex flex-column align-center justify-end" color="grey" height="100vh">

    <section class="landing-section">
      <div class="content-container">
        <h1 :class="{ 'name-visible': isVisible }" class="name">
          <span class="first-name">Dat</span>
          <span class="last-name">Vuong</span>
        </h1>
        <p :class="{ 'title-visible': isVisible }" class="title">
          Computer Science Student | Digital Media Focus
        </p>

        <div :class="{ 'arrow-visible': isVisible }" class="arrow-container">
          <v-icon class="down-arrow" @click="scrollToMainpage">mdi-chevron-down</v-icon>
        </div>
      </div>
    </section>


  </v-card>

</template>


<script lang="ts" setup>
const scrollToMainpage = () => {
  const aboutSection = document.querySelector("#about")
  if (aboutSection) {
    aboutSection.scrollIntoView({behavior: "smooth"})
  }
}
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 400)
})
</script>


<style scoped>
.arrow-container {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-45%) scale(60%);
  opacity: 0;
}

.down-arrow {
  font-size: 6rem;
  color: #00dc82;
}

.arrow-visible {
  opacity: 1;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  transition: all 0.5s ease-out;
}

.landing-section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #1a1a1a; /* Dunkler Hintergrund */
}

.content-container {
  text-align: center;
}

.name {
  font-size: 8rem;
  font-weight: 1000;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
}

.name-visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease-out;
}

.first-name {
  color: #ffffff;
}

.last-name {
  color: #00dc82;
  margin-left: 1rem;
}

.title {
  font-size: 2rem;
  color: #888;
  margin-top: 1rem;
  opacity: 0;
  transform: translateY(20px);
}

.title-visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease-out 0.3s;
}

@media (max-width: 768px) {
  .name {
    font-size: 3rem;
  }

  .title {
    font-size: 1.2rem;
  }
}
</style>