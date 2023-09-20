<template>
  <div>
    <h1>haha</h1>
    <div class="container">
      <Dest__Img @clicked="handelClicked" />

      <Dest__Img @clicked="handelClicked" />
      <div class="text--nav">the count is {{ count }}</div>
      <Dest__Info />
    </div>
  </div>
</template>

<script setup>
import Dest__Img from "./Dest__Img.vue";
import Dest__Info from "./Dest__Info.vue";

import { ref } from "vue";
let count = ref(0);

function handelClicked(c) {
  count.value = 2 * c;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
