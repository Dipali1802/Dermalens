import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from "./components/navbar/nav";
import Profile from './pages/profile/profile';
import Landing from './pages/landing/landing';
import Footer from './components/footer/footer';
import Appointments from './pages/appointments/appointments';
import Login from './pages/login/login';
import Forgotpassword from './pages/forgotpassword/forgotpassword';
import FAQ from './pages/FAQ/faq';
import Doctors from "./pages/doctors/doctors";
import Timeanddate from "./pages/timeanddate/timeanddate";
import Payment from "./pages/payment/payment";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/profile" element={isLoggedIn ? <Profile onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/appointment" element={isLoggedIn ? <Appointments /> : <Navigate to="/login" />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/timeanddate" element={<Timeanddate />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
