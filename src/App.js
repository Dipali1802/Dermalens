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
import Contact from './pages/contact/contact';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav/>
      {/* <Login />    */}
       <Routes>
       
          {/* ... (unchanged routes) */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />

          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings/>} /> */}
         {/* <Route path="/brainteaser" element={<Brainteaser />} /> */}
         {/* <Route path="/logout" element={<Logout/>} /> */}
         <Route path="/appointment" element={<Appointments />} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/login" element={<Login/>} />
          
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/" exact component={Landing} /> */}
        </Routes>

        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
