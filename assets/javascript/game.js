
// Whenever a key is pressed, alert "pressed a button".
var userText = document.getElementById("userChoice");
var winText = document.getElementById('win');
var lossText = document.getElementById('losses');

//Variable list
var CPUAnswer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var losses = 0;
var guesses = 9;
var options = [];
var letters = [];

var options = CPUAnswer[Math.floor(Math.random() * CPUAnswer.length)];
options.push(options);
console.log(options[0]);


//Game starts here 
document.onkeyup = function(event) {
var userChoice = event.key;
letters.push(userChoice)
console.log(options[0]);

//win condition
if (userText === CPUAnswer) {
    wins++;
    guesses = 9;
    options = [];
    }
else if ((userText != CPUAnswer) && (guesses > 0)) {
    guesses--;
    options.push(userText);
    }
//lose condition
if (guesses === 0) {
    loses++;
    guesses = 9;
    letters = [];
    options = [];
    console.log(options[0]);

}

userText.textContent = userChoice;
winText.textContent = win;
lossText.textContent = losses;
}
