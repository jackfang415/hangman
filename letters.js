//

var Letter = function(show) {
    this.show = show;
    this.guessed = false;

//A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.readDisplay = function() {
        if (this.guessed === true) {
            return show

        } else {
            return "_"
        }
    }
//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
this.checkGuess = function(guess) {
	if (this.show === guess) {
	this.guessed = true;

	return true

	} else {

		return false
	}
}

};

module.exports = Letter