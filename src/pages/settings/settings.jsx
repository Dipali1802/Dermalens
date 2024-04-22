import React, { useState } from 'react';
import "./settings.css";
 const Settings = () => {

  return (
    // <div>
    //   <h2>All your preferences here</h2>
    //   <p>Customise your profile below</p>
    //   <h4>General</h4>
       
    // </div>
    <div className="container">
    <header className="header">
     
      <div className="header__right">
        <h1>All your preferences here</h1>
      </div>
    </header>
    <main className="main">
      <section className="profile">
        <h2>Customise your profile below</h2>
        <ul>
          <li>General</li>
          <li>About DermaLens</li>
          <li>Delete Account</li>
          <li>Share with family and friends</li>
          <li>Privacy policy</li>
          <li>Help and support</li>
        </ul>
      </section>
    </main>
  </div>
  );
};

export default Settings;