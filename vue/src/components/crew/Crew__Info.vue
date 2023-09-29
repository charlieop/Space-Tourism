<template>
  <div class="text-container">
    <h4 class="role-text">{{ role }}</h4>
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
h4 {
  text-align: left;
}
h3 {
  width: 120%;
  margin-top: 1rem;
  margin-bottom: 2rem;
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
  h3 {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .text {
    width: 80vw;
    max-width: none;
    text-align: center;
  }
}

/* MOBILE */
@media screen and (max-width: 480px) {
  .h3 {
    margin-top: 0.2rem;
    margin-bottom: 1.8rem;
  }
  .text {
    width: 90vw;
  }
}
</style>
