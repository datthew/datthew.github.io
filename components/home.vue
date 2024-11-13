<template>

  <v-card height="100vh" style="border-radius: 0">

    <section class="landing-section">

      <div class="content-container">

        <div class="text-container">
          <template v-if="!showCompiledText">

            <div class="line-group">
              <div class="line-one-container">
            <span class="line-one">
              <span class="highlight-yellow">&lt;h1 </span>
              <span class="highlight-white">class</span>
              <span class="highlight-green">="name"</span>
              <span class="highlight-yellow">&gt; </span>
            </span>
              </div>

              <div class="line-two-container">
            <span class="line-two">
              <span class="highlight-white">Dat Vuong</span>
            </span>
              </div>

              <div class="line-three-container">
            <span class="line-three">
            <span class="highlight-yellow">&lt;/h1&gt;</span>
            </span>
              </div>
            </div>

            <div class="line-group">
              <div class="line-four-container">
            <span class="line-four">
              <span class="highlight-yellow">&lt;h2 </span>
              <span class="highlight-white">class</span>
              <span class="highlight-green">="title"</span>
              <span class="highlight-yellow">&gt; </span>
            </span>
              </div>

              <div class="line-five-container">
            <span class="line-five">
              <span class="highlight-white">Computer Science Student | Digital Media Focus</span>
            </span>
              </div>

              <div class="line-six-container">
            <span class="line-six">
            <span class="highlight-yellow">&lt;/h2&gt;</span>
            </span>
              </div>
            </div>

            <div :class="{ 'compile-button-visible': isButtonVisible }" class="compile-button-container">
              <v-btn class="compile-button" @click="toggleText">
                {{ showCompiledText ? 'RESTART' : 'COMPILE' }}
                <v-icon>{{ showCompiledText ? 'mdi-restart' : 'mdi-play-outline' }}</v-icon>
              </v-btn>
            </div>
          </template>

          <template v-else>
            <span class="name-done">Dat Vuong</span>

            <span class="title-done">Computer Science Student | Digital Media Focus</span>
            <div :class="{ 'compile-button-visible': isButtonVisible }" class="compile-button-container">
              <v-btn class="compile-button" @click="toggleText">
                {{ showCompiledText ? 'RESTART' : 'COMPILE' }}
                <v-icon>{{ showCompiledText ? 'mdi-restart' : 'mdi-play-outline' }}</v-icon>
              </v-btn>
            </div>
          </template>
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

const isArrowVisible = ref(false)
const isButtonVisible = ref(false)
const showCompiledText = ref(false)

onMounted(() => {
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
  showCompiledText.value = !showCompiledText.value
}
const removeArrow = () => {
  // isArrowVisible.value = false
}
</script>


<style scoped>

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
  color: #00dc82;
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
/* -------------------------------- Landing Section Start -------------------------------- */
.landing-section {
  height: 100vh;
  width: 100%;
  background-color: #303030;

  display: flex;
  align-items: center;
}

/* -------------------------------- Landing Section End -------------------------------- */
/* -------------------------------- Text Start          -------------------------------- */

.text-container {
  color: #00dc82;
  margin-left: 200px;
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

.line-one-container {
  width: 370px;
}

.line-two-container {
  width: 200px;
}

.line-three-container, .line-six-container {
  width: 115px;
}

.line-four-container {
  width: 390px;
}

.line-five-container {
  width: 1000px;
}

.line-two, .line-four {
  padding-left: 0;
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
  position: relative;
  margin-top: 30px;
  opacity: 0;
}

.compile-button {
  color: #50C878;
  background-color: #303030;
}

.compile-button-visible {
  opacity: 1;
  transition: all 0.5s ease-in;
}

/* ---------------- Compile Button End  ---------------- */
/* ---------------- Compiled Text Start ---------------- */
.name-done {
  font-size: 4rem; /* Große Schrift für den Namen */
  font-weight: bold;
  color: #00dc82; /* Grüner Akzent */
  margin-bottom: 20px;
  text-transform: uppercase; /* Alle Buchstaben in Großbuchstaben */
  letter-spacing: 2px; /* Abstand zwischen den Buchstaben */
}

.title-done {
  font-size: 2rem; /* Etwas kleinere Schrift für den Titel */
  font-weight: 500;
  color: #e2e2e2; /* Helles Grau für den Titel */
  text-transform: none; /* Keine Großbuchstaben */
  letter-spacing: 1px;
}


/* ---------------- Compiled Text End  ---------------- */
/* -------------------------------- Text End -------------------------------- */

/* -------------------------------- Responsive Design -------------------------------- */

@media (max-width: 1600px) {
  .line-group {
    display: block;
  }

  .line-two, .line-five {
    padding-left: 4ch; /* Indent nur bei kleinen Bildschirmen */
  }

  .line-two-container {
    width: 270px;
  }

  .line-five-container {
    width: 1070px;
  }
}

/*
@media (max-width: 1100px) {
  .line-one, .line-two {
    font-size: 1rem;
    letter-spacing: 1px;
    border-right: 2px solid;
  }
}
 */

</style>