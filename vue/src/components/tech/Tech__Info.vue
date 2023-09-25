<template>
  <div class="text-container">
    <h5 class="role-text">{{ role }}</h5>
    <h3>{{ name }}</h3>
    <p class="text">{{ bio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    bio: {
      type: String,
      default: ""
    }
  }
};
</script>


<style scoped>
h3,
h5 {
  text-align: left;
}

.role-text {
  opacity: 0.5;
}

.text {
  width: 40vw;
  max-width: 444px;
}

/* TABLET */
@media screen and (max-width: 960px) {
  h3,
  h4 {
    text-align: center;
  }
  .text {
    width: 80vw;
    max-width: none;
    text-align: center;
  }
}

/* MOBILE */
@media screen and (max-width: 480px) {
  .text {
    width: 90vw;
  }
}
</style>
