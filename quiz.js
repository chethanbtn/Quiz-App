const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hi To Me Language",
        d: "Hyperlinks and Text Markup Language",
        correct: "a"
    },
    {
        question: "What does CSS do?",
        a: "It codes the structure of a webpage",
        b: "It Makes the webpage functional",
        c: "It styles the webpage",
        d: "Does nothing",
        correct: "c"
    },
    {
        question: "What does JS stand for?",
        a: "Just Script",
        b: "JavaScript",
        c: "Java Source",
        d: "Jolly Script",
        correct: "b"
    },
    {
        question: "What does API stand for?",
        a: "App Programming Internet",
        b: "Applied Programming Interface",
        c: "Application Program Internet",
        d: "Application Programming Interface",
        correct: "d"
    },
    {
        question: "How does API helps developers?",
        a: "It helps writing code faster",
        b: "It connects to the internet",
        c: "It allows developers to use features of other applications",
        d: "It does nothing",
        correct: "c"
    }
];

let currentQuiz = 0;
let score = 0;
let time = 10;
let timer;

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    clearInterval(timer);
    time = 10;

    timerEl.innerText = "Time Left: " + time;

    timer = setInterval(() => {

        time--;
        timerEl.innerText = "Time Left: " + time;

        if (time === 0) {
            nextQuestion();
        }

    }, 1000);

    const data = quizData[currentQuiz];

    questionEl.innerText = data.question;
    a_text.innerText = data.a;
    b_text.innerText = data.b;
    c_text.innerText = data.c;
    d_text.innerText = data.d;
}

function deselectAnswers() {

    const answers = document.querySelectorAll(".answer");

    answers.forEach((answer) => {
        answer.checked = false;
    });

}

function getSelected() {

    const answers = document.querySelectorAll(".answer");

    let answer;

    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    nextQuestion();
});

function nextQuestion() {

    const answer = getSelected();

    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    }
    else {

        document.querySelector(".quiz-container").innerHTML =
            `<h2>You scored ${score}/${quizData.length}</h2>
<button onclick="location.reload()">Restart Quiz</button>`;

    }

}