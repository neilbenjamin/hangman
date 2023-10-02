import React from 'react'
import Button from 'react-bootstrap/Button';

import '../App.css';


function GetHelp({getHelp, setGetHelp, playAgain}) {

    //Variable cotaining ternatry operators to set conditional displays based on the boolean toggle value. 
    const helpMessage = getHelp ? "Try to guess the hidden characters. Maximum 10 wrong guesses. Start by entering a letter and the game will either indictate that the letter is correct or incorrect." : "";
    const buttonContent = getHelp ? "Close" : "HELP";

//Update state 
    const handleClick = () => {
       //Logical Not operator to change the boolean value whenever the button is clicked, therefore toggling the value.
        setGetHelp(!getHelp);
        console.log(getHelp)
    }


  return (
    <div>
         <div><p className='display-help-message'>{helpMessage}</p></div>
    <div className="d-flex justify-content-center">
        <Button variant='danger' onClick={handleClick} className='helpButton m-3'>{buttonContent}</Button>
        <Button variant='success' onClick={playAgain} className='helpButton m-3'>RESTART</Button>
    </div>
 
    </div>
        
        
  )
}

export default GetHelp