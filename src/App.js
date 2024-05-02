// import logo from './logo.svg';
import './App.css';
// import { render, screen } from '@testing-library/react';
import Nav from "./components/navbar/nav";
// import Landing from './pages/landing/landing';
import Profile from './pages/profile/profile';
import Support from './pages/support/support';
import Settings from './pages/settings/settings';
import Landing from './pages/landing/landing';
import Brainteaser from './pages/brainteaser/brainteaser';
import Home from './pages/home/home';
import About from './pages/home/about';
import Services from './pages/home/services';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Logout from './pages/logout/logout';
function App() {
  return (
    <div className="App">
       {/* <Nav/> */}
      {/* <Landing/> */}
      {/* <Profile/> */}
      {/* <Support/> */}
     {/* <Brainteaser/>  */}




      <BrowserRouter>
      <Nav/>
     
      <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>
     
      <Footer/>
      
        <Routes>
       
          {/* ... (unchanged routes) */}
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings/>} />
         <Route path="/brainteaser" element={<Brainteaser />} />
         <Route path="/logout" element={<Logout/>} />
          
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/" exact component={Landing} /> */}
        </Routes>
        
      </BrowserRouter>
     
    </div>
  );
}

export default App;
