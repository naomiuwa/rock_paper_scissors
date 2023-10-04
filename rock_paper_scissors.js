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

//TASK 3
//use the prompt method to get player1 to enter their choice or value
//call the function with player1's value
//hard-code player2's (computer's) value
//use the alert method to display the correct result e.g 1, -1 or 0

//the prompt method gives you back the value entered by the user or player1
const player1Choice = prompt("Choose your tool");
//console.log(player1Choice);

//TASK 4
//write a function that generates a choice/ move for the computer
//user enters choice in the prompt
//computer makes choice
//the correct score shows in the alert

//PLAN
//set up a function with no parameters
//define a variable to store the choices in an array
//use Math.random() to generate a random choice from the length of choices and store it in a variable
//define a variable to access the element at the randomly generated index in the array, returning one of the choices: "rock", "paper", or "scissors".
//return the variable
//call the function
//change the "player2" parameter to the returned variable in the getWinner function being called

function player2Choice() {
    const choices = ["rock", "paper", "scissors"]; 
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerMove = choices[randomIndex]; 
  return computerMove; 

}

const computerChoice = player2Choice();
console.log(computerChoice); 

function getWinner(player1, player2) {
  /* Example for first if statement: if player1 chooses ‘paper’ & player2 chooses ‘rock’ or player1 chooses ‘rock’ & player2 chooses ‘scissors’ or player1 chooses ‘scissors’ & player2 chooses ‘paper’*/

  if (
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    return alert("You Win!");
  } else if (
    (player1 === "rock" && player2 === "paper") ||
    (player1 === "scissors" && player2 === "rock") ||
    (player1 === "paper" && player2 === "scissors")
  ) {
    return alert("Computer Wins!");
  } else {
    return alert("It's a Draw!");
  }
}

let result = getWinner(player1Choice, computerChoice);
