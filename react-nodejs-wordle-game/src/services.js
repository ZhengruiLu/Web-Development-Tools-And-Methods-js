// services.js is for fetch functions. These functions will be added on the single page(call in app.jsx)

//add fetchScores

export function fetchLogin(username) {
  return fetch('/api/session/', {
    method: 'POST',
    headers: {
      //The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending)
      //application/json is a type under application
      'content-type': 'application/json', // set this header when sending JSON in the body of request
    },
    body: JSON.stringify( { username } ),
  })
  // fetch() rejects on network error
  // So we convert that to a formatted error object
  .catch( ()=> Promise.reject({ error: 'network-error' }) )
  .then( response => {
    // response.ok is shorthand for status code ranges
    if(!response.ok) {  // response.ok checks the status code from the service
      // This service returns JSON on errors
      return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); // happy status code means resolve with data from service
  });
}

export function fetchSession() {
  return fetch('/api/session')
  .catch(() => Promise.reject({error: 'network-error'}))
  .then(response => {
      if(response.ok) {return response.json();}
      return response.json()
      .then(err => Promise.reject(err));
  });
}

export function fetchLogout() {
  return fetch('/api/session/', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json', 
    },

  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if(!response.ok) {  
      return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); 
  });
}

export function fetchWord() {
  return fetch('/api/word')
  .catch(() => Promise.reject({error: 'network-error'}))
  .then(response => {
      if(response.ok) {return response.json();}
      return response.json()
      .then( err => Promise.reject(err) );
  });
}

export function fetchNewGame() {
  return fetch('/api/new/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json', 
    },
  })
  .catch( ()=> Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if(!response.ok) { 
      return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); 
  });
  
}

export function updateWord(word) {
  return fetch('/api/word', {
    method: 'POST',
    headers: {
      'content-type': 'application/json', 
    },
    body: JSON.stringify( { word } ),
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if(!response.ok) {  
      return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); 
  });
}

