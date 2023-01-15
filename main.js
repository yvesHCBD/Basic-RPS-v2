console.log("Hello World");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else if (computerChoice === 2) {
    return "Scissors";
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

function truePlayGame(e) {
  let computerSelection = getComputerChoice();
  if (
    (e.target.textContent === "Rock" && computerSelection === "Scissors") ||
    (e.target.textContent === "Paper" && computerSelection === "Rock") ||
    (e.target.textContent === "Scissors" && computerSelection === "Paper")
  ) {
    return `${e.target.textContent} BEATS ${computerSelection}`;
    // console.log(`${e.target.textContent} BEATS ${computerSelection}`);
    // console.log("PLAYER WINS!");
    // console.log("PLAYER WINS!");
  } else if (
    (computerSelection === "Rock" && e.target.textContent === "Scissors") ||
    (computerSelection === "Paper" && e.target.textContent === "Rock") ||
    (computerSelection === "Scissors" && e.target.textContent === "Paper")
  ) {
    return `${computerSelection} BEATS ${e.target.textContent}`;
    // console.log(`${computerSelection} BEATS ${e.target.textContent}`);
    // console.log("COMPUTER WINS");
    // console.log("COMPUTER WINS");
  } else {
    return `IT'S A TIE!`;
  }
}

const container = document.querySelector("#body-container");
const div_content = document.createElement("div");
function showOutcome(e) {
  div_content.classList.add("div_content");
  // div_content.textContent = "Outcome: ";
  container.appendChild(div_content);
  document.getElementById("outcome").innerHTML = truePlayGame(e);
}

const rockbutton = document.getElementById("rock-button");
rockbutton.addEventListener("click", (e) => {
  // truePlayGame(e);
  showOutcome(e);
});

const paperbutton = document.getElementById("paper-button");
paperbutton.addEventListener("click", (e) => {
  // truePlayGame(e);
  showOutcome(e);
});

const scissorsbutton = document.getElementById("scissors-button");
scissorsbutton.addEventListener("click", (e) => {
  // truePlayGame(e);
  showOutcome(e);
});
