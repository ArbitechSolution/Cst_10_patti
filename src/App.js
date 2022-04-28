import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarCustom from "./Components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import './main.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Betting from "./screens/Betting/Betting";



const App = () => {
  return (
    <div>  
      <ToastContainer/>
      <BrowserRouter>
   
  
        <Routes>  
        <Route path={"/"} element={<Home />} />   
        </Routes>
        
      </BrowserRouter>

  
    </div>
  );
};

export default App;
