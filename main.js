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

//Display the stats

var display = function () {

	console.log("Win: " + wins)
	console.log("Losses: " + losses)
	console.log("Guesses Left: " + guessesLeft)
	console.log(userChoice)
	console.log(word.showCurrentValue())

}

//Starts the game

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

//This checks if the letter has been used.

		if (userChoice.includes(guess) || !guess) {

			console.log("=========================================")
			console.log("")
			console.log("YOU HAVE GUESSED THIS LETTER!!! TRY AGAIN")
			console.log("")
			console.log("==========================================")
			return startGame()

		}

		userChoice.push(guess)

		var rightGuess = word.checkInput(guess)

//When the player wins it will show them a winning message.

		if (word.endGame()) {

			wins++;
			console.log("===================================="),
			console.log(""),
			console.log("I JUST WANNA SAY CONGRATULATION!!!"),
			console.log(""),
			console.log("====================================")

			restart();

		} else {

			guessesLeft --;
			if(guessesLeft === 0) {

			losses++;

			console.log("=================")
			console.log("")
			console.log("YOU HAVE LOST!!!")
			console.log("")
			console.log("=================")

			restart();

			}

		}

		startGame();

	})

}

function restart(){
	correct = false
	userChoice = []
	guessesLeft = 10
	word = new Word(wordChoice)
	word.buildLetters();
	word.showCurrentValue();
}

startGame();