<template>
  <div class="crew">
    <div class="slide">
      <transition name="fade" mode="out-in">
        <Crew__Info 
          :key="currentSlide"
          :role="slides[currentSlide].role" 
          :name="slides[currentSlide].name" 
          :bio="slides[currentSlide].bio" />
      </transition>
      <div class="indicator-dots">
        <span class="indicator-dot" v-for="(slide, index) in slides" :key="index" v-on:click="setSlide(index)"
              :class="{ 'indicator-dot--active': currentSlide === index }"></span>
      </div>
      <transition name="fade" mode="out-in">
        <Crew__Img :key="currentSlide" :imageUrl="require(`@/assets/${slides[currentSlide].images.webp}`)" />
      </transition>
    </div>
  </div>
</template>

<script>
import Crew__Img from './Crew__Img.vue';
import Crew__Info from './Crew__Info.vue';

import data from '@/assets/data/data.json';

export default {
    data() {
        return {
            currentSlide: 0,
            slides: data.crew,
            windowWidth: window.innerWidth
        };
    },
    methods: {
        setSlide(index) {
            this.currentSlide = index;
        }
    },
    components: { Crew__Img, Crew__Info },
    mounted() {
      this.interval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 7000);
    },

    beforeUnmount() {
      clearInterval(this.interval);
    },
};
</script>

<style scoped>
.crew {
  padding-top: 160px;
  margin-right: calc(55px);
  margin-left: calc(70px + 7vw);
  width: calc(100% - 55px - 70px - 7vw);
  height: 100% ; /* calc(100vh - 100px) 100vh - header height*/
  min-height: 700px;
  position: relative;
}

.crew-subtitle {
  position: absolute;
}

.slide {
  width: 100%;
  display: flex;
  justify-content:left;
  align-items: center;
}

/* indicator dots*/
.indicator-dots {
  position: absolute;
  bottom: 94px;
  display: flex;
  gap: 15px;
}

.indicator-dot {
  width: 15px;
  height: 15px;
  background-color: hsl(0, 0%, 25%);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
}
.indicator-dot:hover {
  background-color: hsl(0, 0%, 50%);
}

.indicator-dot--active {
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
  .crew {
    height: 100% - 100px;
    width: 100%;
    margin: 0;
    padding-top: 100px;
  }
  .crew-subtitle {
    margin-left: 40px;
  }
  .slide {
    height: 100%;
    flex-direction: column;
    margin-top: 2.2rem;
    align-items: center;
    gap: 3vh;
  }
  .indicator-dots {
    position: static;
    gap: 12px;
  }
  .indicator-dot {
    width: 10px;
    height: 10px;
  }
}

/* MOBILE */
@media screen and (max-width: 480px) {
  .crew {
    padding-left: 30px;
    padding-right: 30px;
  }
  .crew-subtitle {
    margin-left: 0;
  }  
  .slide {
    margin-top: 0;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 3vh;
  }
  .crew-subtitle {
    position: static;
  }
}
</style>
