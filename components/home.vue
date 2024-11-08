<template>

  <v-card class="d-flex flex-column align-center justify-end" height="100vh">


    <section class="landing-section">

      <div :class="{'block-animation-visible': isVisibleOne}" class="block-animation"></div>

      <div class="content-container">
        <h1 :class="{ 'name-visible': isVisibleTwo }" class="name">
          <span class="first-name">Dat</span>
          <span class="last-name">Vuong</span>
        </h1>
        <p :class="{ 'title-visible': isVisibleTwo }" class="title">
          Computer Science Student | Digital Media Focus
        </p>

        <div :class="{ 'arrow-visible': isArrowVisible }" class="arrow">
          <v-icon class="down-arrow constant-bounce" @click="() => { scrollToAbout(); removeArrow(); }">
            mdi-chevron-down
          </v-icon>
        </div>
      </div>
    </section>


  </v-card>

</template>


<script lang="ts" setup>
const scrollToAbout = () => {
  const aboutSection = document.querySelector("#about")
  if (aboutSection) {
    aboutSection.scrollIntoView({behavior: "smooth"})
  }
}

const isVisibleOne = ref(false)
const isVisibleTwo = ref(false)
const isArrowVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisibleOne.value = true
  }, 400)

  setTimeout(() => {
    isVisibleTwo.value = true
  }, 1600)

  setTimeout(() => {
    isArrowVisible.value = true
  }, 3000)
})

const removeArrow = () => {
  isArrowVisible.value = false
}
</script>


<style scoped>

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.constant-bounce {
  animation: bounce 1s infinite ease-in-out;
}

.arrow {
  position: absolute;
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

.arrow-visible {
  opacity: 1;
  transition: all 1s ease-in-out;
}

.down-arrow {
  font-size: 4rem;
  color: #00dc82;
}

@keyframes block-animated {
  0% {
    height: 0;
    width: 0.2%;
  }
  50% {
    height: 100vh;
    width: 0.2%;
  }
  100% {

  }
}

.block-animation {
  position: absolute;
  background-color: #1a1a1a;
}

.block-animation-visible {
  height: 100vh;
  width: 70%;
  top: 0;
  animation: block-animated 1.2s ease-in-out;
  transition: height 1s ease-in-out;
}

.landing-section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #303030;
}

.name {
  font-size: 12rem;
  font-weight: 1000;
  margin: 0;
  opacity: 0;
  transform: translateY(500px);
}

.name-visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease-out;
}

.first-name {
  color: #00dc82;
}

.last-name {
  color: #ffffff;
  margin-left: 1rem;
}

.title {
  font-size: 3rem;
  color: #888;
  margin-top: 1rem;
  opacity: 0;
  transform: translateY(500px);
}

.title-visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease-out 0.3s;
}

</style>