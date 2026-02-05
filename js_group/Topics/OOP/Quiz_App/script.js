// Data
const questionsData = [
  {
    statement: "What is the capital of India?",
    marks: 10,
    time: 15,
    options: [
      "New Delhi",
      "Kolkata",
      "Patna",
      "Utter Pradesh",
    ],
    correctOption: 0
  },
  {
    statement: "Gangadhar hi ______ hai?",
    marks: 11,
    time: 30,
    options: [
      "Ironman",
      "Harry Potter",
      "Shaktiman",
      "Batman",
    ],
    correctOption: 2
  },
]


// Global Vars
let IntervalId = null;


// UI Logic

const qBox = document.getElementById('q-title');
const ansBox = document.getElementById('q-ans-container');
const timer = document.getElementById('timer');
const nextBtn = document.getElementById('next');


class Question {
  constructor(statement, id, time) {
    this.statement = statement;
    this.id = id;
    this.time = time
  }

  validate() {

  }

  display() {

  }

  startTimer() {
    if (IntervalId) {
      clearInterval(IntervalId);
    }

    let timeLeft = this.time;

    IntervalId = setInterval(() => {
      timeLeft--;
      const min = Math.floor(timeLeft / 60);
      const sec = timeLeft % 60;
      timer.innerText = `${min < 10 ? "0" : " "}${min}:${sec < 10 && "0"}${sec}`;
      timer.style.color = min < 10 ? 'red' : 'black';

      if (timeLeft <= 0) {
        clearInterval(IntervalId);
        nextBtn.click();
      }
    }, 1000)
  }
}

class MCQQuestion {
  constructor(statement, marks, time, options, correctOption) {
    super(statement, marks, time);
    this.options = options;
    this.correctOption = correctOption;
    this.userAnswer = null;
  }

  validate() {
    return this.userAnswer == this.correctOption;
  }

  display() {
    qBox.innerText = this.statement;
    ansBox.innerHTML = "";

    this.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;

      // Add Click event
      button.addEventListener('click', () => {
        this.userAnswer = index;
      });
      ansBox.appendChild(button);
    });
  }
}

class Quiz {


  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.totalMarks = 0;
  }

  start() {
    this.questions[this.currentQuestionIndex].display();
  }

  nextQue() {
    const question = this.questions[this.currentQuestionIndex];

    if (this.questions[this.currentQuestionIndex].validate()) {
      this.score += question.marks;
    }

    this.currentQuestionIndex++;
    this.questions[this.currentQuestionIndex].display();
  }

}

const questions = questionsData.map((q) => {
  const mcqQ = new MCQQuestion(q.statement, q.marks, q.time, q.correctOption);
  return mcqQ;
})

const quiz = new Quiz(questions);
quiz.start();

nextBtn.addEventListener('click', () => {
  quiz.nextQue();
});