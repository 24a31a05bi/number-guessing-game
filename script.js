let maxNumber = 50;
let randomNumber = generateRandom();
let attempts = 0;

const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const winSound = document.getElementById("winSound");
const wrongSound = document.getElementById("wrongSound");

// Pleasant volume levels
winSound.volume = 0.5;
wrongSound.volume = 0.3;

function generateRandom() {
    return Math.floor(Math.random() * maxNumber) + 1;
}

function setDifficulty() {
    const level = document.getElementById("difficulty").value;

    if (level === "easy") maxNumber = 50;
    else if (level === "medium") maxNumber = 100;
    else maxNumber = 500;

    restartGame();
}

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);

    if (!userGuess || userGuess < 1 || userGuess > maxNumber) {
        message.textContent = `❌ Enter a number between 1 and ${maxNumber}`;
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        attemptsText.textContent = `Attempts: ${attempts}`;
        winSound.play();
    } 
    else if (userGuess < randomNumber) {
        message.textContent = "📉 Too Low!";
        wrongSound.play();
    } 
    else {
        message.textContent = "📈 Too High!";
        wrongSound.play();
    }
}

function restartGame() {
    randomNumber = generateRandom();
    attempts = 0;
    message.textContent = "";
    attemptsText.textContent = "";
    document.getElementById("guessInput").value = "";
}
