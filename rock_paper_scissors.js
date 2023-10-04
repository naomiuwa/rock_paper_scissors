let playerMove = "scissors";
let computerMove = "scissors";

//TASK 1
//write if statements that will determine the winner of the game
//e.g if playerMove chooses 'rock' & computerMove chooses 'paper', computerMove wins!
//change the hard-coded values for playerMove and computerMove
//console.log the expected outcome (win, lose, draw) in each if statement

//if playerMove chooses 'rock' & computerMove chooses 'paper' - computerMove wins
//if playerMove chooses 'paper' & computerMove chooses 'rock' - playerMove wins

if (playerMove === "rock" && computerMove === "paper") {
  //console.log("Computer Wins!")
} else if (playerMove === "paper" && computerMove === "rock") {
  //console.log("Player Wins!")
} else {
  //console.log("It's a draw!");
}

//if playerMove chooses 'rock' & computerMove chooses 'scissors' - playerMove wins
//if playerMove chooses 'scissors' & computerMoves chooses 'rock' - computerMove wins

if (playerMove === "rock" && computerMove === "scissors") {
  //console.log("Player Wins!")
} else if (playerMove === "scissors" && computerMove === "rock") {
  //console.log("Computer Wins!")
} else {
  //console.log("It's a draw!");
}

//if playerMove chooses 'paper' & computerMove chooses 'scissors' - computerMove wins
//if playerMove chooses 'scissors' & computerMove chooses 'paper' - playerMove wins

if (playerMove === "paper" && computerMove === "scissors") {
  //console.log("Computer Wins!");
} else if (playerMove === "scissors" && computerMove === "paper") {
  //console.log("Player Wins!");
} else {
  //console.log("It's a draw!");
}

//TASK 2
//turn the if statements into a function
//set up a function which takes in player1 and player2 as parameters
//if player1 wins return 1
//if player2 wins return -1
//if its a draw return 0

function getWinner (player1, player2) {
    if (player1 === "paper" && player2 === "rock" || player1 === "rock" && player2 === "scissors" || player1 === "scissors" && player2 === "paper") {
        return 1; 
    } else if (player1 === "rock" && player2 === "paper" || player1 === "scissors" && player2 === "rock" || player1 === "paper" && player2 === "scissors") {
        return -1; 
    } else {
        return 0; 
    }
}

let result = getWinner("scissors", "scissors"); 
console.log(result)