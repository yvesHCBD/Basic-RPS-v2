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

function getPlayerChoice(e) {
  // let userChoice = prompt("Choose: Rock, Paper, or Scissors");
  // return userChoice.toUpperCase();
  //
  // if (e.target.textContent === "Rock") {
  //   console.log("Rock");
  // }
  return e.target.textContent;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    // console.log(`PLAYER WINS! ${playerSelection} beats ${computerSelection}`);
    return "PLAYER WINS";
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    // console.log(`COMPUTER WINS! ${computerSelection} beats ${playerSelection}`);
    return "COMPUTER WINS";
  } else if (playerSelection === computerSelection) {
    // console.log("IT'S A TIE!");
    return "TIE";
    // } else {
    //   // console.log("ERROR: INVALID CHOICE, CHOOSE ROCK, PAPER, OR SCISSORS");
    // }
  }
}

function playGame(e) {
  let playerCounter = 0;
  let computerCounter = 0;
  for (let i = 1; i <= 5; i++) {
    console.log(`Game: ${i}`);
    if (playRound(getPlayerChoice(e), getComputerChoice()) === "PLAYER WINS") {
      playerCounter++;
    } else {
      computerCounter++;
    }
  }
  if (playerCounter > computerCounter) {
    console.log(
      `PLAYER WON ${playerCounter} ROUNDS VS. COMPUTER'S ${computerCounter}`
    );
  } else {
    console.log(
      `COMPUTER WON ${computerCounter} ROUNDS VS. PLAYER'S ${playerCounter}`
    );
  }
}

function showOutcome() {
  // const container = document.querySelector("#body-container");
  // const div_content = document.createElement("div");
  // div_content.classList.add("div_content");
  // div_content.textContent = "Outcome: ";
  // container.appendChild(div_content);
  document.getElementById("outcome").innerHTML = "Outcome: ";
}

const button = document.getElementById("rock-button");
button.addEventListener("click", (e) => {
  playGame(e);
});

const paperbutton = document.getElementById("paper-button");
paperbutton.addEventListener("click", (e) => {
  getPlayerChoice(e);
});

const scissorsbutton = document.getElementById("scissors-button");
scissorsbutton.addEventListener("click", (e) => {
  getPlayerChoice(e);
});
