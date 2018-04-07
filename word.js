// =======================================< environment variables >======================================= //
var Letter = require("./letter.js");

// =======================================< constructors >================================================ // 
function Word() {
    this.ltrsArray = [];
    this.buildWordString = function () {
        var wordString = this.ltrsArray.join(' ');
        return wordString;
    }
    this.prcGuessedLtr = function (ltrGuess) {
        var guessIsCorrect = false;
        for (var i = 0; i < this.ltrsArray.length; i++) {
            var ltrGuessFound = false;
            ltrGuessFound = this.ltrsArray[i].ltrChecker(ltrGuess);
            if (ltrGuessFound === true) {
                guessIsCorrect = true;
            }
        }
        return guessIsCorrect;
    }
    this.bldLtrsArray = function (wordArg) {
        for (var i = 0; i < wordArg.length; i++) {
            var wordLtr = wordArg.charAt(i);
            this.ltrsArray.push(new Letter(wordLtr));
        }
        var nbrOfTries = wordArg.length * 2;
        return nbrOfTries;
    }
    this.hasWordBeenGuessed = function() {
        var wordBeenGuessed = false;
        var underscoreFnd = false;
        for (var i = 0; i < this.ltrsArray.length; i++) {
            if (this.ltrsArray[i] == "_") {
                underscoreFnd = true;
                break;
            }
        }
        if (underscoreFnd === false) {
            wordBeenGuessed = true;
        }
        return wordBeenGuessed;
    }
}

module.exports = Word;