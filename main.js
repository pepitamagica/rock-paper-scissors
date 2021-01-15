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

function playGame(rounds) {
    let playerWins = 0;
    let computerWins = 0;
    
    for (i = 0; i < rounds; i++) {
        let result = "";

        result = playRound(playerSelection(), computerSelection());
        switch(result) {
            case "PLAYER WINS":
                playerWins++;
                break;
            case "COMPUTER WINS":
                computerWins++;
                break;
            default:
                console.log("DRAW (do nothing)");
        }
    }

    if (playerWins > computerWins) {
        console.log("YOU WIN");
    } else if (computerWins > playerWins) {
        console.log("COMPUTER WINS");
    } else {
        console.log("DRAW");
    }
}