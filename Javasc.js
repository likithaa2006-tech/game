const choices = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const resultText = document.getElementById("result");
const computerChoiceText = document.getElementById("computer-choice");

const userScoreText = document.getElementById("user-score");
const computerScoreText = document.getElementById("computer-score");

rock.onclick = () => playGame("rock");

paper.onclick = () => playGame("paper");

scissors.onclick = () => playGame("scissors");

function playGame(userChoice){

    const randomIndex = Math.floor(Math.random()*3);

    const computerChoice = choices[randomIndex];

    computerChoiceText.innerHTML =
    "Computer chose: " + computerChoice;

    if(userChoice === computerChoice){

        resultText.innerHTML = "Match Draw 🤝";

    }

    else if(
        (userChoice==="rock" && computerChoice==="scissors")||
        (userChoice==="paper" && computerChoice==="rock")||
        (userChoice==="scissors" && computerChoice==="paper")
    ){

        userScore++;

        userScoreText.innerHTML = userScore;

        resultText.innerHTML = "You Win 🎉";

    }

    else{

        computerScore++;

        computerScoreText.innerHTML =
        computerScore;

        resultText.innerHTML =
        "Computer Wins 😢";

    }

}