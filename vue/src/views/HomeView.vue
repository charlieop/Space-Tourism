<template>
  <div class="homebody">
    <div class="body-word">
      <div class="body-word-title">SO, YOU WANT TO TRAVEL TO</div>
      <div class="body-word-space">SPACE</div>
      <div class="body-word-art">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </div>
    </div>

    <div class="body-explore">
      <div class="body-explore-back"></div>
      <div class="body-explore-word">EXPLORE</div>
    </div>
  </div>
</template>
<style scoped>
.homebody {
  width: 100%;
  height: 100vh;
  background: url("../assets/imgs/backgrounds/home/background-home-desktop.jpg")
    no-repeat center;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  position: relative;
}
.body-explore {
  position: absolute;
  width: 274px;
  height: 274px;
  top: 330px;
  right: 164px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 2;
  cursor: pointer;
}
.body-explore-word {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b0d17;
  font-family: Bellefair;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
}
.body-explore-back {
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  opacity: 0.1036;
  background: #fff;
  transition-property: all;
  transition-duration: 0.5s;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.body-explore:hover .body-explore-back {
  height: 450px;
  width: 450px;
}
.body-word {
  position: absolute;
  width: 450px;
  height: 382px;
  top: 300px;
  left: 165px;
  padding: 0px, 5px, 0px, 0px;
}
.body-word-title {
  font-family: Barlow Condensed;
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 4.724999904632568px;
  text-align: left;
}
.body-word-space {
  margin-top: 24px;
  font-family: Bellefair;
  font-size: 150px;
  font-weight: 400;
  line-height: 172px;
  letter-spacing: 0px;
  text-align: left;
}
.body-word-art {
  margin-top: 24px;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}
@media (max-width: 768px) {
  .homebody {
    width: 100%;
    height: 1024px;
    background: url("../assets/imgs/backgrounds/home/background-home-mobile.jpg")
      no-repeat center;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    padding-top: 200px;
  }
  .body-explore {
    position: relative;
    width: 242px;
    height: 242px;
    top: unset;
    left: unset;
    right: unset;
  }
  .body-word {
    position: relative;
    width: 450px;
    height: 334px;
    display: flex;
    top: unset;
    left: unset;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 156px;
  }
  .body-word-title {
    font-family: Barlow Condensed;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 3.375px;
    text-align: center;
  }
  .body-word-space {
    font-family: Bellefair;
    font-size: 150px;
    font-weight: 400;
    line-height: 150px;
    letter-spacing: 0px;
    text-align: left;
  }
  .body-word-art {
    font-family: Barlow;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
  }
  .body-explore-word{
    color: #0B0D17;
font-family: Bellefair;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2px;
  }
}
@media (max-width: 376px) {
  .homebody {
    height: 667px;
    background: url("../assets/imgs/backgrounds/home/background-home-tablet.jpg")
      no-repeat center;
    padding-top: 110px;
  }
  .body-explore {
    width: 150px;
    height: 150px;
  }
  .body-explore-word {
    color: #0b0d17;
    text-align: center;
    font-family: Bellefair;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.25px;
  }
  .body-word-title {
    color: #d0d6f9;
    text-align: center;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
  }
  .body-word-space {
    color: #fff;
    text-align: center;
    font-family: Bellefair;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: 100px;
  }
  .body-word-art {
    width: 327px;
    color: #d0d6f9;
    text-align: center;
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }
  .body-word {
    width: 327px;
    margin-bottom: 75px;
  }
}
</style>