//Set notification pop-up timer to close after pop upn opens.
export function showNotification(setter) {
    setter(true);
    setTimeout(()=>{
        setter(false);
    }, 2000)
}

//win or lose helper

//Taking in 3 parameters labelled correct (correctLetters), wrong (wrongLetters), word(selectedWord)

export function checkWin (correct, wrong, word){
  //Default initialized to win.
    let status = 'win'; 
    //Loop through the mystery word on each iteration to check to see if the letter is not in the correct
    //array of guessed letters.
    word.split('').forEach(letter => {
      if (!correct.includes(letter)) {
        status = '';
      } 
    });
    //Check for loss calculated on 6 incorrect wrong guesses.
    if (wrong.length === 10) status = 'lose';
    return status;
}

