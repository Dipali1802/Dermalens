// import logo from './logo.svg';
import "./App.css";
// import { render, screen } from '@testing-library/react';
import Nav from "./components/navbar/nav";
// import Landing from './pages/landing/landing';
import Profile from './pages/profile/profile';
// import Support from './pages/support/support';
// import Settings from './pages/settings/settings';
import Landing from './pages/landing/landing';
import Footer from './components/footer/footer';
import Appointments from './pages/Appointments/appointments';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Login from './pages/login/login';
import Forgotpassword from './pages/forgotpassword/forgotpassword';
import FAQ from './pages/FAQ/faq';
import Doctors from "./pages/doctors/doctors";
import Timeanddate from "./pages/timeanddate/timeanddate";
import Payment from "./pages/payment/payment";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav/>
    
       <Routes>
       
          {/* ... (unchanged routes) */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />

          <Route path="/profile" element={<Profile/>} />
        
         <Route path="/appointment" element={<Appointments />} />

         <Route path="/faq" element={<FAQ/>} />
        
         <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/timeanddate" element={<Timeanddate/>} />
        <Route path="/payment" element={<Payment/>} />
        </Routes>

        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
