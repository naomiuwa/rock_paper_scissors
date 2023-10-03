let playerMove = "scissors"; 
let computerMove = "paper"; 

//write if statements that will determine the winner of the game 
//e.g if playerMove chooses 'rock' & computerMove chooses 'paper', computerMove wins!
//change the hard-coded values for playerMove and computerMove
//console.log the expected outcome (win, lose, draw) in each if statement 

//if playerMove chooses 'rock' & computerMove chooses 'paper' - computerMove wins 
//if playerMove chooses 'paper' & computerMove chooses 'rock' - playerMove wins 

if (playerMove === "rock" && computerMove === "paper") {
    //console.log("Computer Wins!")
} else {
    //console.log("Player Wins!")
}; 

//if playerMove chooses 'rock' & computerMove chooses 'scissors' - playerMove wins 
//if playerMove chooses 'scissors' & computerMoves chooses 'rock' - computerMove wins

if (playerMove === "rock" && computerMove === "scissors") {
    //console.log("Player Wins!")
} else {
    //console.log("Computer Wins!")
}

//if playerMove chooses 'paper' & computerMove chooses 'scissors' - computerMove wins 
//if playerMove chooses 'scissors' & computerMove chooses 'paper' - playerMove wins 

if (playerMove === "paper" && computerMove === "scissors") {
    console.log("Computer Wins!") 
} else {
    console.log("Player Wins!")
}