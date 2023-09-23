<template>
  <div>
    <div class="container">
      <Dest__Img :destName="curDestName" />
      <Dest__Info :allDests="DESTINATIONS" :curDestIndex="curDestIndex" @update="onUpdate" />
    </div>
  </div>
</template>

<script setup>
import Dest__Img from "./Dest__Img.vue";
import Dest__Info from "./Dest__Info.vue";

import { onMounted, ref } from "vue";

const DESTINATIONS = ["Moon", "Mars", "Europa", "Titan"];

let curDestIndex = ref(0);
let curDestName = ref(DESTINATIONS[curDestIndex.value]);
let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    curDestIndex.value = (curDestIndex.value + 1) % DESTINATIONS.length;
    curDestName.value = DESTINATIONS[curDestIndex.value];
    console.log(timer);
  }, 10000);
});

function onUpdate(e) {
  curDestIndex.value = e;
  curDestName.value = DESTINATIONS[curDestIndex.value];
  clearInterval(timer);
}
</script>

<style scoped>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}

</style>
