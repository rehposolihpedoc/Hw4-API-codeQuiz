/* AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```
## Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/
//numbers, boolean, string, array, object


var arrOfQuestions = [
    {
        prompt: "This is Question 1's prompt",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        prompt: "This is Question 1's prompt",
        choices: ["a", "b", "c", "d", "e"],
        answer: "e"
    },
    {
        prompt: "This is Question 1's prompt",
        choices: ["a", "b"],
        answer: "b"
    },
]
var questionIndex = 0;

for (let i = 0; i < array.length; i++) {
    if (arrOfQuestions[i].answer = true) {
        return questionIndex = document.getElementById("answerButt")[i];
    }
}
console.log(arrOfQuestions);

const startButton = document.getElementById('startButtMain') // connecting button to event listener
startButton.addEventListener('click', startTheGame) 

//function pressStart();
    function startTimerCountdown(seconds) {
        console.log('Started')
        let counter = 60;                                                    // timer logic
        const interval = setInterval(() => {
            document.getElementById("clock").innerHTML = counter--;
            if (counter < 0) {
                document.getElementById("clock").innerHTML = "Game Over! Thanks For Playing 🥳";      //if timer = 0 display game over if statement
            }    
        }, 1000);
    }

var quest1 = "";   

 function startTheGame() {
     console.log(startButton)
     console.log(startButton.classList)
    startButton.classList.add('hide') // make start button dissaprear
     startTimerCountdown();// Event Listener to Start game
     // get container by ID and remove class hide
     document.getElementById("container").classList.remove("hide");
     showQuestion()
}   

function showQuestion(){
    var currentQuestion = arrOfQuestions[questionIndex]
    console.log(currentQuestion)
    document.getElementById("question").innerHTML = currentQuestion.prompt
    //clear the button container!!
    for (let i = 0; i < currentQuestion.choices.length; i++) {
       //you want to create the button
       //set the textContent to currentQuestion.choices[i]
       //button eventListener ('click', checkAnswer)
        //where do we append these buttons!?
    }
}
function checkAnswer(event){
    var selectedButton = event.target
    var selectedAnswer = selectedButton.innerHTML
    //check if it's right or wrong (referr to arrOfQuestion[questionIndex])
    //if wrong
    //else if right

    //if I have more questions (my array.length vs my questionIndex!!!){
// questionIndex ++
//showQuestion()
    //} else {
        //endQuiz()
    //}

}

/*
document.getElementById('section').style.display = 'none';

var quest1; // object
var quest2;// object
var quest3;// object
var quest4;// object
function afterQuest4Logic(); // if statement 

function nextQuestion();
function questionPromtLogic();
function moveMeToNext();
function wrongAnswerLogic();
function wrongAnswerTimeDeductLogic(); // if stmt
function timerOverLogic();
function jsonSaveInfoLogic(); // save score and initials


let seconds = 0;

function startTimer() {
  setInterval(() => {
    seconds++;
    console.log(seconds);
  }, 1000); // 1000 milliseconds = 1 second
}
*/