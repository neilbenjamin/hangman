import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css';


function GetHelp({getHelp, setGetHelp, showNotification}) {

    //Variable cotaining ternatry operators to set conditional displays based on the boolean toggle value. 
    const helpMessage = getHelp ? "Try to guess the hidden characters. Maximum 10 wrong guesses." : "";
    const buttonContent = getHelp ? "Close" : "Need Help?";

//Update state 
    const handleClick = () => {
       //Logical Not operator to change the boolean value whenever the button is clicked, therefore toggling the value.
        setGetHelp(!getHelp);
        console.log(getHelp)
    }

  return (
    <div className="d-flex justify-content-center">
        <Button variant='secondary' onClick={handleClick} className='helpButton'>{buttonContent}</Button>
         <p className='display-help-message'>{helpMessage}</p>
        </div>
        
        
  )
}

export default GetHelp