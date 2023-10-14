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

 function startTheGame() {
    startButton.classList.add('hide') // make start button dissaprear
     startTimerCountdown();// Event Listener to Start game
     // get container by ID and remove class hide
     document.getElementById("container").classList.remove("hide");
     question1()
}   



var arrOfQuestions = [
    {
        prompt: "What is JavaScript?",
        choiceA: "A spoken language", 
        choiceB: "A computer language", 
        choiceC: "Clingon dialect", 
        choiceD: "Coffee",
        answer: "A computer language"
    },
    {
        prompt: "If you want to add functionality when you click on an element, what method do you use?",
      choiceA: ".eventListener", 
      choiceB: ".Listeningevent", 
      choiceC: ".clickbutton", 
      choiceD: ".addEventListener",
      answer: ".addEventListener"
    },
    {
        prompt: "Is JavaScript a front end only language?",
      choiceA: "Yes front end only", 
      choiceB: "No it's a back end language only", 
      choiceC: "Its actually both front and back end", 
      choiceD: "It's a coffee shop in Seattle",
        answer: "Its actually both front and back end"
    },
];
 
function question1(){
var quest1 = document.getElementById('question')
quest1.innerHTML = arrOfQuestions[0].prompt;
var ans1a = document.getElementById('answerButt')
 ans1a.innerHTML = arrOfQuestions[0].choiceA;
var ans1b = document.getElementById('answerButtB')
 ans1b.innerHTML = arrOfQuestions[0].choiceB;
var ans1c = document.getElementById('answerButtC')
 ans1c.innerHTML = arrOfQuestions[0].choiceC;
var ans1d = document.getElementById('answerButtD')
 ans1d.innerHTML = arrOfQuestions[0].choiceD;
answerButtB.addEventListener('click', function() {
                            if (question1() == 'answerButtB') {
  return question2();
} else { return question2();  }
} );
  
 
}


function question2(){
var quest1 = document.getElementById('question')
quest1.innerHTML = arrOfQuestions[1].prompt;
var ans1a = document.getElementById('answerButt')
 ans1a.innerHTML = arrOfQuestions[1].choiceA;
var ans1b = document.getElementById('answerButtB')
 ans1b.innerHTML = arrOfQuestions[1].choiceB;
var ans1c = document.getElementById('answerButtC')
 ans1c.innerHTML = arrOfQuestions[1].choiceC;
var ans1d = document.getElementById('answerButtD')
 ans1d.innerHTML = arrOfQuestions[1].choiceD;
answerButt.addEventListener('click', function() {
                            if (question2() == 'answerButtD') {
  return question3();
} else { return question3();  }
});
  
  return question2();
}

function question3(){
var quest1 = document.getElementById('question')
quest1.innerHTML = arrOfQuestions[2].prompt;
var ans1a = document.getElementById('answerButt')
 ans1a.innerHTML = arrOfQuestions[2].choiceA;
var ans1b = document.getElementById('answerButtB')
 ans1b.innerHTML = arrOfQuestions[2].choiceB;
var ans1c = document.getElementById('answerButtC')
 ans1c.innerHTML = arrOfQuestions[2].choiceC;
var ans1d = document.getElementById('answerButtD')
 ans1d.innerHTML = arrOfQuestions[2].choiceD;
answerButt.addEventListener('click', function() {
                            if (question3() == 'answerButtC') {
  return initialsSave();
} else { return initialsSave;  }
});
  
}

function initialsSave(){
localStorage.setItem("initials", "test")
}











/*
var arrOfQuestions = [
    {
        prompt: "What is JavaScript?",
        choices: ["A spoken language", "A computer language", "Clingon dialect", "Coffee"],
        answer: "A computer language"
    },
    {
        prompt: "If you want to add functionality when you click on an element, what method do you use?",
        choices: [".eventListener", ".Listeningevent", ".clickbutton", ".addEventListener", ".Listener"],
        answer: ".addEventListener"
    },
    {
        prompt: "Is JavaScript a front end only language?",
        choices: ["Yes front end only", "No it's a back end language only", "Its actually both front and back end", "It's a coffee shop in Seattle"],
        answer: "Its actually both front and back end"
    },
];
function quest1() {
arrOfQuestions[0].prompt = document.getElementById('question');
arrOfQuestions[0].choices = document.getElementById('answerButt').innerHTML = arrOfQuestions[0].choices;

function quest2()

const quest1 = document.getElementById('question')
const answers1 = document.getElementById('answerButt')
const quest2 = document.getElementById('question')
const answers2 = document.getElementById('answerButt')
const quest3 = document.getElementById('question')
const answers3 = document.getElementById('answerButt') 



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