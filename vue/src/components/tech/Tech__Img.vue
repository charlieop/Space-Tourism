<template>
  <div class="bitmap-outer">
    <img class="bitmap-desktop" :src="portraitImageUrl" alt="altText" />
    <img class="bitmap-inner" :src="landscapeImageUrl" alt="altText" />
  </div>
</template>

<script>
export default {
  props: {
    portraitImageUrl: {
      type: String,
      default: "",
    },
    landscapeImageUrl: {
      type: String,
      default: "",
    },
    altText: {
      type: String,
      default: "Technology image",
    },
  },
};
</script>

<style scoped>
.bitmap-outer {
  height: 80vh;
  min-height: 400px;
  width: fit-content;
}
.bitmap-desktop {
  height: 50vh;
  min-height: 400px;
  position: absolute;
  bottom: 10vh;
  right: 35vw;
  transform: translateX(50%);
  z-index: -10;
}
.bitmap-inner {
  width: 100%;
  display: none;
}

/* TABLET */
@media screen and (max-width: 960px) {
  .bitmap-outer {
    width: 100%;
    min-height: 200px;
    height: fit-content;
  }
  .bitmap-desktop {
    display: none;
  }
  .bitmap-inner {
    width: 100%;
    min-height: 100px;
    display: flex;
    position: static;
    object-fit: cover;
    object-position: center;
  }
}

/* MOBILE */
@media screen and (max-width: 480px) {
  .bitmap-outer {
    height: 20vh;
    min-height: 100px;
    height: fit-content;
  }
  .bitmap-desktop {
    display: none;
  }
  .bitmap-inner {
    width: 100%;
    min-height: 100px;
    display: flex;
    position: static;
    transform: none;
  }
}
</style>
