// Game values
let min = 1,
  max = 10,
  winningNum = getRandomInt(min, max),
  guessesLeft = 3;

console.log(winningNum);

function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
    
}


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

// Listenert to play again
game.addEventListener("mousedown", function(e) {
    if(e.target.className === "play-again"){
        window.location.reload();
    }  
});

// LIstener for guess

guessBtn.addEventListener("click", function () {
    console.log("I'm working");
    
    let guess = parseInt(guessInput.value);
    // Validation
    if (isNaN(guess) || guess > max || guess < min) {
        setMessage(`Please enter number between ${min} and ${max}`, "red");
    } else {
        // Check if won
        if (guess === winningNum) {
            gameOver(true, `${winningNum} is correct, YOU WIN!!!`);
        } else {
            guessesLeft -= 1;
            if (guessesLeft === 0) {
                gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            } else {
                guessInput.value = "";
                guessInput.style.borderColor = "red";
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
            }
        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? (color = "green") : (color = "red");
    console.log(color);
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";   
}

// Set message

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}