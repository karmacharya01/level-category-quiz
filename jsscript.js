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
        ]
    }
};



// Function to handle the change in difficulty
function changeDifficulty(myvalue) {
    var difficultySelect = document.getElementById("difficulty");
    var selectedDifficulty = difficultySelect.options[difficultySelect.selectedIndex].value;
    
    // You can perform actions based on the selected difficulty
    // For example, you can store the selected difficulty in a variable or trigger other actions
    console.log("Selected difficulty: " + selectedDifficulty);
}

function changeCategory() {
    var categorySelect = document.getElementById("category");
    var selectedCategory = categorySelect.options[categorySelect.selectedIndex].value;
    
    // You can perform actions based on the selected category
    // For example, you can store the selected category in a variable or trigger other actions
    console.log("Selected category: " + selectedCategory);
}


    // Selecting elements
    const startBtn = document.querySelector('.start_btn button');
    const infoBox = document.querySelector('.info_box');
    const restartBtn = document.getElementById('restart');
    const difficultyContainer = document.querySelector('.difficulty-container');
    const difficultySelect = document.getElementById("difficulty");
    const categoryContainer = document.querySelector('.category-container');
    const appSection = document.querySelector('.app');
    const categorySelect = document.getElementById("category");
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answerbutton"); // Corrected target element ID

    const nextButton = document.getElementById("next-btn");

    // Variables to keep track of quiz state
    let currentQuestionIndex = 0;
    let currentDifficulty = "";
    let currentCategory = "";
    let score = 0;

    // Event listeners
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

    // Event listener for changing the category
    categorySelect.addEventListener('change', function() {
        if (this.value !== 'option') {
            categoryContainer.style.display = 'none';
            appSection.style.display = 'block';
            currentCategory = this.value; // Set current category
            StartQuiz(); // Start the quiz when a category is selected
        }
    });

    function StartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
    
        // Retrieve questions based on the selected category and difficulty level
        const selectedDifficulty = difficultySelect.value;
        const selectedCategory = categorySelect.value;
    
        if (selectedCategory && selectedDifficulty) {
            currentCategory = selectedCategory; // Set current category
            currentDifficulty = selectedDifficulty; // Set current difficulty
            const questions = questionsByDifficultyAndCategory[selectedDifficulty][selectedCategory];
            if (questions && questions.length > 0) {
                showQuestion();
                answerButtons.addEventListener("click", selectAnswer); // Add event listener after showing the question
            } else {
                // Handle the case when there are no questions available for the selected category and difficulty level
                questionElement.innerHTML = "No questions available for this category and difficulty level.";
            }
        } else {
            // Handle the case when no category or difficulty level is selected
            questionElement.innerHTML = "Please select a category and difficulty level to start the quiz.";
        }
    }
    
    

    function showQuestion() {
        resetState();
        console.log("Current difficulty:", currentDifficulty);
        console.log("Current category:", currentCategory);
        console.log("Current question index:", currentQuestionIndex);
    
        let currentQuestion = questionsByDifficultyAndCategory[currentDifficulty][currentCategory][currentQuestionIndex];
        console.log("Current question:", currentQuestion);
    
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.innerHTML = option;
            button.classList.add("btn");
            answerButtons.appendChild(button);
    
            // Attach event listener to each answer button
            button.addEventListener("click", selectAnswer);
        });
    }
    
    

    // Function to reset answer buttons
    function resetState() {
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = questionsByDifficultyAndCategory[currentDifficulty][currentCategory][currentQuestionIndex].correctAnswer;
    
        // Check if the clicked element is a button
        if (selectedButton.classList.contains("btn")) {
            if (selectedButton.innerHTML === correct) {
                score++;
            }
    
            currentQuestionIndex++;
            if (currentQuestionIndex < questionsByDifficultyAndCategory[currentDifficulty][currentCategory].length) {
                showQuestion();
            } else {
                // End of the quiz
                questionElement.innerHTML = `You answered ${score} out of ${questionsByDifficultyAndCategory[currentDifficulty][currentCategory].length} questions correctly!`;
                nextButton.style.display = "none";
            }
        }
    }
    
    






    
