var Letter = require("./letters.js");
var Word = require("./word.js");
var inquirer = require("inquirer");

inquirer.prompt([

{
	type: "input",
	name: "guess",
	message: "Choose your letter:"
}
	]).then(function(user) {

		if  (user.guess === this.showCurrentValue) {

			console.log("====================================")
			console.log("")
			console.log("I JUST WANNA SAY CONGRATULATION!!!")
			console.log("")
			console.log("====================================")
		}

		else {

			console.log("==============================")
			console.log("")
			console.log("NICE TRY!!!! WANNA TRY AGAIN?")
			console.log("")
			console.log("==============================")


		}

	})

