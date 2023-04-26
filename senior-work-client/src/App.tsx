import React from "react";
import logo from "./logo.svg";
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
          <p>Menu</p>
          <p>Info</p>
        </div>
        <header className="App-header">
          <h3>Here is another written piece</h3>
          <img src={logo} className="App-logo" alt="logo" />
          <img
            className="graduationphoto"
            alt="graduation"
            src="https://thehill.com/wp-content/uploads/sites/2/2022/03/ca_grad_diploma.jpg?w=960&h=540&crop=1"
          />
          <a
            className="App-link"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {message}
            <h1>Will this be seen?</h1>
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
