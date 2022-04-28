import React from "react";
import NavbarCustom from "../../Components/Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Cards from "../Cards/Cards";
import Betting from "../Betting/Betting"
import Game from "../Game/Game" 
import Dollars from "../Dollars/Dollars";
import Footer from "../Footer/Footer";


function Home() {
  return (

    <div>
           <NavbarCustom/>
          <Welcome/>
          <Cards/>
          
          <Game/>
          <Dollars/>
          <Footer/>


    </div>
  );
}

export default Home;
