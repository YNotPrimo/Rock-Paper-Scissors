let playerPoint = 0;
let computerPoints = 0;
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

function computerPlay() {
    let choose = [
        ROCK,
		PAPER,
		SCISSORS
    ]
    let chosenNumber = Math.floor(Math.random() * 4);
    return choose[chosenNumber];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

	if (player === computer) {
		return 'Tie.';
	}
	else if (
		(computer === ROCK && player === SCISSORS) ||
		(computer === PAPER && player === ROCK) ||
		(computer === SCISSORS && player === PAPER)
	) {
		computerPointsIncrease();
		return 'Computer Wins.';
	}
	else {
		playerPointsIncrease();
		return 'Player Wins.';
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
