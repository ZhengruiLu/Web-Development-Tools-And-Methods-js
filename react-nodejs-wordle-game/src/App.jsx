//App.jsx file is for the whole react app SPA page, have all components used.

import './App.css';
import { useState, useEffect } from 'react';
import { fetchLogin, fetchSession, fetchWord, updateWord, fetchLogout, fetchNewGame} from './services';
import {
  LOGIN_STATUS,
  CLIENT,
  SERVER,
} from './constants';
import Status from './Status';
import Loading from './Loading';
import GameInfo from './GameInfo';
import Controls from './Controls';
import LoginForm from './LoginForm.jsx';
import GameState from './GameState.jsx';

function App() {
  const [ error, setError ] = useState('');
  const [ loginStatus, setLoginStatus ] = useState(LOGIN_STATUS.PENDING); // one variable covers multiple cases
  const [username, setUsername] = useState('');
  const [ gameState, setGameState ] = useState({});

  //login and update the state username and login status
  function onLogin(username) {
    fetchLogin(username)
    .then( (fetchedGameState) => {
      setError(''); // in case another action had set an error
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      //set game state
      setGameState(fetchedGameState);
      setUsername(username);
    })
    .catch( err => {
      setError(err?.error || 'ERROR');
    });
  }

  //submit word and update the state word
  function onSubmitWord(word) {
    updateWord(word)
    .then((fetchedGameState) => {
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      setError(''); // in case another action had set an error
      //set game state
      setGameState(fetchedGameState);
      setUsername(username);
    }) 
    .catch( err => {
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
      }
      return Promise.reject(err); // Pass any other error unchanged
    })
    .catch( err => {
      if( err?.error === CLIENT.NO_SESSION ) { // expected "error"
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        // Not yet logged in isn't a reported error
        return;
      }
      // For unexpected errors, report them
      setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
    })
  }

  //start new game
  function onStartNewGame() {
    fetchNewGame()
    .then( (fetchedGameState) => {
      setError(''); // in case another action had set an error
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      //set game state
      setGameState(fetchedGameState);
      setUsername(username);
    })
    .catch( err => {
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
      }
      return Promise.reject(err); // Pass any other error unchanged
    })
    .catch( err => {
      if( err?.error === CLIENT.NO_SESSION ) { // expected "error"
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        // Not yet logged in isn't a reported error
        return;
      }
      // For unexpected errors, report them
      setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
    })
  }


  //logout and update the state login status, empty the state username, word
  function onLogout() {
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    setUsername('');
    setGameState({});
    
    fetchLogout() 
    .catch( err => {
      setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
    });
  }

  //page load
  //check the session first
  function checkForSession() {
    fetchSession()
    .then(({username}) => {
        setUsername(username);
        return fetchWord();           
    })
    .catch( err => {
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
      }
      return Promise.reject(err); // Pass any other error unchanged
    })
    .then((fetchedGameState) => {
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      setGameState(fetchedGameState);
      return;
    }) 
    .catch( err => {
      if( err?.error === CLIENT.NO_SESSION ) { // expected "error"
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        // Not yet logged in isn't a reported error
        return;
      }
      // For unexpected errors, report them
      setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
    })
  }

  // use a useEffect to perform the initial loading
  // Initial loading isn't triggered by an event like most service calls
  useEffect(
    () => {
      checkForSession();
    },
    [] // Only run on initial render
  );
  
  return (
    <>
        {loginStatus === LOGIN_STATUS.PENDING && <Loading className="login-waiting">Loading user...</Loading>}
        {loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && 
        (
          <>
          <div className="login-page">
            <div className="login-body">
            <GameInfo/>
              { error && <Status error={error}/> }
            <LoginForm onLogin={onLogin}/>
            </div>
            </div>
          </>
        ) }

        {loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
        <>
          <div className="game-page">
              <div className="game-body">
              <div className="container">
                <GameState 
                  username={username}
                  //get fetchedGameState
                  gameState={gameState}
                  onSubmitWord={onSubmitWord}
                />
                <Controls onLogout={onLogout} onStartNewGame={onStartNewGame}></Controls>
              </div>
              </div>
          </div>
        </>
        )}
    </>
  );
}

export default App;