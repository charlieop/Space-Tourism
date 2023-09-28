<template>
  <div class="bitmap-outer">
    <img
      class="bitmap-inner"
      :src="isDesktop ? portraitImageUrl : landscapeImageUrl"
      alt="altText"
    />
  </div>
</template>

<script>
export default {
  props: {
    portraitImageUrl: {
      type: String,
      default: "",
    },
    landscapeImageUrl: {
      type: String,
      default: "",
    },
    altText: {
      type: String,
      default: "Technology image",
    },
  },
  computed: {
    isDesktop() {
      return window.innerWidth >= 960;
    },
  },
  mounted() {
    // 监听窗口大小变化，更新 computed 属性
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    // 在组件销毁前移除窗口大小变化的监听器
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      // 窗口大小变化时，computed 属性会自动更新
      this.isDesktop = window.innerWidth >= 960;
    },
  },
};
</script>

<style scoped>
.bitmap-outer {
  height: 80vh;
  min-height: 400px;
  width: fit-content;
}
.bitmap-inner {
  height: 50vh;
  min-height: 400px;
  position: absolute;
  bottom: 10vh;
  right: 35vw;
  transform: translateX(50%);
  z-index: -10;
}

/* TABLET */
@media screen and (max-width: 960px) {
  .bitmap-outer {
    height: 35vh;
    min-height: 400px;
    width: fit-content;
  }
  .bitmap-inner {
    height: 15vh;
    position: static;
    transform: none;
  }
}

/* MOBILE */
@media screen and (max-width: 480px) {
  .bitmap-outer {
    height: 30vh;
    min-height: 400px;
    width: fit-content;
  }
  .bitmap-inner {
    height: 30vh;
    position: static;
    transform: none;
  }
}
</style>
