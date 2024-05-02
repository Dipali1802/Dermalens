// import logo from './logo.svg';
import './App.css';
// import { render, screen } from '@testing-library/react';
import Nav from "./components/navbar/nav";
// import Landing from './pages/landing/landing';
import Profile from './pages/profile/profile';
// import Support from './pages/support/support';
import Landing from './pages/landing/landing';
import Appointments from './pages/Appointments/appointments';

// import Brainteaser from './pages/brainteaser/brainteaser';

import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Logout from './pages/logout/logout';
function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Landing />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/appointment" element={<Appointments />} />
         <Route path="/logout" element={<Logout/>} />
     
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
