// =================================< environment variables >================================== //
var inquirer = require("inquirer");
var Word = require("./word.js");
// =================================< global variables >======================================= //   
// wordChoices are from the military phonetic alphabet. 
var wordChoicesArray = ["alpha", "beta", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliett", "kilo", "lima", "mike",
    "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"]; 
var playerWins = 0;
var playerLosses = 0;
// =================================< functions >============================================== // 
function pickWord() {
    // Randomly chooses a word from the wordChoicesArray. 
    var computerPick = wordChoicesArray[Math.floor(Math.random() * wordChoicesArray.length)];
    return computerPick;
}

function promptForGuess() {
    // checks to see if the entire word has been identified.
    var wordIsGuessed = wordObj.hasWordBeenGuessed();

    if (guessesRemaining > 0 && wordIsGuessed === false) {
        inquirer.prompt([
            {
                name: "playerGuess",
                message: "Guess a letter!"
            }
        ]).then(function (userInput) {
            // check to see if player's guess was found in the word.
            var playerGuessCorrect = wordObj.prcGuessedLtr(userInput.playerGuess);
            // display the masked word on the console.
            var gameWordDisplay = wordObj.buildWordString();
            console.log("\n" + gameWordDisplay);
            if (playerGuessCorrect === true) {
                console.log("\nCORRECT  !!!")
            }
            guessesRemaining--;
            console.log("\n(You have " + guessesRemaining + " guesses remaining.)\n")
            // ask the player to guess another letter of the word. 
            promptForGuess();
        });
    }
    else {
        console.log("GAME OVER");
        if (wordIsGuessed === true) {
            console.log("YOU WON !\n");
            playerWins++ 
        }
        else {
            console.log("YOU LOST !\n");
            playerLosses++
        }
        // prepare for possible new game by emptying the ltrsArray and resetting the wordIsGuessed boolean.
        wordObj.ltrsArray = [];
        wordIsGuessed = false;
        // ask the player if they would like to play another game.
        inquirer.prompt([
            {
                name: "playAnotherGame",
                message: "Would you like to play another game? (Y/N)"
            }
        ]).then(function (userInput) {
            
            if (userInput.playAnotherGame.toUpperCase() === "Y") {
                gameWord = pickWord();
                wordObj = new Word();
                guessesRemaining = wordObj.bldLtrsArray(gameWord);
                gameWordDisplay = wordObj.buildWordString();
                console.log("\n" + gameWordDisplay);
                console.log("\n(You have " + guessesRemaining + " guesses remaining.)\n");
                promptForGuess();
            }
            else {
                console.log("--------------------");
                console.log("  Player Score");
                console.log("   Games Won:  " + playerWins);
                console.log("  Games Lost:  " + playerLosses);
                console.log("--------------------");
                console.log("Thanks for playing !");
            }
        });
    }
};
// =================================< main process>============================================ //
// randomly selects a word from the wordChoicesArray. 
var gameWord = pickWord();
// stores the properties and methods of the game word in a word object. 
var wordObj = new Word();
// builds an array of letters for the word and calcs the number of player guesses allowed for each game.
var guessesRemaining = wordObj.bldLtrsArray(gameWord);
// displays the masked word and the remaining number of guesses the player has to identify the word. 
var gameWordDisplay = wordObj.buildWordString();
console.log(gameWordDisplay);
console.log("\n(You have " + guessesRemaining + " guesses remaining.)\n");
// prompts the player to guess a letter of the word.
promptForGuess();
