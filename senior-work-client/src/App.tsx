import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [message, setMessage] = React.useState('This is the default message')
  
  fetch('http://localhost:8000').then((response)=> {
      response.json().then((actualResponse) => {
        console.log(actualResponse)
        setMessage(actualResponse.message)
      });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          {message}
        </a>
      </header>
    </div>
  );
}

export default App;
