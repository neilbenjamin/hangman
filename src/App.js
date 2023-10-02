// I followed Jesse from CodekackR's example to guide me on  the layout and logic 
//for the project and tehn adapted it to my liking. He followed Brad Traversy's vanilla 
//JS example on gitHub and compiled it for React.
// I also relied on WebDevSimplified to assist with refreshing the useEffect and State logic 
//in react. OpenAI for assistance with some of the conditinal syntactical challenges especially 
//with the the ternary operators in react and Bootstrap and local css for styling.

//Master component hosting state and props

//Importing components and functions.
import React, { useState, useEffect } from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import WrongLetters from './components/WrongLetters';
import { showNotification as show  } from './helpers/helpers';
import { getWordDatabase  } from './dictionary/Dictionary';
import GetHelp from './components/GetHelp';

//Word dictionary databse.
const words = getWordDatabase();
//Random word chosed to be guessed.
let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  //Props & State
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [getHelp, setGetHelp] = useState(false);
  // const [restart, updateRestart] = useState(false);

  //Event listener & useEffect hook
  useEffect (()=>{
    //Assigning user input letters for manipulation using the DOM 
    //keydown.

    const handleKeydown = event => {
      //When triggered, it assigns the object's (event) properties (key, keyCode)
      //to variables named key and keyCode. This a concise manner (destructuring) to write
      //const key = event.key & const keyCode = event.keyCode
      const { key, keyCode } = event;
      //Assigning the userinput letter to variable letter using the parameters for the 
      //alphabet keycode requirements between 65 and 90 and based on teh state of playable and 
      //setting user input to klowercase.    
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          //Logic to handle user input against the word to be guessed. If the guessed letter is in 
          //the word to be guessed, the code executes to the next statement which checks to see if the 
          //letter is not already in the array hosting the guessed letters. If true it updates the state 
          //of the correctLetters variable and state by accessing the currentLetters array created to store the 
          //letters based on the above logic. 
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
              //If the letter is already in the array, it accessess the show in showNotification to
              //tell the user that this letter has already been used. 
            } else {
              show(setShowNotification);
            }
            //The same logic is applied but now for the incorrec letters which saves the letter to 
            //the wrongLetters array.
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            } else {
              show(setShowNotification);
            }
          }
        }
      }
    
      window.addEventListener('keydown', handleKeydown);
      //Clearing the event listener upon each event.
      return () => window.removeEventListener ('keydown', handleKeydown);
       //The useEffect hook is fired upon key any one of these dependencies changing. 
    }, [correctLetters, wrongLetters, playable]);

    //The state of the playable prop in this component is synchronised with the playable state in the chld component (Popup.js) based on the outcome of the game.
    function playAgain(){
      setPlayable(true);
      //Reset to empty arrays
      setCorrectLetters([]);
      setWrongLetters([]);

      //reset random word to guess
      const random = Math.floor(Math.random() * words.length);
      selectedWord = words[random];
    }
//Main jsx containing components with their added props
  return (
    <>
      <Header /> 
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}  />
        </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
        <Notification showNotification={showNotification} /> 
        <GetHelp getHelp = {getHelp} setGetHelp={setGetHelp} playAgain={playAgain} />
 
    </>

  );
}

export default App;
