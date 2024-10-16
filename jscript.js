// odin project #1

function computerChoice() {
  let cChoice = "";

  let rNum = Math.random();

  if (rNum >= 0 && rNum <= 0.25) {
    cChoice = "Rock";
  } else if (rNum > 0.25 && rNum <= 0.5) {
    cChoice = "Paper";
  } else if (rNum > 0.5 && rNum <= 0.99) {
    cChoice = "Scissors";
  } else {
    cChoice = "error";
  }

  return cChoice;
}

let winner = "";
let compScore = 0;
let humanScore = 0;
let playRound = (humanChoice) => {
  let computerChoicez = computerChoice();

  // console.log(computerChoice());
  // console.log(humanChoice);
  // console.log(humanChoice == "Rock"); //--> true
  // console.log(computerChoicez == "Rock"); //--> true

  if (humanChoice == "r" && computerChoicez == "Rock") {
    winner = "Tie, both recieve points!";
    compScore += 1;
    humanScore += 1;
    // console.log('yes')
  } else if (humanChoice == "r" && computerChoicez == "Paper") {
    winner = "Computer wins --> Paper covers rock";
    compScore += 1;
  } else if (humanChoice == "r" && computerChoicez == "Scissors") {
    winner = "You win --> Rock beats scissors ";
    humanScore += 1;
  } else if (humanChoice == "p" && computerChoicez == "Paper") {
    winner = "Tie, both recieve points!";
    compScore += 1;
    humanScore += 1;
  } else if (humanChoice == "p" && computerChoicez == "Rock") {
    winner = "You win --> Paper covers rock";
    humanScore += 1;
  } else if (humanChoice == "p" && computerChoicez == "Scissors") {
    winner = "Computer wins --> Scissors cuts paper ";
    compScore += 1;
  } else if (humanChoice == "s" && computerChoicez == "Scissors") {
    winner = "Tie, both recieve points!";
    compScore += 1;
    humanScore += 1;
  } else if (humanChoice == "s" && computerChoicez == "Paper") {
    winner = "You win --> Scissors cuts paper";
    humanScore += 1;
  } else if (humanChoice == "s" && computerChoicez == "Rock") {
    winner = "Computer wins --> Rock breaks Scissors ";
    compScore += 1;
  } else {
    winner = "error";
    humanScore = -1;
    compScore = -1;
  }
  // console.log(winner)
  display();
};

let restart = () => {
  document.getElementById("restartBtn").addEventListener("click", function () {
    compScore = 0;
    humanScore = 0;
    document.querySelector(".outcomeSign").style.display = "none";
    document.querySelector(".humanCounter").innerHTML = humanScore;
    document.querySelector(".computerCounter").innerHTML = compScore;
  });
};

const display = () => {
  document.querySelector(".outcomeSign").style.display = "flex";
  document.getElementById("txt").innerHTML = winner;
  document.querySelector(".humanCounter").innerHTML = humanScore;
  document.querySelector(".computerCounter").innerHTML = compScore;
};

restart();

const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorBtn");

//help from --> https://stackoverflow.com/questions/70747536/how-to-check-if-a-button-is-clicked-inside-an-if-statement?answertab=createdasc#tab-top

rock.addEventListener("click", function () {
  playRound("r");
});
paper.addEventListener("click", function () {
  playRound("p");
});
scissors.addEventListener("click", function () {
  playRound("s");
});
