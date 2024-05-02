// import { Link } from 'react-router-dom';
// function brainteaser() {
//   return (
//     <div>
//       {/* Your other components and navigation */}
//       <Link to="/brainteaser">Brainteaser</Link>
//     </div>
//   );
// }
// export default brainteaser;

import React, { useState } from "react";
import "./brainteaser.css";
function Brainteaser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <a href="#">New to us? Sign Up</a>
        <a href="#">Looking for Admin Login? Click Here</a>
      </div>
    </div>
  );
}

export default Brainteaser;
