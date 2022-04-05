const quizData = [
    {
      question: "What HTML tag is used when writing JavaScript code?",
      a: "<javascript>",
      b: "<javaScript>",
      c: "<script>",
      d: "<js>",
      correct: "c",
    },
    {
      question: "JavaScript is a ________ Side Scripting Language.",
      a: "Server",
      b: "Browser",
      c: "Far",
      d: "ISP",
      correct: "b",
    },
    {
      question: "Which built-in method sorts the elements of an array?",
      a: "changeOrder(order)",
      b: "order()",
      c: "sort()",
      d: "array_sorter",
      correct: "c",
    },
    {
      question: "Which of the following function of Array object reverses the order of the elements of an array?",
      a: "reverse()",
      b: "push()",
      c: "reduce()",
      d: "reuseRecycle()",
      correct: "a",
    },
    {
      question: "Which of the following is not a reserved word in JavaScript?",
      a: "interface",
      b: "throws",
      c: "program",
      d: "short",
      correct: "c",
    },
  ];

  const timeLimit = 60 * 1000;
const intro = document.getElementById('intro')
const startBtn = document.getElementById('start-btn')
const submitBtn = document.getElementById('submit')
const quiz = document.getElementById('quiz')

const highScoresBtn = document.getElementById('high-scores-btn')
const submitHighScoreBtn = document.getElementById('submit-high-score-btn')
const homeBtn = document.getElementById('return-home-btn')
const results = document.getElementById('results')
const initials = document.getElementById('initials')
const correctAnswers = document.getElementById('correct-answers')

const timer = document.getElementById('timer')

const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a')
const b_text = document.getElementById('b')
const c_text = document.getElementById('c')
const d_text = document.getElementById('d')

answerEls.forEach(answerEl => answerEl.addEventListener("click", setAnswer))
highScoresBtn.addEventListener("click", showHighScores);
homeBtn.addEventListener("click", returnHome);

startBtn.addEventListener("click", startQuiz);

let highScoreMaxCount = 5;
let highScoreInitials
let currentQuiz
let score
let timerValue
let timerId
let answer
let rank

function updateTimerText(ms) {
  if (ms === -1) {
    timer.innerText = '';
  }
  else if (ms > 0) {
    timer.innerText = 'Time Remaining: ' + (ms / 1000.0).toFixed(1) + ' seconds';
  }
  else {
    timer.innerText = "Time's up!"
  }
}

function updateTimer() {
  decrementTimer(100);
  updateTimerText(timerValue)
}