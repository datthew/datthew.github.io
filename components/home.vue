<template>

  <v-card height="100vh" style="border-radius: 0">

    <section class="landing-section">

      <div class="content-container">

        <div class="text-container">
          <h1 class="text-list">
            <template v-if="!showFinalText">
            <span class="line-one">
              <span class="highlight-yellow">&lt;h1 </span>
              <span class="highlight-white">class</span>
              <span class="highlight-green">="name"</span>
              <span class="highlight-yellow">&gt; </span>
              <span class="highlight-white">Dat Vuong </span>
            <span class="highlight-yellow">&lt;/h1&gt;</span>
            </span>
              <span class="line-two">
              <span class="highlight-yellow">&lt;h2 </span>
              <span class="highlight-white">class</span>
              <span class="highlight-green">="title"</span>
              <span class="highlight-yellow">&gt; </span>
              <span class="highlight-white">Computer Science Student | Digital Media Focus </span>
            <span class="highlight-yellow">&lt;/h2&gt;</span>
            </span>
            </template>

            <template v-else>
              <span class="name-done">Dat Vuong</span>
              <span class="title-done">Computer Science Student | Digital Media Focus</span>
            </template>
          </h1>

          <div :class="{ 'run-button-visible': isButtonVisible }" class="run-button-container">
            <v-btn class="run-button" @click="toggleText">
              {{ showFinalText ? 'RESTART' : 'RUN' }}
              <v-icon>{{ showFinalText ? 'mdi-restart' : 'mdi-play-outline' }}</v-icon>
            </v-btn>
          </div>
        </div>

        <div :class="{ 'arrow-container-visible': isArrowVisible }" class="arrow-container">
          <v-icon class="arrow constant-bounce" @click="() => { scrollToAbout(); removeArrow(); }">
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

const isArrowVisible = ref(false)
const isButtonVisible = ref(false)
const showFinalText = ref(false)

onMounted(() => {
  setTimeout(() => {
    isArrowVisible.value = true
  }, 5000)

  setTimeout(() => {
    isButtonVisible.value = true
  }, 4500)
})

const toggleText = () => {
  showFinalText.value = !showFinalText.value
}
const removeArrow = () => {
  // isArrowVisible.value = false
}
</script>


<style scoped>

@keyframes bounce-animation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
}

.constant-bounce {
  animation: bounce-animation 1s infinite ease-in-out;
}

.arrow-container {
  position: absolute;
  bottom: 6vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

.arrow-container-visible {
  opacity: 1;
  transition: all 1s ease-in-out;
}

.arrow {
  font-size: 3rem;
  color: #00dc82;
}

.landing-section {
  height: 100vh;
  width: 100%;
  background-color: #303030;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text-container {
  display: inline-block;
  color: #00dc82;
}

.line-one, .line-two {
  display: block;
  font-size: 2rem;
  font-family: monospace;
  letter-spacing: 4px;
  border-right: 4px solid;

  width: 0;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
}

.line-one {
  animation: typing 1.2s steps(33), remove-cursor 1.2s forwards;
  animation-fill-mode: forwards;
}

.line-two {
  animation: typing 3.6s steps(70), cursor-blinking .5s step-end infinite alternate;
  animation-delay: 1.2s, 4.8s;
  animation-fill-mode: forwards;
}

@keyframes cursor-blinking {
  50% {
    border-color: transparent
  }
}

@keyframes remove-cursor {
  99% {
    border-color: #00dc82;
  }
  100% {
    border-color: transparent;
  }
}

@keyframes typing {
  0% {
    width: 0;
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}

.highlight-green {
  color: #50C878;
}

.highlight-white {
  color: #e2e2e2;
}

.highlight-yellow {
  color: #ffcc00;
}

.run-button-container {
  position: absolute;
  bottom: 24vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

.run-button {
  color: #50C878;
  background-color: #303030;
}

.run-button-visible {
  opacity: 1;
  transition: all 1s ease-in-out;
}

.name-done {
  display: block;
  font-size: 10rem;
  font-weight: 1000;
  color: #00dc82;
}

.title-done {
  font-size: 4rem;
  font-weight: 1000;
  color: #00dc82;
}
</style>