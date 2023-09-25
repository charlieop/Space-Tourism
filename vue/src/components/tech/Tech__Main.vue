<template>
  <div class="tech">
    <div class="tech-subtitle">
      <span class="h5--number">03</span>
      space launch 101
    </div>
    <div class="slide">
      <!-- render slide transitions -->
      <transition name="fade" mode="out-in">
        <Tech__Info
          :key="currentSlide"
          :role="slides[currentSlide].role"
          :name="slides[currentSlide].name"
          :bio="slides[currentSlide].bio"
        />
      </transition>
      <!-- bitmap indicator -->
      <div class="shift">
        <span
          class="shift-dot"
          v-for="(slide, index) in slides"
          :key="index"
          v-on:click="setSlide(index)"
          :class="{ 'shift-dot--active': currentSlide == index }"
        ></span>
      </div>
      <!-- transition animation -->
      <transition name="fade" mode="out-in">
        <Tech__Img
          :key="currentSlide"
          :imgUrl="require(`@/assets/${slides[currentSlide].images.webp}`)"
        />
      </transition>
    </div>
  </div>
</template>

<script setup>
// setup: syntax sugar
import { ref, onMounted, onBeforeUnmount } from "vue";
import Tech__Img from "./Tech__Img.vue";
import Tech__Info from "./Tech__Info.vue";
import data from "@/assets/data/data.json";

const currentSlide = ref(0);
const slides = data.tech;
const windowWidth = window.innerWidth;
let interval;

const setSlide = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 7000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.tech {
  width: 100%;
  height: 80vh; /* 100vh - navBar height */
  min-height: 400px;
  position: relative;
}

.tech-subtitle {
  position: absolute;
}

.slide {
  display: flex;
  justify-content: left;
  align-items: center;
}

/* indicator dots*/
.shift {
  position: absolute;
  bottom: 94px;
  display: flex;
  gap: 5px;
}

.shift-dot {
  width: 15px;
  height: 15px;
  background-color: hsl(0, 0%, 25%);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
}
.shift-dot:hover {
  background-color: hsl(0, 0%, 50%);
}

.shift-dot--active {
  background-color: hsl(0, 0%, 100%);
}

/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* TABLET */
@media screen and (max-width: 960px) {
  .tech {
    height: 90vh;
  }
  .slide {
    height: 90vh;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 5vh;
  }
  .shift {
    position: static;
  }
}

/* MOBILE */
@media screen and (max-width: 480px) {
  .slide {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 3vh;
  }
  .tech-subtitle {
    position: static;
  }
}
</style>
