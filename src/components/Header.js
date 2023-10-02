import React from "react";
import Badge from "react-bootstrap/Badge";
//Main Header.
const Header = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <h1>
          {" "}
          <Badge bg="primary m-5">HANGMAN</Badge>
        </h1>
        </div>
        <div className="d-flex align-items-center justify-content-center">
        <h3>FIND THE HIDDEN WORD. ENTER A LETTER.</h3>
      </div>
    </>
  );
};
 
export default Header;
