const quizData = [
  {
    question: 'How old is florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c',
  },
  {
    question: 'What is the most used programming language in 2019? ',
    a: 'java',
    b: 'C',
    c: 'python',
    d: 'javaScript',
    correct: 'd',
  },
  {
    question: 'Who is the President of India?',
    a: 'Pranab',
    b: 'kobind',
    c: 'kalam',
    d: 'modi',
    correct: 'b',
  },
  {
    questions: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminal Motor Lamborginis',
    correct: 'a',
  },
];

const answerbtn = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionsEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');

let score = 0;
let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  deselectanswer();
  const currentQuizdata = quizData[currentQuiz];

  questionsEl.innerText = currentQuizdata.question;
  a_text.innerText = currentQuizdata.a;
  b_text.innerText = currentQuizdata.b;
  c_text.innerText = currentQuizdata.c;
  d_text.innerText = currentQuizdata.d;
}

function checkanswer() {
  let answer = undefined;
  answerbtn.forEach(answerele => {
    if (answerele.checked) answer = answerele.id;
  });
  return answer;
}

function deselectanswer() {
  answerbtn.forEach(answerele => {
    answerele.checked = false;
  });
}

submitbtn.addEventListener('click', () => {
  const answer = checkanswer();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
