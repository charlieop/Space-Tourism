<template>
  <div class="image-container">
    <img class="crew-img" :src="imageUrl" alt="altText" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: ""
    },
    altText: {
      type: String,
      default: "Crew image"
    }
  }
};
</script>

<style scoped>
.image-container {
  height: 80vh;
  min-height: 400px;
  width: fit-content;
}
.crew-img {
  height: 80vh;
  min-height: 400px;
  position: absolute;
  bottom: 0;
  right: 27vw;
  transform: translateX(50%);
  z-index: -10;
}

/* TABLET */
@media screen and (max-width: 960px) {
  .image-container {
    height: 35vh;
    min-height: 400px;
    width: fit-content;
  }
  .crew-img {
    height: 35vh;
    position: static;
    transform: none;
  }
}

/* MOBILE */
@media screen and (max-width: 480px) {
  .image-container {
    height: 30vh;
    min-height: 400px;
    width: fit-content;
  }
  .crew-img {
    height: 30vh;
    position: static;
    transform: none;
  }
}
</style>
