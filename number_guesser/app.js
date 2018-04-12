// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI values
const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessInput = document.querySelector("#guess-input"),
    guessBtn = document.querySelector("#guess-btn"),
    message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// LIstener for guess

guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);
    // Validation
    if (isNaN(guess) || guess > max || guess < min) {
        setMessage(`Please enter number between ${min} and ${max}`, "red");
    } else {
        // Check if won
        if (guess === winningNum) {
            guessInput.disable = true;
            guessInput.style.borderColor = "green";
            setMessage(`${winningNum} is correct!!!`, "green");
        } else {
            guessesLeft -= 1;
            if (guessesLeft === 0) {
                guessInput.disable = true;
                guessInput.style.borderColor = "red";
                setMessage(`Game Over, you lost. The correct number was ${winningNum}`, "red");
            } else {
                guessInput.value = "";
                guessInput.style.borderColor = "red";
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
            }
        }
    }
});

// Set message

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}