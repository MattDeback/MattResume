import React from 'react';
import './firstpage.css';

import Navbar from "../navbar/Navbar";

let curly = require ("./images/curly.jpg")

class Firstpage extends React.Component {
  render() {
    return (
      
      <div>
        <div class="snow">&nbsp;</div>
        <div class="snow2">&nbsp;</div>
        <div class="fill">
          <Navbar />

          <div class="page">
            <div class="element">
              <p class="text">
                Hi! Welcome to my online resume!<br/>
                My name is Matt! <br/>
                Enjoy your visit on this website!
              </p>

              <img src={curly} className="profileimg" alt=""/>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Firstpage;
