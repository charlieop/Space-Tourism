<template>
  <h1>h1 - {{ welcomeText }}</h1>
  <h2>h2 - {{ welcomeText }}</h2>
  <h3>h3 - {{ welcomeText }}</h3>
  <h4>h4 - {{ welcomeText }}</h4>
  <h5>h5 - {{ welcomeText }}</h5>
  <p class="sub-h-1">.sub-h-1 -{{ welcomeText }}</p>
  <p class="sub-h-2">.sub-h-2 -{{ welcomeText }}</p>
  <p class="text">.text - {{ welcomeText }}</p>
  <p class="text--nav">.text--nav - {{ welcomeText }}</p>
</template>

<script setup>
import { ref, onMounted } from "vue";

// reactive variables
const welcomeText = ref("You have sucessfully started this Vue project!");

// lifecycle hooks
onMounted(() => {
  console.log("Vue mounted!");
});
</script>

<style>
/* style test only, delete when start */
* {
  margin-block-end: 5rem;
}
</style>
