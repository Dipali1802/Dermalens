// import logo from './logo.svg';
import './App.css';
// import { render, screen } from '@testing-library/react';
import Nav from "./components/navbar/nav";
// import Landing from './pages/landing/landing';
import Profile from './pages/profile/profile';
import Support from './pages/support/support';
import Settings from './pages/settings/settings';
import Landing from './pages/landing/landing';
import Home from './pages/home/home';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       {/* <Nav/> */}
      {/* <Landing/> */}
      {/* <Profile/> */}
      {/* <Support/> */}
     {/* <Home/>  */}
      <BrowserRouter>
      <Nav/>
        <Routes>
       
          {/* ... (unchanged routes) */}
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings/>} />
         
         
          {/* <Route path="/" element={<Support />} /> */}
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
