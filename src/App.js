import React from "react";
import Navabrmenyu from "./companents/Navbar/Navabrmenyu";
import {  Routes ,Route } from "react-router-dom";
import Home from "./companents/Home/Home";
import About from "./companents/About/About";
import NotFound from "./companents/NotFound/NotFound";

function App() {
  return (
  <>
  {/* <Router> */}

    <Navabrmenyu/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/erorr" element={<NotFound/>} />
  </Routes> 
  {/* </Router> */}
    </>
  );
}
export default App;