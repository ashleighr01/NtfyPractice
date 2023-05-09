import React from "react";

function sendPush() {
  fetch("http://localhost:8000/push", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Information Stored!" }),
  });
}

function Bonus() {
  return (
    <div>
      <label>Name:</label>
      <br></br>
      <input></input>
      <br></br>
      <button onClick={sendPush}>Send Push</button>
    </div>
  );
}

export default Bonus;
