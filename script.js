const startButton = document.getElementById(`start-btn`)
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById
("answer-buttons")

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