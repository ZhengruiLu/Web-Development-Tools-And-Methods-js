function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    
    return ( 
        <form>
            <label>
                <span>Username: </span>
                <input value={username}
                onInput={(e) => setUsername(e.target.value)}/>
            </label>
            <button type="button"
                onClick={() => onLogin(username)}>Login
            </button>
        </form>
    );
}


//eg - better conditions eg
// function Login({ username, setUsername, setIsLoggedIn }) {
//     return ( 
//         <form>
//             <label>
//                 <span>Username: </span>
//                 <input value={username}
//                     onInput={(e) => setUsername(e.target.value)}/>
//             </label>
//             <button type="button"
//                 onClick={() => setIsLoggedIn(true)}>Login
//             </button>
//         </form>
//     );
// }

export default Login;