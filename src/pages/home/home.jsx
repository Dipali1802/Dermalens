import React from "react";
import "./home.css";

// import logo from "../images/logo.png";
// import logo from "../images/logo.png";

function App() {
  return (
    <div className="App">
  <div className="top-half">
    <div className="title-container">
      <h1 className="App-title">DERMALENS</h1>
      <h3 className="App-subtitle">click | detect</h3>
      <p className="App-info">A product by AIM4u Software Solutions private limited</p>
    </div>
  </div>
  <div className="bottom-half">
    <header className="App-header">
      <h4>Login with</h4>
      <button className="login-button">
        <strong>Google</strong>
      </button>
      <a href="#" className="skip-button">Skip</a>
      <p className="terms-text">
        By using Dermalens you agree with our Terms and Conditions & Privacy Policy
      </p>
    </header>
  </div>
</div>

   
  );
}

export default App;
