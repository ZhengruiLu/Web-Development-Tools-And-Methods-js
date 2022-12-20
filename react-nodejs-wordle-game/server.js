// server.js uses 4 HTTP methods: GET, POST, PUT, DELETE services. 
// GET: session, possible word list;
// POST: user login, create new game;
// DELETE: user logout;
// PUT: update guess word;

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const sessions = require('./sessions');
const users = require('./users');
const words = require('./words');

app.use(cookieParser());
app.use(express.static('./build'));
app.use(express.json()); // Parses requests with json content bodies

// Sessions
// Check for existing session (used on page load)
app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json({ username });
});

// Create a new session (login)
app.post('/api/session', (req, res) => {
  const { username } = req.body;

  if(!users.isValidUsername(username)) {
    res.status(400).json({ error: 'required-username' });
    return;
  }
  if(username.toLowerCase() === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }
  const sid = sessions.addSession(username);

  const existingUserData = users.getGameState(username);

  //check if user have game state or not, if not, create a new one
  if (!existingUserData) {
    users.addGame(username);
  }

  //To help with grading, the server will console.log() the username and the chosen secret word whenever a new game is started for a player
  console.log("Home page - user name:" + username + ", secret word: " + users.nameAndGame[username].word);

  res.cookie('sid', sid);
  res.json(users.getGameState(username));
});

//logout
app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(sid) {
    res.clearCookie('sid');
  }
  if(username) {
    // Delete the session, but not the user data
    sessions.deleteSession(sid);
  }

  res.json({ wasLoggedIn: !!username }); 
});

// get wordle user game state
app.get('/api/word', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json(users.getGameState(username));

});

//for user post guess word
app.post('/api/word', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const { word } = req.body;
  if(!word && word !== '') {
    res.status(400).json({ error: 'required-word' });
    return;
  }
  if(!users.isValidWord(word)) {
    res.status(400).json({ error: 'invalid-word' });
    return;
  }
  //update word and gameState
  users.updateGuessWord(username, word);

  res.json(users.getGameState(username));
});

//for user post guess word
app.post('/api/new', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(!sid || !username) {
    res.clearCookie('sid');
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  users.addGame(username);

  //To help with grading, the server will console.log() the username and the chosen secret word whenever a new game is started for a player
  console.log("Start new game - user name:" + username + ", secret word: " + users.nameAndGame[username].word);
  
  res.json(users.getGameState(username));
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));