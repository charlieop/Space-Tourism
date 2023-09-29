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
  width: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: end;
}
.crew-img {
  height: 90%;
}

/* TABLET */
@media screen and (max-width: 960px) {
  .image-container {
    height: 55vh;
    min-height: 200px;
    width: fit-content;
  }
  .crew-img {
    height: 100%;
    position: static;
    transform: none;
  }
}

/* MOBILE */
@media screen and (max-width: 480px) {
  .image-container {
    height: 30vh;
    min-height: 100px;
    width: 100%;
    border-bottom: 1px solid #383B4B;
  }
  .crew-img {
    height: 100%;
  }
}
</style>
