let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("playerChoice").textContent = "Your choice: " + playerChoice;
    document.getElementById("computerChoice").textContent = "Computer choice: " + computerChoice;

    let result = "";

    if (playerChoice === computerChoice) { result = "It's a tie!"; }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    document.getElementById("result").textContent = result;
    document.getElementById("playerScore").textContent = "Your Score: " + playerScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerChoice").textContent = "Your choice: ";
    document.getElementById("computerChoice").textContent = "Computer choice: ";
    document.getElementById("result").textContent = "";
    document.getElementById("playerScore").textContent = "Your Score: 0";
    document.getElementById("computerScore").textContent = "Computer Score: 0";
}