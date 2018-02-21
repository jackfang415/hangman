var Letter = require("./letters.js");
var Word = require("./word.js");
var inquirer = require("inquirer");
var wordBank = ["heinsenberg", "luigi", "hadoken", "shoryuken", "mysterion"]
var userChoice = []
var guessesLeft = 10
var wins = 0
var losses = 0


var randomNumber = Math.floor(Math.random() * wordBank.length)
var wordChoice = wordBank [randomNumber]
var word = new Word(wordChoice)

word.buildLetters()
word.checkInput()

console.log(word.showCurrentValue())

var display = function () {

	console.log("Win: " + wins)
	console.log("Losses: " + losses)
	console.log(guessesLeft)
	console.log(userChoice)
	console.log(word.showCurrentValue())

}

function startGame () {
display();

inquirer.prompt([

{
	type: "input",
	name: "guess",
	message: "Choose your letter:"
}
	]).then(function(user) {

		var guess = user.guess[0].toLowerCase();

		if (userChoice.includes(guess) || !guess) {

			return startGame()

		}

		userChoice.push(guess)
		word.checkInput(guess)

		if (word.endGame()) {

			wins++;
			console.log("===================================="),
			console.log(""),
			console.log("I JUST WANNA SAY CONGRATULATION!!!"),
			console.log(""),
			console.log("====================================")
		}

		startGame();

	})

}

startGame();