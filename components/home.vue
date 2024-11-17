<template>

  <v-container class="landing-section" fluid>

    <v-row align="center" justify="center" style="overflow: hidden">
      <v-col cols="auto">

        <v-container class="content-container" fluid>

          <v-card class="text-container" flat>
            <template v-if="!showCompiledText">

              <div class="line-group">
                <div class="line-container">
            <span class="line-one">
              <span class="highlight-yellow">&lt;h1 </span>
              <span class="highlight-white">class</span>
              <span class="highlight-green">="name"</span>
              <span class="highlight-yellow">&gt; </span>
            </span>
                </div>

                <div class="line-container">
            <span class="line-two">
              <span class="highlight-white">Dat Vuong</span>
            </span>
                </div>

                <div class="line-container">
            <span class="line-three">
            <span class="highlight-yellow">&lt;/h1&gt;</span>
            </span>
                </div>
              </div>

              <div class="line-group">
                <div class="line-container">
            <span class="line-four">
              <span class="highlight-yellow">&lt;h2 </span>
              <span class="highlight-white">class</span>
              <span class="highlight-green">="title"</span>
              <span class="highlight-yellow">&gt; </span>
            </span>
                </div>

                <div class="line-container">
            <span class="line-five">
              <span class="highlight-white">Computer Science Student | Digital Media Focus</span>
            </span>
                </div>

                <div class="line-container">
            <span class="line-six">
            <span class="highlight-yellow">&lt;/h2&gt;</span>
            </span>
                </div>
              </div>

            </template>

            <template v-else>

              <v-card class="curtain" flat>
                <h1 class="name">
                  <span class="first-name">Dat</span>
                  <span class="last-name">Vuong</span>
                </h1>
                <h1 class="title">
                  Computer Science Student | Digital Media Focus
                </h1>
              </v-card>


            </template>

          </v-card>

        </v-container>
      </v-col>
    </v-row>

    <div :class="{ 'compile-button-visible': isButtonVisible }" class="compile-button-container">
      <v-btn :style="{ backgroundColor: showCompiledText ? '#1A2121' : '#2C3333' }" class="compile-button"
             @click="toggleText">
        {{ showCompiledText ? 'RESTART' : 'COMPILE' }}
        <v-icon>{{ showCompiledText ? 'mdi-restart' : 'mdi-play-outline' }}</v-icon>
      </v-btn>
    </div>

    <div :class="{ 'arrow-container-visible': isArrowVisible }" class="arrow-container">
      <v-icon class="arrow constant-bounce" @click="() => { scrollToAbout(); removeArrow(); }">
        mdi-chevron-down
      </v-icon>
    </div>
  </v-container>

</template>


<script lang="ts" setup>

const isVisible = ref(false)
const isArrowVisible = ref(false)
const isButtonVisible = ref(false)
const showCompiledText = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 800)

  setTimeout(() => {
    isArrowVisible.value = true
  }, 3000)

  setTimeout(() => {
    isButtonVisible.value = true
  }, 2500)
})

const scrollToAbout = () => {
  const aboutSection = document.querySelector("#about")
  if (aboutSection) {
    aboutSection.scrollIntoView({behavior: "smooth"})
  }
}
const toggleText = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});

  showCompiledText.value = !showCompiledText.value
}
const removeArrow = () => {
  // isArrowVisible.value = false
}
</script>


<style scoped>


/* -------------------------------- Landing Section Start -------------------------------- */
.landing-section {
  height: 100vh;
  width: 100%;
  background-color: #2C3333;

  display: flex;
  align-items: center;
}

/* -------------------------------- Landing Section End -------------------------------- */
/* -------------------------------- Text Start          -------------------------------- */

.content-container {
  display: flex;
  text-align: left;
  background-color: #2C3333;
  width: 1500px;
  max-width: 100vw;
  padding: 0;
}

.text-container {
  color: #00dc82;
  background-color: #2C3333;
  display: block;
  width: 100%;
  align-content: center;
}

.line-group {
  display: flex;
}

.line-one, .line-two, .line-three, .line-four, .line-five, .line-six {
  display: inline-block;
  font-size: 2rem;
  font-family: monospace;
  letter-spacing: 4px;
  border-right: 4px solid;
  width: 0;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
}

.line-container {
  width: fit-content;
}

.line-one {
  animation: typing 0.5s steps(17), remove-cursor 0.5s forwards;
  animation-fill-mode: forwards;
}

.line-two {
  animation: typing 0.3s steps(9), remove-cursor 0.3s forwards;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

.line-three {
  animation: typing 0.3s steps(5), remove-cursor 0.3s forwards;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
}

.line-four {
  animation: typing 0.5s steps(18), remove-cursor 0.5s forwards;
  animation-delay: 1.1s;
  animation-fill-mode: forwards;
}

.line-five {
  animation: typing 1.0s steps(46), remove-cursor 1.0s forwards;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
}

.line-six {
  animation: typing 0.2s steps(5), cursor-blinking .5s step-end infinite alternate;
  animation-delay: 2.6s, 2.8s;
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

/* ---------------- Compile Button Start ---------------- */
.compile-button-container {
  position: absolute;
  bottom: 20vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;

}

.compile-button {
  color: #00bda4;
  background-color: #2C3333;
  border-radius: 10px;
}

.compile-button:hover {
  color: #00bda4;
  border: #00bda4 2px solid;
}

.compile-button-visible {
  opacity: 1;
  transition: all 0.5s ease-in;
}

/* ---------------- Compile Button End  ---------------- */
/* ---------------- Compiled Text Start ---------------- */

.curtain {
  background-color: #1A2121;
  justify-self: center;
  text-align: center;
  align-content: center;
  animation: open-curtain 0.8s ease-in;
  animation-fill-mode: forwards;
  position: relative;
  z-index: 10;
}

@keyframes open-curtain {
  0% {
    height: 0;
  }
  50% {
    height: 100vh;
    width: 1px;
  }
  100% {
    width: 1600px;
    height: 100vh;
  }
}

.name {
  font-size: 12vw;
  font-weight: 1000;
  opacity: 0;
  animation: show-name 1s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

.first-name {
  color: #f5f5f5;
}

.last-name {
  color: #00f7da;
  margin-left: 1rem;
}

.title {
  font-size: 3.2vw;
  font-weight: 700;
  color: #f5f5f5;
  opacity: 0;

  animation: show-name 1s ease-in-out;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
}

@keyframes show-name {
  0% {
    opacity: 0;
    transform: translateY(-500px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ---------------- Compiled Text End  ---------------- */
/* -------------------------------- Text End -------------------------------- */
/* -------------------------------- Arrow Start             -------------------------------- */
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
  color: #00bda4;
}

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

/* -------------------------------- Arrow End             -------------------------------- */

/* -------------------------------- Responsive Design -------------------------------- */


@media (max-width: 1600px) {
  .line-group {
    flex-direction: column;
    margin-left: 50px;
  }

  .line-two, .line-five {
    padding-left: 4ch;
  }
}

@media (max-width: 1100px) {
  .line-one, .line-two, .line-three, .line-four, .line-five, .line-six {
    font-size: 1.5rem;
  }
}

@media (max-width: 700px) {
  .line-one, .line-two, .line-three, .line-four, .line-five, .line-six {
    font-size: 1rem;
  }
}


</style>