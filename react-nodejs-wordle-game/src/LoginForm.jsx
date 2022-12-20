// LoginForm.jsx is for user login input form

import { useState } from 'react';

function LoginForm({ onLogin }) {

  const [username, setUsername] = useState('');

  function onChange(e) {
    setUsername(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault(); 
    if(username) {  // Don't allow blank username to try login
      onLogin(username); 
      setUsername('');
    }
  }

  const loginForm = (
    <form className="login-form" action="#/login" onSubmit={onSubmit}>
      <label>
        <span>Username: </span>
        <input className="login-input" value={username} onChange={onChange}/>
      </label>
      <button className="login-btn" type="submit">Login</button>
    </form>
  );

  return (
    <> {loginForm}</>
  );

}

export default LoginForm;
