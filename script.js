const flashcards = [
    { question: "What is HTML?", answer: "HyperText Markup Language" },
    { question: "What is CSS?", answer: "Cascading Style Sheets" },
    { question: "What is JavaScript?", answer: "A programming language for the web" },
    { question: "What does DOM stand for?", answer: "Document Object Model" }
];

let currentCard = 0;
let isFlipped = false;

const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const card = document.getElementById('card');

function flipCard() {
    isFlipped = !isFlipped;
    card.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
}

function updateCard(index) {
    questionText.textContent = flashcards[index].question;
    answerText.textContent = flashcards[index].answer;
    if (isFlipped) flipCard(); // Ensure card is reset to front when changing
}

function prevCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    updateCard(currentCard);
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    updateCard(currentCard);
}

// Initial load
updateCard(currentCard);
