var Letter = require("./letters.js")

var Word = function(stringValue) {

	this.value = stringValue;
	this.arrOfLetters = []

//Declared a variable to be an empty string. The for loop goes through each letter of the word and call the function to check the letter to determine if it is true or not. 
	this.showCurrentValue = function() {

		var showString = ""
		for(i=0; i < this.arrOfLetters.length; i++) {

			showString += this.arrOfLetters[i].readDisplay()
		}
		return showString
	}

//This function used to split the word into a string of letters. Then it pushes the letters into the array. 
	this.buildLetters = function() {

		var letterString = this.value.split("")

		for(i = 0; i < letterString.length; i++){

			var letter = new Letter (letterString[i])

			this.arrOfLetters.push(letter)
		}

	}
//This function is used to check the input with the array of letters by looping through every letter.
	this.checkInput = function(check) {

		for(i = 0; i < this.arrOfLetters.length; i++) {

			this.arrOfLetters[i].checkGuess(check)

		}
	}

}

var word = new Word("heinsenberg")

word.buildLetters()
// word.checkInput("s")
// word.checkInput("h")
console.log(word.showCurrentValue())

module.exports = Word

