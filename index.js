let playerPoint = 0;
let computerPoints = 0;

function computerPlay() {
    let choose = ["Rock", "Paper", "Scissors"]
    let chosenNumber = Math.floor(Math.random() * 4);
    return choose[chosenNumber];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == "Rock") {
        if (computer == "Rock") { return "Tie."; }
        else if (computer == "Paper") {
            computerPointsIncrease();
            return "Computer Wins.";
        }
        else if (computer == "Scissors") {
            playerPointsIncrease();
            return "Player Wins.";
        }
    } else if (player == "Paper") {
        if (computer == "Rock") {
            playerPointsIncrease();
            return "Player Wins.";
        }
        else if (computer == "Paper") { return "Tie."; }
        else if (computer == "Scissors") {
            computerPointsIncrease();
            return "Computer Wins.";
        }
    } else if (player == "Scissors") {
        if (computer == "Rock") {
            computerPointsIncrease();
            return "Computer Wins.";
        }
        else if (computer == "Paper") {

            playerPointsIncrease();
            return "Player Wins.";
        }
        else if (computer == "Scissors") { return "Tie."; }
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt();
        console.log(playRound(playerChoice, computerPlay));
    }
}

function playerPointsIncrease() {
    playerPoints++;
}

function computerPointsIncrease() {
    computerPoints++;
}