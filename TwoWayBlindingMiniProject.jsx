import React, { useState } from "react";    

function TwoWay() {
  const [username, setUsername] = useState("");

  const userchange = (e) =>{
    setUsername(e.target.value)
  }

  return (
    <div className="container">
      <h1>Live Username Badge</h1>
      
      <input
        type="text"
        placeholder="Enter your username..."
        value={username}
        onChange={userchange}
      />

      <div className="badge text-white">
        {username ? `@${username}` : "@yourname"}
      </div>
    </div>
  );
}

export default TwoWay;
