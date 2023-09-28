<template>
  <div class="text-container">
    <h3>{{ name }}</h3>
    <p class="text">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.text-container{
  margin-left: 8vw;
}

h3,
h4 {
  text-align: left;
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
    margin-left: 0;
  }
}

/* MOBILE */
@media screen and (max-width: 480px) {
  .text {
    width: 90vw;
    margin-left: 0;
  }
}
</style>
