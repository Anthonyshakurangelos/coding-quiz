var viewHighScore = document.querySelector(".view-highscore");
var result = document.querySelector(".result");
var displayQuestion = document.querySelector("#question");
var resetButton = document.querySelector(".reset-button");
var timerElement = document.querySelector(".timer-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var start = document.querySelector(".start");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");

var index = 0;
var choseOption = "";
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var rightAnswer = "";
var timerCount;
var question = [{question: "what does javascript do?", choices: ["Design", "creates images", "structures a webpage", "makes things work"],
 rightAnswer: "makes things work"},
 {question: "what language styles the webpage?", choices: ["CSS", "HTML", "Javascript", "Python"],
rightAnswer: "CSS" },
{question: "what is the right way to end a html tag?", choices: ["div>", "</div>", "div", "<div>"],
rightAnswer: "</div>"},
{question: "what do add to call a function?", choices: ["()", "{}", "[]", "//"],
rightAnswer: "()"}
]
//repeat this process and clean up, look up key value pairs.
 function init() {
    getWins();
    getLosses();
}

function startGame() {
    
    isWin = false;
    timerCount = 10;
    start.disabled = true;
    startTimer()
    loadQuestion()
    setWins()
}

function winGame() {
  winCount++
  nextButton.disabled = false;
  setWins()
    
}

function loseGame() {
    loseCount++
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
    console.log(timer)
    if (timerCount === 0) {

        clearInterval(timer);
        loseGame();
    }
  }, 1000);
}
 function loadQuestion() {
    displayQuestion.innerText = question[index].question
    console.log(question[0].choices)
  opt1.innerText = question[index].choices[0]
opt2.innerText = question[index].choices[1]

 }
start.addEventListener("click", startGame)