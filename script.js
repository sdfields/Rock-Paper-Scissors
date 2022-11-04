var warning = alert("Hello!");
var answer = confirm("Do you want to play again?");
var statsW = alert("Wins: " + wins);
var statsL = alert("Losses: " + losses);
var statsT = alert("Ties: " + ties);
var usersChoice;
var computersChoice;
var Results;
var wins = 0;
var losses = 0;
var ties = 0;

function usersTurn() {
    usersChoice = prompt("What is your choice? R,P,S?")
    return usersChoice;
}

function computersTurn() {
    var randNum = Math.floor(Math.random() * 3)
    console.log(randNum);
    if (randNum === 0) {
        computersChoice = "R";
    } else if (randNum === 1) {
        computersChoice = "P";
    } else {
        computersChoice = "S";
    }
    return computersChoice;
}

function compareChoices(usersChoice, computersChoice) {
    if (usersChoice === computersChoice) {
        ties +=1
    } else if (usersChoice === "R" && computersChoice === "P") {
        losses +=1
    } else if (usersChoice === "P" && computersChoice === "R") {
        wins +=1
    } else if (usersChoice === "R" && computersChoice === "P")
}
    // add other outcomes


usersTurn();
computersTurn();
compare

console.log(answer);
// Answer will be either true or false.
prompt("What is your choice? R,P,S?")



// ReadME
// # Module 03 Mini-Project: Rock, Paper, Scissors

// In this activity, you will work with a group to build a game using only JavaScript.

// ## Instructions

// The completed application should meet the following criteria:

// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// * As a user, I expect the computer to choose R, P, or S in return.

// * As a user, I want the option to play again whether I win or lose.

// * As a user, I want to see my total wins, ties, and losses after each round.

// ### Specifications

// * Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.

// * The computer's selection must be random to ensure a fair game.

// ## 💡 Notes

// Refer to the documentation:

// * [MDN Web Docs on window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

// * [MDN Web Docs on window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

// * [MDN Web Docs on window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

// * [MDN Web Docs on Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

// ## 🏆 Bonus

// If you have completed this activity, work through the following challenge with your group to further your knowledge:

// * How can you customize the appearance of the `alert()`, `confirm()`, and `prompt()` dialog boxes?

// Use [Google](https://www.google.com) or another search engine to research this.

// ---

// © 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.