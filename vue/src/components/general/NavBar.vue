<template>
  <div class="content">
    <img src="../../assets/imgs/icons/logo.svg" alt="contain" />
    <div class="content-line"></div>
    <div class="content-nav">
      <ul class="content-nav-words">
        <li :class="'content-nav-words-item ' + active[0]" @click="change(0)">
          <a class="content-nav-words-item-number">00</a>
          <a class="content-nav-words-item-word text--nav">home</a>
        </li>
        <li :class="'content-nav-words-item ' + active[1]" @click="change(1)">
          <a class="content-nav-words-item-number">01</a>
          <a class="content-nav-words-item-word text--nav">destination</a>
        </li>
        <li :class="'content-nav-words-item ' + active[2]" @click="change(2)">
          <a class="content-nav-words-item-number">02</a>
          <a class="content-nav-words-item-word text--nav">crew</a>
        </li>
        <li :class="'content-nav-words-item ' + active[3]" @click="change(3)">
          <a class="content-nav-words-item-number">03</a>
          <a class="content-nav-words-item-word text--nav">technology</a>
        </li>
      </ul>
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
  position: fixed;
  margin-left: 0px;
  padding-left: 55px;
  display: flex;
  align-items: center;
  height: 96px;
  width: 100%;
  left: 0px;
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
@media (max-width: 768px) {
  .content-nav-words-item-number {
    display: none;
  }
  .content {
    left: 0px;
    margin-top: 0px;
    padding-left: 39px;
  }
  .content-line {
    display: none;
  }
  .content-nav {
    width: 450px;
  }
  .content-nav-words {
    right: 0px;
    font-size: 14px;
    width: 450px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
  }
  .content-nav-words-item {
    margin-left:37px ;
    margin-right:0px ;
  }
  .content-nav-words-item:hover {
    border-bottom: 3px #ffffff solid;
}
}
</style>
