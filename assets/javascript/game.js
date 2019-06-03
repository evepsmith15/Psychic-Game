
// Whenever a key is pressed, alert "pressed a button".
var userText = document.getElementById('userChoice');
var winText = document.getElementById('win');
var lossesText = document.getElementById('losses');
var guessesText = document.getElementById('guesses');

//Variable list
var CPUAnswer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0; //amount of times you win
var losses = 0; //amount of times you lost
var guesses = 9; //the total amount of guesses you have to win
var options = []; //what the computer has
var letters = []; //what you already guessed 

var CPUGuess = CPUAnswer[Math.floor(Math.random() * CPUAnswer.length)]; //randomly picks a letter from array
options.push(CPUGuess); //pushes the answer here. 

//Game starts here 
document.onkeyup = function(event) {
    var userChoice = event.key;
    var actualAnswer = String.fromCharCode(userChoice); 
    letters.push(userChoice);

    //win condition
    if (userChoice === CPUGuess) {
        win++;
        guesses = 9;
        letters = [];
        options = [];
        CPUGuess = CPUAnswer[Math.floor(Math.random() * CPUAnswer.length)];
        letters.push(options);
    }
    else if ((userChoice != CPUGuess) && (guesses > 0)) {
        guesses--;
        options.push(userText);
        }
    //lose condition
    else if (guesses === 0) {
        losses++;
        guesses = 9;
        letters = [];
        options = [];
        CPUGuess = CPUAnswer[Math.floor(Math.random() * CPUAnswer.length)];
        letters.push(options);
}

userText.textContent = userChoice;
winText.textContent = win;
lossesText.textContent = losses;
guessesText.textContent = guesses;
}
