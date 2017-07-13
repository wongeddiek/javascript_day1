function checknum(numG, numA, count) {
	count = count - 1
	if (numG == numA) {
		alert("You got it!")
	} else if (numG > numA) {
		alert("Your number is bigger than mine.")
		if (count > 0) {
			numG = prompt("Enter a new number again (You have " + count + " guesses).")
			checknum(numG, numA, count)
		} else {alert("Sorry, you ran out of guesses. Better luck next time!")}
	} else if (numG < numA) {
		alert("Your number is smaller than mine.")
		if (count > 0) {
			numG = prompt("Enter a new number again (You have " + count + " guesses).")
			checknum(numG, numA, count)
		} else {alert("Sorry, you ran out of guesses. Better luck next time!")}
	}
}
var answer = Math.ceil(Math.random()*100);
var guesscount = 5;
var guess = prompt("I'm thinking of a number between 1 -100, what is my number? (You have " + guesscount + " guesses)");
checknum(guess, answer, guesscount);


