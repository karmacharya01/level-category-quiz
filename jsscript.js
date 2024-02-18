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
                question: "Name the planet nearest to the Earth?",
                answers: [
                    { text: "Venus", correct: false },
                    { text: "Mars", correct: false },
                    { text: "Mercury", correct: true },
                    { text: "Jupiter", correct: false }
                ]
            },
            
            {
                question: "What is the tallest creature?",
                answers: [
                    { text: "The giraffe", correct: true },
                    { text: "The elephant", correct: false },
                    { text: "The ostrich", correct: false },
                    { text: "The rhinoceros", correct: false },
                ]
            },
            {
                question: "Which is the longest river in the world?",
                answers: [
                    { text: "Amazon", correct: false },
                    { text: "Nile", correct: true },
                    { text: "Yangtze", correct: false },
                    { text: "Mississippi", correct: false }
                ]
            },
            {
                question: "Which is the largest country in the world by population?",
                answers: [
                    { text: "India", correct: false },
                    { text: "China", correct: true },
                    { text: "United States", correct: false },
                    { text: "Indonesia", correct: false }
                ]
            }
            
            
        ],
        "HISTORY": [
            {
                question: "Which part of Nepal do Gurkhas originate from?",
                answers: [
                    { text: "Dharan", correct: false },
                    { text: "Kathmandu", correct: false },
                    { text: "Gorkha", correct: true },
                    { text: "Patan", correct: false },
                ]
            },
            
            {
                question: "Which country is not involved in any war?",
                answers: [
                    { text: "Switzerland", correct: true },
                    { text: "United States", correct: false },
                    { text: "Russia", correct: false },
                    { text: "Germany", correct: false },
                ]
            }
            
        ],
        
        "COMPUTER": [
            {
                question: "Who is the co-founder of Apple Inc.?",
                answers: [
                    { text: "Steve Jobs", correct: true },
                    { text: "Bill Gates", correct: false },
                    { text: "Mark Zuckerberg", correct: false },
                    { text: "Larry Page", correct: false },
                ]
            },
            {
                question: "What does CPU stand for?",
                answers: [
                    { text: "Computer Personal Unit", correct: false },
                    { text: "Central Processing Unit", correct: true },
                    { text: "Central Personal Unit", correct: false },
                    { text: "Computer Processing Unit", correct: false },
                ]
            },
            {
                question: "What does HTML stand for?",
                answers: [
                    
                    { text: "Hypertext Modeling Language", correct: false },
                    { text: "Hypertext Management Language", correct: false },
                    { text: "Hypertext Markup Language", correct: true },
                    { text: "Hypertext Machine Language", correct: false },
                ]
            },
            {
                question: "Which programming language is often used for web development?",
                answers: [
                    { text: "Java", correct: false },
                    { text: "Python", correct: false },
                    { text: "JavaScript", correct: true },
                    { text: "C++", correct: false },
                ]
            }
        ],
        
        "NEPAL": [
            {
                question: "What is the traditional music instrument of Nepal?",
                answers: [
                    { text: "Sitar", correct: false },
                    { text: "Tabla", correct: false },
                    { text: "Sarangi", correct: true },
                    { text: "Flute", correct: false },
                ]
            },
            {
                question: "Which festival is celebrated as the 'Festival of Lights' in Nepal?",
                answers: [
                    { text: "Tihar", correct: true },
                    { text: "Dashain", correct: false },
                    { text: "Holi", correct: false },
                    { text: "Buddha Jayanti", correct: false },
                ]
            },
            {
                question: "Who is Nepal’s first elected Prime Minister?",
                answers: [
                    
                    { text: "Girija Prasad Koirala", correct: false },
                    { text: "B.P Koirala", correct: true },
                    { text: "Matrika Prasad Koirala", correct: false },
                    { text: "Manmohan Adhikari", correct: false },
                ]
            },
            {
                question: "In which district is Mahendra Cave located?",
                answers: [
                    
                    { text: "Pokhara", correct: false },
                    { text: "Lamjung", correct: false },
                    { text: "Syangja", correct: false },
                    { text: "Kaski", correct: true },
                ]
            },
            {
                question: "What is the hottest place in Nepal?",
                answers: [
                    { text: "Nepalgunj", correct: true },
                    { text: "Dhangadhi", correct: false },
                    { text: "Biratnagar", correct: false },
                    { text: "Kathmandu", correct: false },
                ]
            }
            
        ],
        "SPORTS": [
            {
                question: "Who is known as the 'King of Clay' in tennis?",
                answers: [
                    { text: "Roger Federer", correct: false },
                    { text: "Novak Djokovic", correct: false },
                    { text: "Rafael Nadal", correct: true },
                    { text: "Andy Murray", correct: false },
                ]
            },
            {
                question: "In soccer, what body part can't touch the ball?",
                answers: [
                    { text: "Feet", correct: false },
                    { text: "Head", correct: false },
                    { text: "Chest", correct: false },
                    { text: "Hands", correct: true },
                ]
            },
            {
                question: "The Olympics are held every how many years?",
                answers: [
                    { text: "2 years", correct: false },
                    { text: "3 years", correct: false },
                    { text: "4 years", correct: true },
                    { text: "5 years", correct: false },
                ]
            },
            {
             question: "Which of the following sports does not use a ball?",
               answers: [
                { text: "Golf", correct: false },
                { text: "Tennis", correct: false },
                { text: "Hockey", correct: true },
                { text: "Polo", correct: false },
                 ]
           },

            {
                question: "Which country won the FIFA World Cup in 2018?",
                answers: [
                    { text: "Brazil", correct: false },
                    { text: "Argentina", correct: false },
                    { text: "France", correct: true },
                    { text: "Germany", correct: false },
                ]
            }
        ]
    },
    medium: {
        "GENERAL KNOWLEDGE": [
            {
                question: "What is the fastest growing plant?",
                answers: [
                    { "text": "Rose", "correct": false },
                    { "text": "Cactus", "correct": false },
                    { "text": "Sunflower", "correct": false },
                    { "text": "Bamboo", "correct": true },
                ]
            },
            {
                question: "Which is the most expensive metal?",
                answers: [
                    { text: "Radium", correct: true },
                    { text: "Gold", correct: false },
                    { text: "Platinum", correct: false },
                    { text: "Rhodium", correct: false },
                ]
            },
            {
                question: "What is the name of the driver of the ship?",
                answers: [
                    { text: "Sea Captain", correct: true },
                    { text: "Pilot", correct: false },
                    { text: "Navigator", correct: false },
                    { text: "Skipper", correct: false },
                ]
            },
            {
                question: "Who is the inventor of radio?",
                answers: [
                    { text: "Edison", correct: false },
                    { text: "Marconi", correct: true },
                    { text: "Tesla", correct: false },
                    { text: "Bell", correct: false }
                ]
            },
            
            {
                question: "Which river in the world does not have fish?",
                answers: [
                    
                    { text: "Nile", correct: false },
                    { text: "Amazon", correct: false },
                    { text: "Yangtze", correct: false },
                    { text: "Jordan", correct: true },
                ]
            }
            
        ],
        "HISTORY": [
            {
                question: "Who is the King of Nepal who first visited Europe?",
                answers: [
                    { text: "King Tribhuvan", correct: true },
                    { text: "King Mahendra", correct: false },
                    { text: "King Birendra", correct: false },
                    { text: "King Gyanendra", correct: false },
                ]
            },
            {
                question: "What is called a hundred year period?",
                answers: [
                    { text: "Century", correct: true },
                    { text: "Decade", correct: false },
                    { text: "Millennium", correct: false },
                    { text: "Era", correct: false },
                ]
            },
            {
                question: "Which is the longest running Jatra in Nepal?",
                answers: [
                    { text: "Jatra of Red Machhindra Nath", correct: true },
                    { text: "Indra Jatra", correct: false },
                    { text: "Bisket Jatra", correct: false },
                    { text: "Dashain Jatra", correct: false },
                ]
            }
            
        ],
          "COMPUTER": [
                {
                    question: "Who is considered the father of modern computer science?",
                    answers: [
                        { text: "Alan Turing", correct: true },
                        { text: "Tim Berners-Lee", correct: false },
                        { text: "Linus Torvalds", correct: false },
                        { text: "Ada Lovelace", correct: false },
                    ]
                },
                {
                    question: "What is the name of the first electronic general-purpose computer?",
                    answers: [
                        { text: "ENIAC", correct: true },
                        { text: "UNIVAC", correct: false },
                        { text: "Colossus", correct: false },
                        { text: "EDSAC", correct: false },
                    ]
                },
                {
                    question: "Which programming language was created by Bjarne Stroustrup in 1983?",
                    answers: [
                        { text: "Java", correct: false },
                        { text: "C++", correct: true },
                        { text: "Python", correct: false },
                        { text: "Ruby", correct: false },
                    ]
                },
                {
                    question: "What is the function of a compiler in programming?",
                    answers: [
                        { text: "It translates high-level code into machine code", correct: true },
                        { text: "It executes code line by line", correct: false },
                        { text: "It checks for errors in the code", correct: false },
                        { text: "It optimizes code for performance", correct: false },
                    ]
                },
                {
                    question: "What does CSS stand for in web development?",
                    answers: [
                        { text: "Cascading Style Sheets", correct: true },
                        { text: "Computer Style Sheets", correct: false },
                        { text: "Creative Style Sheets", correct: false },
                        { text: "Coded Style Sheets", correct: false },
                    ]
                }
            ] },
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
                question: "Name the hardest substance available on Earth?",
                answers: [
                    { text: "Quartz", correct: false },
                    { text: "Tungsten", correct: false },
                    { text: "Diamond", correct: true },
                    { text: "Steel", correct: false }
                ]
            },
            
            {
                question: "Where is 6 days a week considered?",
                answers: [
                    { "text": "Tibet", "correct": true },
                    { "text": "Nepal", "correct": false },
                    { "text": "India", "correct": false },
                    { "text": "Bhutan", "correct": false }
                ]
            },
            {
                question: "Who discovered the X-rays first?",
                answers: [
                    { text: "Marie Curie", correct: false },
                    { text: "Albert Einstein", correct: false },
                    { text: "Wilhelm Roentgen", correct: true },
                    { text: "Thomas Edison", correct: false }
                ]
            },
            {
                question: "Name a natural satellite of Earth?",
                answers: [
                    { text: "Titan", correct: false },
                    { text: "Luna", correct: true },
                    { text: "Phobos", correct: false },
                    { text: "Deimos", correct: false }
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
                    question: "What is the name of the programming language developed by Microsoft?",
                    answers: [
                        { text: "Java", correct: false },
                        { text: "C#", correct: true },
                        { text: "Swift", correct: false },
                        { text: "Objective-C", correct: false },
                    ]
                },
                {
                    question: "Which company developed the Java programming language?",
                    answers: [
                        { text: "Microsoft", correct: false },
                        { text: "Apple", correct: false },
                        { text: "Sun Microsystems", correct: true },
                        { text: "IBM", correct: false },
                    ]
                },
                {
                    question: "What does API stand for in programming?",
                    answers: [
                        { text: "Application Process Integration", correct: false },
                        { text: "Application Programming Interface", correct: true },
                        { text: "Automated Program Installation", correct: false },
                        { text: "Advanced Program Integration", correct: false },
                    ]
                },
                {
                    question: "Which programming language is often used for artificial intelligence and machine learning?",
                    answers: [
                        { text: "Python", correct: true },
                        { text: "JavaScript", correct: false },
                        { text: "C++", correct: false },
                        { text: "PHP", correct: false },
                    ]
                },
                {
                    question: "What is the primary purpose of version control systems like Git?",
                    answers: [
                        { text: "To track changes in code and collaborate with others", correct: true },
                        { text: "To write and execute automated tests", correct: false },
                        { text: "To deploy applications to servers", correct: false },
                        { text: "To monitor system performance", correct: false },
                    ]
                }
                
            ],
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
        
        // Shuffle the questions array
        questions = shuffleArray(questions);

        if (questions && questions.length > 0) {
            showQuestion();
        } else {
            questionElement.innerHTML = "No questions available for this category and difficulty level.";
        }
    } else {
        questionElement.innerHTML = "Please select a category and difficulty level to start the quiz.";
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    
    let shuffledAnswers = shuffleArray(currentQuestion.answers);

    shuffledAnswers.forEach(answer => {
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
