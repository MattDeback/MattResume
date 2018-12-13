import React from 'react';
import './firstpage.css';


//modules
import Navbar from "../navbar/Navbar";

let curly = require ("./images/curly.jpg")

class Firstpage extends React.Component {
  render() {
    return (

      <div class="snow2 fill">
      <Navbar />

      <div class="page">
      <div class="element">
      <p class="text">
      TEST Hi! Welcome to my online resume!<br/>
      My name is Matt! <br/>
      Enjoy your visit on this website!
      </p>

      <img src={curly} className="profileimg" alt=""/>




      </div>
      </div>










      </div>
    );
  }
}

export default Firstpage;
