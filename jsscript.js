const questionsByDifficultyAndCategory = {
    easy: {
        "GENERAL KNOWLEDGE": [
            {
                question: "What is the capital of France?",
                answers: [
                    { text: "Paris", correct: true },
                    { text: "London", correct: false },
                    { text: "Berlin", correct: false },
                    { text: "Rome", correct: false },
                ]
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                answers: [
                    { text: "Charles Dickens", correct: false },
                    { text: "William Shakespeare", correct: true },
                    { text: "Jane Austen", correct: false },
                    { text: "Leo Tolstoy", correct: false },
                ]
            }
        ],
        "HISTORY": [
            {
                question: "What is the capital of Japan?",
                answers: [
                    { text: "Beijing", correct: false },
                    { text: "Seoul", correct: false },
                    { text: "Tokyo", correct: true },
                    { text: "Bangkok", correct: false },
                ]
            },
            {
                question: "What is the largest planet in our solar system?",
                answers: [
                    { text: "Jupiter", correct: true },
                    { text: "Saturn", correct: false },
                    { text: "Mars", correct: false },
                    { text: "Venus", correct: false },
                ]
            }
        ],
        "COMPUTER": [
            {
                question: "Who discovered penicillin?",
                answers: [
                    { text: "Alexander Fleming", correct: true },
                    { text: "Marie Curie", correct: false },
                    { text: "Isaac Newton", correct: false },
                    { text: "Albert Einstein", correct: false },
                ]
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                answers: [
                    { text: "China", correct: false },
                    { text: "Japan", correct: true },
                    { text: "South Korea", correct: false },
                    { text: "Vietnam", correct: false },
                ]
            }
        ]
    },
    medium: {
        "GENERAL KNOWLEDGE": [
            {
                question: "What is the capital of France?",
                answers: [
                    { text: "Paris", correct: true },
                    { text: "London", correct: false },
                    { text: "Berlin", correct: false },
                    { text: "Rome", correct: false },
                ]
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                answers: [
                    { text: "Charles Dickens", correct: false },
                    { text: "William Shakespeare", correct: true },
                    { text: "Jane Austen", correct: false },
                    { text: "Leo Tolstoy", correct: false },
                ]
            }
        ],
        "HISTORY": [
            {
                question: "What is the capital of Japan?",
                answers: [
                    { text: "Beijing", correct: false },
                    { text: "Seoul", correct: false },
                    { text: "Tokyo", correct: true },
                    { text: "Bangkok", correct: false },
                ]
            },
            {
                question: "What is the largest planet in our solar system?",
                answers: [
                    { text: "Jupiter", correct: true },
                    { text: "Saturn", correct: false },
                    { text: "Mars", correct: false },
                    { text: "Venus", correct: false },
                ]
            }
        ],
        "COMPUTER": [
            {
                question: "Who discovered penicillin?",
                answers: [
                    { text: "Alexander Fleming", correct: true },
                    { text: "Marie Curie", correct: false },
                    { text: "Isaac Newton", correct: false },
                    { text: "Albert Einstein", correct: false },
                ]
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                answers: [
                    { text: "China", correct: false },
                    { text: "Japan", correct: true },
                    { text: "South Korea", correct: false },
                    { text: "Vietnam", correct: false },
                ]
            }
        ]
    },
    hard: {
        "GENERAL KNOWLEDGE": [
            {
                question: "What is the capital of France?",
                answers: [
                    { text: "Paris", correct: true },
                    { text: "London", correct: false },
                    { text: "Berlin", correct: false },
                    { text: "Rome", correct: false },
                ]
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                answers: [
                    { text: "Charles Dickens", correct: false },
                    { text: "William Shakespeare", correct: true },
                    { text: "Jane Austen", correct: false },
                    { text: "Leo Tolstoy", correct: false },
                ]
            }
        ],
        "HISTORY": [
            {
                question: "What is the capital of Japan?",
                answers: [
                    { text: "Beijing", correct: false },
                    { text: "Seoul", correct: false },
                    { text: "Tokyo", correct: true },
                    { text: "Bangkok", correct: false },
                ]
            },
            {
                question: "What is the largest planet in our solar system?",
                answers: [
                    { text: "Jupiter", correct: true },
                    { text: "Saturn", correct: false },
                    { text: "Mars", correct: false },
                    { text: "Venus", correct: false },
                ]
            }
        ],
        "COMPUTER": [
            {
                question: "Who discovered penicillin?",
                answers: [
                    { text: "Alexander Fleming", correct: true },
                    { text: "Marie Curie", correct: false },
                    { text: "Isaac Newton", correct: false },
                    { text: "Albert Einstein", correct: false },
                ]
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                answers: [
                    { text: "China", correct: false },
                    { text: "Japan", correct: true },
                    { text: "South Korea", correct: false },
                    { text: "Vietnam", correct: false },
                ]
            }
        ]
    }
};


const startBtn = document.querySelector('.start_btn button');
const infoBox = document.querySelector('.info_box');
const restartBtn = document.getElementById('restart');
const difficultyContainer = document.querySelector('.difficulty-container');
const difficultySelect = document.getElementById("difficulty");
const categoryContainer = document.querySelector('.category-container');
const appSection = document.querySelector('.app');
const categorySelect = document.getElementById("category");
const questionElement = document.getElementById("question");
const answerButtonsContainer = document.getElementById("answerbutton");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let currentDifficulty = "";
let currentCategory = "";
let score = 0;
let questions = [];

startBtn.addEventListener("click", function () {
    infoBox.style.display = "block";
    startBtn.style.display = "none";
});

restartBtn.addEventListener('click', function() {
    infoBox.style.display = 'none';
    difficultyContainer.style.display = 'block';
});

difficultyContainer.addEventListener('change', function() {
    if (this.value !== 'option') {
        difficultyContainer.style.display = 'none';
        categoryContainer.style.display = 'block';
    }
});

categorySelect.addEventListener('change', function() {
    if (this.value !== 'option') {
        categoryContainer.style.display = 'none';
        appSection.style.display = 'block';
        currentCategory = this.value;
        startQuiz();
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    const selectedDifficulty = difficultySelect.value;
    const selectedCategory = categorySelect.value;

    if (selectedCategory && selectedDifficulty) {
        currentDifficulty = selectedDifficulty;
        currentCategory = selectedCategory;
         
        questions = questionsByDifficultyAndCategory[selectedDifficulty][selectedCategory];
        if (questions && questions.length > 0) {
            showQuestion();
        } else {
            questionElement.innerHTML = "No questions available for this category and difficulty level.";
        }
    } else {
        questionElement.innerHTML = "Please select a category and difficulty level to start the quiz.";
    }
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsContainer.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function changeDifficulty(myvalue) {
    var selectedDifficulty = difficultySelect.options[difficultySelect.selectedIndex].value;
}

function changeCategory() {
    var selectedCategory = categorySelect.options[categorySelect.selectedIndex].value;
}
