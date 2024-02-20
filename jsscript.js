const questionsByDifficultyAndCategory =
{
    easy: {
        "GENERAL KNOWLEDGE": [
            {
                question: "How many days does it take for the Earth to orbit the Sun?",
                answers: [
                    { text: "365", correct: true },
                    { text: "364", correct: false },
                    { text: "366", correct: false },
                    { text: "360", correct: false }
                ]
            },
            {
                question: "How many stars are on the Chinese flag?",
                answers: [
                    { text: "5", correct: true },
                    { text: "4", correct: false },
                    { text: "6", correct: false },
                    { text: "7", correct: false }
                ]
            },
            {
                question: "What is the only flag that does not have four sides?",
                answers: [
                    { text: "Nepal", correct: true },
                    { text: "Bhutan", correct: false },
                    { text: "Switzerland", correct: false },
                    { text: "Japan", correct: false }
                ]
            },
            {
                question: "What is the capital of Canada?",
                answers: [
                    { text: "Ottawa", correct: true },
                    { text: "Toronto", correct: false },
                    { text: "Montreal", correct: false },
                    { text: "Vancouver", correct: false }
                ]
            }, {
                question: "What planet is closest to the sun?",
                answers: [
                    { text: "Mercury", correct: true },
                    { text: "Venus", correct: false },
                    { text: "Earth", correct: false },
                    { text: "Mars", correct: false }
                ]
            },
            {
                question: "How many hearts does an octopus have?",
                answers: [
                    { text: "3", correct: true },
                    { text: "1", correct: false },
                    { text: "2", correct: false },
                    { text: "4", correct: false }
                ]
            },
            {
                question: "What country has won the most World Cups?",
                answers: [
                    { text: "Brazil", correct: true },
                    { text: "Germany", correct: false },
                    { text: "Italy", correct: false },
                    { text: "Argentina", correct: false }
                ]
            },
            {
                question: "Which planet has the most moons?",
                answers: [
                    { text: "Saturn", correct: true },
                    { text: "Jupiter", correct: false },
                    { text: "Neptune", correct: false },
                    { text: "Uranus", correct: false }
                ]
            },
            {
                question: "Which planet in the Milky Way is the hottest?",
                answers: [
                    { text: "Venus", correct: true },
                    { text: "Mercury", correct: false },
                    { text: "Mars", correct: false },
                    { text: "Jupiter", correct: false }
                ]
            },
            {
                question: "How many elements are in the periodic table?",
                answers: [
                    { text: "118", correct: true },
                    { text: "92", correct: false },
                    { text: "102", correct: false },
                    { text: "130", correct: false }
                ]
            },
            {
                question: "What country has the highest life expectancy?",
                answers: [
                    { text: "Hong Kong", correct: true },
                    { text: "Japan", correct: false },
                    { text: "Switzerland", correct: false },
                    { text: "Australia", correct: false }
                ]
            },
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
                    { text: "Jupiter", correct: false },
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
                    { text: "Mississippi", correct: false },
                ]
            },
            {
                question: "Which is the largest country in the world by population?",
                answers: [
                    { text: "India", correct: false },
                    { text: "China", correct: true },
                    { text: "United States", correct: false },
                    { text: "Indonesia", correct: false },
                ]
            }, {
                question: "What is the largest desert in the world?",
                answers: [
                    { text: "The Sahara Desert", correct: true },
                    { text: "The Gobi Desert", correct: false },
                    { text: "The Arabian Desert", correct: false },
                    { text: "The Kalahari Desert", correct: false },
                ]
            },
            {
                question: "Which country is both an island and a continent?",
                answers: [
                    { text: "Australia", correct: true },
                    { text: "Greenland", correct: false },
                    { text: "Madagascar", correct: false },
                    { text: "New Zealand", correct: false }
                ]
            },
            {
                question: "Which ocean is the deepest on Earth?",
                answers: [
                    { text: "The Pacific Ocean", correct: true },
                    { text: "The Atlantic Ocean", correct: false },
                    { text: "The Indian Ocean", correct: false },
                    { text: "The Southern Ocean", correct: false }
                ]
            },
            {
                question: "What is the process by which plants make their own food using sunlight?",
                answers: [
                    { text: "Photosynthesis", correct: true },
                    { text: "Respiration", correct: false },
                    { text: "Transpiration", correct: false },
                    { text: "Germination", correct: false }
                ]
            },
            {
                question: "What is the largest planet in our solar system?",
                answers: [
                    { text: "Jupiter", correct: true },
                    { text: "Saturn", correct: false },
                    { text: "Neptune", correct: false },
                    { text: "Uranus", correct: false }
                ]
            },
            {
                question: "What is the Earth’s primary source of energy?",
                answers: [
                    { text: "The Sun", correct: true },
                    { text: "Geothermal Energy", correct: false },
                    { text: "Fossil Fuels", correct: false },
                    { text: "Wind Energy", correct: false }
                ]
            },
            {
                question: "What is the name of the global pandemic that began in late 2019 and significantly impacted the world?",
                answers: [
                    { text: "COVID-19", correct: true },
                    { text: "H1N1", correct: false },
                    { text: "Ebola", correct: false },
                    { text: "Zika", correct: false }
                ]
            },
            {
                question: "What is the currency of Japan?",
                answers: [
                    { text: "Japanese yen (¥)", correct: true },
                    { text: "Chinese yuan (¥)", correct: false },
                    { text: "South Korean won (₩)", correct: false },
                    { text: "Taiwanese dollar (NT$)", correct: false }
                ]
            },
            {
                question: "What is the capital city of Nepal?",
                answers: [
                    { text: " Kathmandu", correct: true },
                    { text: " Pokhara", correct: false },
                    { text: " Lalitpur", correct: false },
                    { text: "Bhaktapur", correct: false }
                ]
            },
            {
                question: "Which mountain in Nepal is the highest in the world?",
                answers: [
                    { text: " Mount Kanchenjunga", correct: false },
                    { text: " Mount Everest", correct: true },
                    { text: " Mount Makalu", correct: false },
                    { text: " Mount Lhotse", correct: false }
                ]
            },
            {
                question: "What is the official language of Nepal?",
                answers: [
                    { text: " Nepali", correct: true },
                    { text: " Hindi", correct: false },
                    { text: " English", correct: false },
                    { text: " Urdu", correct: false }
                ]
            },
            {
                question: "Which river is the longest river in Nepal?",
                answers: [
                    { text: " Koshi River", correct: false },
                    { text: " Gandaki River", correct: false },
                    { text: " Karnali River", correct: true },
                    { text: " Bagmati River", correct: false }
                ]
            },
            {
                question: "What is the currency of Nepal?",
                answers: [
                    { text: " Rupee", correct: true },
                    { text: " Taka", correct: false },
                    { text: " Rupiah", correct: false },
                    { text: " Tugrik", correct: false }
                ]
            },
            {
                question: "Which festival is known as the festival of lights in Nepal?",
                answers: [
                    { text: " Dashain", correct: false },
                    { text: " Tihar", correct: true },
                    { text: " Holi", correct: false },
                    { text: " Diwali", correct: false }
                ]
            },
            {
                question: "Which animal is the national symbol of Nepal?",
                answers: [
                    { text: " Cow", correct: false },
                    { text: " Rhinoceros", correct: false },
                    { text: " Tiger", correct: false },
                    { text: " Cow", correct: true }
                ]
            },
            {
                question: "What is the largest city by population in Nepal, after Kathmandu?",
                answers: [
                    { text: " Pokhara", correct: false },
                    { text: " Biratnagar", correct: true },
                    { text: " Lalitpur", correct: false },
                    { text: " Bharatpur", correct: false }
                ]
            },
            {
                question: "Which mountain range separates Nepal from Tibet?",
                answers: [
                    { text: " Karakoram Range", correct: false },
                    { text: " Himalayas", correct: true },
                    { text: " Aravalli Range", correct: false },
                    { text: " Pamir Mountains", correct: false }
                ]
            },
            {
                question: "What is the name of the traditional Nepali dress worn by men?",
                answers: [
                    { text: " Sari", correct: false },
                    { text: " Daura Suruwal", correct: true },
                    { text: " Lehenga Choli", correct: false },
                    { text: " Sherwani", correct: false }
                ]
            },
            {
                question: "Which former prince of Nepal became the King in 2001?",
                answers: [
                    { text: " Dipendra", correct: false },
                    { text: " Gyanendra", correct: true },
                    { text: " Birendra", correct: false },
                    { text: " Mahendra", correct: false }
                ]
            },
            {
                question: "What is the name of the famous temple in Kathmandu that is dedicated to Lord Shiva?",
                answers: [
                    { text: " Swayambhunath", correct: false },
                    { text: " Pashupatinath", correct: true },
                    { text: " Boudhanath", correct: false },
                    { text: " Budhanilkantha", correct: false }
                ]
            },
            {
                question: "Which ethnic group is the largest in Nepal?",
                answers: [
                    { text: " Newar", correct: true },
                    { text: " Gurung", correct: false },
                    { text: " Tharu", correct: false },
                    { text: " Sherpa", correct: false }
                ]
            },
            {
                question: "What is the altitude of the Kathmandu Valley?",
                answers: [
                    { text: " Around 1,000 meters", correct: true },
                    { text: " Around 1,500 meters", correct: false },
                    { text: " Around 2,000 meters", correct: false },
                    { text: " Around 2,500 meters", correct: false }
                ]
            },
            {
                question: "Which river is known as the 'River of Gold' in Nepal?",
                answers: [
                    { text: " Karnali River", correct: false },
                    { text: " Seti River", correct: true },
                    { text: " Trishuli River", correct: false },
                    { text: " Dudh Kosi River", correct: false }
                ]
            },
            {
                question: "Which mountain in Nepal is popularly known as the 'Goddess of the Sky'?",
                answers: [
                    { text: " Annapurna", correct: false },
                    { text: " Machapuchare", correct: true },
                    { text: " Manaslu", correct: false },
                    { text: " Dhaulagiri", correct: false }
                ]
            },
            {
                question: "What is the name of the traditional Newari dish made from buffalo meat?",
                answers: [
                    { text: " Sel Roti", correct: false },
                    { text: " Gundruk", correct: false },
                    { text: " Dhido", correct: false },
                    { text: " Yomari", correct: true }
                ]
            }, {

                question: "Which religious festival in Nepal involves the worship of young girls as the living incarnations of the goddess?",
                answers: [
                    { text: " Dashain", correct: false },
                    { text: " Indra Jatra", correct: false },
                    { text: " Kumari Puja", correct: true },
                    { text: " Teej", correct: false }
                ]
            },
            {
                question: "What is the name of the famous trekking route in Nepal that goes around the Annapurna Massif?",
                answers: [
                    { text: " Everest Base Camp Trek", correct: false },
                    { text: " Langtang Valley Trek", correct: false },
                    { text: " Annapurna Circuit Trek", correct: true },
                    { text: " Manaslu Circuit Trek", correct: false }
                ]
            },
            {
                question: "Which lake in Nepal is considered one of the highest freshwater lakes in the world?",
                answers: [
                    { text: " Rara Lake", correct: false },
                    { text: " Phewa Lake", correct: false },
                    { text: " Gosaikunda Lake", correct: false },
                    { text: " Tilicho Lake", correct: true }
                ]
            },
            {
                question: "What is the name of the famous hill station near Kathmandu known for its sunrise view?",
                answers: [
                    { text: " Nagarkot", correct: true },
                    { text: " Dhulikhel", correct: false },
                    { text: " Bandipur", correct: false },
                    { text: " Chandragiri", correct: false }
                ]
            },
            {
                question: "Which mountain peak in Nepal is known as the 'Matterhorn of Nepal'?",
                answers: [
                    { text: " Ama Dablam", correct: true },
                    { text: " Cho Oyu", correct: false },
                    { text: " Nuptse", correct: false },
                    { text: " Lobuche", correct: false }
                ]
            },
            {
                question: "What is the national dish of Nepal?",
                answers: [
                    { text: " Momo", correct: false },
                    { text: " Dal Bhat", correct: true },
                    { text: " Chow Mein", correct: false },
                    { text: " Thukpa", correct: false }
                ]
            },
            {
                question: "What is the predominant religion in Nepal?",
                answers: [
                    { text: " Hinduism", correct: true },
                    { text: " Buddhism", correct: false },
                    { text: " Islam", correct: false },
                    { text: " Christianity", correct: false }
                ]
            },
            {
                question: "Which is the longest suspension bridge in Nepal?",
                answers: [
                    { text: " Mahakali Bridge", correct: false },
                    { text: " Bhote Koshi Bridge", correct: false },
                    { text: " Siddha Gufa Bridge", correct: false },
                    { text: " Tilu Danda Bridge", correct: true }
                ]
            },
            {
                question: "Which ethnic group in Nepal is famous for their traditional honey hunting skills?",
                answers: [
                    { text: " Rai", correct: false },
                    { text: " Sherpa", correct: false },
                    { text: " Gurung", correct: false },
                    { text: " Tharu", correct: true }
                ]
            },
            {
                question: "What is the name of the famous national park in Nepal known for its Bengal tiger population?",
                answers: [
                    { text: " Chitwan National Park", correct: true },
                    { text: " Sagarmatha National Park", correct: false },
                    { text: " Langtang National Park", correct: false },
                    { text: " Khaptad National Park", correct: false }
                ]
            },
            {
                question: "Which famous mountaineer was the first person to summit Mount Everest without supplemental oxygen?",
                answers: [
                    { text: " Tenzing Norgay", correct: false },
                    { text: " Reinhold Messner", correct: true },
                    { text: " Edmund Hillary", correct: false },
                    { text: " Reinhold Messner", correct: false }
                ]
            },
            {
                question: "What is the name of the traditional Nepali bread made from rice flour?",
                answers: [
                    { text: " Sel Roti", correct: true },
                    { text: " Dhido", correct: false },
                    { text: " Yomari", correct: false },
                    { text: " Roti", correct: false }
                ]
            },
            {
                question: "What is the name of the famous religious festival celebrated by the Newar community in Kathmandu Valley?",
                answers: [
                    { text: " Dashain", correct: false },
                    { text: " Indra Jatra", correct: true },
                    { text: " Teej", correct: false },
                    { text: " Bisket Jatra", correct: false }
                ]
            }


        ],
        "HISTORY & PAST": [


            {
                question: "What is the currency of Nepal?",
                answers: [
                    { text: "Nepalese Rupee", correct: true },
                    { text: "Indian Rupee", correct: false },
                    { text: "Yen", correct: false },
                    { text: "Dollar", correct: false }
                ]
            },
            {
                question: "Who was the first woman to climb Mount Everest?",
                answers: [
                    { text: "Junko Tabei", correct: true },
                    { text: "Tenzing Norgay", correct: false },
                    { text: "Pasang Lhamu Sherpa", correct: false },
                    { text: "Reinhold Messner", correct: false }
                ]
            },
            {
                question: "Which famous festival is celebrated in Nepal to honor the bond between brothers and sisters?",
                answers: [
                    { text: "Tihar", correct: false },
                    { text: "Holi", correct: false },
                    { text: "Dashain", correct: false },
                    { text: "Raksha Bandhan", correct: true }
                ]
            },
            {
                question: "What is the name of the famous lake in Pokhara, Nepal?",
                answers: [
                    { text: "Phewa Lake", correct: true },
                    { text: "Rara Lake", correct: false },
                    { text: "Fewa Lake", correct: false },
                    { text: "Tilicho Lake", correct: false }
                ]
            },
            {
                question: "Who is known as the 'Light of Asia' and was born in Lumbini, Nepal?",
                answers: [
                    { text: "Gautama Buddha", correct: true },
                    { text: "Mahavira", correct: false },
                    { text: "Ramakrishna Paramahamsa", correct: false },
                    { text: "Adi Shankaracharya", correct: false }
                ]
            },
            {
                question: "What is the name of the traditional Newari dish consisting of lentil patties?",
                answers: [
                    { text: "Yomari", correct: false },
                    { text: "Sel Roti", correct: false },
                    { text: "Bara", correct: true },
                    { text: "Chatamari", correct: false }
                ]
            },
            {
                question: "Who led the unification of Nepal in the 18th century?",
                answers: [
                    { text: "King Prithvi Narayan Shah", correct: true },
                    { text: "King Mahendra", correct: false },
                    { text: "King Birendra", correct: false },
                    { text: "King Gyanendra", correct: false }
                ]
            },
            {
                question: "What is the predominant religion in Nepal?",
                answers: [
                    { text: "Hinduism", correct: true },
                    { text: "Buddhism", correct: false },
                    { text: "Christianity", correct: false },
                    { text: "Islam", correct: false }
                ]
            },
            {
                question: "Which king of Nepal was responsible for introducing democracy in 1951?",
                answers: [
                    { text: "King Tribhuvan", correct: true },
                    { text: "King Prithvi Narayan Shah", correct: false },
                    { text: "King Gyanendra", correct: false },
                    { text: "King Mahendra", correct: false }
                ]
            },
            {
                question: "What is the name of the traditional musical instrument of Nepal?",
                answers: [
                    { text: "Madal", correct: true },
                    { text: "Sarangi", correct: false },
                    { text: "Tabla", correct: false },
                    { text: "Sitar", correct: false }
                ]
            },
            {
                question: "Which famous trekking route is located in the Himalayas of Nepal?",
                answers: [
                    { text: "Everest Base Camp Trek", correct: true },
                    { text: "Annapurna Circuit Trek", correct: false },
                    { text: "Langtang Valley Trek", correct: false },
                    { text: "Manaslu Circuit Trek", correct: false }
                ]
            },
            {
                question: "What is the national bird of Nepal?",
                answers: [
                    { text: "Himalayan Monal", correct: true },
                    { text: "Danphe", correct: false },
                    { text: "Sparrow", correct: false },
                    { text: "Peacock", correct: false }
                ]
            },
            {
                question: "Which dynasty ruled Nepal before the Shah dynasty?",
                answers: [
                    { text: "Malla dynasty", correct: true },
                    { text: "Rana dynasty", correct: false },
                    { text: "Thakuri dynasty", correct: false },
                    { text: "Gurkha dynasty", correct: false }
                ]
            },
            {
                question: "What is the name of the ancient city in the Kathmandu Valley known for its intricate wood carvings?",
                answers: [
                    { text: "Bhaktapur", correct: true },
                    { text: "Patan", correct: false },
                    { text: "Kirtipur", correct: false },
                    { text: "Lalitpur", correct: false }
                ]
            },
            {
                question: "Who is the current Prime Minister of Nepal?",
                answers: [
                    { text: "Sher Bahadur Deuba", correct: true },
                    { text: "Khadga Prasad Oli", correct: false },
                    { text: "Pushpa Kamal Dahal", correct: false },
                    { text: "Sushil Koirala", correct: false }
                ]
            },
            {
                question: "What is the name of the national anthem of Nepal?",
                answers: [
                    { text: "Sayaun Thunga Phool Ka", correct: true },
                    { text: "Amar Sonar Bangla", correct: false },
                    { text: "Jana Gana Mana", correct: false },
                    { text: "Namo Namo Matha", correct: false }
                ]
            },
            {
                question: "Which international organization is headquartered in Kathmandu, Nepal?",
                answers: [
                    { text: "South Asian Association for Regional Cooperation (SAARC)", correct: true },
                    { text: "Association of Southeast Asian Nations (ASEAN)", correct: false },
                    { text: "United Nations", correct: false },
                    { text: "World Health Organization", correct: false }
                ]
            },
            {
                question: "What is the name of the traditional Nepali bread made from rice flour?",
                answers: [
                    { text: "Sel Roti", correct: true },
                    { text: "Yomari", correct: false },
                    { text: "Bara", correct: false },
                    { text: "Chatamari", correct: false }
                ]
            }, {
                question: "What is the capital city of Nepal?",
                answers: [
                    { text: "Kathmandu", correct: true },
                    { text: "Pokhara", correct: false },
                    { text: "Lumbini", correct: false },
                    { text: "Bhaktapur", correct: false }
                ]
            },
            {
                question: "Who was the first monarch of modern Nepal?",
                answers: [
                    { text: "King Prithvi Narayan Shah", correct: true },
                    { text: "King Mahendra", correct: false },
                    { text: "King Birendra", correct: false },
                    { text: "King Tribhuvan", correct: false }
                ]
            },
            {
                question: "In which year did Nepal become a federal democratic republic?",
                answers: [
                    { text: "2006", correct: false },
                    { text: "2008", correct: true },
                    { text: "2010", correct: false },
                    { text: "2012", correct: false }
                ]
            },
            {
                question: "Which mountain, the highest in the world, is located in Nepal?",
                answers: [
                    { text: "Mount Everest", correct: true },
                    { text: "K2", correct: false },
                    { text: "Kangchenjunga", correct: false },
                    { text: "Lhotse", correct: false }
                ]
            },
            {
                question: "What is the name of the famous Hindu temple in Kathmandu?",
                answers: [
                    { text: "Pashupatinath Temple", correct: true },
                    { text: "Swayambhunath Stupa", correct: false },
                    { text: "Boudhanath Stupa", correct: false },
                    { text: "Changu Narayan Temple", correct: false }
                ]
            },
            {
                question: "Who is considered the founder of Buddhism and was born in Nepal?",
                answers: [
                    { text: "Gautama Buddha", correct: true },
                    { text: "Mahavira", correct: false },
                    { text: "Adi Shankaracharya", correct: false },
                    { text: "Ramakrishna Paramahamsa", correct: false }
                ]
            },
            {
                question: "Which river is known as the 'Holy River' of Nepal?",
                answers: [
                    { text: "Bagmati River", correct: true },
                    { text: "Koshi River", correct: false },
                    { text: "Gandaki River", correct: false },
                    { text: "Narayani River", correct: false }
                ]
            },
            {
                question: "What is the traditional Nepali attire worn by men?",
                answers: [
                    { text: "Daura-Suruwal", correct: true },
                    { text: "Sari", correct: false },
                    { text: "Kurta-Pajama", correct: false },
                    { text: "Ghaghra-Choli", correct: false }
                ]
            },
            {
                question: "What is the traditional Nepali attire worn by women?",
                answers: [
                    { text: "Sari", correct: true },
                    { text: "Daura-Suruwal", correct: false },
                    { text: "Kurta-Pajama", correct: false },
                    { text: "Ghaghra-Choli", correct: false }
                ]
            },
            {
                question: "Which festival is celebrated with the flying of kites in Nepal?",
                answers: [
                    { text: "Makar Sankranti", correct: true },
                    { text: "Dashain", correct: false },
                    { text: "Tihar", correct: false },
                    { text: "Holi", correct: false }
                ]
            },
            {
                question: "What is the national flower of Nepal?",
                answers: [
                    { text: "Rhododendron", correct: true },
                    { text: "Lotus", correct: false },
                    { text: "Lily", correct: false },
                    { text: "Jasmine", correct: false }
                ]
            },
            {
                question: "Which treaty established the current borders of Nepal with India?",
                answers: [
                    { text: "Treaty of Sugauli", correct: true },
                    { text: "Treaty of Kathmandu", correct: false },
                    { text: "Treaty of Versailles", correct: false },
                    { text: "Treaty of Tordesillas", correct: false }
                ]
            },

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
            },
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
            },
            {
                question: "Which Nepali Queen is known for Her Contribution to the Field of Women’s Rights and Education?",
                answers: [
                    { text: "Rajya Lakshmi Devi Shah", correct: false },
                    { text: "Shanti Devi", correct: false },
                    { text: "Ishwari Rajya Laxmi Devi Shah", correct: true },
                    { text: "Divyeshwari Devi", correct: false }
                ]
            },
            {
                question: "Who Was the First President of Nepal?",
                answers: [
                    { text: "Ram Baran Yadav", correct: true },
                    { text: "Bidhya Devi Bhandari", correct: false },
                    { text: "Dr. Prakash Chandra Lohani", correct: false },
                    { text: "Surya Bahadur Thapa", correct: false }
                ]
            },


            {
                question: "Who Was the First Person to Climb Mount Everest?",
                answers: [
                    { text: "Pasang Lhamu Sherpa", correct: false },
                    { text: "Edmund Hillary", correct: true },
                    { text: "Reinhold Messner", correct: false },
                    { text: "Junko Tabei", correct: false }
                ]
            },
            {
                question: "Who Was the Founder of the Licchavi Dynasty in Nepal?",
                answers: [
                    { text: "Amshuverma", correct: false },
                    { text: "Shankhadhar Sakhwa", correct: false },
                    { text: "Manadeva", correct: true },
                    { text: "Anshuvarma", correct: false }
                ]
            },


            {
                question: "Who Was the First Nepali to Climb Mount Everest Without Using Bottled Oxygen?",
                answers: [
                    { text: "Tenzing Norgay", correct: false },
                    { text: "Pasang Lhamu Sherpa", correct: true },
                    { text: "Ang Rita Sherpa", correct: false },
                    { text: "Apa Sherpa", correct: false }
                ]
            },
            {
                question: "When was the unification of Nepal completed under King Prithvi Narayan Shah?",
                answers: [
                    { text: " 1768", correct: true },
                    { text: " 1789", correct: false },
                    { text: " 1820", correct: false },
                    { text: " 1846", correct: false }
                ]
            },
            {
                question: "Who was the founder of the Shah dynasty in Nepal?",
                answers: [
                    { text: " Prithvi Narayan Shah", correct: true },
                    { text: " Siddhartha Gautama", correct: false },
                    { text: " King Mahendra", correct: false },
                    { text: " King Tribhuvan", correct: false }
                ]
            },
            {
                question: "What was the capital of Nepal before Kathmandu?",
                answers: [
                    { text: " Bhaktapur", correct: false },
                    { text: " Lalitpur", correct: false },
                    { text: " Pokhara", correct: false },
                    { text: " Gorkha", correct: true }
                ]
            },
            {
                question: "The Rana dynasty ruled Nepal for how many years?",
                answers: [
                    { text: " 104 years", correct: false },
                    { text: " 134 years", correct: true },
                    { text: " 164 years", correct: false },
                    { text: " 194 years", correct: false }
                ]
            },
            {
                question: "During which century did the British sign the Sugauli Treaty with Nepal, defining its borders?",
                answers: [
                    { text: "17th century", correct: false },
                    { text: "18th century", correct: false },
                    { text: "19th century", correct: true },
                    { text: "20th century", correct: false }
                ]
            },
            {
                question: "Who was the first Prime Minister of Nepal?",
                answers: [
                    { text: "Bishweshwar Prasad Koirala", correct: true },
                    { text: "King Tribhuvan", correct: false },
                    { text: "Jang Bahadur Rana", correct: false },
                    { text: "Mohan Shumsher Jang Bahadur Rana", correct: false }
                ]
            },
            {
                question: "Nepal officially became a democratic federal republic in which year?",
                answers: [
                    { text: "1947", correct: false },
                    { text: "1951", correct: false },
                    { text: "1990", correct: false },
                    { text: "2008", correct: true }
                ]
            },

            {
                question: "Who was the last king of Nepal before the country became a republic?",
                answers: [
                    { text: "King Birendra", correct: false },
                    { text: "King Gyanendra", correct: true },
                    { text: " King Tribhuvan", correct: false },
                    { text: "King Mahendra", correct: false }
                ]
            },
            {
                question: "In which year did Nepal suffer a devastating earthquake that caused widespread destruction?",
                answers: [
                    { text: "2010", correct: false },
                    { text: "2015", correct: true },
                    { text: "2017", correct: false },
                    { text: "2018", correct: false }
                ]
            }
        ],
        "COMPUTER & TECHNOLOGY": [
            {
                question: "What is the default chart type in Microsoft Excel?",
                answers: [
                    { text: "pie chart", correct: true },
                    { text: "line chart", correct: false },
                    { text: "surface chart", correct: false },
                    { text: "column chart", correct: false }
                ]
            },
            {
                question: "bit stands for",
                answers: [
                    { text: "binary information term", correct: false },
                    { text: "binary digit", correct: true },
                    { text: "binary tree", correct: false },
                    { text: "Bivariate Theory", correct: false }
                ]
            },
            {
                question: "File extensions are used in order to ……….",
                answers: [
                    { text: "Name the file", correct: false },
                    { text: "Ensure the filename is not lost", correct: false },
                    { text: "Identify the file", correct: false },
                    { text: "Identify the file type", correct: true }
                ]
            },
            {
                question: "Which of the following is an example of non-volatile memory?",
                answers: [
                    { text: "Cache memory", correct: false },
                    { text: "RAM", correct: false },
                    { text: "ROM", correct: true },
                    { text: "None of the above", correct: false }
                ]
            },
            {
                question: "Which of the following is not an input device?",
                answers: [
                    { text: "Mouse", correct: false },
                    { text: "Light pen", correct: false },
                    { text: "Keyboard", correct: false },
                    { text: "VDU", correct: true }
                ]
            },
            {
                question: "One Gigabyte is approximately equal is:",
                answers: [
                    { text: "1000,000 bytes", correct: false },
                    { text: "1000,000,000 bytes", correct: true },
                    { text: "1000,000,000,000 bytes", correct: false },
                    { text: "None of these", correct: false }
                ]
            },
            {
                question: "A ………. is an electronic device that process data, converting it into information.",
                answers: [
                    { text: "computer", correct: true },
                    { text: "processor", correct: false },
                    { text: "case", correct: false },
                    { text: "stylus", correct: false }
                ]
            },
            {
                question: "Which is the part of the computer system that one can physically touch?",
                answers: [
                    { text: "data", correct: false },
                    { text: "operating systems", correct: false },
                    { text: "hardware", correct: true },
                    { text: "software", correct: false }
                ]
            },
            {
                question: "In which printer ribbon is used?",
                answers: [
                    { text: "plotter", correct: false },
                    { text: "laser printer", correct: false },
                    { text: "dot matrix printer", correct: true },
                    { text: "inkjet printer", correct: false }
                ]
            },
            {
                question: "By using which tab can you add page numbers in an MS-Word 2019 document?",
                answers: [
                    { text: "edit", correct: false },
                    { text: "format", correct: false },
                    { text: "insert", correct: true },
                    { text: "Home", correct: false }
                ]
            },
            {
                question: "In terms of Computer Networks, what does VPN stands for:",
                answers: [
                    { text: "vertical personal network", correct: false },
                    { text: "Verbal Private News", correct: false },
                    { text: "virtual private news", correct: false },
                    { text: "virtual Private Network", correct: true }
                ]
            },
            {
                question: "which of the following is an example of a volatile memory.",
                answers: [
                    { text: "cd-rom", correct: false },
                    { text: "RAM", correct: true },
                    { text: "Rome", correct: false },
                    { text: "hard disk", correct: false }
                ]
            },
            {
                question: "Which symbol is used to separate the username of an email address from that of an ISP?",
                answers: [
                    { text: "@", correct: true },
                    { text: "&", correct: false },
                    { text: "$", correct: false },
                    { text: "#", correct: false }
                ]
            },
            {
                question: "Mail merge is a component of which of the following?",
                answers: [
                    { text: "MS Word", correct: true },
                    { text: "MS Excel", correct: false },
                    { text: "Word Press", correct: false },
                    { text: "MS Access", correct: false }
                ]
            },
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
                question: "What is the brain of the computer?",
                answers: [
                    { text: "Monitor", correct: false },
                    { text: "Central processing unit", correct: true },
                    { text: "Printer", correct: false },
                    { text: "Keyboard", correct: false }
                ]
            },
            {
                question: "Which of these is not an operating system?",
                answers: [
                    { text: "Windows", correct: false },
                    { text: "Android", correct: false },
                    { text: "MacOS", correct: false },
                    { text: "Apple", correct: true }
                ]
            },
            {
                question: "What did the first generation of computer use for its operations?",
                answers: [
                    { text: "Leakages", correct: false },
                    { text: "Cable", correct: false },
                    { text: "Vacuum tube", correct: true },
                    { text: "Transistor", correct: false }
                ]
            },
            {
                question: "Who invented computer?",
                answers: [
                    { text: "Charles Babbage", correct: true },
                    { text: "Isaac Newton", correct: false },
                    { text: "Fredrick Luggard", correct: false },
                    { text: "Galileo Galilea", correct: false }
                ]
            },
            {
                question: "What does Control S means?",
                answers: [
                    { text: "Save", correct: true },
                    { text: "Select", correct: false },
                    { text: "Paste", correct: false },
                    { text: "Pick", correct: false }
                ]
            },
            {
                question: "Which company developed the first mobile phone?",
                answers: [
                    { text: "Motorola", correct: true },
                    { text: "Nokia", correct: false },
                    { text: "Samsung", correct: false },
                    { text: "Apple", correct: false }
                ]
            },
            {
                question: "What does A.I. stand for?",
                answers: [
                    { text: "Artificial information", correct: false },
                    { text: "Artificial intelligence", correct: true },
                    { text: "Anti intelligence", correct: false },
                    { text: "Anti information", correct: false }
                ]
            },
            {
                question: "What is the biggest key in the keyboard of a computer?",
                answers: [
                    { text: "Space bar", correct: true },
                    { text: "Function keys", correct: false },
                    { text: "Backspace", correct: false },
                    { text: "Arrow key", correct: false }
                ]
            }
        ],
        "MATHS & IQ": [
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
                    { text: "16", correct: true },
                    { text: "12", correct: false },
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
                    { text: "28", correct: true },
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
        "SPORTS & GAMES": [

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
                    { text: "Badminton", correct: true },
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
                question: "What do you call it when a player scores three times in Football?",
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
                question: "How many players are on a Football team?",
                answers: [
                    { text: "11", correct: true },
                    { text: "10", correct: false },
                    { text: "9", correct: false },
                    { text: "12", correct: false }
                ]
            },


            {
                question: "What is the most popular sport in Brazil?",
                answers: [
                    { text: "Football", correct: true },
                    { text: "Basketball", correct: false },
                    { text: "Volleyball", correct: false },
                    { text: "Rugby", correct: false }
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
                question: "What is the main objective in rugby?",
                answers: [
                    { text: "Score touchdowns", correct: false },
                    { text: "Hit home runs", correct: false },
                    { text: "Score tries", correct: true },
                    { text: "Score goals", correct: false }
                ]
            },
            {
                question: "Which of the following is not related to football?",
                answers: [
                    { text: "Penalty area", correct: false },
                    { text: "Umpire", correct: true },
                    { text: "Trapping", correct: false },
                    { text: "Offside", correct: false }
                ]
            },
            {
                question: "Dead ball is associated with -",
                answers: [
                    { text: "Softball", correct: false },
                    { text: "Basketball", correct: false },
                    { text: "Hockey", correct: false },
                    { text: "Cricket", correct: true }
                ]
            },
            {
                question: "The Asian Games are organized after every -",
                answers: [
                    { text: "3 years", correct: false },
                    { text: "4 years", correct: true },
                    { text: "5 years", correct: false },
                    { text: "6 years", correct: false }
                ]
            },
            {
                question: "Which of the following teams won the FIFA World Cup 2022?",
                answers: [
                    { text: "France", correct: false },
                    { text: "Argentina", correct: true },
                    { text: "Brazil", correct: false },
                    { text: "Mexico", correct: false }
                ]
            },


        ],
        "GEOGRAPHY & NEPAL": [
            {
                question: "What ocean is the largest and deepest?",
                options: [
                    { text: "Atlantic Ocean", correct: false },
                    { text: "Indian Ocean", correct: false },
                    { text: "Arctic Ocean", correct: false },
                    { text: "Pacific Ocean", correct: true }
                ]
            },
            {
                question: "What is the largest desert in the world?",
                options: [
                    { text: "Arabian Desert", correct: false },
                    { text: "Kalahari Desert", correct: false },
                    { text: "Sahara Desert", correct: true },
                    { text: "Gobi Desert", correct: false }
                ]
            },
            {
                question: "What is the largest continent by land area?",
                options: [
                    { text: "North America", correct: false },
                    { text: "Europe", correct: false },
                    { text: "Asia", correct: true },
                    { text: "Australia", correct: false }
                ]
            },
            {
                question: "What is the most populous city in the world?",
                options: [
                    { text: "Tokyo, Japan", correct: true },
                    { text: "Beijing, China", correct: false },
                    { text: "Shanghai, China", correct: false },
                    { text: "Delhi, India", correct: false }
                ]
            },
            {
                question: "Which country has the most pyramids?",
                options: [
                    { text: "Sudan", correct: true },
                    { text: "Egypt", correct: false },
                    { text: "Mexico", correct: false },
                    { text: "Guatemala", correct: false }
                ]
            },
            {
                question: "What is the smallest country in the world?",
                options: [
                    { text: "Monaco", correct: false },
                    { text: "Nauru", correct: false },
                    { text: "Tuvalu", correct: false },
                    { text: "Vatican City", correct: true }
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
                    { text: "Sagarmatha", correct: true },
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
                    { text: "Kathmandu Durbar Square", correct: true },
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
                    { text: "Badmintion", correct: false },
                    { text: "Volleyball", correct: true }
                ]
            },
            ,
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
                question: "What is a group of crows called?",
                answers: [
                    { text: "A murder", correct: true },
                    { text: "A flock", correct: false },
                    { text: "A herd", correct: false },
                    { text: "A colony", correct: false }
                ]
            },
            {
                question: "What is a group of pandas known as?",
                answers: [
                    { text: "An embarrassment", correct: true },
                    { text: "A pride", correct: false },
                    { text: "A gaggle", correct: false },
                    { text: "A pod", correct: false }
                ]
            }, {
                question: "What art form is described as 'decorative handwriting or handwritten lettering'?",
                answers: [
                    { text: "Calligraphy", correct: true },
                    { text: "Graffiti", correct: false },
                    { text: "Typography", correct: false },
                    { text: "Sketching", correct: false }
                ]
            },
            {
                question: "What company was initially known as 'Blue Ribbon Sports'?",
                answers: [
                    { text: "Nike", correct: true },
                    { text: "Adidas", correct: false },
                    { text: "Puma", correct: false },
                    { text: "Under Armour", correct: false }
                ]
            },
            {
                question: "What country drinks the most coffee per capita?",
                answers: [
                    { text: "Finland", correct: true },
                    { text: "Sweden", correct: false },
                    { text: "Norway", correct: false },
                    { text: "Denmark", correct: false }
                ]
            },
            {
                question: "How many ghosts chase Pac-Man at the start of each game?",
                answers: [
                    { text: "4", correct: true },
                    { text: "3", correct: false },
                    { text: "5", correct: false },
                    { text: "2", correct: false }
                ]
            },
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
                    { text: "Bell", correct: false },
                ]
            },

            {
                question: "What is the full form of NASA?",
                answers: [
                    { text: "National Aeronautics and Space Administration", correct: true },
                    { text: "National Association of Space Astronauts", correct: false },
                    { text: "North American Space Agency", correct: false },
                    { text: "National Aeronautics and Science Association", correct: false },
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
            },
            {
                question: "In which year did the Titanic sink?",
                answers: [
                    { text: "1912", correct: true },
                    { text: "1905", correct: false },
                    { text: "1915", correct: false },
                    { text: "1921", correct: false },
                ]
            },
            {
                question: "Who was the first person to step foot on the moon in 1969?",
                answers: [
                    { text: "Neil Armstrong", correct: true },
                    { text: "Buzz Aldrin", correct: false },
                    { text: "Michael Collins", correct: false },
                    { text: "Yuri Gagarin", correct: false }
                ]
            },
            {
                question: "What is the European Union's currency?",
                answers: [
                    { text: "Euro (€)", correct: true },
                    { text: "Pound Sterling (£)", correct: false },
                    { text: "Dollar ($)", correct: false },
                    { text: "Yen (¥)", correct: false }
                ]
            },
            {
                question: "What is the famous painting featuring a woman with an enigmatic smile, created by Leonardo da Vinci?",
                answers: [
                    { text: "Mona Lisa", correct: true },
                    { text: "The Starry Night", correct: false },
                    { text: "The Last Supper", correct: false },
                    { text: "The Creation of Adam", correct: false }
                ]
            },
            {
                question: "Who is known for his theory of relativity and is considered one of the greatest physicists of the 20th century?",
                answers: [
                    { text: "Albert Einstein", correct: true },
                    { text: "Isaac Newton", correct: false },
                    { text: "Stephen Hawking", correct: false },
                    { text: "Nikola Tesla", correct: false }
                ]
            },
            {
                question: "What is the smallest unit of matter?",
                answers: [
                    { text: "Atom", correct: true },
                    { text: "Molecule", correct: false },
                    { text: "Cell", correct: false },
                    { text: "Quark", correct: false }
                ]
            },

        ],
        "HISTORY & PAST": [

            {
                question: "Where was Mesopotamia located?",
                answers: [
                    { text: "Middle East", correct: true },
                    { text: "Eastern Europe", correct: false },
                    { text: "North Africa", correct: false },
                    { text: "Central Asia", correct: false }
                ]
            },
            {
                question: "Where was Adolf Hitler born?",
                answers: [
                    { text: "Hallstatt, Austria", correct: false },
                    { text: "Braunau am Inn, Austria", correct: true },
                    { text: "Kufstein, Austria", correct: false },
                    { text: "Vienna, Austria", correct: false }
                ]
            },
            {
                question: "Who was the last Shang king?",
                answers: [
                    { text: "Tai Wu", correct: false },
                    { text: "Di Xin", correct: true },
                    { text: "Tai Jia", correct: false },
                    { text: "Wu Ding", correct: false }
                ]
            },
            {
                question: "What is the other name of World War I?",
                answers: [
                    { text: "Great War", correct: true },
                    { text: "Ultimate War", correct: false },
                    { text: "Absolute War", correct: false },
                    { text: "First World War", correct: false }
                ]
            },
            {
                question: "What is the other name of World War I?",
                answers: [
                    { text: "Great War", correct: true },
                    { text: "Ultimate War", correct: false },
                    { text: "Absolute War", correct: false },
                    { text: "Cold War", correct: false }
                ]
            },
            {
                question: "What is the time period of World War II?",
                answers: [
                    { text: "1939 — 1945", correct: true },
                    { text: "1917 — 1920", correct: false },
                    { text: "1940 — 1946", correct: false },
                    { text: "1920 — 1940", correct: false }
                ]
            },
            {
                question: "When did Hitler kill himself along with his wife?",
                answers: [
                    { text: "1945", correct: true },
                    { text: "1939", correct: false },
                    { text: "1940", correct: false },
                    { text: "1931", correct: false }
                ]
            },
            {
                question: "What was the largest tank battle in history?",
                answers: [
                    { text: "Battle of Moscow", correct: false },
                    { text: "Battle of Prokhorovka", correct: true },
                    { text: "Battle of the Dnieper", correct: false },
                    { text: "Battle of Kursk", correct: false }
                ]
            },
            {
                question: "Which of the Seven Wonders of the Ancient World can be seen today?",
                answers: [
                    { text: "The Great Pyramid of Giza", correct: true },
                    { text: "The Colossus of Rhodes", correct: false },
                    { text: "Hanging Gardens of Babylon", correct: false },
                    { text: "The Lighthouse of Alexandria", correct: false }
                ]
            },
            {
                question: "When was the Bir Hospital built?",
                answers: [
                    { text: "B.S. 1947", correct: true },
                    { text: "A.D. 1947", correct: false },
                    { text: "B.S. 1957", correct: false },
                    { text: "A.D. 1957", correct: false }
                ]
            },
        ],
        "COMPUTER & TECHNOLOGY": [
            {
                question: "The hexadecimal number system consists of the symbols",
                answers: [
                    { text: "0 – 7", correct: false },
                    { text: "0 – 9 , A – F", correct: true },
                    { text: "0 – 7, A – F", correct: false },
                    { text: "None of these", correct: false }
                ]
            },
            {
                question: "Which one of the following is different from other members?",
                answers: [
                    { text: "Google", correct: true },
                    { text: "Windows", correct: false },
                    { text: "Linux", correct: false },
                    { text: "Mac", correct: false }
                ]
            },
            {
                question: "Which of the following is used to Manage DataBase?",
                answers: [
                    { text: "Operating System", correct: false },
                    { text: "Compiler", correct: false },
                    { text: "DBMS", correct: true },
                    { text: "None of the above", correct: false }
                ]
            },
            {
                question: "Which of the following is not an example of an Operating System?",
                answers: [
                    { text: "Windows 98", correct: false },
                    { text: "BSD Unix", correct: false },
                    { text: "Microsoft Office XP", correct: true },
                    { text: "Red Hat Linux", correct: false }
                ]
            },
            {
                question: "IC chips used in computers are usually made of:",
                answers: [
                    { text: "Lead", correct: false },
                    { text: "Silicon", correct: true },
                    { text: "Chromium", correct: false },
                    { text: "Gold", correct: false }
                ]
            },
            {
                question: "The CPU, motherboard and RAM are ........ components of a computer hardware system.",
                answers: [
                    { text: "input device", correct: false },
                    { text: "secondary storage device", correct: false },
                    { text: "output device", correct: false },
                    { text: "internal", correct: true }
                ]
            },
            {
                question: "The instruction about booting your system is stored in:",
                answers: [
                    { text: "RAM", correct: false },
                    { text: "CPU", correct: false },
                    { text: "BIOS", correct: true },
                    { text: "Register", correct: false }
                ]
            },
            {
                question: "A nibble is equal to how many bits?",
                answers: [
                    { text: "4", correct: true },
                    { text: "8", correct: false },
                    { text: "16", correct: false },
                    { text: "32", correct: false }
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
            },

            {
                question: "If you were having your students create a chart with data they collected, which software would be the best choice?",
                answers: [
                    { text: "Microsoft Word", correct: false },
                    { text: "Microsoft Excel", correct: true },
                    { text: "Microsoft Access", correct: false },
                    { text: "Microsoft Powerpoint", correct: false }
                ]
            },

            {
                question: "A program that allows you to view pages on the internet is called:",
                answers: [
                    { text: "Url", correct: false },
                    { text: "Browser", correct: true },
                    { text: "Search engine", correct: false },
                    { text: "Database", correct: false }
                ]
            },
            {
                question: "Which of the following answers is the largest amount of information?",
                answers: [
                    { text: "80 bytes", correct: false },
                    { text: "80 megabytes", correct: false },
                    { text: "80 Gigabytes", correct: true },
                    { text: "80 Kilobytes", correct: false }
                ]
            },
            {
                question: "What file would you commonly find for a picture?",
                answers: [
                    { text: ".JPG", correct: true },
                    { text: ".DOC", correct: false },
                    { text: ".BMP", correct: false },
                    { text: ".TIF", correct: false }
                ]
            },
            {
                question: "Which of these technologies help computers to behave like humans?",
                answers: [
                    { text: "XBOX", correct: false },
                    { text: "Artificial intelligence", correct: true },
                    { text: "Artificial embryo", correct: false },
                    { text: "3-D printing", correct: false }
                ]
            },
            {
                question: "A ring of gold is yellow. Is this statement correct?",
                answers: [
                    { text: "Yes", correct: true },
                    { text: "No", correct: false },
                    { text: "Depends on its alloy", correct: false },
                    { text: "I'm not sure.", correct: false }
                ]
            },
            {
                question: "World-wide, what language is used the most on the internet?",
                answers: [
                    { text: "German", correct: false },
                    { text: "English", correct: true },
                    { text: "Spanish", correct: false },
                    { text: "Chinese", correct: false }
                ]
            },


            {
                question: "Where was the world wide web invented?",
                answers: [
                    { text: "United States", correct: false },
                    { text: "Switzerland", correct: true },
                    { text: "Germany", correct: false },
                    { text: "United Kingdom", correct: false }
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
                question: "What is the name of the first electronic general-purpose computer?",
                answers: [
                    { text: "ENIAC", correct: true },
                    { text: "UNIVAC", correct: false },
                    { text: "Colossus", correct: false },
                    { text: "EDSAC", correct: false },
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
            },
            {
                question: "Which computer virus records every movement you make on the computer?",
                answers: [
                    { text: "Malware Android", correct: false },
                    { text: "DoS", correct: false },
                    { text: "Key Logger", correct: true },
                    { text: "Trapper", correct: false }
                ]
            },
        ],
        "MATHS & IQ": [
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

        "SPORTS & GAMES": [
            {
                question: "What country won the first World Cup?",
                answers: [
                    { text: "Brazil", correct: false },
                    { text: "Argentina", correct: false },
                    { text: "Uruguay", correct: true },
                    { text: "Germany", correct: false }
                ]
            },
            {
                question: "What is the full form of IPL?",
                answers: [
                    { text: "Indian Premier League", correct: true },
                    { text: "Indo-Pakistan League", correct: false },
                    { text: "International Premier League", correct: false },
                    { text: "Indian Players League", correct: false }
                ]
            },
            {
                question: "World's fastest sprinter Usain Bolt belongs to which country?",
                answers: [
                    { text: "Nigeria", correct: false },
                    { text: "Colombia", correct: false },
                    { text: "Jamaica", correct: true },
                    { text: "Uganda", correct: false }
                ]
            },
            {
                question: "Which country won the title of Asian Kabaddi Championship 2023?",
                answers: [
                    { text: "India", correct: true },
                    { text: "Iran", correct: false },
                    { text: "Nepal", correct: false },
                    { text: "Bangladesh", correct: false }
                ]
            },

            {
                question: "With which sport is Lionel Messi associated?",
                answers: [
                    { text: "Chess", correct: false },
                    { text: "Football", correct: true },
                    { text: "Cricket", correct: false },
                    { text: "Shooting", correct: false }
                ]
            },

            {
                question: "The first Asian Games were organized in 1951 in -",
                answers: [
                    { text: "Singapore", correct: false },
                    { text: "Tokyo", correct: false },
                    { text: "New Delhi", correct: true },
                    { text: "Beijing", correct: false }
                ]
            },
            {
                question: "Who has been named men's player of the year for 2022?",
                answers: [
                    { text: "Kylian Mbappe", correct: false },
                    { text: "Karim Benzema", correct: false },
                    { text: "Lionel Messi", correct: true },
                    { text: "Emiliano 'Dibu' Martinez", correct: false }
                ]
            },

            {
                question: "Which one of the following players won the 'Golden Boot' Award in FIFA World Cup 2022?",
                answers: [
                    { text: "Kylian Mbappe (France)", correct: false },
                    { text: "Lionel Messi (Argentina)", correct: false },
                    { text: "Hassan Al-Haydos (Qatar)", correct: false },
                    { text: "Nemayer (Brazil)", correct: false }
                ]
            },
            {
                question: "Who among the following players won the 'Golden Ball' trophy in FIFA World Cup 2022?",
                answers: [
                    { text: "Lionel Messi (Argentina)", correct: true },
                    { text: "Damian Emiliano Martinez Romero (Argentina)", correct: false },
                    { text: "Cristiano Ronaldo (Portugal)", correct: false },
                    { text: "Harry Kane (England)", correct: false }
                ]
            },
            {
                question: "Which of the following teams won the FIFA World Cup 2022?",
                answers: [
                    { text: "France", correct: false },
                    { text: "Argentina", correct: true },
                    { text: "Brazil", correct: false },
                    { text: "Mexico", correct: false }
                ]
            },
            {
                question: "The Asian Games are organized after every -",
                answers: [
                    { text: "3 years", correct: false },
                    { text: "4 years", correct: true },
                    { text: "5 years", correct: false },
                    { text: "6 years", correct: false }
                ]
            },
            {
                question: "What is it called when a player can't defend an attack against their king?",
                answers: [
                    { text: "Check", correct: true },
                    { text: "Chess", correct: false },
                    { text: "Checkchess", correct: false },
                    { text: "Checkmate", correct: false }
                ]
            },



            {
                question: "Which of the following is not related to football?",
                answers: [
                    { text: "Penalty area", correct: false },
                    { text: "Umpire", correct: true },
                    { text: "Trapping", correct: false },
                    { text: "Offside", correct: false }
                ]
            },
            {
                question: "Where is the headquarters of the International Olympic Committee located?",
                answers: [
                    { text: "Beijing", correct: false },
                    { text: "London", correct: false },
                    { text: "Switzerland", correct: true },
                    { text: "Germany", correct: false }
                ]
            },
            {
                question: "Which team emerged winner of the UEFA Champions League title in 2022?",
                answers: [
                    { text: "Real Madrid", correct: false },
                    { text: "FC Barcelona", correct: false },
                    { text: "Bryan Munich", correct: false },
                    { text: "Inter Milan", correct: true }
                ]
            }
        ],
        "GEOGRAPHY & NEPAL": [
            {
                question: "What is the smallest continent by area?",
                options: [
                    { text: "North America", correct: false },
                    { text: "Europe", correct: false },
                    { text: "Asia", correct: false },
                    { text: "Australia", correct: true }
                ]
            },
            {
                question: "In which country would you find the Kalahari Desert?",
                options: [
                    { text: "South Africa", correct: false },
                    { text: "Namibia", correct: false },
                    { text: "Botswana", correct: true },
                    { text: "Zimbabwe", correct: false }
                ]
            },
            {
                question: "In which ocean is the Bermuda Triangle located?",
                options: [
                    { text: "Atlantic Ocean", correct: true },
                    { text: "Pacific Ocean", correct: false },
                    { text: "Indian Ocean", correct: false },
                    { text: "Arctic Ocean", correct: false }
                ]
            },
            {
                question: "Which ocean is between North America and Africa?",
                options: [
                    { text: "Pacific", correct: false },
                    { text: "Arctic", correct: false },
                    { text: "Indian", correct: false },
                    { text: "Atlantic", correct: true }
                ]
            },
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

        ],
    },
    hard: {
        "GENERAL KNOWLEDGE": [

            {
                question: "What is the only continent with land in all four hemispheres?",
                answers: [
                    { text: "Africa", correct: true },
                    { text: "Asia", correct: false },
                    { text: "North America", correct: false },
                    { text: "South America", correct: false }
                ]
            },
            {
                question: "What country has the most islands?",
                answers: [
                    { text: "Sweden", correct: true },
                    { text: "Indonesia", correct: false },
                    { text: "Philippines", correct: false },
                    { text: "Japan", correct: false }
                ]
            },
            {
                question: "What is acrophobia a fear of?",
                answers: [
                    { text: "Heights", correct: true },
                    { text: "Spiders", correct: false },
                    { text: "Water", correct: false },
                    { text: "Closed spaces", correct: false }
                ]
            },
            {
                question: "Which is the only body part that is fully grown from birth?",
                answers: [
                    { text: "Eyes", correct: true },
                    { text: "Brain", correct: false },
                    { text: "Heart", correct: false },
                    { text: "Lungs", correct: false }
                ]
            },
            {
                question: "How many dots appear on a pair of dice?",
                answers: [
                    { text: "42", correct: true },
                    { text: "36", correct: false },
                    { text: "48", correct: false },
                    { text: "56", correct: false }
                ]
            }, {
                question: "In what country would you find Mount Kilimanjaro?",
                answers: [
                    { text: "Tanzania", correct: true },
                    { text: "Kenya", correct: false },
                    { text: "Uganda", correct: false },
                    { text: "Ethiopia", correct: false }
                ]
            }, {
                question: "What city is known as 'The Eternal City'?",
                answers: [
                    { text: "Rome", correct: true },
                    { text: "Athens", correct: false },
                    { text: "Jerusalem", correct: false },
                    { text: "Constantinople", correct: false }
                ]
            },
            {
                question: "What car manufacturer had the highest revenue in 2020?",
                answers: [
                    { text: "Volkswagen", correct: true },
                    { text: "Toyota", correct: false },
                    { text: "General Motors", correct: false },
                    { text: "Tesla", correct: false }
                ]
            },
            {
                question: "How many minutes are in a full week?",
                answers: [
                    { text: "10,080", correct: true },
                    { text: "14,400", correct: false },
                    { text: "8,640", correct: false },
                    { text: "12,960", correct: false }
                ]
            },
            {
                question: "What artist has the most streams on Spotify on FEB 2024 ?",
                answers: [
                    { text: "Drake", correct: true },
                    { text: "Ed Sheeran", correct: false },
                    { text: "Justin Bieber", correct: false },
                    { text: "Ariana Grande", correct: false }
                ]
            },
            {
                question: "What year was the United Nations established?",
                answers: [
                    { text: "1945", correct: true },
                    { text: "1955", correct: false },
                    { text: "1935", correct: false },
                    { text: "1965", correct: false }
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
            },
            {
                question: "In which year did World War I begin?",
                answers: [
                    { text: "1914", correct: true },
                    { text: "1916", correct: false },
                    { text: "1918", correct: false },
                    { text: "1920", correct: false }
                ]
            },
            {
                question: "Which ancient civilization is known for its pyramids and hieroglyphics?",
                answers: [
                    { text: "Ancient Egypt", correct: true },
                    { text: "Mesopotamia", correct: false },
                    { text: "Ancient Greece", correct: false },
                    { text: "Mayan Civilization", correct: false }
                ]
            },
            {
                question: "Who is the author of the “Harry Potter” book series?",
                answers: [
                    { text: "J.K. Rowling", correct: true },
                    { text: "Stephenie Meyer", correct: false },
                    { text: "J.R.R. Tolkien", correct: false },
                    { text: "George R.R. Martin", correct: false }
                ]
            },
            {
                question: "Who is known for his theory of relativity and is considered one of the greatest physicists of the 20th century?",
                answers: [
                    { text: "Albert Einstein", correct: true },
                    { text: "Isaac Newton", correct: false },
                    { text: "Stephen Hawking", correct: false },
                    { text: "Nikola Tesla", correct: false }
                ]
            },
            {
                question: "What is the largest country in Africa by land area?",
                answers: [
                    { text: "Algeria", correct: true },
                    { text: "Democratic Republic of the Congo", correct: false },
                    { text: "Sudan", correct: false },
                    { text: "Libya", correct: false }
                ]
            },
            {
                question: "Which gas do plants absorb from the atmosphere and release oxygen during photosynthesis?",
                answers: [
                    { text: "Carbon dioxide (CO2)", correct: true },
                    { text: "Oxygen (O2)", correct: false },
                    { text: "Nitrogen (N2)", correct: false },
                    { text: "Methane (CH4)", correct: false }
                ]
            },
            {
                question: "What is the chemical symbol for iron?",
                answers: [
                    { text: "Fe", correct: true },
                    { text: "Ir", correct: false },
                    { text: "Au", correct: false },
                    { text: "Pb", correct: false }
                ]
            },

        ],
        "HISTORY & PAST": [
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
            },
            {
                question: "Who is the eldest son of Prithvi Narayan Shah?",
                answers: [
                    { text: "Pratap Singh Shah", correct: true },
                    { text: "Bahadur Shah", correct: false },
                    { text: "Narendra Shah", correct: false },
                    { text: "Paras Shah", correct: false }
                ]
            },
            {
                question: "Which Rana Prime Minister ruled Nepal for the Longest Period?",
                answers: [
                    { text: "Jung Bahadur Rana", correct: true },
                    { text: "Chandra Shumsher Rana", correct: false },
                    { text: "Bhim Shumsher Rana", correct: false },
                    { text: "Mohan Shumsher Rana", correct: false }
                ]
            },
            {
                question: "Who Founded the Pashupatinath Temple in Kathmandu?",
                answers: [
                    { text: "Jayasthiti Malla", correct: true },
                    { text: "Yaksha Malla", correct: false },
                    { text: "Siddhi Narsingh Malla", correct: false },
                    { text: "Pratap Malla", correct: false }
                ]
            },
            {
                question: "Who Wrote the Famous Nepali Novel 'Seto Bagh'?",
                answers: [
                    { text: "BP Koirala", correct: false },
                    { text: "Parijat", correct: true },
                    { text: "Diamond Shumsher Rana", correct: false },
                    { text: "Laxmi Prasad Devkota", correct: false }
                ]
            },
            {
                question: "Which Country Did Nepal Fight a War with in 1814-1816?",
                answers: [
                    { text: "Tibet", correct: false },
                    { text: "China", correct: false },
                    { text: "India", correct: false },
                    { text: "Britain", correct: true }
                ]
            },
            {
                question: "Who Was the First Nepali to Receive the Nobel Peace Prize?",
                answers: [
                    { text: "Bishweshwar Prasad Koirala", correct: false },
                    { text: "Mahesh Chandra Regmi", correct: false },
                    { text: "King Tribhuvan", correct: true },
                    { text: "Ram Baran Yadav", correct: false }
                ]
            },
        ],
        "COMPUTER & TECHNOLOGY": [
            {
                question: "1 GB is equal to",
                answers: [
                    { text: "1000 bits", correct: false },
                    { text: "1000 Mb", correct: false },
                    { text: "1024 bits", correct: false },
                    { text: "1024 bytes", correct: true }
                ]
            },
            {
                question: "Function of running and loading programs by use of peripherals is function of",
                answers: [
                    { text: "operating system", correct: true },
                    { text: "inquiry system", correct: false },
                    { text: "dump programs", correct: false },
                    { text: "function system", correct: false }
                ]
            },
            {
                question: "Process to exit from computer by giving correct instructions such as 'EXIT' is classified as",
                answers: [
                    { text: "log in", correct: false },
                    { text: "process out", correct: false },
                    { text: "process in", correct: false },
                    { text: "log out", correct: true }
                ]
            },
            {
                question: "What type of process creates a smaller file that is faster to transfer over the internet?",
                answers: [
                    { text: "Compression", correct: true },
                    { text: "Fragmentation", correct: false },
                    { text: "Encapsulation", correct: false },
                    { text: "None of the above", correct: false }
                ]
            },
            {
                question: "Compact discs, (according to the original CD specifications) hold how many minutes of music?",
                answers: [
                    { text: "74 mins", correct: false },
                    { text: "90 mins", correct: false },
                    { text: "56 mins", correct: false },
                    { text: "60 mins", correct: true }
                ]
            },
            {
                question: "When is the World Computer Literacy Day observed every year?",
                answers: [
                    { text: "08 September", correct: false },
                    { text: "11 september", correct: false },
                    { text: "03 November", correct: false },
                    { text: "02 December", correct: true }
                ]
            },
            {
                question: "what is the key combination to open the 'Save As' dialog box in MS PowerPoint?",
                answers: [
                    { text: "F12.", correct: false },
                    { text: "Alt+F then D", correct: false },
                    { text: "Alt+F then E", correct: false },
                    { text: "Alt+F then O", correct: true }
                ]
            },
            {
                question: "In a _______, a parent record type can be associated with one or more 'child' record types, but a child record type can have only one parent.",
                answers: [
                    { text: "network database", correct: false },
                    { text: "relational database", correct: true },
                    { text: "distributed database", correct: false },
                    { text: "hierarchical database", correct: false }
                ]
            },
            {
                question: "Which files are used during the operation of DBMS?",
                answers: [
                    { text: "Query language and utilities", correct: true },
                    { text: "Data manipulation language and query language", correct: false },
                    { text: "Data dictionary and transaction log", correct: false },
                    { text: "Data dictionary and query language", correct: false }
                ]
            },
            {
                question: "What is called the syntax analysis part in the machine language transformation of a high-level language?",
                answers: [
                    { text: "lexical analysis", correct: false },
                    { text: "semantic analysis", correct: false },
                    { text: "parsing", correct: true },
                    { text: "linking", correct: false }
                ]
            },
            {
                question: "Which keys are used to switch between programs in Windows?",
                answers: [
                    { text: "Ctrl+TAB", correct: false },
                    { text: "Alt+TAB", correct: true },
                    { text: "Shift+TAB", correct: false },
                    { text: "Shift+Enter", correct: false }
                ]
            },
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
                question: "Which programming language was created by Bjarne Stroustrup in 1983?",
                answers: [
                    { text: "Java", correct: false },
                    { text: "C++", correct: true },
                    { text: "Python", correct: false },
                    { text: "Ruby", correct: false },
                ]
            },
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
                question: "What technology is used to record cryptocurrency transactions?",
                answers: [
                    { text: "Digital wallet", correct: false },
                    { text: "Mining", correct: false },
                    { text: "Blockchain", correct: true },
                    { text: "Token", correct: false }
                ]
            },

            {
                question: "About how many smartphones are being used in the world?",
                answers: [
                    { text: "1 million", correct: false },
                    { text: "100 million", correct: false },
                    { text: "1 billion", correct: true },
                    { text: "100 billion", correct: false }
                ]
            },
            {
                question: "What was the fastest growing web browser in 2020?",
                answers: [
                    { text: "Microsoft Edge", correct: true },
                    { text: "Firefox", correct: false },
                    { text: "DuckDuckGo", correct: false },
                    { text: "Internet Explorer", correct: false }
                ]
            },
            {
                question: "What was the name of the first operating system?",
                answers: [
                    { text: "Windows 1.01", correct: false },
                    { text: "TSS/360", correct: false },
                    { text: "EPOC", correct: false },
                    { text: "GM-NAA I/O", correct: true }
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
                question: "A project using Powerpoint may include all of the following items except:",
                answers: [
                    { text: "Video tape", correct: true },
                    { text: "Text", correct: false },
                    { text: "Sound clip", correct: false },
                    { text: "Animation", correct: false }
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
        "MATHS & IQ": [
            {
                question: "What is 6372+5849?",
                answers: [
                    { text: "14253", correct: false },
                    { text: "12221", correct: true },
                    { text: "06458", correct: false },
                    { text: "74839", correct: false }
                ]
            },
            {
                question: "What if you divide 352 by 12?",
                answers: [
                    { text: "23.9", correct: false },
                    { text: "27.9", correct: false },
                    { text: "29.3", correct: true },
                    { text: "67.8", correct: false }
                ]
            },
            {
                question: "What if you add 7778.1 into 0.0001?",
                answers: [
                    { text: "7778.0010", correct: false },
                    { text: "7778.1001", correct: true },
                    { text: "7778.0011", correct: false },
                    { text: "7779", correct: false }
                ]
            },
            {
                question: "Solve 3 + 6 × (5 + 4) ÷ 3 - 7",
                answers: [
                    { text: "11", correct: false },
                    { text: "16", correct: false },
                    { text: "14", correct: true },
                    { text: "15", correct: false }
                ]
            },
            {
                question: "Priya had 16 Red Balls, 2 Green Balls, 9 Blue Balls, and 1 Multicolor Ball. If He Lost 9 Red Balls, 1 Green Ball, and 3 Blue Balls. How Many Balls would be Left?",
                answers: [
                    { text: "15", correct: true },
                    { text: "11", correct: false },
                    { text: "28", correct: false },
                    { text: "39", correct: false }
                ]
            },
            {
                question: "whwt is the sum of 2000+20+30+40+10?",
                answers: [
                    { text: "2100", correct: true },
                    { text: "3000", correct: false },
                    { text: "2050", correct: false },
                    { text: "2022", correct: false }
                ]
            },

            {
                question: "5, 11, 23, 47, 95, ?",
                answers: [
                    { text: "176", correct: false },
                    { text: "191", correct: false },
                    { text: "199", correct: false },
                    { text: "207", correct: true }
                ]
            },
            {
                question: "Mary is 16 years old. She is 4 times older than her brother. How old will Mary be when she is twice his age?",
                answers: [
                    { text: "That's impossible", correct: false },
                    { text: "20", correct: false },
                    { text: "24", correct: true },
                    { text: "28", correct: false }
                ]
            },
            {
                question: "There are 5 machines that make 5 parts in 5 minutes. How long does it take to make 100 parts on 100 machines?",
                answers: [
                    { text: "5", correct: true },
                    { text: "10", correct: false },
                    { text: "15", correct: false },
                    { text: "30", correct: false }
                ]
            },
            {
                question: "How many minutes are in four and a half hours?",
                answers: [
                    { text: "270", correct: true },
                    { text: "180", correct: false },
                    { text: "240", correct: false },
                    { text: "360", correct: false }
                ]
            },
            {
                question: " 8 10 14 18 ? 34 50 66",
                answers: [
                    { text: "20", correct: false },
                    { text: "26", correct: true },
                    { text: "28", correct: false },
                    { text: "30", correct: false }
                ]
            }
        ],

        "SPORTS & GAMES": [
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
                question: "Distance of Marathon race is -",
                answers: [
                    { text: "43.195 km", correct: false },
                    { text: "42.195 km", correct: true },
                    { text: "41.185 km", correct: false },
                    { text: "40.165 km", correct: false }
                ]
            },
            {
                question: "In which game Antenna is used?",
                answers: [
                    { text: "Basketball", correct: false },
                    { text: "Cricket", correct: false },
                    { text: "Rugby", correct: false },
                    { text: "Volleyball", correct: true }
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
                question: "Which country won the FIFA World Cup (Men) for the maximum number of times?",
                answers: [
                    { text: "West Indies", correct: false },
                    { text: "Pakistan", correct: false },
                    { text: "Sri Lanka", correct: false },
                    { text: "Australia", correct: true }
                ]
            },
            {
                question: "Triples is a new format of",
                answers: [
                    { text: "Boxing", correct: false },
                    { text: "Judo", correct: false },
                    { text: "Chess", correct: false },
                    { text: "Badminton", correct: true }
                ]
            },
            {
                question: "The first Winter Olympic Games were organized in the year -",
                answers: [
                    { text: "1920", correct: false },
                    { text: "1921", correct: false },
                    { text: "1923", correct: false },
                    { text: "1924", correct: true }
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
                question: "Who is the all-time leading scorer in NBA history?",
                answers: [
                    { text: "LeBron James", correct: false },
                    { text: "Kareem Abdul-Jabbar", correct: true },
                    { text: "Michael Jordan", correct: false },
                    { text: "Kobe Bryant", correct: false }
                ]
            },
            {
                question: "How many squares does a chessboard have?",
                answers: [
                    { text: "65", correct: false },
                    { text: "32", correct: false },
                    { text: "64", correct: true },
                    { text: "99", correct: false }
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
            }
        ],
        "GEOGRAPHY & NEPAL": [

            {
                question: "Which country is made up of 7,000 islands?",
                options: [
                    { text: "The Philippines", correct: true },
                    { text: "Indonesia", correct: false },
                    { text: "Japan", correct: false },
                    { text: "Malaysia", correct: false }
                ]
            },
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



        ],
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
let usedQuestionsIndexes = [];

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
    usedQuestionsIndexes = [];

    const selectedDifficulty = difficultySelect.value;
    const selectedCategory = categorySelect.value;

    if (selectedCategory && selectedDifficulty) {
        currentDifficulty = selectedDifficulty;
        currentCategory = selectedCategory;

        questions = questionsByDifficultyAndCategory[selectedDifficulty][selectedCategory];

        questions = questions.filter((question, index) => !usedQuestionsIndexes.includes(index));
        questions = shuffleArray(questions);
        //  questions = questions.slice(0, 5);

        if (questions && questions.length > 0) {
            showQuestion();
        } else {
            questionElement.innerHTML = "No new questions available for this category and difficulty level.";
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
