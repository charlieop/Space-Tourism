let index = 0;

let imageCount = document.querySelectorAll(
  ".bitmap-outer .bitmap-inner img"
).length; //get number

setInterval(() => {
  index++;
  refresh();
}, 3000);

function createAuto() {
  return setInterval(() => {
    index++;
    refresh();
  }, 3000);
}

function refresh() {
  //fix range
  if (index < 0) {
    index = 2;
  } else if (index > 2) {
    index = 0;
  }
  let outer = document.querySelector(".bitmap-outer");
  let width = getComputedStyle(outer).width;
  width = Number(width.slice(0, -2));
  outer.querySelector(".bitmap-inner").style.left = index * width * -1 + "px";
}

function shift1() {
  index = 0;
  refresh();
}

function shift2() {
  index = 1;
  refresh();
}

function shift3() {
  index = 2;
  refresh();
}

let refreshWrap = (func) => {
  return function (...args) {
    let result = func(...args);
    refresh();
    //clear auto roll
    clearInterval(autoTimer);
    autoTimer = createAuto();
    return result;
  };
};

let leftShift = refreshWrap(() => {
  index--;
  refresh();
});

function rightShift() {
  index++;
  refresh();
}

refresh();
