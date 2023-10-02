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


const words = getWordDatabase();
//Random word chosed to be guessed.
let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  //Props & State
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [getHelp, setGetHelp] = useState(false)

  //Event listener & useEffect hook
  useEffect (()=>{
    const handleKeydown = event => {
      const { key, keyCode } = event;
   
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);

            } else {
              show(setShowNotification);
            }
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

      return () => window.removeEventListener ('keydown', handleKeydown);
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

    //Display help message 

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
        <GetHelp getHelp = {getHelp} setGetHelp={setGetHelp} />
    </>

  );
}

export default App;
