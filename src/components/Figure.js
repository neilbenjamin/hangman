import React from "react";

//Passing in the wrongLetters
const Figure = ({wrongLetters}) => {
    //Checking the length of the wrong letters
    const errors = wrongLetters.length;

  return (
    //Opening scenario.Using SVG lines and co-ordinates courtesy of Brad Traversy.
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod structure --> */}
      {errors > 0 && <line x1="60" y1="20" x2="140" y2="20"/>}
      {/* <line x1="60" y1="20" x2="140" y2="20" /> */}
      {errors > 1 && <line x1="140" y1="20" x2="140" y2="50"/>}
      {/* <line x1="140" y1="20" x2="140" y2="50" /> */}
      {errors > 2 && <line x1="60" y1="20" x2="60" y2="230"/>}
      {/* <line x1="60" y1="20" x2="60" y2="230" /> */}
      {errors > 3 && <line x1="20" y1="230" x2="100" y2="230"/>}
      {/* <line x1="20" y1="230" x2="100" y2="230" /> */}

      {/* <!-- Head - First error --> */}
      {errors > 4 && <circle cx="140" cy="70" r="20"/>}
  
      {/* <!-- Body - Second Error --> */}
      {errors > 5 && <line x1="140" y1="90" x2="140" y2="150"/>}

      {/* <!-- Arms - Third & Fourth Error --> */}
      {errors > 6 &&<line x1="140" y1="120" x2="120" y2="100"/>}
      {errors > 7 &&<line x1="140" y1="120" x2="160" y2="100"/>}

      {/* <!-- Legs - sixth & seventh Error --> */}
      {errors > 8 &&<line x1="140" y1="150" x2="120" y2="180"/>}
      {errors > 9 &&<line x1="140" y1="150" x2="160" y2="180"/>}
    </svg>
  );
};

export default Figure;
