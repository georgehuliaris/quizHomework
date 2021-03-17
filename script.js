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