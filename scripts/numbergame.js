var maxnumber = 100
var number = Math.ceil(Math.random() * maxnumber)

alert("Cheat: " + number)

var guess

var guesscount = 5

var diff = prompt("Choose your difficulty, enter '1' for easy, enter '2' for medium, enter '3' for hard")

switch (Number(diff)) {
    case 1:
        guesscount = 10;
        break;
    case 2:
        guesscount = 5;
        break;
    case 3:
        guesscount = 3;
        break;
}

while((guess != number) && (guesscount > 0)) {
    guess = prompt("Guess a number between 1 - " + maxnumber + "!  (You have "
    + guesscount + " guesses left)")

    if (guess > number) {
        alert("Your number is too high!")
    }
    if (guess < number) {
        alert("Your number is too low!")
    }
    guesscount --
}

if (guess == number) {
    alert("You guessed it!  The number was: " + number)
} else {
    alert("Sorry, you ran out of guesses!")
}
