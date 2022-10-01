const Questions = [
    {
        id: 0,
        question: "The code in The Martrix comes from what food recipes?",
        answer: [{text: "Sushi recipes", isCorrect: true},
                 {text: "Dumpling recipes", isCorrect: false},
                 {text: "Stir-fry recipes", isCorrect: false},
                 {text: "Pad thai recpies", isCorrect: false}
        ]
    },
    {
        id: 1,
        question: "Where were The Lord of the Rings movies filmed?",
        answer: [{text: "Ireland", isCorrect: false},
                 {text: "Iceland", isCorrect: false},
                 {text: "New Zealand", isCorrect: true},
                 {text: "Australia", isCorrect: false}
        ]
    },
    {
        id: 2,
        question: "If you were to watch the Marvel movies in chronological order, which movie would you watch first?",
        answer: [{text: "Iron man", isCorrect: false},
                 {text: "Captain America: The First Avenger", isCorrect: true},
                 {text: "Doctor Strange", isCorrect: false},
                 {text: "Thor", isCorrect: false}
        ]
    },
    {
        id: 3,
        question: "Which movie is this quote from: 'Here's looking at you kid'",
        answer: [{text: "Breakfast at Tiffany's", isCorrect: false},
                 {text: "Citizen Kane", isCorrect: false},
                 {text: "Casablanca", isCorrect: true},
                 {text: "Notorious", isCorrect: false}
        ]
    },
    {
        id: 4,
        question: "Which famous line from Jaws was ad-libbed?",
        answer: [{text: "'I use to hate the water'", isCorrect: false},
                 {text: "'Your gonna need a bigger boat'", isCorrect: true},
                 {text: "'All this machine does is swim, and eat, and make little sharks'", isCorrect: false},
                 {text: "'You know, a thing about a shark, hes got lifeless eyes. Black eyes, like a dolls eyes'", isCorrect: false}
        ]
    },
    {
        id: 5,
        question: "Who played Wendy Torrence in The Shining?",
        answer: [{text: "Cher", isCorrect: false},
                 {text: "Sissy Spacek", isCorrect: false},
                 {text: "Shelley Duvall", isCorrect: true},
                 {text: "Linda Ronstadt", isCorrect: false}
        ]
    },
]

function startGame(id) {
    var hud = document.getElementById('#hud-answer');
    hud [0].innerText = "";

    const question = document.getElementById("#question");

    question.innerText = Questions[id].question;

    const choice1 = document.getElementById("#choice1");
    const choice2 = document.getElementById("#choice2");
    const choice3 = document.getElementById("#choice3");
    const choice4 = document.getElementById("#choice4");

    choice1.innerText = Questions[id].answer[0].text;
    choice2.innerText = Questions[id].answer[1].text;
    choice3.innerText = Questions[id].answer[2].text;
    choice4.innerText = Questions[id].answer[3].text;

    choice1.value = Questions[id].answer[0].isCorrect;
    choice2.value = Questions[id].answer[1].isCorrect;
    choice3.value = Questions[id].answer[2].isCorrect;
    choice4.value = Questions[id].answer[3].isCorrect;

    var chosen = "";

    choice1.addEventListener("click", () => {
        chosen = choice1.value;
    })

    choice2.addEventListener("click", () => {
        chosen = choice2.value;
    })

    choice3.addEventListener("click", () => {
        chosen = choice3.value;
    })

    choice4.addEventListener("click", () => {
        chosen = choice4.value;
    })

    
}