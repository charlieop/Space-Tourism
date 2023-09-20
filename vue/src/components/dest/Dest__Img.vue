<template>
  <div>
    <h2 @click="onClick">img</h2>
    <h5 @click="onClick">Click me</h5>
    <p class="text">Count is: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

let count = ref(0)

const emits = defineEmits(["clicked"]);

function onClick() {
    count.value++;
    emits("clicked", count.value);
}

</script>

<style scoped></style>
