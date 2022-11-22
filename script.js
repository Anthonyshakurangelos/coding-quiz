var viewHighScore = document.querySelector(".view-highscore");
var result = document.querySelector(".result");
var displayQuestion = document.querySelector("#question");
var saveButton = document.querySelector(".save-score-button");
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

var gameOver;
var score = 'your score';
var index = 0;
var winCount = 0;
var loseCount = 0;
var isWin = false;
var timer;
var rightAnswer = "";
var timerCount;
let finalTime = 0;
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
// look up key value pairs.
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
        timerElement.textContent = timerCount + " seconds remaining";
    if (timerCount === 0) {
       // if(Win && timerCount > 0) {
            clearInterval(timer);
            timerElement.innerHTML = "Game over!"
           // winGame();
       // }
    }
    console.log(timer)
   // if (timerCount === 0) {

    //    clearInterval(timer);
     //   loseGame();
  //  }
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
 function initialsPage() {
  document.querySelector(".panel").innerHTML = ""
  let finalScoreDiv = document.createElement("div")
  finalScoreDiv.innerHTML = `your final score is ${finalTime}`
  let initialsDiv = document.createElement("div")
  initialsDiv.style.display = "flex"
  let message_para = document.createElement("p")
  message_para.innerHTML = "enter your initials here";
  let inputEl = document.createElement("input")
  initialsDiv.append(message_para, inputEl)
  let submitBtn = document.createElement("button")
  submitBtn.innerHTML = "submit score"
  document.querySelector(".panel").append(finalScoreDiv, initialsDiv, submitBtn)

 }
 function nextQuestion() {
    console.log(index)
  if (index < 3){
    index++
    loadQuestion()
  } else {
    finalTime === timerCount
    initialsPage()
  } 
 }
    
 
 function optionChoice(e) {
   var choseAnswer = e.target.innerText
   console.log(choseAnswer)
   if(choseAnswer==question[index].rightAnswer) {
    winCount++
    win.textContent = winCount;
     
   }  
    else if(choseAnswer!=question[index].rightAnswer) {
      timerCount--;
      loseCount++
      lose.textContent = loseCount;
    }
     
  }
    // need to save results
    function saveResults() {
     
    }
    
   
   // need to display results correctly 
 // once all questions are answered or timer is 0 then game over
 
start.addEventListener("click", startGame)
next.addEventListener("click", nextQuestion)
opt1.addEventListener("click", optionChoice)
opt2.addEventListener("click", optionChoice)
opt3.addEventListener("click", optionChoice)
opt4.addEventListener("click", optionChoice)
submitBtn.addEventListener("click", saveResults)
// log score with initials to local storage
//