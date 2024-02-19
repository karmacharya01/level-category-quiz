const questionsByDifficultyAndCategory =
{
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
        "MATH": [
            {
                question: "What is the square root of 25?",
                answers: [
                    { text: "4", correct: false },
                    { text: "5", correct: true },
                    { text: "6", correct: false },
                    { text: "7", correct: false }
                ]
            },
            {
                question: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
                answers: [
                    { text: "10", correct: true },
                    { text: "12", correct: false },
                    { text: "14", correct: false },
                    { text: "16", correct: false }
                ]
            },
            {
                question: "How many sides does a triangle have?",
                answers: [
                    { text: "2", correct: false },
                    { text: "3", correct: true },
                    { text: "4", correct: false },
                    { text: "5", correct: false }
                ]
            },
            {
                question: "What is 3 squared?",
                answers: [
                    { text: "6", correct: false },
                    { text: "8", correct: false },
                    { text: "9", correct: true },
                    { text: "12", correct: false }
                ]
            },
            {
                question: "What is 7 + 3 - 2?",
                answers: [
                    { text: "6", correct: false },
                    { text: "7", correct: false },
                    { text: "8", correct: true },
                    { text: "9", correct: false }
                ]
            },
            {
                question: "What is 4 multiplied by 5?",
                answers: [
                    { text: "16", correct: false },
                    { text: "18", correct: false },
                    { text: "20", correct: true },
                    { text: "22", correct: false }
                ]
            },
            {
                question: "What is the sum of angles in a triangle?",
                answers: [
                    { text: "90 degrees", correct: false },
                    { text: "180 degrees", correct: true },
                    { text: "270 degrees", correct: false },
                    { text: "360 degrees", correct: false }
                ]
            },
            {
                question: "What is the area of a square with side length 5?",
                answers: [
                    { text: "15", correct: false },
                    { text: "20", correct: false },
                    { text: "25", correct: true },
                    { text: "30", correct: false }
                ]
            },
            {
                question: "What is the area of a rectangle with length 6 and width 4?",
                answers: [
                    { text: "16", correct: false },
                    { text: "20", correct: false },
                    { text: "24", correct: true },
                    { text: "28", correct: false }
                ]
            },
            {
                question: "What is 3 to the power of 2?",
                answers: [
                    { text: "6", correct: false },
                    { text: "9", correct: true },
                    { text: "12", correct: false },
                    { text: "15", correct: false }
                ]
            },
            {
                question: "What is the perimeter of a square with side length 4?",
                answers: [
                    { text: "12", correct: true },
                    { text: "16", correct: false },
                    { text: "20", correct: false },
                    { text: "24", correct: false }
                ]
            },
            {
                question: "What is the area of a square with side length 8?",
                answers: [
                    { text: "32", correct: false },
                    { text: "48", correct: false },
                    { text: "64", correct: true },
                    { text: "80", correct: false }
                ]
            },
            {
                question: "What is 7 x 7?",
                answers: [
                    { text: "42", correct: false },
                    { text: "49", correct: true },
                    { text: "56", correct: false },
                    { text: "63", correct: false }
                ]
            },
            {
                question: "What is 15 - 6?",
                answers: [
                    { text: "6", correct: false },
                    { text: "7", correct: false },
                    { text: "8", correct: true },
                    { text: "9", correct: false }
                ]
            },
            {
                question: "What is 4 + 10?",
                answers: [
                    { text: "12", correct: false },
                    { text: "14", correct: true },
                    { text: "16", correct: false },
                    { text: "18", correct: false }
                ]
            },
            {
                question: "What is the perimeter of a rectangle with length 8 and width 6?",
                answers: [
                    { text: "16", correct: false },
                    { text: "26", correct: true },
                    { text: "36", correct: false },
                    { text: "46", correct: false }
                ]
            },
            {
                question: "What is 3 to the power of 3?",
                answers: [
                    { text: "6", correct: false },
                    { text: "9", correct: false },
                    { text: "12", correct: false },
                    { text: "27", correct: true }
                ]
            },
            {
                question: "What is 25 divided by 5?",
                answers: [
                    { text: "2", correct: false },
                    { text: "3", correct: false },
                    { text: "4", correct: false },
                    { text: "5", correct: true }
                ]
            },
            {
                question: "What is 4 to the power of 3?",
                answers: [
                    { text: "12", correct: false },
                    { text: "16", correct: false },
                    { text: "64", correct: true },
                    { text: "81", correct: false }
                ]
            },
            {
                question: "What is the area of a rectangle with length 7 and width 5?",
                answers: [
                    { text: "30", correct: false },
                    { text: "32", correct: false },
                    { text: "35", correct: true },
                    { text: "38", correct: false }
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
            },
            {
                question: "What sport is played on a diamond-shaped field?",
                answers: [
                    { text: "Football", correct: false },
                    { text: "Baseball", correct: true },
                    { text: "Basketball", correct: false },
                    { text: "Soccer", correct: false }
                ]
            },
            {
                question: "In basketball, how many points is a free throw worth?",
                answers: [
                    { text: "1 point", correct: true },
                    { text: "2 points", correct: false },
                    { text: "3 points", correct: false },
                    { text: "4 points", correct: false }
                ]
            },
            {
                question: "Who is known as 'The Greatest' in boxing?",
                answers: [
                    { text: "Muhammad Ali", correct: true },
                    { text: "Mike Tyson", correct: false },
                    { text: "Floyd Mayweather Jr.", correct: false },
                    { text: "George Foreman", correct: false }
                ]
            },
            {
                question: "What sport is played at Wimbledon?",
                answers: [
                    { text: "Tennis", correct: true },
                    { text: "Golf", correct: false },
                    { text: "Cricket", correct: false },
                    { text: "Badminton", correct: false }
                ]
            },
            {
                question: "What do you call it when a player scores three times in hockey?",
                answers: [
                    { text: "Hat-trick", correct: true },
                    { text: "Triple score", correct: false },
                    { text: "Three-peat", correct: false },
                    { text: "Trifecta", correct: false }
                ]
            },
            {
                question: "Who won the FIFA World Cup in 2018?",
                answers: [
                    { text: "Brazil", correct: false },
                    { text: "Argentina", correct: false },
                    { text: "France", correct: true },
                    { text: "Germany", correct: false }
                ]
            },
            {
                question: "What sport is associated with the term 'birdie'?",
                answers: [
                    { text: "Golf", correct: true },
                    { text: "Tennis", correct: false },
                    { text: "Badminton", correct: false },
                    { text: "Cricket", correct: false }
                ]
            },
            {
                question: "How many players are on a soccer team?",
                answers: [
                    { text: "11", correct: true },
                    { text: "10", correct: false },
                    { text: "9", correct: false },
                    { text: "12", correct: false }
                ]
            },
            {
                question: "What is the highest possible score in a single frame of bowling?",
                answers: [
                    { text: "30", correct: true },
                    { text: "20", correct: false },
                    { text: "25", correct: false },
                    { text: "15", correct: false }
                ]
            },
            {
                question: "In golf, what is a 'bogey'?",
                answers: [
                    { text: "One under par", correct: false },
                    { text: "One over par", correct: true },
                    { text: "Two under par", correct: false },
                    { text: "Two over par", correct: false }
                ]
            },
            {
                question: "Who is the all-time leading scorer in NBA history?",
                answers: [
                    { text: "LeBron James", correct: false },
                    { text: "Kareem Abdul-Jabbar", correct: true },
                    { text: "Michael Jordan", correct: false },
                    { text: "Kobe Bryant", correct: false }
                ]
            },
            {
                question: "What is the most popular sport in Brazil?",
                answers: [
                    { text: "Soccer", correct: true },
                    { text: "Basketball", correct: false },
                    { text: "Volleyball", correct: false },
                    { text: "Rugby", correct: false }
                ]
            },
            {
                question: "In tennis, what is it called when a player wins a point without the opponent touching the ball?",
                answers: [
                    { text: "Ace", correct: true },
                    { text: "Smash", correct: false },
                    { text: "Drop shot", correct: false },
                    { text: "Slice", correct: false }
                ]
            },
            {
                question: "What does NFL stand for?",
                answers: [
                    { text: "National Football League", correct: true },
                    { text: "National Fencing League", correct: false },
                    { text: "National Frisbee League", correct: false },
                    { text: "National Figure Skating League", correct: false }
                ]
            },
            {
                question: "Which sport is played at the Super Bowl?",
                answers: [
                    { text: "Football", correct: true },
                    { text: "Basketball", correct: false },
                    { text: "Baseball", correct: false },
                    { text: "Hockey", correct: false }
                ]
            },
            {
                question: "Who holds the record for the most Olympic gold medals?",
                answers: [
                    { text: "Usain Bolt", correct: false },
                    { text: "Michael Phelps", correct: true },
                    { text: "Serena Williams", correct: false },
                    { text: "Lionel Messi", correct: false }
                ]
            },
            {
                question: "What sport is associated with Wimbledon?",
                answers: [
                    { text: "Tennis", correct: true },
                    { text: "Golf", correct: false },
                    { text: "Cricket", correct: false },
                    { text: "Soccer", correct: false }
                ]
            },
            {
                question: "What is the main objective in rugby?",
                answers: [
                    { text: "Score touchdowns", correct: false },
                    { text: "Hit home runs", correct: false },
                    { text: "Score tries", correct: true },
                    { text: "Score goals", correct: false }
                ]
            }



        ],
        "GEOGRAPHY": [
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
            },
            {
                question: "What is the capital of Nepal?",
                answers: [
                    { text: "Kathmandu", correct: true },
                    { text: "Pokhara", correct: false },
                    { text: "Biratnagar", correct: false },
                    { text: "Lalitpur", correct: false }
                ]
            },
            {
                question: "Which mountain range is Nepal known for?",
                answers: [
                    { text: "Andes", correct: false },
                    { text: "Himalayas", correct: true },
                    { text: "Rocky Mountains", correct: false },
                    { text: "Alps", correct: false }
                ]
            },
            {
                question: "What is the highest mountain in Nepal?",
                answers: [
                    { text: "Mount Everest", correct: true },
                    { text: "Kangchenjunga", correct: false },
                    { text: "Lhotse", correct: false },
                    { text: "Makalu", correct: false }
                ]
            },
            {
                question: "Which river is the longest in Nepal?",
                answers: [
                    { text: "Karnali River", correct: true },
                    { text: "Ganges River", correct: false },
                    { text: "Indus River", correct: false },
                    { text: "Brahmaputra River", correct: false }
                ]
            },
            {
                question: "What is the national flower of Nepal?",
                answers: [
                    { text: "Rhododendron", correct: true },
                    { text: "Lotus", correct: false },
                    { text: "Orchid", correct: false },
                    { text: "Sunflower", correct: false }
                ]
            },
            {
                question: "Which is the largest lake in Nepal?",
                answers: [
                    { text: "Rara Lake", correct: true },
                    { text: "Phewa Lake", correct: false },
                    { text: "Begnas Lake", correct: false },
                    { text: "Gosaikunda Lake", correct: false }
                ]
            },
            {
                question: "What is the most popular trekking destination in Nepal?",
                answers: [
                    { text: "Everest Base Camp", correct: true },
                    { text: "Annapurna Circuit", correct: false },
                    { text: "Langtang Valley", correct: false },
                    { text: "Upper Mustang", correct: false }
                ]
            },
            {
                question: "Which animal is the national symbol of Nepal?",
                answers: [
                    { text: "Cow", correct: false },
                    { text: "Elephant", correct: false },
                    { text: "Rhinoceros", correct: true },
                    { text: "Tiger", correct: false }
                ]
            },
            {
                question: "What is the traditional dress of Nepali men called?",
                answers: [
                    { text: "Sari", correct: false },
                    { text: "Daura Suruwal", correct: true },
                    { text: "Kimono", correct: false },
                    { text: "Hanbok", correct: false }
                ]
            },
            {
                question: "Which festival is celebrated as the 'Festival of Lights' in Nepal?",
                answers: [
                    { text: "Dashain", correct: false },
                    { text: "Tihar", correct: true },
                    { text: "Holi", correct: false },
                    { text: "Buddha Jayanti", correct: false }
                ]
            },
            {
                question: "Which is the busiest airport in Nepal?",
                answers: [
                    { text: "Tribhuvan International Airport", correct: true },
                    { text: "Pokhara International Airport", correct: false },
                    { text: "Bharatpur Airport", correct: false },
                    { text: "Janakpur Airport", correct: false }
                ]
            },
            {
                question: "What is the famous square in Kathmandu known for its temples?",
                answers: [
                    { text: "Durbar Square", correct: true },
                    { text: "Bhaktapur Square", correct: false },
                    { text: "Patan Square", correct: false },
                    { text: "Freak Street", correct: false }
                ]
            },
            {
                question: "What is the official language of Nepal?",
                answers: [
                    { text: "Nepali", correct: true },
                    { text: "Hindi", correct: false },
                    { text: "Bengali", correct: false },
                    { text: "Urdu", correct: false }
                ]
            },
            {
                question: "Which is the holiest Hindu temple in Nepal?",
                answers: [
                    { text: "Swayambhunath", correct: false },
                    { text: "Pashupatinath", correct: true },
                    { text: "Boudhanath", correct: false },
                    { text: "Changu Narayan", correct: false }
                ]
            },
            {
                question: "What is the name of the traditional Newari feast in Nepal?",
                answers: [
                    { text: "Dashain", correct: false },
                    { text: "Bisket Jatra", correct: false },
                    { text: "Indra Jatra", correct: false },
                    { text: "Yomari Punhi", correct: true }
                ]
            },
            {
                question: "Which river forms the border between Nepal and India?",
                answers: [
                    { text: "Ganges", correct: false },
                    { text: "Brahmaputra", correct: false },
                    { text: "Koshi", correct: true },
                    { text: "Yamuna", correct: false }
                ]
            },
            {
                question: "Which is the largest city in Nepal by population?",
                answers: [
                    { text: "Pokhara", correct: false },
                    { text: "Biratnagar", correct: false },
                    { text: "Kathmandu", correct: true },
                    { text: "Bhaktapur", correct: false }
                ]
            },
            {
                question: "What is the national sport of Nepal?",
                answers: [
                    { text: "Cricket", correct: false },
                    { text: "Soccer", correct: false },
                    { text: "Volleyball", correct: false },
                    { text: "Volleyball", correct: true }
                ]
            },
            {
                question: "Which mountain in Nepal is known as the 'Matterhorn of Nepal'?",
                answers: [
                    { text: "Kangchenjunga", correct: false },
                    { text: "Makalu", correct: false },
                    { text: "Dhaulagiri", correct: true },
                    { text: "Manaslu", correct: false }
                ]
            },
            {
                question: "What is the name of the traditional Nepali bread?",
                answers: [
                    { text: "Paratha", correct: false },
                    { text: "Naan", correct: false },
                    { text: "Roti", correct: false },
                    { text: "Sel Roti", correct: true }
                ]
            }



        ],

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
        ],
        "MATH": [
            {
                question: "What is the derivative of x^2 with respect to x?",
                answers: [
                    { text: "2x", correct: true },
                    { text: "x", correct: false },
                    { text: "2", correct: false },
                    { text: "x^2", correct: false }
                ]
            },
            {
                question: "What is the derivative of sin(x) with respect to x?",
                answers: [
                    { text: "cos(x)", correct: true },
                    { text: "-sin(x)", correct: false },
                    { text: "tan(x)", correct: false },
                    { text: "1/cos(x)", correct: false }
                ]
            },
            {
                question: "What is the derivative of cos(x) with respect to x?",
                answers: [
                    { text: "-sin(x)", correct: true },
                    { text: "cos(x)", correct: false },
                    { text: "tan(x)", correct: false },
                    { text: "1/sin(x)", correct: false }
                ]
            },
            {
                question: "What is the coefficient of x in the expansion of (x + 1)^6?",
                answers: [
                    { text: "6", correct: true },
                    { text: "5", correct: false },
                    { text: "12", correct: false },
                    { text: "1", correct: false }
                ]
            },
            {
                question: "What is the constant term in the expansion of (2x - 1)^4?",
                answers: [
                    { text: "1", correct: true },
                    { text: "-16", correct: false },
                    { text: "16", correct: false },
                    { text: "-1", correct: false }
                ]
            },
            {
                question: "In how many ways can 5 books be arranged on a shelf?",
                answers: [
                    { text: "120", correct: true },
                    { text: "25", correct: false },
                    { text: "720", correct: false },
                    { text: "10", correct: false }
                ]
            },
            {
                question: "How many different ways can the letters of the word 'MISSISSIPPI' be arranged?",
                answers: [
                    { text: "34650", correct: true },
                    { text: "2520", correct: false },
                    { text: "5040", correct: false },
                    { text: "1680", correct: false }
                ]
            },
            {
                question: "In how many ways can 3 people be seated in 5 chairs?",
                answers: [
                    { text: "60", correct: true },
                    { text: "20", correct: false },
                    { text: "15", correct: false },
                    { text: "30", correct: false }
                ]
            },
            {
                question: "How many different committees of 2 people can be formed from a group of 5 people?",
                answers: [
                    { text: "10", correct: true },
                    { text: "5", correct: false },
                    { text: "8", correct: false },
                    { text: "15", correct: false }
                ]
            },
            {
                question: "In how many ways can 4 students be chosen from a group of 10 students to form a study group?",
                answers: [
                    { text: "210", correct: true },
                    { text: "45", correct: false },
                    { text: "120", correct: false },
                    { text: "252", correct: false }
                ]
            }, {
                question: "What is the determinant of the following 3x3 matrix? [[2, 1, 5], [3, 4, 7], [1, 0, 8]]",
                answers: [
                    { text: "-15", correct: true },
                    { text: "15", correct: false },
                    { text: "-18", correct: false },
                    { text: "18", correct: false }
                ]
            },
            {
                question: "What is the value of sin(π/2)?",
                answers: [
                    { text: "1", correct: true },
                    { text: "0", correct: false },
                    { text: "-1", correct: false },
                    { text: "π/2", correct: false }
                ]
            },
            {
                question: "What is the value of cos(0)?",
                answers: [
                    { text: "1", correct: true },
                    { text: "0", correct: false },
                    { text: "-1", correct: false },
                    { text: "π/2", correct: false }
                ]
            },
            {
                question: "What is the value of tan(π/4)?",
                answers: [
                    { text: "1", correct: true },
                    { text: "0", correct: false },
                    { text: "π/4", correct: false },
                    { text: "2", correct: false }
                ]
            },
            {
                question: "What is the value of cot(π/3)?",
                answers: [
                    { text: "√3", correct: true },
                    { text: "0", correct: false },
                    { text: "1", correct: false },
                    { text: "2", correct: false }
                ]
            },
            {
                question: "What is the value of sec(0)?",
                answers: [
                    { text: "1", correct: true },
                    { text: "0", correct: false },
                    { text: "-1", correct: false },
                    { text: "π/2", correct: false }
                ]
            },
            {
                question: "What is the probability of getting a head when flipping a fair coin?",
                answers: [
                    { text: "1/2", correct: true },
                    { text: "1/4", correct: false },
                    { text: "3/4", correct: false },
                    { text: "1/3", correct: false }
                ]
            },
            {
                question: "If you roll a fair six-sided die, what is the probability of rolling a 3?",
                answers: [
                    { text: "1/6", correct: true },
                    { text: "1/3", correct: false },
                    { text: "1/2", correct: false },
                    { text: "2/3", correct: false }
                ]
            },
            {
                question: "You draw a card from a standard deck of 52 cards. What is the probability of drawing a red card?",
                answers: [
                    { text: "1/2", correct: true },
                    { text: "1/4", correct: false },
                    { text: "1/3", correct: false },
                    { text: "2/3", correct: false }
                ]
            },
            {
                question: "If you flip a fair coin three times, what is the probability of getting exactly two heads?",
                answers: [
                    { text: "3/8", correct: true },
                    { text: "1/8", correct: false },
                    { text: "1/4", correct: false },
                    { text: "1/2", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 5x^4?",
                answers: [
                    { text: "x^5 + C", correct: true },
                    { text: "x^4/5 + C", correct: false },
                    { text: "5x^5 + C", correct: false },
                    { text: "20x^3 + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(1+e^x)?",
                answers: [
                    { text: "ln|1+e^x| + C", correct: true },
                    { text: "ln(1+e^x) + C", correct: false },
                    { text: "ln(e^x + 1) + C", correct: false },
                    { text: "1/ln(1+e^x) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 2sin(x)cos(x)?",
                answers: [
                    { text: "sin^2(x) + C", correct: true },
                    { text: "cos^2(x) + C", correct: false },
                    { text: "sin(2x) + C", correct: false },
                    { text: "-cos(2x) + C", correct: false }
                ]
            },

        ],
        "GEOGRAPHY": [
            {
                question: "What is the highest mountain in Nepal?",
                answers: [
                    { text: "Mount Kanchenjunga", correct: false },
                    { text: "Mount Everest", correct: true },
                    { text: "Mount Makalu", correct: false },
                    { text: "Mount Lhotse", correct: false }
                ]
            },
            {
                question: "Which river is the longest river in Nepal?",
                answers: [
                    { text: "Karnali River", correct: false },
                    { text: "Kosi River", correct: true },
                    { text: "Gandaki River", correct: false },
                    { text: "Trishuli River", correct: false }
                ]
            },
            {
                question: "What is the capital city of Nepal?",
                answers: [
                    { text: "Pokhara", correct: false },
                    { text: "Biratnagar", correct: false },
                    { text: "Kathmandu", correct: true },
                    { text: "Lalitpur", correct: false }
                ]
            },
            {
                question: "Which lake is the largest lake in Nepal?",
                answers: [
                    { text: "Rara Lake", correct: true },
                    { text: "Phewa Lake", correct: false },
                    { text: "Begnas Lake", correct: false },
                    { text: "Gosaikunda Lake", correct: false }
                ]
            },
            {
                question: "What is the major religion in Nepal?",
                answers: [
                    { text: "Christianity", correct: false },
                    { text: "Islam", correct: false },
                    { text: "Buddhism", correct: false },
                    { text: "Hinduism", correct: true }
                ]
            },
            {
                question: "Which national park is located in the Terai region of Nepal?",
                answers: [
                    { text: "Sagarmatha National Park", correct: false },
                    { text: "Langtang National Park", correct: false },
                    { text: "Chitwan National Park", correct: true },
                    { text: "Khaptad National Park", correct: false }
                ]
            },
            {
                question: "What is the highest peak in the Annapurna mountain range?",
                answers: [
                    { text: "Annapurna I", correct: true },
                    { text: "Annapurna South", correct: false },
                    { text: "Machapuchare", correct: false },
                    { text: "Gangapurna", correct: false }
                ]
            },
            {
                question: "Which is the largest city in Nepal by population?",
                answers: [
                    { text: "Pokhara", correct: false },
                    { text: "Biratnagar", correct: true },
                    { text: "Dharan", correct: false },
                    { text: "Bharatpur", correct: false }
                ]
            },
            {
                question: "What is the major economic activity in the Mustang district of Nepal?",
                answers: [
                    { text: "Farming", correct: false },
                    { text: "Tourism", correct: true },
                    { text: "Mining", correct: false },
                    { text: "Fishing", correct: false }
                ]
            },
            {
                question: "Which mountain peak is known as the 'Fish Tail'?",
                answers: [
                    { text: "Annapurna I", correct: false },
                    { text: "Dhaulagiri", correct: false },
                    { text: "Machapuchare", correct: true },
                    { text: "Gangapurna", correct: false }
                ]
            },
            [
                {
                    question: "Which is the highest lake in Nepal?",
                    answers: [
                        { text: "Rara Lake", correct: false },
                        { text: "Tilicho Lake", correct: true },
                        { text: "Phewa Lake", correct: false },
                        { text: "Shey Phoksundo Lake", correct: false }
                    ]
                },
                {
                    question: "What is the name of the longest glacier in Nepal?",
                    answers: [
                        { text: "Khumbu Glacier", correct: false },
                        { text: "Ngozumpa Glacier", correct: true },
                        { text: "Imja Glacier", correct: false },
                        { text: "Langtang Glacier", correct: false }
                    ]
                },
                {
                    question: "Which district is home to the famous Annapurna Circuit trek in Nepal?",
                    answers: [
                        { text: "Mustang", correct: false },
                        { text: "Manang", correct: true },
                        { text: "Dolpa", correct: false },
                        { text: "Gorkha", correct: false }
                    ]
                },
                {
                    question: "What is the name of the deepest lake in Nepal?",
                    answers: [
                        { text: "Rara Lake", correct: false },
                        { text: "Gosaikunda Lake", correct: false },
                        { text: "Phoksundo Lake", correct: true },
                        { text: "Shey Phoksundo Lake", correct: false }
                    ]
                },
                {
                    question: "Which is the largest glacier in Nepal?",
                    answers: [
                        { text: "Khumbu Glacier", correct: true },
                        { text: "Ngozumpa Glacier", correct: false },
                        { text: "Imja Glacier", correct: false },
                        { text: "Langtang Glacier", correct: false }
                    ]
                },
                {
                    question: "What is the name of the highest waterfall in Nepal?",
                    answers: [
                        { text: "Devis Falls", correct: false },
                        { text: "Hyatung Falls", correct: true },
                        { text: "Rupa Falls", correct: false },
                        { text: "Bhote Koshi Falls", correct: false }
                    ]
                },
                {
                    question: "Which mountain range runs through the northern border of Nepal?",
                    answers: [
                        { text: "Andes", correct: false },
                        { text: "Rocky Mountains", correct: false },
                        { text: "Himalayas", correct: true },
                        { text: "Alps", correct: false }
                    ]
                },
                {
                    question: "Which is the highest waterfall in Nepal?",
                    answers: [
                        { text: "Hyatung Falls", correct: false },
                        { text: "Bhote Koshi Falls", correct: false },
                        { text: "Devis Falls", correct: false },
                        { text: "Rupa Falls", correct: true }
                    ]
                },
                {
                    question: "What is the name of the longest river in Nepal?",
                    answers: [
                        { text: "Karnali River", correct: false },
                        { text: "Kosi River", correct: true },
                        { text: "Gandaki River", correct: false },
                        { text: "Trishuli River", correct: false }
                    ]
                },
                {
                    question: "Which is the highest waterfall in Nepal?",
                    answers: [
                        { text: "Hyatung Falls", correct: false },
                        { text: "Bhote Koshi Falls", correct: false },
                        { text: "Devis Falls", correct: false },
                        { text: "Rupa Falls", correct: true }
                    ]
                }
            ]




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
            }, {
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
        "COMPUTER": [{
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
        "MATH": [
            {
                question: "What is the derivative of e^x with respect to x?",
                answers: [
                    { text: "e^x", correct: true },
                    { text: "x^2", correct: false },
                    { text: "2x", correct: false },
                    { text: "1/e^x", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+1)?",
                answers: [
                    { text: "arctan(x) + C", correct: true },
                    { text: "arcsin(x) + C", correct: false },
                    { text: "arccos(x) + C", correct: false },
                    { text: "arcsec(x) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+4)?",
                answers: [
                    { text: "arctan(x/2) + C", correct: true },
                    { text: "arcsin(x/2) + C", correct: false },
                    { text: "arccos(x/2) + C", correct: false },
                    { text: "arcsec(x/2) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+9)?",
                answers: [
                    { text: "arctan(x/3) + C", correct: true },
                    { text: "arcsin(x/3) + C", correct: false },
                    { text: "arccos(x/3) + C", correct: false },
                    { text: "arcsec(x/3) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+16)?",
                answers: [
                    { text: "arctan(x/4) + C", correct: true },
                    { text: "arcsin(x/4) + C", correct: false },
                    { text: "arccos(x/4) + C", correct: false },
                    { text: "arcsec(x/4) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+25)?",
                answers: [
                    { text: "arctan(x/5) + C", correct: true },
                    { text: "arcsin(x/5) + C", correct: false },
                    { text: "arccos(x/5) + C", correct: false },
                    { text: "arcsec(x/5) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+36)?",
                answers: [
                    { text: "arctan(x/6) + C", correct: true },
                    { text: "arcsin(x/6) + C", correct: false },
                    { text: "arccos(x/6) + C", correct: false },
                    { text: "arcsec(x/6) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+49)?",
                answers: [
                    { text: "arctan(x/7) + C", correct: true },
                    { text: "arcsin(x/7) + C", correct: false },
                    { text: "arccos(x/7) + C", correct: false },
                    { text: "arcsec(x/7) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+64)?",
                answers: [
                    { text: "arctan(x/8) + C", correct: true },
                    { text: "arcsin(x/8) + C", correct: false },
                    { text: "arccos(x/8) + C", correct: false },
                    { text: "arcsec(x/8) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+81)?",
                answers: [
                    { text: "arctan(x/9) + C", correct: true },
                    { text: "arcsin(x/9) + C", correct: false },
                    { text: "arccos(x/9) + C", correct: false },
                    { text: "arcsec(x/9) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+100)?",
                answers: [
                    { text: "arctan(x/10) + C", correct: true },
                    { text: "arcsin(x/10) + C", correct: false },
                    { text: "arccos(x/10) + C", correct: false },
                    { text: "arcsec(x/10) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+121)?",
                answers: [
                    { text: "arctan(x/11) + C", correct: true },
                    { text: "arcsin(x/11) + C", correct: false },
                    { text: "arccos(x/11) + C", correct: false },
                    { text: "arcsec(x/11) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+144)?",
                answers: [
                    { text: "arctan(x/12) + C", correct: true },
                    { text: "arcsin(x/12) + C", correct: false },
                    { text: "arccos(x/12) + C", correct: false },
                    { text: "arcsec(x/12) + C", correct: false }
                ]
            },
            {
                question: "What is the antiderivative of 1/(x^2+169)?",
                answers: [
                    { text: "arctan(x/13) + C", correct: true },
                    { text: "arcsin(x/13) + C", correct: false },
                    { text: "arccos(x/13) + C", correct: false },
                    { text: "arcsec(x/13) + C", correct: false }
                ]
            }
        ],
        "GEOGRAPHY": [

            {
                question: "Which is the longest continental mountain range in the world?",
                answers: [
                    { text: "Rocky Mountains", correct: false },
                    { text: "Andes Mountains", correct: true },
                    { text: "Himalayas", correct: false },
                    { text: "Alps", correct: false }
                ]
            },
            {
                question: "What is the capital city of Suriname?",
                answers: [
                    { text: "Paramaribo", correct: true },
                    { text: "Georgetown", correct: false },
                    { text: "Port of Spain", correct: false },
                    { text: "Kingston", correct: false }
                ]
            },
            {
                question: "Which river forms the border between the United States and Mexico?",
                answers: [
                    { text: "Mississippi River", correct: false },
                    { text: "Rio Grande", correct: true },
                    { text: "Colorado River", correct: false },
                    { text: "Missouri River", correct: false }
                ]
            },
            {
                question: "Which is the largest desert in the world?",
                answers: [
                    { text: "Gobi Desert", correct: false },
                    { text: "Sahara Desert", correct: true },
                    { text: "Arabian Desert", correct: false },
                    { text: "Kalahari Desert", correct: false }
                ]
            },
            {
                question: "What is the capital city of Mongolia?",
                answers: [
                    { text: "Ulaanbaatar", correct: true },
                    { text: "Astana", correct: false },
                    { text: "Almaty", correct: false },
                    { text: "Tashkent", correct: false }
                ]
            },
            {
                question: "Which is the longest river in Asia?",
                answers: [
                    { text: "Yangtze River", correct: false },
                    { text: "Yellow River", correct: false },
                    { text: "Ganges River", correct: false },
                    { text: "Yangtze River", correct: true }
                ]
            },
            {
                question: "What is the highest mountain peak in South America?",
                answers: [
                    { text: "Mount Aconcagua", correct: true },
                    { text: "Mount Chimborazo", correct: false },
                    { text: "Mount Huascarán", correct: false },
                    { text: "Mount Illimani", correct: false }
                ]
            },
            {
                question: "Which ocean is the largest and deepest ocean in the world?",
                answers: [
                    { text: "Atlantic Ocean", correct: false },
                    { text: "Arctic Ocean", correct: false },
                    { text: "Indian Ocean", correct: false },
                    { text: "Pacific Ocean", correct: true }
                ]
            },
            {
                question: "What is the largest island in the Mediterranean Sea?",
                answers: [
                    { text: "Cyprus", correct: false },
                    { text: "Crete", correct: true },
                    { text: "Sicily", correct: false },
                    { text: "Corsica", correct: false }
                ]
            },
            {
                question: "Which country is known as the 'Land of a Thousand Lakes'?",
                answers: [
                    { text: "Canada", correct: false },
                    { text: "Sweden", correct: false },
                    { text: "Finland", correct: true },
                    { text: "Norway", correct: false }
                ]
            },
            {
                question: "What is the world's largest hot desert after Antarctica?",
                answers: [
                    { text: "Sahara Desert", correct: false },
                    { text: "Arabian Desert", correct: false },
                    { text: "Gobi Desert", correct: true },
                    { text: "Kalahari Desert", correct: false }
                ]
            },
            {
                question: "Which is the largest archipelago in the world?",
                answers: [
                    { text: "Philippines", correct: false },
                    { text: "Indonesia", correct: true },
                    { text: "Japan", correct: false },
                    { text: "Maldives", correct: false }
                ]
            },
            {
                question: "What is the capital city of Sudan?",
                answers: [
                    { text: "Khartoum", correct: true },
                    { text: "Cairo", correct: false },
                    { text: "Tripoli", correct: false },
                    { text: "Kigali", correct: false }
                ]
            },
            {
                question: "Which is the largest river by discharge volume in the world?",
                answers: [
                    { text: "Amazon River", correct: true },
                    { text: "Nile River", correct: false },
                    { text: "Yangtze River", correct: false },
                    { text: "Mississippi River", correct: false }
                ]
            },
            {
                question: "What is the world's largest island nation?",
                answers: [
                    { text: "Indonesia", correct: true },
                    { text: "Madagascar", correct: false },
                    { text: "Philippines", correct: false },
                    { text: "Japan", correct: false }
                ]
            },
            {
                question: "Which is the highest waterfall in the world?",
                answers: [
                    { text: "Angel Falls", correct: true },
                    { text: "Victoria Falls", correct: false },
                    { text: "Niagara Falls", correct: false },
                    { text: "Iguazu Falls", correct: false }
                ]
            },
            {
                question: "What is the capital city of Uzbekistan?",
                answers: [
                    { text: "Tashkent", correct: true },
                    { text: "Ashgabat", correct: false },
                    { text: "Bishkek", correct: false },
                    { text: "Astana", correct: false }
                ]
            },
            {
                question: "Which is the largest lake in Africa?",
                answers: [
                    { text: "Lake Victoria", correct: true },
                    { text: "Lake Tanganyika", correct: false },
                    { text: "Lake Malawi", correct: false },
                    { text: "Lake Chad", correct: false }
                ]
            },
            {
                question: "What is the capital city of Bolivia?",
                answers: [
                    { text: "La Paz", correct: false },
                    { text: "Sucre", correct: true },
                    { text: "Quito", correct: false },
                    { text: "Asunción", correct: false }
                ]
            },
            {
                question: "Which is the highest waterfall in Europe?",
                answers: [
                    { text: "Rhine Falls", correct: false },
                    { text: "Krimml Waterfalls", correct: false },
                    { text: "Vøringsfossen", correct: false },
                    { text: "Angel Falls", correct: true }
                ]
            },
            {
                question: "What is the capital city of Kazakhstan?",
                answers: [
                    { text: "Almaty", correct: false },
                    { text: "Tashkent", correct: false },
                    { text: "Nur-Sultan", correct: true },
                    { text: "Dushanbe", correct: false }
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
    }
}


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

restartBtn.addEventListener('click', function () {
    infoBox.style.display = 'none';
    difficultyContainer.style.display = 'block';
});

difficultyContainer.addEventListener('change', function () {
    if (this.value !== 'option') {
        difficultyContainer.style.display = 'none';
        categoryContainer.style.display = 'block';
    }
});

categorySelect.addEventListener('change', function () {
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


        questions = shuffleArray(questions);


        questions = questions.slice(0, 10);

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
