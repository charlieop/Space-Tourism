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
  padding: 2.5rem;
}

img {
  object-fit: cover;
  object-position: bottom center;
  aspect-ratio: 1 / 1;
  transform: translateY(2.5rem);
}
</style>
