# WordGuess-CLI
A "wheel-of-fortune" style game where the user attempts to guess a hidden word by submitting letters thru the command line interface. 

# Setup Instructions:

This command line interface (CLI) game uses the JavaScript npm package "inquirer" to interact with the player.  

To install the inquirer npm package: 
Open your Command Prompt terminal and navigate to your cloned project folder. Run the 'npm install' command to add the above referenced node.js package.

Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.
```
node_modules
```

# To play the WordGuess-CLI game:

Open your Command Prompt terminal and navigate to your project folder. Then, type the command:

node index.js

The game will present a masked word where the player will attempt to guess the letters of the word. 

Letters of the word are shown as the player correctly guesses them. 

A player wins a game when they correctly reveal all of the letters of the word before running out of guesses.

Each game word is randomly picked from the military phonetic alphabet. ("alpha, "beta", "charlie", "delta", etc.) 

This project is useful because the developer gained greater understanding and experience while working with the command line interface, JavaScript constructors and objects, JavaScript component modularization designs, and using node.js npm packages. 

Currently, only the original developer maintains and contributes to this project.
