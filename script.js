document.addEventListener("DOMContentLoaded", function () {
  let ranQue = [];
  let ranAns = [];
  let started = false;
  let level = 0;
  let body = document.querySelector("body");
  let reset = document.querySelector(".reset");
  let flashbtn = ["div1", "div2", "div3", "div4"];
  let h3 = document.querySelector(".h3");
  function levelUp() {
    ranAns = [];
    level++;
    h3.innerHTML = `Level ${level}`;
    let ranbtn = Math.floor(Math.random() * 3);
    let ranCol = flashbtn[ranbtn];
    ranQue.push(ranCol);
    //console.log(ranQue);
    let btn = document.querySelector(`.${ranCol}`);
    flash(btn);
  }
  function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
      btn.classList.remove("flash");
    }, 170);
  }
  document.addEventListener("keypress", function () {
    if (started == false) {
      started = true;
      console.log("started");
      levelUp();
    }
  });

  function check(indx) {
    if (ranAns[indx] == ranQue[indx]) {
      console.log("same value");
      if (ranAns.length == ranQue.length) {
        setTimeout(levelUp, 1000);
      }
    } else {
      if (level > 1) {
        h3.innerHTML = `GAME OVER <br> Your Score : ${(level - 1) * 5}`;
      } else {
        h3.innerHTML = `GAME OVER <br> Your Score : 0`;
      }
      body.classList.add("wrong");
    }
  }
  let btns = document.querySelectorAll(".btn");
  for (btn of btns) {
    btn.addEventListener("click", function Pbtn() {
      let btn = this;
      flash(btn);
      //console.log(this);
      let pressed = btn.getAttribute("id");
      ranAns.push(pressed);
      // console.log(ranAns);
      check(ranAns.length - 1);
    });
  }
  reset.addEventListener("click", function () {
    ranQue = [];
    ranAns = [];
    started = false;
    level = 0;
    h3.innerHTML = `Press any key to start`;
    body.classList.remove("wrong");
  });
});
