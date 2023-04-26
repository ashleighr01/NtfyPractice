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
      <div id="menu">
        <p>Menu</p>
        <p>Info</p>
      </div>
      <header className="App-header">
        <h3>Here is another written piece</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fthehill.com%2Fopinion%2Feducation%2F3491903-the-pandemic-changed-the-plans-of-many-2022-high-school-graduates%2F&psig=AOvVaw3vzQcWdRHC-qB--wvaLoJ5&ust=1682292136896000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKj00dzQvv4CFQAAAAAdAAAAABAE' />
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
  );
}

export default App;
