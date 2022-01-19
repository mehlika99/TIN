const startButton = document.getElementById("start");
const scoreText = document.getElementById("score");
const moles = document.querySelectorAll(".mole");
const timeText = document.querySelector("#time");

// const sound = document.createElement('audio')
// sound.load()
// sound.src = './sounds/hitMole.mp3'


let previousMole;
let timeOut=false;
let score=0;
let time=15;

startButton.addEventListener("click",startGame);
moles.forEach((mole)=>mole.addEventListener("click",hit));

//rastgele kostebek seciyoruz
function randomMole(){
    const order = Math.floor(Math.random()*moles.length);
    const selectedMole = moles[order];
    if(previousMole === selectedMole){
        return randomMole();
    }else{
        previousMole = selectedMole;
    }
    return selectedMole;
}

//kostebegin yukarda kalma suresi
function timeToMove(min,max){
    const time = Math.round(Math.random()*(max-min))+min;
    return time;
}

//kostebek yukarida gozukecek
function moleUp() {
    const mole = randomMole();
    const time = timeToMove(750,1250);
    mole.classList.add("selected");
    setTimeout(() => {
      mole.classList.remove("selected");
      if (!timeOut) moleUp();
    }, time);
  }
function startTime() {
    if (!timeOut) {
      time--;
      timeText.textContent = time;
    } else {
      timeText.textContent = "time out";
    }
  }

function startGame() {
    time = 15;
    score = 0;
    timeOut = false;
    const interval = setInterval(() => {
      startTime();
      if (timeOut) clearInterval(interval);
    }, 1000);
    moleUp();
  //  sound.play()
    setTimeout(() => {
      timeOut = true;
    }, time * 1000);
  }

  function hit(e) {
    if (e.target.classList.contains("selected")) {
      score++;
      e.target.classList.remove("selected");
    }
    scoreText.textContent = score;
  }
