// users.js save users data

const game = require("./game");
const scores = require("./scores");

function isValidUsername(username) {
  let isValid = true;
  isValid = isValid && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

function isValidWord(word) {
  let isValid = true;
  isValid = isValid && word.match(/^[A-Za-z]*$/);
  return isValid;
}

// save data individually for users
const nameAndGame = {
  // Lu: userGame,  
};

function getGameState(username) {
  return nameAndGame[username];
}

// create new game, and match name with its game state
function addGame(name) { 
  //create a new game
  const userGame = game.createUserGame();

  nameAndGame[name] = userGame;
}


function updateGuessWord(name, guessword) {
  //get the game state of this user
  const userGame = nameAndGame[name];
  //update the guessedwords of this game state
  game.takeTurn(userGame, guessword);

}

module.exports = {
  isValidUsername,
  isValidWord,
  nameAndGame,
  addGame,
  updateGuessWord,
  getGameState,
};