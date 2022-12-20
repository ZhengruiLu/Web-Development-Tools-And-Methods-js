//Word.jsx is for the game view and logout 
// The application will show a logged in user their "stored word"
// The application will allow a logged in to change their "stored word"

import { useState } from "react";

function GameState({username, gameState, onSubmitWord}) {//props
    const [guessWord, setGuessWord] = useState('');

    function onChange(e) {
        setGuessWord(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault(); // Remember this! Can be very confusing if page reloads
        if(guessWord) {  // Don't allow blank username to try login
            // We could enforce more requirements, but I'm keeping this simple
            onSubmitWord(guessWord); // "action" function we were passed in
            setGuessWord('');
        }
    }

    function getLastEle(array) {
        return array[array.length - 1];
    }

    // possible words
    const possibleWords = gameState.possibleWords;

    const possibleWordsList = (
        <ol className="list">
            {possibleWords.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ol>
    );

    //user game state
    const userGuessedWords = gameState.guessedWords;
    const userSecretWord = gameState.word;
    const userturns = gameState.turns;
    const userScore = gameState.score;
    const recentGuessedWord = getLastEle(userGuessedWords).guess;
    const recentGuessedMatch = getLastEle(userGuessedWords).matchCount;
    const isvalidGuess = gameState.lastGuessValid;
    const divider = "--------------------->>";

    const guessedWordList = userGuessedWords.map((item) => (
        <ul>
            <li key={item}>
                <span className="username">Word: {item.guess} - </span>
                <span className="username">matched letters: {item.matchCount} / {userSecretWord.length}</span>
            </li>
        </ul>
    ))

    let reminder = isvalidGuess ? "" : `Invalid Guess. Please choose one word from [All Possible Word] that haven't been guessed.`;

    const userGameState = (
        <div className="game-state">
        <h4 className="reminder">{reminder} </h4>
          <h4 className="word-title">Hi, {username}. Here is your Game State: </h4>
            <p>Guessed words: </p>
          {guessedWordList}
          {divider}
          <ul>
          <li>
            <span>Score: {userScore}</span>
          </li>
          <li>
            <span>Turns: {userturns} </span>
          </li>

          <li>
            <span>Recent valid guess word: {recentGuessedWord} </span>
          </li>

          <li>
            <span>Recent valid guess matched letters: {recentGuessedMatch} / {userSecretWord.length}</span>
          </li>
          </ul>
        </div>
    );

    // input word form or win message
    const doesUserWin = gameState.doesUserWin;
    const winMessage = "Congratulations! You win!";

    let inputWordForm = (
        <div className="game-state">
        <form className="word-form" action="#/login" onSubmit={onSubmit}>
            <label>
                <span className="word-title">Word: </span>
                <input className="word-input" value={guessWord} onChange={onChange}/>
            </label>
            
            <button className="guess-btn" type="submit">Submit</button>
        </form>
        </div>
    );

    if (doesUserWin) {
        inputWordForm = (
            <div className="game-state">
            <h4 class="win-reminder">{winMessage} Your Score: {userScore}</h4>
            </div>
        );
    }

    return ( 
        <>
            <div className="list-container">
            <h6 className="title">All Possible Words: </h6>
                {possibleWordsList}
            </div>
            <div className="container">
                {userGameState}
                {inputWordForm}
            </div>
        </>
    );

}

export default GameState;