// Controls.jsx is for the logout button

function Controls({ onLogout, onStartNewGame}) {
  return (
    <>
      <button className="new-btn" onClick={() => onStartNewGame()}>Start New Game</button>
      <button className="logout-btn" onClick={() => onLogout()}>Logout</button>
    </>
  );
}

export default Controls;
