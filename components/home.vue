<template>

  <v-card height="100vh">


    <section class="landing-section">

      <div class="content-container">

        <div class="text-container">
          <h1 class="name">
            <span class="line-one">&lt;h1&gt;Dat Vuong&lt;/h1&gt;</span> <br/>
            <span class="line-two">&lt;h2&gt;Computer Sciene Student | Digital Media Focus&lt;/h2&gt;</span>
          </h1>
        </div>

        <h1 class="name-done">
          Dat Vuong
        </h1>

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

onMounted(() => {
  setTimeout(() => {
    isArrowVisible.value = true
  }, 3000)
})

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
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

.arrow-container-visible {
  opacity: 1;
  transition: all 1s ease-in-out;
}

.arrow {
  font-size: 4rem;
  color: #00dc82;
}

.landing-section {
  height: 100vh;
  width: 100%;
  position: relative;
  align-content: center;

  background-color: #303030;

}

.text-container {
  display: inline-block;
}

.line-one, .line-two {
  display: block;
  font-size: 5rem;
  font-family: monospace;
  border-right: 10px solid;
  letter-spacing: 10px;

  width: 0;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
}

.line-one {
  animation: typing 1.2s steps(18), cursor-blinking .5s step-end infinite alternate;
  animation-fill-mode: forwards;
}

.line-two {
  animation: typing 2s steps(54), cursor-blinking .5s step-end infinite alternate;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
}

@keyframes cursor-blinking {
  50% {
    border-color: transparent
  }
}

@keyframes typing {
  0% {
    width: 0;
    opacity: 0;

  }
  1% {
    opacity: 1; /* Make visible after delay */
  }
  100% {
    opacity: 1;
    width: 100%;
  }
}


.name-done {
  font-size: 12rem;
  font-weight: 1000;
  color: #00dc82;
}

</style>