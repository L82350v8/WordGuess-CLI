// =================================< constructors >=========================================== // 
function Letter(ltr) {
    this.ltr = ltr; 
    this.ltrIsGuessed = false;
    this.toString = function () {
        var underscore = "_";
        if (this.ltrIsGuessed === true) {
            return this.ltr;
        }
        else {
          return underscore;
        }
    }
    this.ltrChecker = function (ltrArg) {
        var guessCorrect = false;
        if (ltrArg === this.ltr) {
            this.ltrIsGuessed = true;
            guessCorrect = true;
        }
        return guessCorrect;
    }
}

module.exports = Letter;