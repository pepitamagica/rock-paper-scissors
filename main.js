const ROCK_WINS = ["SCISSORS"];
const PAPER_WINS = ["ROCK"];
const SCISSORS_WINS = ["PAPER"];

function computerSelection() {
    const computerSelect = ["Rock", "Paper", "Scissors"];
    const random = Math.round(Math.random() * 2);
    
    return computerSelect[random].toUpperCase();
}

function playerSelection() {
    const playerSelect = prompt("Enter your choice");

    return playerSelect.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    console.log(
        `player: ${playerSelection}
         comput: ${computerSelection}`
    );
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "PLAYER WINS";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "PLAYER WINS";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "PLAYER WINS"; 
    } else if (playerSelection === computerSelection) {
        return "DRAW"
    } else {
        return "COMPUTER WINS";
    }
}