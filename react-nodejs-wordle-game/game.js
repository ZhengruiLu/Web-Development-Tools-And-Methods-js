//game.js is for update game state, mainly contains create user game and update its game state
"use strict";

const compare = require('./compare');
// use default words.js
const wordList = require('./words');

const game = {//game is an obj
  createUserGame,
  takeTurn,
};

// A "new game" means a new secret word is selected, 
// the number of guesses made is reset to 0, 
// and the list of possible words is reset to the full list

//this functions returns an game obj for individual user
function createUserGame() {
  return {
    word: pickWord(wordList), //a new secret word is selected
    turns: 0, //the number of guesses
    doesUserWin: false,
    // A list of any previously guessed words and how many letters each matched (see "Making a Guess")
    guessedWords: [{guess: "", matchCount: 0}],
    lastGuessValid: true,
    score: 0,
    possibleWords: wordList,
  }
}

//define score rules
function calculateScore(game) {
  let score = game.score;
  const turns = game.turns;

  if (turns > 0 && turns <= 5) {
    score = 100;
  } else if (turns > 5 && turns <= 15) {
    score = 80;
  } else if (turns > 15 && turns <= 25) {
    score = 60;
  } else {
    score = 50;
  }

  return score;
}

//this function use for update game state after the user input a guess word
function takeTurn(game, guess) {
  //A count of how many valid guesses they have made so far this game
  if (isValidGuess(game, guess)) {
    game.lastGuessValid = true;

    game.turns++;

    if(exactMatch(game.word, guess)) {
      game.doesUserWin = true;
      game.score = calculateScore(game);
      return;
    }

    const match = compare(game.word, guess);

    game.guessedWords.push({guess, matchCount: match});
  } else {
    game.lastGuessValid = false;
  }
}

//isValidGuess functions use for check guessword is valid or not
// "valid guess" means a guess that is one of the possible words 
// that has not already been guessed this game

//invalid
//This includes words that would never be valid (are not on the full list of possible words) 
//and words that are on the list of possible words that have been previously guessed this game
function isValidGuess(game, guessword) {
  const guessLower = guessword.toLowerCase();// guess are not case-sensitive
  
  
  
  return (wordList.includes(guessLower) && !(game.guessedWords.find(({guess}) => guess === guessLower))); 
}

// "correct guess" means a valid guess that IS the secret word (case-insensitive)
function exactMatch(word, guess) {
    return word.toUpperCase() === guess.toUpperCase(); // Case-insensitive compare
}

//this function is for picking a secret answer word randomly from the possible word list
function pickWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}


module.exports = game; 
