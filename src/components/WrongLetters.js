import React from "react";

// Passing in the wrongLetters prop deconstructed from parent.
//which is just an emty array.
const WrongLetters = ({wrongLetters}) => {
  return (
    //Styling
    <div className="wrong-letters-container">
      <div>
        {/* Conditional to check if the array has any letters in it i.e is greater than 0. If true prints the worning of Wrong Letter. */}
      {wrongLetters.length > 0 && <p className="wrong-try-again">Wrong Letter</p>}
      {/* It now Maps through the array and creates a span, comma seperated element 
      around the letter and displays it. */}
    {wrongLetters.map((letter, i) => <span key={i}>{letter}</span>)
    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters;


