<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderBar from "./components/general/NavBar.vue";
</script>
<template>
  <container>
    <header>
      <HeaderBar />
    </header>
    <RouterView />
  </container>
</template>


<style></style>
