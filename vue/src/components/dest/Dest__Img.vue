<template>
  <div>
    <img :src="url" alt="" />
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  destName: {
    type: String,
    required: true,
  },
});
let url = ref(
  require("@/assets/imgs/artworks/dest/image-" +
    props.destName.toLowerCase() +
    ".webp")
);

watch(
  () => props.destName,
  (newVal) => {
    url.value = require("@/assets/imgs/artworks/dest/image-" +
      newVal.toLowerCase() +
      ".webp");
  }
);
</script>

<style scoped>
div {
  /* padding: 2.5rem; */
}

img {
  object-fit: cover;
  object-position: bottom center;
  width: calc(23.3125rem + 5vw);
  aspect-ratio: 1 / 1;
  transform: translateY(2.5rem);
}

/* Tablet Design */
@media screen and (max-width: 960px) {
  img {
    width: calc(15.75rem + 5vw);
    transform: unset;
  }
}

/* Phone Design */
@media screen and (max-width: 480px) {
  img {
    width: calc(9.453125rem + 5vw);
  }
}
</style>
