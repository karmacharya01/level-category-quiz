const questionsByDifficultyAndCategory = {
    easy: {
        "GENERAL KNOWLEDGE": [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                correctAnswer: "Paris"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
                correctAnswer: "William Shakespeare"
            }
        ],
        "HISTORY": [
            {
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                correctAnswer: "Tokyo"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Jupiter", "Saturn", "Mars", "Venus"],
                correctAnswer: "Jupiter"
            }
        ],
        "COMPUTER": [
            {
                question: "Who discovered penicillin?",
                options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
                correctAnswer: "Alexander Fleming"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "South Korea", "Vietnam"],
                correctAnswer: "Japan"
            }
        ],
        "MATH": [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                correctAnswer: "Paris"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
                correctAnswer: "William Shakespeare"
            }
        ],
        "SPORTS": [
            {
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                correctAnswer: "Tokyo"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Jupiter", "Saturn", "Mars", "Venus"],
                correctAnswer: "Jupiter"
            }
        ],
        "NEPAL": [
            {
                question: "Who discovered penicillin?",
                options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
                correctAnswer: "Alexander Fleming"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "South Korea", "Vietnam"],
                correctAnswer: "Japan"
            }
        ]
    }, 
    medium: {
        "GENERAL KNOWLEDGE": [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                correctAnswer: "Paris"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
                correctAnswer: "William Shakespeare"
            }
        ],
        "HISTORY": [
            {
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                correctAnswer: "Tokyo"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Jupiter", "Saturn", "Mars", "Venus"],
                correctAnswer: "Jupiter"
            }
        ],
        "COMPUTER": [
            {
                question: "Who discovered penicillin?",
                options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
                correctAnswer: "Alexander Fleming"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "South Korea", "Vietnam"],
                correctAnswer: "Japan"
            }
        ],
        "MATH": [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                correctAnswer: "Paris"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
                correctAnswer: "William Shakespeare"
            }
        ],
        "SPORTS": [
            {
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                correctAnswer: "Tokyo"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Jupiter", "Saturn", "Mars", "Venus"],
                correctAnswer: "Jupiter"
            }
        ],
        "NEPAL": [
            {
                question: "Who discovered penicillin?",
                options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
                correctAnswer: "Alexander Fleming"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "South Korea", "Vietnam"],
                correctAnswer: "Japan"
            }
        ]
    },
    hard: {
        "GENERAL KNOWLEDGE": [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                correctAnswer: "Paris"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
                correctAnswer: "William Shakespeare"
            }
        ],
        "HISTORY": [
            {
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                correctAnswer: "Tokyo"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Jupiter", "Saturn", "Mars", "Venus"],
                correctAnswer: "Jupiter"
            }
        ],
        "COMPUTER": [
            {
                question: "Who discovered penicillin?",
                options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
                correctAnswer: "Alexander Fleming"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "South Korea", "Vietnam"],
                correctAnswer: "Japan"
            }
        ],
        "MATH": [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                correctAnswer: "Paris"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
                correctAnswer: "William Shakespeare"
            }
        ],
        "SPORTS": [
            {
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                correctAnswer: "Tokyo"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Jupiter", "Saturn", "Mars", "Venus"],
                correctAnswer: "Jupiter"
            }
        ],
        "NEPAL": [
            {
                question: "Who discovered penicillin?",
                options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
                correctAnswer: "Alexander Fleming"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "South Korea", "Vietnam"],
                correctAnswer: "Japan"
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
const answerButtonsContainer = document.getElementById("answerbutton"); // Corrected target element ID
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let currentDifficulty = "";
let currentCategory = "";
let score = 0;

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
        currentCategory = this.value; // Set current category
        startQuiz(); // Call startQuiz function when a category is selected
    }
});

function startQuiz() {
    // Get the selected difficulty and category
    currentDifficulty = difficultySelect.value;
    currentCategory = categorySelect.value;

    // Reset the current question index and score
    currentQuestionIndex = 0;
    score = 0;

    // Show the first question
    showQuestion();
}

function showQuestion() {
    resetState(); // Reset the state before showing a new question
    let currentQuestion = questionsByDifficultyAndCategory[currentDifficulty][currentCategory][currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Loop through each option in the current question and create answer buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("btn");
        answerButtonsContainer.appendChild(button); // Append the button to the answerButtons container
        // Add an event listener to handle button click
        button.addEventListener("click", function(e) {
            selectAnswer(e); // Call selectAnswer function with the event
        });
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.textContent === questionsByDifficultyAndCategory[currentDifficulty][currentCategory][currentQuestionIndex].correctAnswer;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsContainer.children).forEach(button => {
        if (button.textContent === questionsByDifficultyAndCategory[currentDifficulty][currentCategory][currentQuestionIndex].correctAnswer) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    answerButtonsContainer.classList.add("answered");
    nextButton.style.display = "block";
}

function changeDifficulty(myvalue) {
    var difficultySelect = document.getElementById("difficulty");
    var selectedDifficulty = difficultySelect.options[difficultySelect.selectedIndex].value;
}

function changeCategory() {
    var categorySelect = document.getElementById("category");
    var selectedCategory = categorySelect.options[categorySelect.selectedIndex].value;
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questionsByDifficultyAndCategory[currentDifficulty][currentCategory].length}!`; // Use the length of the questions array based on the selected difficulty and category
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


nextButton.addEventListener("click", function() {
    handleNextButton();
});

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsByDifficultyAndCategory[currentDifficulty][currentCategory].length) {
        showQuestion();
    } else {
        showScore();
    }
}
