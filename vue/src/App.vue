<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderBar from "./components/general/NavBar.vue";
// import Dest__Main from "./components/dest/Dest__Main.vue";
</script>
<template>
  <container>
    <header>
      <HeaderBar />
    </header>
    <RouterView />
  </container>
</template>


<style>
</style>
