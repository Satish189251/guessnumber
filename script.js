let form = document.querySelector("form");
let btn = document.querySelector(".button");
let msg = document.querySelector(".msg");
let guessingnum = document.querySelector(".guessingnum");
let input = document.querySelector("#Number");
let loworhigh = document.querySelector(".loworhigh");
let result = document.querySelector(".result");
let previousnumber = document.querySelector(".previousnumber");
let randnum = Math.floor(Math.random() * 100 + 1);

let p = document.createElement("p");

let preguess = [];
let numguess = 1;
let playGame = true;

if (playGame) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let usernum = parseInt(input.value);
    console.log(usernum);
    validguess(usernum);
  });
}

function validguess(usernum) {
  if (usernum === "" || usernum <= 0 || isNaN(usernum)) {
    msg.innerHTML = "<p>Guess a Valid Number.</p>";
  } else {
    msg.innerHTML = "<p>Number is valid.</p>";
    preguess.push(usernum);
    if (numguess === 11) {
      displayguess(usernum);
      displaymsg(`Game Over! ,Random number was ${randnum}`);
      endgame();
    } else {
      displayguess(usernum);
      checkguess(usernum);
    }
  }
}

function checkguess(usernum) {
  if (usernum === randnum) {
    displaymsg("Your guessed it right");
    endgame();
  } else {
    if (usernum < randnum) {
      displaymsg("Number is too small");
    } else if (usernum > randnum) {
      displaymsg("Number is too big");
    }
  }
}

function displaymsg(msg) {
  loworhigh.innerHTML = `<h2>${msg}</h2>`;
}

function displayguess(usernum) {
  input.value = "";
  previousnumber.innerHTML += `${usernum}  ,`;
  numguess++;
  msg.innerHTML = `${11 - numguess}`;
}

function endgame() {
  input.value = "";
  input.setAttribute("disabled", "");
  btn.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = "<h2 id='newgame'>New Game</h2>";
  result.appendChild(p);
  playGame = false;
  newgame();
}

function newgame() {
  const newgamebtn = document.querySelector("#newgame");
  newgamebtn.addEventListener("click", (e) => {
    randnum = Math.floor(Math.random() * 100 + 1);
    preguess = [];
    numguess = 1;
    msg.innerHTML = `${11 - numguess}`;
    previousnumber.innerHTML = "";
    loworhigh.innerHTML = "";
    input.removeAttribute("disabled");
    btn.removeAttribute("disabled");
    result.removeChild(p);
    playGame = true;
  });
}
