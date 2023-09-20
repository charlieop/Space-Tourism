<template>
  <div class="content">
    <img src="../../assets/imgs/icons/logo.svg" alt="contain" />
    <div class="content-line"></div>
    <div class="content-nav">
      <div class="content-nav-words">
        <div :class="'content-nav-words-item ' + active[0]" @click="change(0)">
          <div class="content-nav-words-item-number">00</div>
          <div class="content-nav-words-item-word">home</div>
        </div>
        <div :class="'content-nav-words-item ' + active[1]" @click="change(1)">
          <div class="content-nav-words-item-number">01</div>
          <div class="content-nav-words-item-word">destination</div>
        </div>
        <div :class="'content-nav-words-item ' + active[2]" @click="change(2)">
          <div class="content-nav-words-item-number">02</div>
          <div class="content-nav-words-item-word">crew</div>
        </div>
        <div :class="'content-nav-words-item ' + active[3]" @click="change(3)">
          <div class="content-nav-words-item-number">03</div>
          <div class="content-nav-words-item-word">technology</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
var active = ref(["", "", "", "active"]);
function change(index) {
  for (var i = 0; i < active.value.length; i++) {
    if (i != index) {
      active.value[i] = "";
    }
  }
  active.value[index] = "active";
  console.log(active.value);
}
</script>
<style scoped>
.content {
  margin-top: 40px;
  position: relative;
  padding-left: 55px;
  display: flex;
  align-items: center;
  height: 96px;
  width: 100%;
}
.content-line {
  width: 60px;
  z-index: 2;
  background-color: #ffffff;
  width: 473px;
  height: 1px;
  opacity: 0.25;
  margin-left: 167px;
}
.content-nav {
  position: absolute;
  right: 0px;
  width: 830px;
  height: 96px;
  background-color: #ffffff0a;
  display: flex;
  align-items: center;
}
.content-nav-words {
  font-family: Barlow Condensed;

  width: 542px;
  height: 100%;
  position: absolute;
  right: 165px;
  display: flex;
}
.content-nav-words-item {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 48px;
  cursor: pointer;
}
.content-nav-words-item:hover {
  border-bottom: 3px rgba(255, 255, 255, 0.5) solid;
}
.content-nav-words-item-number {
  margin-right: 13px;
  box-sizing: border-box;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.7px;
}
.content-nav-words-item-word {
  text-transform: uppercase;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
}
.active {
  border-bottom: 3px #ffffff solid;
  pointer-events: none;
}
</style>
