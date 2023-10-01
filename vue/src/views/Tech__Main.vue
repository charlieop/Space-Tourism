<template>
  <div class="tech">
    <h4 class="tech-subtitle">
      <span class="h5--number">03</span> SPACE LAUNCH 101
    </h4>

    <div class="slide">
      <transition name="fade" mode="out-in">
        <Tech__Info
          :key="currentSlide"
          :description="slides[currentSlide].description"
          :name="slides[currentSlide].name"
        />
      </transition>
      <div class="indicator-dots">
        <span
          class="indicator-dot"
          v-for="(slide, index) in slides"
          :key="index"
          v-on:click="setSlide(index)"
          :class="{ 'indicator-dot--active': currentSlide === index }"
        >
          <h5>{{ index + 1 }}</h5>
        </span>
      </div>
      <transition name="fade" mode="out-in">
        <Tech__Img
          :key="currentSlide"
          :portraitImageUrl="
            require(`@/assets/${slides[currentSlide].images.portrait}`)
          "
          :landscapeImageUrl="
            require(`@/assets/${slides[currentSlide].images.landscape}`)
          "
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Tech__Img from "../components/tech/Tech__Img.vue";
import Tech__Info from "../components/tech/Tech__Info.vue";

import data from "@/assets/data/data.json";

export default {
  data() {
    return {
      currentSlide: 0,
      slides: data.technology,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    setSlide(index) {
      this.currentSlide = index;
    },
  },
  components: { Tech__Img, Tech__Info },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 80000);
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.tech {
  width: 100%;
  height: 80vh;
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
.indicator-dots {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 25vh;
  gap: 5vh;
  justify-content: center;
  align-items: center;
}

.indicator-dot {
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  border: 5px solid hsl(0, 0, 100);
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.indicator-dot:hover {
  background-color: hsl(0, 0%, 50%);
  color: hsl(0, 0, 0);
}

.indicator-dot--active {
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 0, 0);
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
    flex-direction: column-reverse;
    justify-content: end;
    align-items: center;
    gap: 5vh;
  }
  .indicator-dots {
    flex-direction: row;
  }
  .indicator-dots {
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

  .indicator-dots {
    flex-direction: row;
  }

  .tech-subtitle {
    position: static;
  }
}
</style>
