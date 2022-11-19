var viewHighScore = document.querySelector(".view-highscore");
var result = document.querySelector(".result");
var displayQuestion = document.querySelector("#question");
var resetButton = document.querySelector(".reset-button");
var timerElement = document.querySelector(".timer-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var next = document.querySelector(".next");
var start = document.querySelector(".start");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var optionButton = document.querySelectorAll(".option-container")

var score = 0;
var index = 0;
var winCount = 0;
var loseCount = 0;
var isWin = false;
var timer;
var rightAnswer = "";
var timerCount;
var question = [
    {
        question: "what does javascript do?",
         choices: ["Design", "creates images", "structures", "makes things work"],
         rightAnswer: "makes things work"},
 {
    question: "what language styles the webpage?",
     choices: ["CSS", "HTML", "Javascript", "Python"],
     rightAnswer: "CSS" },

     {question: "what is the right way to end a html tag?", 
     choices: ["div>", "</div>", "div", "<div>"],
     rightAnswer: "</div>"},
{
    question: "what should you add to call a function?",
     choices: ["()", "{}", "[]", "//"],
    rightAnswer: "()"}
]
//repeat this process and clean up, look up key value pairs.
 function init() {
    getWins();
    getLosses();
}

function startGame() {
    
    isWin = false;
    timerCount = 20;
    start.disabled = true;
    startTimer()
    loadQuestion()
    winsCount()
}

function winGame() {
  winCount++
  nextButton.disabled = false;
  setWins()
    
}

function loseGame() {
    loseCount++
    next.disabled = false;
    setLosses()
}

function startTimer() {


    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    if (timerCount >= 0) {
        if(Win && timerCount > 0) {
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
  opt3.innerText = question[index].choices[2]
  opt4.innerText = question[index].choices[3]
 }
 function nextQuestion() {
    console.log(index)
    index++
    loadQuestion()

    
 }
 function optionChoice(e) {
   var choseAnswer = e.target.innerText
   console.log(choseAnswer)
   if(choseAnswer==question[index].rightAnswer) {
    winCount++
    win.textContent = winCount;

   }  
    
     
  }
    
    //do else if statements

   
 
 
  // function logScore()
// if (question[index]===rightAnswer) {
  //  winCount++
//}
start.addEventListener("click", startGame)
next.addEventListener("click", nextQuestion)
//optionButton.addEventListener("click", )
//do a else if statement, 
opt1.addEventListener("click", optionChoice)
opt2.addEventListener("click", optionChoice)
opt3.addEventListener("click", optionChoice)
opt4.addEventListener("click", optionChoice)
 //add rest of opt
