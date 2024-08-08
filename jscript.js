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

let rckFunc = () => {
  document.querySelector(".outcomeSign").style.display = "flex";
  humanChoice = "Rock";
  return humanChoice;
};
let pprFunc = () => {
  document.querySelector(".outcomeSign").style.display = "flex";
  humanChoice = "Paper";
  return humanChoice;
};
let scrsFunc = () => {
  document.querySelector(".outcomeSign").style.display = "flex";
  humanChoice = "Scissors";
  return humanChoice;
};
finalArr = [];
let playRound = (computerChoice) => {
  let humanChoice = "";
  var winner = "";
  let compScore = 0;
  let humanScore = 0;

  document.querySelector("#rockBtn").addEventListener("click", rckFunc);
  document.querySelector("#paperBtn").addEventListener("click", pprFunc);
  document.querySelector("#scissorBtn").addEventListener("click", scrsFunc);

  if (humanChoice == "Rock" && computerChoice == "Rock") {
    winner = "Tie, both recieve points!";
    compScore += 1;
    humanScore += 1;
  }
  else if (humanChoice == "Rock" && computerChoice == "Paper") {
    winner = "Computer wins --> paper covers rock";
    compScore += 1;
  }
  else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    winner = "You win --> rock beats scissors ";
    humanScore += 1;
  }
  else if (humanChoice == "Paper" && computerChoice == "Paper") {
    winner = "Tie, both recieve points!";
    compScore += 1;
    humanScore += 1;
  }
  else if (humanChoice == "Paper" && computerChoice == "Rock") {
    winner = "You win --> paper covers rock";
    humanScore += 1;
  }
  else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    winner = "Computer wins --> scissors cuts paper ";
    compScore += 1;
  }
  else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
    winner = "Tie, both recieve points!";
    compScore += 1;
    humanScore += 1;
  }
  else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    winner = "You win --> scissors cuts paper";
    humanScore += 1;
  }
  else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    winner = "Computer wins --> Rock ";
    compScore += 1;
  }
  else{
    winner='error';
    humanScore=-1;
    compScore=-1;
  }
  finalArr[0] = winner;
  finalArr[1] = humanScore;
  finalArr[2] = compScore;
  console.log(finalArr);

  return finalArr;
};
document.getElementById("txt").innerHTML = finalArr[0];
document.querySelector(".humanCounter").innerHTML = finalArr[1];
document.querySelector(".computerCounter").innerHTML = finalArr[2];

playRound(computerChoice());

let restart = () => {
  document.getElementById("restartBtn").addEventListener("click", function () {
    document.querySelector(".outcomeSign").style.display = "none";
    document.querySelector(".humanCounter").innerHTML = "0";
    document.querySelector(".computerCounter").innerHTML = "0";
  });
};

restart();
