
import Home from '../home/home';
import About from '../home/about';
import Services from '../home/services';
import Gettingstarted from '../home/gettingstarted';

function Landing() {
    return (
      <div >
       
       
        <div id="home">
            <Home />
          </div>
  
          <div id="about">
            <About />
          </div>
          <div id="gettingstarted">
            <Gettingstarted />
          </div>
          <div id="services">
            <Services />
          </div>
          {/* <Appointments/> */}
       
        
         
       
      </div>
    );
  }
  
  export default Landing;