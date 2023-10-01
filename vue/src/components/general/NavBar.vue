<template>
  <div class="content">
    <img src="../../assets/imgs/icons/logo.svg" alt="contain" />
    <div class="content-line"></div>
    <input type="checkbox" id="check" />
    <label class="navbaricon" for="check">
      <img
        src="../../assets/imgs/icons/icon-hamburger.svg"
        alt=""
        class="icon"
        @click="navout()"
      />
    </label>

    <div :class="'content-nav ' + active2">
      <input type="checkbox" id="checkback" />
      <label class="navbackicon" for="checkback">
        <img
          src="../../assets/imgs/icons/icon-close.svg"
          alt="contain"
          class="icon"
          @click="navin()"
        />
      </label>
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
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
var active = ref(["active", "", "", ""]);
var active2 = ref("");
const menu = 
  [{
      link: '/'
    },{
      link: '/DestView'
    },
    {
      link: '/CrewView'
    },{
      link: '/TechView'
    }
  ]

function change(index) {
  for (var i = 0; i < active.value.length; i++) {
    if (i != index) {
      active.value[i] = "";
    }
  }
  router.push(menu[index].link)
  active.value[index] = "active";
  console.log(active.value);
}
function navin() {
  active2.value = "";
}
function navout() {
  active2.value = "active2";
}
</script>
<style scoped>
#checkback {
  display: none;
}
.navbackicon {
  display: none;
}
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
  z-index: 5;
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
  transition-property: all;
  transition-duration: 0.5s;
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
.navbaricon {
  display: none;
}
#check {
  display: none;
}
@media (max-width: 768px) {
  img {
    width: 48px;
    height: 48px;
  }
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
    margin-left: 37px;
    margin-right: 0px;
  }
  .content-nav-words-item:hover {
    border-bottom: 3px #ffffff solid;
  }
}
@media (max-width: 376px) {
  .navbaricon {
    position: absolute;
    right: 24px;
    display: block;
    width: 24px;
    height: 21px;
  }
  .icon {
    right: 24px;
    height: 21px;
    width: 24px;
  }
  .content-nav {
    right: -450px;
    top: 0px;
    width: 254px;
    height: 100vh;
    z-index: 3;
    background: rgba(255, 255, 255, 0.04);

    backdrop-filter: blur(40.774227142333984px);
  }
  .content-nav-words {
    padding-left: 32px;
  }
  img {
    width: 40px;
    height: 40px;
  }
  /* #check:checked ~ .content-nav {
    right: 0px;
  } */
  .content-nav-words {
    display: flex;
    flex-direction: column;
  }
  .active {
    border-bottom: none;
    border-right: 4px #ffffff solid;
  }

  .content-nav-words-item:hover {
    border-bottom: none;
  }

  .content-nav-words-item {
    width: 100%;
    margin-left: 0px;
    height: auto;
    margin-top: 32px;
    align-items: baseline;
    justify-content: left;
  }
  .content-nav-words {
    height: 100%;
    width: 100%;
    padding-top: 118px;
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    align-items: baseline;
  }
  .content-nav-words-item-number {
    display: block;
  }
  .navbackicon {
    position: absolute;
    height: 19px;
    width: 19px;
    top: 34px;
    right: 34px;
    z-index: 5;
    display: block;
  }
  /* #checkback:checked ~ :has(.content-nav) {
    right: -450px;
  } */
  .active2 {
    right: 0px;
  }
}
</style>
