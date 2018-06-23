var rando = Math.floor(Math.random() * 20) + 1;
var guesses = 4;
var guessed = false;

alert('Guess the random number between 1 and 20! You have ' + (guesses + 1) + ' guesses.');

function promptUser() {
  var answer = prompt('What is the number?');
  answer = parseInt(answer);
  if (answer === rando) {
    alert('You got it!!! The number was ' + rando);
    guesses = 0;
    guessed = true;
  } else if (answer > rando) {
    alert('You guessed too high. You have ' + guesses + ' guesses left.');
  } else if (answer < rando) {
    alert('You guessed too low. You have ' + guesses + ' guesses left.');
  }
}

while (guesses >= 0) {
  promptUser();
  guesses--;
}

if (guessed === true) {
  alert('Congratulations! Refresh to play again.');
} else {
  alert('Maybe next time! Refresh to play again');
}
