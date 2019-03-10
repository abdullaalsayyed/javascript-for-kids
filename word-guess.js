// Guess the word one letter at a time.
// Each player is only allowed to guess
// wrong three times.

let word = '';

// Create another array to store good guesses
let secret = [];
// Create a variable to store the number of bad guesses
let strikes = 0;

function run() {

  word = document.getElementById('question').value;

  document.getElementById('player1').setAttribute('style', 'display:none');

  // clear text
  document.getElementById('guesses').innerText = '';

  // Fill this array with placeholders for guessing
  for (i = 0; i < word.length; i++) {
    secret.push("_");
    document.getElementById('guesses').innerText = document.getElementById('guesses').innerText + " _";
  }

  document.getElementById('player2').setAttribute('style', 'display:block');
}

function guess(letter) {
  // Start a loop that continues as long as the person has
  // not guessed wrong three times, or all of the letters have
  // been guessed.
  if (strikes < 3 && secret.indexOf("_") >= 0) {

    // If the letter does not exist in the word,
    // add it to the bad guesses.
    if (word.indexOf(letter) < 0) {
      // add a strike
      strikes = strikes + 1;
      document.getElementById('notifications').innerText = 'Bad Guess!';

      // If the letter exists in the word, we need to
      // add it to the good guesses array
    } else {
      for (i = 0; i < word.length; i++) {
        // Each time the guess letter is found, we
        // add it as a good guess in the same spot
        if (word[i] === letter) {
          secret[i] = letter;
        }
      }
      document.getElementById('guesses').innerText = '';
      // Fill this array with placeholders for guessing
      for (i = 0; i < secret.length; i++) {
        document.getElementById('guesses').innerText = document.getElementById('guesses').innerText + " " + secret[i];
      }
    }
  } else {
    // Once the player has exited the loop, congratulate
    // them on a win, or tell them they have lost and show
    // the secret word.
    if (strikes === 3) {
      document.getElementById('notifications').innerText = 'Sorry, please play again!';
    } else {
      document.getElementById('notifications').innerText = 'Congratulations on your win!';
    }
    document.getElementById('notifications').innerHTML = document.getElementById('notifications').innerText + "<br/>" + "The secret word was " + word;
  }
}
