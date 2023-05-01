import React from "react";
import logo from "./logo.svg"; //how to add files to this directory
import "./App.css";

function App() {
  const [message, setMessage] = React.useState("This is the default message");

  fetch("http://localhost:8000").then((response) => {
    response.json().then((actualResponse) => {
      console.log(actualResponse);
      setMessage(actualResponse.message);
    });
  });
  return (
    <div className="App">
      <div id="container">
        <div id="menu">
          <img
            className="graduationphoto"
            alt="graduation"
            src="https://thehill.com/wp-content/uploads/sites/2/2022/03/ca_grad_diploma.jpg?w=960&h=540&crop=1"
          />
          <p>Menu</p>
          <p>Info</p>
        </div>
        <header className="App-header">
          <h1>Keep track of all the school things!</h1>
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://docs.google.com/spreadsheets/d/1PAAaOpAbNnX_pZzeVilrHebkOJtlYvqPIacQhzCuLHc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {message}
            <h3>Click any of the green!</h3>
          </a>
        </header>
      </div>
      <footer>This is a just the bottom of the page</footer>
    </div>
  );
}

export default App;
