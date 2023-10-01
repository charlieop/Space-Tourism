<template>
  <div>
    <div class="container">
      <Dest__Img :destName="curDestName" />
      <Dest__Info
        :allDests="DESTINATIONS"
        :curDestIndex="curDestIndex"
        @update="onUpdate"
      />
    </div>
  </div>
</template>

<script setup>
import Dest__Img from "./Dest__Img.vue";
import Dest__Info from "./Dest__Info.vue";

import { onMounted, ref } from "vue";

// this MUST match the entries in @/assets/data/data.json
// the order will affect how the destinations are displayed
const DESTINATIONS = ["Moon", "Mars", "Europa", "Titan"];

// default destination is the first one
let curDestIndex = ref(0);
let curDestName = ref(DESTINATIONS[curDestIndex.value]);

// change destination display every 10 seconds unter user cliced on a destination
let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    curDestIndex.value = (curDestIndex.value + 1) % DESTINATIONS.length;
    curDestName.value = DESTINATIONS[curDestIndex.value];
  }, 10000);
});

function onUpdate(e) {
  curDestIndex.value = e;
  curDestName.value = DESTINATIONS[curDestIndex.value];
  clearInterval(timer);
}
</script>

<style scoped>
/* Desktop Design */
.container {
  padding-top: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(5.3125rem + 5vw);
}

/* Tablet Design */
@media screen and (max-width: 960px) {
  .container {
    padding-block: 3.75rem;
    flex-direction: column;
    gap: 3.25rem;
  }
}

/* Phone Design */
@media screen and (max-width: 480px) {
  .container {
    padding-block: 2rem 3.625rem;
    gap: 2rem;
  }
}
</style>
