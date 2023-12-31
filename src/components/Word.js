import React from "react";

//Destructuring props as arguments directly. Taking selectWord & correctLetters as arguments directly.
function Word ({selectedWord, correctLetters}) {
  return (<div className="word">
    {/* Pull in random word generated by Math.random split each letter. Iterate through the letters and assign a unique key for each iteration
    as well as a span element for each iteration. The .map() takes two arguments, namely the "letter", which represents the iteration of 
    each element in the array and then i which is associated with the index number of that element. This is saved to the 
    key attribute to keep track of the index i.e. letter a = key 0, letter b = key 1 etc*/}
    {selectedWord.split('').map((letter, i) => {
        return (<span className="letter" key = {i}>
            {/* A ternary (concise else/if statement), is used to check if any of the letters match that of the selected word. If it does the letter will
            display, if not, a blank string will display. */}
            {correctLetters.includes(letter) ? letter : ''}
          </span>)
    })}
  </div>
  )
}

export default Word;
