console.log("Hello World");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "ROCK";
  } else if (computerChoice === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function getPlayerChoice() {
  let userChoice = prompt("Choose: Rock, Paper, or Scissors");
  return userChoice.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log(`PLAYER WINS! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    console.log(`COMPUTER WINS! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === computerSelection) {
    console.log("IT'S A TIE!");
  } else {
    console.log("ERROR: INVALID CHOICE, CHOOSE ROCK, PAPER, OR SCISSORS");
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Game: ${i}`);
    playRound(getPlayerChoice(), getComputerChoice());
  }
}

game();
