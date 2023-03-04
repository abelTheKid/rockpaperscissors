let playerScore = 0;
let computerScore = 0;
// Computer's choice

function getComputerChoice() {
    let computerOptions = ["rock", "paper", "scissors"];
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];

}


function singleRound (computerSelection, playerSelection) {
if (computerSelection == "rock" && playerSelection == "scissors") {
    computerScore +=1;
   return "You lose! Rock beats scissors!"
}
else if (computerSelection == "paper" && playerSelection == "rock") {
    computerScore +=1;
    return "You lose! Paper beats rock!"
    }
else if (computerSelection == "scissors" && playerSelection == "paper") {
    computerScore +=1;
    return "You lose! Scissors beat paper!"
    }
else if (computerSelection == "scissors" && playerSelection == "rock") {
    playerScore += 1;
    return "You win! Rock beats scissors!"
    }
else if (computerSelection == "paper" && playerSelection == "scissors") {
    playerScore += 1;
        return "You win! Scissors beat paper!"
    }
else if (computerSelection == "rock" && playerSelection == "paper") {
    playerScore += 1;
        return "You win! Paper beats rock!"
    }
else if (computerSelection == playerSelection) {
        return "It's a tie! Let's go again!"
    }
}



function game() {
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Type rock, paper or scissors to test your luck!");
    let playerSelection = playerInput.toLowerCase();
    let computerSelection = getComputerChoice();
console.log("Player selection: " + playerSelection)
console.log("Computer selection: " + computerSelection)   
console.log(singleRound(computerSelection, playerSelection))
    }

}
game();


function finals() {
    if (computerScore > playerScore) {
        alert("Computer wins! You suck!")
    }
    else if (playerScore > computerScore) {
        alert("Player wins! You rule!")
    }
}
finals()
