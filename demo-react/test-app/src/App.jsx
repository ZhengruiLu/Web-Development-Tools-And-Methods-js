import { useState } from 'react';

// useState() always returns two values:
// a value
// a setter function

//eg5 - login system export files, the more generic parts
import Content from './Content';
import Login from './Login';

function App() {
  const onLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const onLogout = () => setIsLoggedIn(false);

  return (
    <div className="app">
      { isLoggedIn
      ? <Content
      username={username}
      onLogout={onLogout}
      />
      : <Login
      onLogin={onLogin}
      />
      }
    </div>
  );
}

//eg4 - login system
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const content =
//   ( <div>
//     Hello {username}
//     <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//   </div>);

//   const login =
//   (<form>
//     <label>
//     <span>Username: </span>
//     <input value={username} onInput={(e) => setUsername(e.target.value)}/>
//     </label>
//     <button type="button" onClick={() => setIsLoggedIn(true)}>Login</button>
//   </form>);

//   return (
//   <div className="app">
//     { isLoggedIn ? content : login }
//   </div>
//   );
// }


//eg3 - todo list
// import TodoList from './TodoList';

// function App() {
//   const [todos, setTodos] = useState([
//     'Pounce',
//     'Chase Laser Pointer',
//     'Nap',
//   ]);

//   const [newTodo, setNewTodo] = useState('');

//   return (
//     <div className="app">
//       <TodoList list={todos}/>

//       <input
//         value={newTodo}
//         onInput={ (e) => setNewTodo(e.target.value) }
//       />
//       {/* ... - spread arr */}
//       <button
//         onClick={ () => setTodos( [...todos, newTodo])}
//       >
//         Save
//       </button>
//     </div>
//   );
// }


//eg2 - flip, change div class, css
// import Switch from './Switch';

// function App() {
//     const [isOn, setIsOn] = useState(false);
//     return (
//         <div className="app">
//           {/* why in this format */}
//         <Switch isFlipped={isOn}/>
//         <button onClick={ () => setIsOn(!isOn) } >Flip</button>
//         </div>
//     );
// }

//eg1
// function App() {
//   const [inProgress, setInProgress] = useState('');
//   const [saved, setSaved] = useState('');

//   return (
//     <div className="app">
  //     <p>Name in progress is {inProgress}</p>
  //     <p>Last Saved name was {saved}</p>
  //     <label>
  //     <span>Name: </span>
  //     <input
  //       value={inProgress}
  //       onInput={ (e) => setInProgress(e.target.value) }
  //     />

  //     <button
  //       type="button"
  //       onClick={ () => setSaved(inProgress) }
  //     >Save</button>

  //     </label>
//     </div>
//   );
// }

export default App;
