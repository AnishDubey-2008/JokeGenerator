import React, { useRef, useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";
import { GearFill } from "react-bootstrap-icons";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Jim");
  const [lastName, setLastName] = useState("Bob");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <center>
        <div className="header">
          <h1><span className="head">Joke</span> Generator</h1>
        </div>

        <h3 className="jokeMain">{joke}</h3>

        <form className="credentialsContainer">
          <span className="textInfo">By default the joke is about Jim Bob. Type a name here to get Joke about the same!</span>
          <input
            className="credentials firstName"
            type="text"
            placeholder="First Name"
            ref={firstNameRef}
          />
          <input
            className="credentials lastName"
            type="text"
            placeholder="Last Name"
            ref={lastNameRef}
          />
          <button className="generateBtn" onClick={generateJoke}>
            <GearFill />
            <span className="textBtn">Generate Joke</span>
          </button>
        </form>
      </center>
    </div>
  );
}

export default App;
