import React from 'react';
import './logout.css';

function Logout() {
  const handleLogout = () => {
    // Add your logout logic here, e.g., clear local storage or call a logout API
    localStorage.removeItem('userToken');
    window.location.href = '/login'; // Redirect to login page after logout
  };

  const handleCancel = () => {
    // Add logic to close the logout modal, if applicable
  };

  return (
    <div className="logout-container">
      <div className="logout-modal">
        <h2>Are you sure you want to log out?</h2>
        <div className="logout-buttons">
          <button onClick={handleCancel}>No</button>
          <button onClick={handleLogout}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
