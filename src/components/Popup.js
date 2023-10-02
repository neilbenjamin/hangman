//Import dependencies
//The state of the playable prop in this component is synchronised with the playable state in the parent (App.js) component based on the outcome of the game.
import React, { useEffect } from 'react'
import { checkWin } from '../helpers/helpers';

//Initialise popup values taking in 5 props.
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  //Evaluating the imported checkWin function
  if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulatins, you won 😃'
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord)==='lose') {
    finalMessage='Sorry, you lost 🤨 Try again.';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  //Updating the playable variable which will activated once the game results 
  // and reset the game if the checkWin is 'win" as it sets the initial boolean to 
  //false, which will trigger the useEffect hook. 

  useEffect(()=> setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}> 
    <div className="popup">
      <h2>{finalMessage}</h2>
      <h3>{finalMessageRevealWord}</h3>
      <button onClick={playAgain}>Play Again</button>
    </div>
  </div>
  )
}

export default Popup