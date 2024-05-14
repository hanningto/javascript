// Quiz One: Write a JavaScript program where the program 
// takes a random integer between 1 and 10,
//  and the user is then prompted to input a guess number. 
// The program displays the message "Good Work" if the input
//  matches the guess number otherwise "Not matched".

let randInt = Math.floor(Math.random() * 11);
function intChecker(int) {
  if (userInput >= 0 && userInput <= 10) {
    play(userInput);
  } else {
    input();
  }
}

function play(userInput) {
  if (userInput === randInt) {
    alert("Good Work");
  } else {
    alert("Not Matched");
  }
}

function input() {
  userInput = parseInt(prompt("Enter a number between 1 and 10"));
  intChecker(userInput);
}
input();
