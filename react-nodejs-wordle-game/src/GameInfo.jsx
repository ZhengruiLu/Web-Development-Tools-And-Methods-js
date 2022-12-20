// GameInfo.js is for the login page game introduction

import logo from './logo.jpg';

function GameInfo() {
    const introTitle = "ABOUT THE GAME";
    const instructions = "One specific secret word is chosen. You have multiple turns to make guesses.";
    const reminder = "The list of possible words is given. And the number of matched letters will be your reference.";


    return (

        <div className='game-info'>
        <img src={logo} alt="logo" className="app-logo"/>
        <div className="about-title">
          <span className="about-title">{introTitle}</span>
        </div>
  
        <div className="intro-container">
            {instructions}
            {reminder}
        </div>
      </div>

    );
  }
  
export default GameInfo;
  