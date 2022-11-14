var viewHighScore = document.querySelector(".view-highscore");
var result = document.querySelector(".result");
var question = document.querySelector(".question");
var resetButton = document.querySelector(".reset-button");
var timerElement = document.querySelector(".timer-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var start = document.querySelector(".start-button");

var choseOption = "";
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var function init() {
    getWins();
    getLosses();
}

function startGame() {
    isWin = false;
    timerCounter = 10;
    startButton.disabled = true;
    startTimer()
    setWins()
}

function winGame() {
  winCounter++
  nextButton.disabled = false;
  setWins()
    
}

function loseGame() {
    loseCounter++
    nextButton.disabled = false;
    setLosses()
}

function startTimer() {


    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    if (timerCount >= 0) {
        if(isWin && timerCount > 0) {
            clearInterval(timer);
            winGame();
        }
    }
    
    if (timerCount === 0) {

        clearInterval(timer);
        loseGame();
    }
  }, 1000);
}
