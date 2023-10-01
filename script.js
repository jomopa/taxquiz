const questions = [
    {
        question: "What is the economic perspective of a tax?",
        answers: [
            { text: "A voluntary contribution to the government.", correct: false },
            { text: "Any required payments to government.", correct: true },
            { text: "Payments that are considered a penalty.", correct: false },
            { text: "Imposition of costs on individuals or firms by the Government.", correct: false },
        ]
    },
    {
        question: "In European and Latin American countries, which of the following is not a subset of compulsory contributions?",
        answers: [
            { text: "User fees", correct: false },
            { text: "Special contribution", correct: false },
            { text: "Taxes", correct: false },
            { text: "Penalties", correct: true },
        ]
    },
    {
        question: "What is a characteristic of direct taxes?",
        answers: [
            { text: "Burden can be shifted to the final consumer.", correct: false },
            { text: "Levied on products or services.", correct: false },
            { text: "Collection is easier.", correct: false },
            { text: "Paid directly by the person concerned.", correct: true },
        ]
    },
    {
        question: "What is the general consensus about indirect taxes?",
        answers: [
            { text: "Levied on income and activities.", correct: false },
            { text: "Burden cannot be shifted.", correct: false },
            { text: "Collection is more difficult.", correct: false },
            { text: "Burden can be shifted to the final consumer.", correct: true },
        ]
    },
    {
        question: "What does the incidence criterion measure?",
        answers: [
            { text: "The legal definition of taxes.", correct: false },
            { text: "The distribution of a tax's economic burden.", correct: true },
            { text: "The ease of tax collection.", correct: false },
            { text: "The legality of tax treaties.", correct: false },
        ]
    },
    {
        question: "What are the sources of international tax law?",
        answers: [
            { text: "Legislation, regulation, and case-law.", correct: false },
            { text: "Tax treaties, EU law, and WTO law.", correct: true },
            { text: "Amount, taxpayer, and collector.", correct: false },
            { text: "Model Tax Convention, transfer pricing rules, and penalties.", correct: false },
        ]
    },
    {
        question: "What do Double Tax Treaties (DDTs) establish?",
        answers: [
            { text: "International obligations for sovereign states.", correct: true },
            { text: "New taxes in participating countries.", correct: false },
            { text: "A framework for judicial double taxation.", correct: false },
            { text: "The supremacy of domestic tax laws.", correct: false },
        ]
    },
    {
        question: "What is economic double taxation?",
        answers: [
            { text: "When the same item is taxed twice in the hands of two different taxpayers.", correct: true },
            { text: "When the same item is taxed twice in the hands of the same taxpayer.", correct: false },
            { text: "When taxes are levied on income and activities.", correct: false },
            { text: "When taxes cannot be shifted to the final consumer.", correct: false },
        ]
    },
    {
        question: "What legal principle governs the relationship between Double Tax Treaties (DDTs) and domestic definitions?",
        answers: [
            { text: "DTTs create taxes.", correct: false },
            { text: "Supremacy of tax conventions.", correct: true },
            { text: "Economic burden cannot be measured.", correct: false },
            { text: "Collection rights of tax authorities.", correct: false },
        ]
    },
    {
        question: "What is the primary function of taxation described as the ability to reduce wealth inequalities?",
        answers: [
            { text: "Regulatory function", correct: false },
            { text: "Revenue-raising function", correct: false },
            { text: "Redistributive function", correct: true },
            { text: "Tax Neutrality Theory", correct: false },
        ]
    },
    {
        question: "According to the Tax Neutrality Theory, what is the main argument regarding taxation and its impact on economic activities?",
        answers: [
            { text: "Tax policy should focus on regulating behaviors.", correct: false },
            { text: "Taxation should not play a role in redistributing wealth.", correct: true },
            { text: "Tax-distorted decisions result in increased total wealth.", correct: false },
            { text: "Taxation should prioritize Pigouvian taxes.", correct: false },
        ]
    },
    {
        question: "What is a characteristic of Pigouvian Taxes?",
        answers: [
            { text: "Designed to make taxpayers internalize positive externalities.", correct: false },
            { text: "Used to fund spending programs.", correct: false },
            { text: "Intended to create positive externalities.", correct: false },
            { text: "Implemented to internalize negative externalities, such as environmental taxes.", correct: true },
        ]
    },
    {
        question: "What are Tax Expenditures in the context of tax policy?",
        answers: [
            { text: "Direct spending programs.", correct: false },
            { text: "Alternatives to Pigouvian Taxes.", correct: false },
            { text: "Tax credits, deductions, exemptions, etc.", correct: true },
            { text: "Regulations to control economic activities.", correct: false },
        ]
    },
    {
        question: "What is the primary goal of the revenue-raising function of taxation?",
        answers: [
            { text: "To fund spending programs.", correct: false },
            { text: "To influence investment decisions.", correct: false },
            { text: "To pay for the welfare state.", correct: true },
            { text: "To reduce wealth inequalities.", correct: false },
        ]
    },
    {
        question: "According to the provided rules, when does an individual have to pay taxes in the source country for employment income?",
        answers: [
            { text: "When the paying company is not resident in the source country.", correct: true },
            { text: "When the individual spends more than 183 days in the source country.", correct: true },
            { text: "When the employment is physically carried out in the source country.", correct: true },
            { text: "All of the above.", correct: true },
        ]
    },
    {
        question: "In tax conventions, what does Article 15 generally address?",
        answers: [
            { text: "Rules for tax neutrality.", correct: false },
            { text: "Criteria for determining tax residency.", correct: false },
            { text: "Tie-breaker rules in case of conflicts.", correct: true },
            { text: "Pigouvian taxes.", correct: false },
        ]
    },
    {
        question: "What is the economic principle associated with tax incentives for R&D, as mentioned in the notes?",
        answers: [
            { text: "Regulatory function.", correct: false },
            { text: "Progressive taxation.", correct: false },
            { text: "Positive externalities.", correct: true },
            { text: "Tax Expenditures.", correct: false },
        ]
    },
    {
        question: "What is the main argument presented by opponents to the Tax Neutrality Theory?",
        answers: [
            { text: "Taxation should not play a role in redistributing wealth.", correct: false },
            { text: "Incidental redistribution and regulation are inherent to taxation.", correct: true },
            { text: "Tax-distorted decisions result in increased total wealth.", correct: false },
            { text: "Tax neutrality represents a self-limitation of government’s tax sovereignty.", correct: false },
        ]
    },
    {
        question: "What is the purpose of the Family ties presumption criterion in determining taxation?",
        answers: [
            { text: "To determine tax residency.", correct: true },
            { text: "To influence investment decisions.", correct: false },
            { text: "To create positive externalities.", correct: false },
            { text: "To fund spending programs.", correct: false },
        ]
    },
    {
        question: "Who holds the Taxing Power in multi-level systems, according to the notes?",
        answers: [
            { text: "Central government only", correct: false },
            { text: "Local government only", correct: false },
            { text: "Both central and local governments", correct: true },
            { text: "International organizations", correct: false },
        ]
    },
    {
        question: "What is the primary function of international and supranational organizations in the context of taxation?",
        answers: [
            { text: "Levying taxes", correct: false },
            { text: "Establishing limits to State’s taxing power", correct: true },
            { text: "Implementing tax policies", correct: false },
            { text: "Opting out of national tax law", correct: false },
        ]
    },
    {
        question: "Which of the following is an exercise of Taxing Power mentioned in the notes?",
        answers: [
            { text: "Legislative", correct: true },
            { text: "Executive", correct: false },
            { text: "Judiciary", correct: false },
            { text: "Administrative", correct: true },
        ]
    },
    {
        question: "In Commonwealth countries, how are tax laws typically structured?",
        answers: [
            { text: "Stand-alone, containing both substantive and procedural rules", correct: true },
            { text: "In a single 'Tax Code'", correct: false },
            { text: "With procedural rules only", correct: false },
            { text: "Without any procedural rules", correct: false },
        ]
    },
    {
        question: "What is the purpose of a Tax Return in the context of tax determination?",
        answers: [
            { text: "To determine tax residency", correct: false },
            { text: "To initiate a tax audit", correct: false },
            { text: "To carry forward tax losses", correct: true },
            { text: "To pre-fill tax returns", correct: false },
        ]
    },
    {
        question: "What is the primary goal of an Advance ruling, as mentioned in the notes?",
        answers: [
            { text: "To issue penalties", correct: false },
            { text: "To provide guidance on tax law interpretation", correct: true },
            { text: "To create positive externalities", correct: false },
            { text: "To determine tax residency", correct: false },
        ]
    },
    {
        question: "What is the role of supreme and constitutional courts in tax cases?",
        answers: [
            { text: "To issue tax amnesties", correct: false },
            { text: "To decide on consistency with constitutional principles", correct: true },
            { text: "To enforce tax penalties", correct: false },
            { text: "To conduct tax audits", correct: false },
        ]
    },
    {
        question: "Which principle dictates that taxes must be imposed by law, not by administrative bodies?",
        answers: [
            { text: "Principle of retroactivity", correct: false },
            { text: "Principle of non-retroactivity", correct: true },
            { text: "Principle of procedural equality", correct: false },
            { text: "Principle of de facto retroactivity", correct: false },
        ]
    },
    {
        question: "What does the Principle of equality in tax law primarily aim to prevent?",
        answers: [
            { text: "Tax evasion", correct: false },
            { text: "Discrimination between taxpayers", correct: true },
            { text: "Tax amnesties", correct: false },
            { text: "Procedural defects in tax audits", correct: false },
        ]
    },
    {
        question: "What is the key difference between Tax evasion and Tax avoidance?",
        answers: [
            { text: "Both involve open violations of tax law", correct: false },
            { text: "Both are considered tax crimes", correct: false },
            { text: "Tax evasion is an open violation, while tax avoidance involves legal compliance but substantial inconsistency with tax law", correct: true },
            { text: "Tax avoidance is an open violation, while tax evasion involves legal compliance", correct: false },
        ]
    },
    {
        question: "What is the basic criteria for tax residence known as the 'Presence test'?",
        answers: [
            { text: "Economic interest", correct: false },
            { text: "Family Test", correct: false },
            { text: "183 days rule", correct: true },
            { text: "Tie breaker rules", correct: false },
        ]
    },
    {
        question: "How is the 'Presence test' typically proven in tax residency determination?",
        answers: [
            { text: "Sources of income", correct: false },
            { text: "Plane tickets and use of credit cards", correct: true },
            { text: "Sporadic absences", correct: true },
            { text: "Double Taxation Treaties", correct: false },
        ]
    },
    {
        question: "What is analyzed together with sources of income when applying the 'Economic interest test' for tax residency?",
        answers: [
            { text: "Plane tickets", correct: false },
            { text: "Sources of wealth", correct: true },
            { text: "Sporadic absences", correct: false },
            { text: "Tie breaker rules", correct: false },
        ]
    },
    {
        question: "In case of conflict in tax residency determination, what provides conflict-tier rules?",
        answers: [
            { text: "Double Taxation Treaties", correct: true },
            { text: "183 days rule", correct: false },
            { text: "Economic interest test", correct: false },
            { text: "Family Test", correct: false },
        ]
    },
    {
        question: "What are examples of Tie breaker rules in Tax Treaties?",
        answers: [
            { text: "183 days rule", correct: false },
            { text: "Permanent home at disposal", correct: true },
            { text: "Economic interest test", correct: false },
            { text: "Sporadic absences", correct: false },
        ]
    },
    {
        question: "What does the 'Global concept of income' include?",
        answers: [
            { text: "Only returns on factors of production", correct: false },
            { text: "Unrealized gains", correct: true },
            { text: "Proceeds generated by specific assets", correct: false },
            { text: "Deemed proceeds", correct: false },
        ]
    },
    {
        question: "Which countries follow the 'Global Model' of income taxation?",
        answers: [
            { text: "Spain and Italy", correct: false },
            { text: "Australia and Canada", correct: true },
            { text: "Germany and Austria", correct: false },
            { text: "Russia and Slovakia", correct: false },
        ]
    },
    {
        question: "What is a characteristic of the 'Schedular Model' of income taxation in Europe?",
        answers: [
            { text: "Different tax rates for different categories of income", correct: true },
            { text: "Loss compensation between income categories", correct: false },
            { text: "Common (progressive) tax rate", correct: false },
            { text: "Final comprehensive tax base", correct: false },
        ]
    },
    {
        question: "What type of taxes are typically applied to income from mobile sources like dividends and interests?",
        answers: [
            { text: "Common (progressive) tax rate", correct: false },
            { text: "Flat rates", correct: true },
            { text: "Schedular taxes", correct: false },
            { text: "Withholding flat taxes", correct: false },
        ]
    },
    {
        question: "What are the two opposite concepts related to income realization and taxing time?",
        answers: [
            { text: "Double Taxation and Single Taxation", correct: false },
            { text: "Accrual method and Cash-flow method", correct: true },
            { text: "Global Model and Schedular Model", correct: false },
            { text: "183 days rule and Economic interest test", correct: false },
        ]
    },
    {
        question: "What is a characteristic of direct taxes?",
        answers: [
            { text: "Burden can be shifted to the final consumer.", correct: false },
            { text: "Levied on products or services.", correct: false },
            { text: "Collection is easier.", correct: false },
            { text: "Paid directly by the person concerned.", correct: true },
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
