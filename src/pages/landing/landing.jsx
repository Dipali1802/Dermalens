
// import Navbar from "../../components/navbar/nav";
// import "./landing.css";

// function Landing() {
  
//   return (
//     <div className="landing-page">  {/* Use a more specific class name */}
      

//       <div className="landing-content">
//       <h2 className="title">Show us your skin concern</h2>

//         <h5 className="title2">This will help us to identify your ailment</h5>
       
//         <button  className="button"> Upload from gallery  </button>
//       </div>
//     </div>
//   );
// }

// export default Landing;


import React, { useState } from "react";
// import Navbar from "../../components/navbar/nav";
import "./landing.css";

function Landing() {
  const [file, setFile] = useState();


// UPLOADING A FILE FROM DESKTOP 

//  function handleFile (event)  {
//     setFile(event.target.files[0])
//     // console.log(event.target.files[0])
    
//   }
// function handleUpload(){
//   const formData =  new FormData();
//   formData.append('file', file);
//   fetch(
//     'url',
//     {
//       method: "POST",
//       body: formData
//     }
//   ).then((response) => response.json()).then(
//     (result) => {
//       console.log('success', result);
//     }
//   )
//   .catch(error =>{
//     console.error("Error:", error);
//   });
// }
  return (
    <div className="App">
      
      <div className="landing">
        <div className="landing-content">
          <h2 className="title">Show us your skin concern</h2>
          <h5 className="subtitle">This will help us to identify your ailment</h5>
          <form>
            {/* <input type = " file" name = " file" onChange={handleFile}/> */}
          {/* <button>Upload from desktop</button> */}
          
          <button className="upload-button">Upload from desktop</button>

          
          
          </form>
        </div>
      </div>
    </div>
  );
}

export default Landing;
