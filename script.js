const startButton = document.getElementById(`start-btn`)
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById
("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    shuffleQuestions = questions.sort(() => Math.random() - .5 )
    currentQuestionIndex = 0
    questionContainerElement.classLish.remove("hide")
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//     question.answer.forEach(answer => {
//         const button = document.createElement("button")
//         button.innerText = answer.textbutton.classList.add("btn")
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.add("click," selectAnswer)
//         answerButtonElement.appendChild(button)
//     })
// }

function showQuestion(question) {
    questionElement.innertext = question.question
}

function selectAnswer() {
    const selectedButton = e.target
    const 

}

const questions = [
    {
        question: "Put a question here?",
        answers: [ 
            { text: "answer", correct: true },
            { text: "answer", correct: false},    
            { text: "answer", correct: false},    
            { text: "answer", correct: false},    

            }
        ]
    }

]



// // this was all javascript from first try on project 
// const username = document.querySelector("#username")
// const saveScoreBtn = document.querySelector("#saveScoreBtn")
// const finalScore = document.querySelector("#finalScore")
// const mostRecentScore = localStorage.getItem("MostRecentScore")

// const highScores = JSON.parse(localStorage.getItem("highScores")) || []
// const MAX_HIGH_SCORES = 5

// const highScoresList = document.querySelector("#highScoresList")
// const highScores = JSON.parse(localStorage.getItem("highScores")) || []

// highScoresList.innerHTML = 
// highScores.map(score => {
//     return `<li class="high-score">${score.name} - ${score.score}</li>`
// }).join("")

// finalScore.innerText = mostRecentScore

// username.addEventListener("keyup", () => {
//     saveScoreBtn.disabled = !username.value
// })

// saveHighScore = e =  {
//     score: mostRecentScore,
//     name: username.value
// }

// highScores.push(score)

// highScores.sort((a,b) => {
//     return b.score - a.score
// })

// highScores.splice(5)

// localStorage.setItem("highScores", JSON.stringify(highScores))
// window.location.assign("/")

// const username = document.querySelector("#username")
// const saveScoreBtn = document.querySelector("#saveScoreBtn")
// const finalScore = document.querySelector("#finalScore")
// const mostRecentScore = localStorage.getItem("MostRecentScore")

// const highScores = JSON.parse(localStorage.getItem("highScores")) || []
// const MAX_HIGH_SCORES = 5

// const highScoresList = document.querySelector("#highScoresList")
// const highScores = JSON.parse(localStorage.getItem("highScores")) || []

// highScoresList.innerHTML = 
// highScores.map(score => {
//     return `<li class="high-score">${score.name} - ${score.score}</li>`
// }).join("")

// finalScore.innerText = mostRecentScore

// username.addEventListener("keyup", () => {
//     saveScoreBtn.disabled = !username.value
// })

// saveHighScore = e =  {
//     score: mostRecentScore,
//     name: username.value
// }

// highScores.push(score)

// highScores.sort((a,b) => {
//     return b.score - a.score
// })

// highScores.splice(5)

// localStorage.setItem("highScores", JSON.stringify(highScores))
// window.location.assign("/")

// const question = document.querySelector("#question");
// const choices = Array.from(document.querySelectorAll(".choice-text"));
// const progressText = document.querySelector("#progressText");
// const scoreText = document.querySelector("#score");
// const progressBarFull = document.querySelector("#progressBarFull");

// let currentQuestion = {};
// let acceptingAnswer = true;
// let score = 0;
// let questionCount = 0;
// let availableQuestions = [];

// let questions = [
//     {
//         question: "What is your question?",
//         choice1: "answer",
//         choice2: "answer",
//         choice3: "answer",
//         choice4: "answer",
//         answer: 3,
//     },
//     {
//         question: "What is your question?",
//         choice1: "answer",
//         choice2: "answer",
//         choice3: "answer",
//         choice4: "answer",
//         answer: 2,
//     },
//     {
//         question: "What is your question?",
//         choice1: "answer",
//         choice2: "answer",
//         choice3: "answer",
//         choice4: "answer",
//         answer: 1,
//     },
//     {
//         question: "What is your question?",
//         choice1: "answer",
//         choice2: "answer",
//         choice3: "answer",
//         choice4: "answer",
//         answer: 4,
//     },
// ];

// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 4

// startGame = () => {
//     questionCounter = 0
//     score = 0
//     availableQuestions = [...questions]
//     getNewQuestion()   
// }

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//         localStorage.setItem("mostRecentScore", score);

//         return window.location.assign("./end.html")
//     }

//     questionCounter++
//     progressText.innerText = "Question ${questionCounter} of ${MAX_QUESTIONS}"
//     progressBarFull.getElementsByClassName.width = "${questionCounter/MAX_QUESTIONS) * 100}%"

//     const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
//     currentQuestions = availableQuestions[questionsIndex]
//     question.innerText = currentQuestion.question

//     choices.forEach(choice => {
//         const number = choice.dataset["number"]
//         choice.innerText = currentQuestion["choice" + number]
//     })

//     availableQuestions.splice(questionsIndex, 1)

//     acceptingAnswers = true;
// }

// choices.forEach(choice => {
//     choice.addEventListener("click", e => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset["number"]

//         let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

//         if(classToApply === "correct")
//             incrementScore(SCORE_POINTS)

//             if(classToApply === "correct") {
//                 incrementScore(SCORE_POINTS)
//             }

//             selectedChoice.parentElement.classList.add(classToApply);

//             setTimeout(() => {
//                 selectedChoice.parentElement.classList.remove(classToApply)
//                 getNewQuestion()

//             }, 1000)
//     })
// })

// incrementScore = num => {
//     score +=numscoreText.innerText = score
// }

// startGame();
