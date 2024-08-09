

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





// let humanPick = () => {
//   let humanChoice = "";
//   let rckFunc = () => {
//     // document.querySelector(".outcomeSign").style.display = "flex";
//     humanChoice = "Rock";
//     console.log("chosen:", humanChoice);
//   };
//   let pprFunc = () => {
//     // document.querySelector(".outcomeSign").style.display = "flex";
//     humanChoice = "Paper";
//     // console.log('chosen:', humanChoice)
//   };
//   let scrsFunc = () => {
//     // document.querySelector(".outcomeSign").style.display = "flex";
//     humanChoice = "Scissors";
//     console.log("chosen:", humanChoice);
//   };


//   return humanChoice;
// };


let winner = "";
let compScore = 0;
let humanScore = 0;


let playRound = (humanChoice) => {
  computerChoice();

  console.log(computerChoice());
  console.log(humanChoice);

  if (humanChoice == "Rock" && computerChoice == "Rock") {
    winner = "Tie, both recieve points!";
    compScore += 1;
    humanScore += 1;
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    winner = "Computer wins --> paper covers rock";
    compScore += 1;
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    winner = "You win --> rock beats scissors ";
    humanScore += 1;
  } else if (humanChoice == "Paper" && computerChoice == "Paper") {
    winner = "Tie, both recieve points!";
    compScore += 1;
    humanScore += 1;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    winner = "You win --> paper covers rock";
    humanScore += 1;
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    winner = "Computer wins --> scissors cuts paper ";
    compScore += 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
    winner = "Tie, both recieve points!";
    compScore += 1;
    humanScore += 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    winner = "You win --> scissors cuts paper";
    humanScore += 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    winner = "Computer wins --> Rock ";
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
    document.querySelector(".outcomeSign").style.display = "none";
    document.querySelector(".humanCounter").innerHTML = "0";
    document.querySelector(".computerCounter").innerHTML = "0";
    computerChoice();
  });
};

const display = () => {
  document.querySelector(".outcomeSign").style.display = "flex";
  document.getElementById("txt").innerHTML = winner;
  document.querySelector(".humanCounter").innerHTML = humanScore;
  document.querySelector(".computerCounter").innerHTML = compScore;
};

// playRound();
// playRound(humanPick(), computerChoice());

// humanPick();
// playgame();

restart();


const rock=document.querySelector("#rockBtn");
const paper= document.querySelector("#paperBtn");
const scissors=document.querySelector("#scissorBtn");


rock.addEventListener("click", function(){playRound('Rock')});
paper.addEventListener("click", function(){playRound('Paper')});
scissors.addEventListener("click",function(){playRound('Scissors')});