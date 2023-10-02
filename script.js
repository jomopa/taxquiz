const questions = [
    {
    question: "What is the primary purpose of a strategy in the context of business management?",
    answers: [
      { text: "To complicate decision-making processes", correct: false },
      { text: "To act as a heuristic and pool knowledge", correct: true },
      { text: "To create chaos and unpredictability", correct: false },
      { text: "To confuse competitors", correct: false },
    ]
  },
  {
    question: "How does a tactic differ from a strategy?",
    answers: [
      { text: "Tactic involves long-term planning, while strategy focuses on short-term actions", correct: false },
      { text: "Strategy is about winning battles, while tactics are about winning wars", correct: true },
      { text: "There is no difference between strategy and tactic", correct: false },
      { text: "Tactic is the overall plan, while strategy is a specific action scheme", correct: false },
    ]
  },
  {
    question: "Which decade marks the emergence of strategic management as a distinct concept?",
    answers: [
      { text: "1950s", correct: false },
      { text: "1960s", correct: false },
      { text: "1970s", correct: true },
      { text: "1980s", correct: false },
    ]
  },
  {
    question: "Why do humans need strategies according to the notes?",
    answers: [
      { text: "To complicate decision-making processes", correct: false },
      { text: "To act as a source of chaos", correct: false },
      { text: "To simplify decision-making and pool knowledge", correct: true },
      { text: "To make decisions randomly", correct: false },
    ]
  },
  {
    question: "What is the central theme in the evolution of strategic management?",
    answers: [
      { text: "Adapting to Turbulence", correct: false },
      { text: "Corporate Planning", correct: false },
      { text: "The Quest for Competitive Advantage", correct: true },
      { text: "Financial Budgeting", correct: false },
    ]
  },
  {
    question: "What are the elements that, when coupled with effective implementation, lead to successful strategies?",
    answers: [
      { text: "Clear, consistent short-term goals", correct: false },
      { text: "Ambiguous understanding of the competitive environment", correct: false },
      { text: "Objective appraisal of resources", correct: true },
      { text: "A and C", correct: false },
    ]
  },
  {
    question: "Strategic Fit, in the context of a firm's strategy, refers to:",
    answers: [
      { text: "Consistency of a firm's strategy with external and internal environments", correct: true },
      { text: "Competing in a chaotic and unpredictable manner", correct: false },
      { text: "Creating unrelated and disconnected activities", correct: false },
      { text: "Having no connection between a firm's goals and values", correct: false },
    ]
  },
  {
    question: "What is the primary focus of corporate strategy?",
    answers: [
      { text: "Where to compete", correct: true },
      { text: "How to compete", correct: false },
      { text: "When to compete", correct: false },
      { text: "Why to compete", correct: false },
    ]
  },
  {
    question: "How is strategy described in terms of its dynamic dimension?",
    answers: [
      { text: "Strategy as Positioning", correct: false },
      { text: "Strategy as a Direction", correct: true },
      { text: "Strategy as a Reaction", correct: false },
      { text: "Strategy as a Stagnation", correct: false },
    ]
  },
  {
    question: "What does the Basic Framework for Strategy Analysis link?",
    answers: [
      { text: "The firm with its customers", correct: false },
      { text: "The firm with its competitors", correct: false },
      { text: "The firm with its structure and systems", correct: false },
      { text: "The firm with the industry environment", correct: true },
    ]
  },
  {
    question: "What does the static dimension of strategy focus on?",
    answers: [
      { text: "Where to compete", correct: false },
      { text: "How to compete", correct: false },
      { text: "What to achieve", correct: true },
      { text: "When to compete", correct: false },
    ]
  },
  {
    question: "According to Porter, what must activities in a firm's strategy do?",
    answers: [
      { text: "Be unrelated and inconsistent", correct: false },
      { text: "Fit together to form a consistent, mutually reinforcing system", correct: true },
      { text: "Operate independently of each other", correct: false },
      { text: "Have no correlation with the industry environment", correct: false },
    ]
  },
  {
    question: "What does the rate of profit above the cost of capital lead to, according to the notes?",
    answers: [
      { text: "Financial Budgeting", correct: false },
      { text: "Corporate Strategy", correct: true },
      { text: "Tactical Maneuvers", correct: false },
      { text: "Business Strategy", correct: false },
    ]
  },
  {
    question: "What is the value of analytical strategy analysis?",
    answers: [
      { text: "Provides definitive answers", correct: false },
      { text: "Improves the decision process but doesn't give answers", correct: true },
      { text: "Adds complexity to decision-making", correct: false },
      { text: "Restricts flexibility and innovation", correct: false },
    ]
  },
  {
    question: "Which element is NOT mentioned as a common element of successful strategies?",
    answers: [
      { text: "Clear, consistent long-term goals", correct: false },
      { text: "Objective appraisal of resources", correct: false },
      { text: "Ambiguous understanding of the competitive environment", correct: true },
      { text: "Profound understanding of the competitive environment", correct: false },
    ]
  },
  {
    question: "Which decade is associated with the emergence of corporate planning?",
    answers: [
      { text: "1950s", correct: false },
      { text: "1960s", correct: true },
      { text: "1970s", correct: false },
      { text: "1980s", correct: false },
    ]
  },
  {
    question: "What is the primary focus of business strategy?",
    answers: [
      { text: "Where to compete", correct: true },
      { text: "How to compete", correct: false },
      { text: "When to compete", correct: false },
      { text: "Why to compete", correct: false },
    ]
  },
  {
    question: "How does strategy act as a decision support?",
    answers: [
      { text: "By complicating decision-making", correct: false },
      { text: "By simplifying decision-making", correct: true },
      { text: "By adding chaos to decision-making", correct: false },
      { text: "By making decisions randomly", correct: false },
    ]
  },
  {
    question: "What is the purpose of strategy as a target?",
    answers: [
      { text: "To create confusion", correct: false },
      { text: "To motivate aspiration", correct: true },
      { text: "To hinder goal setting", correct: false },
      { text: "To complicate decision-making", correct: false },
    ]
  },
  {
    question: "What is the dynamic dimension of strategy concerned with?",
    answers: [
      { text: "Where to compete", correct: false },
      { text: "How to compete", correct: false },
      { text: "What to achieve", correct: true },
      { text: "When to compete", correct: false },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const maxQuestions = 10;  // Update the number of questions

// Function to shuffle questions randomly
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    // Shuffle all questions before displaying them
    shuffleQuestions(questions);

    // Take the first maxQuestions questions for the quiz
    const selectedQuestions = questions.slice(0, maxQuestions);

    // Shuffle the selected questions
    shuffleQuestions(selectedQuestions);

    // Show the first question
    showQuestion();
}

// Function to reset the state
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to show a question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function to select an answer
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Function to show the final score
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${maxQuestions}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Function to handle the "Next" button
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < maxQuestions) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < maxQuestions) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Start the quiz when the page loads
startQuiz();
