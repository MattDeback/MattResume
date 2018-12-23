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

              <div class="jumbotron">
                <h1 class="textitle text-center">Hello, world!</h1>
                <p class="text text-center">Welcome to my online resume!</p>
                <hr class="line"/>
                <p class="text2">Name is Matt. I currently live in Lille, North of France.
                <br/>
                I'm currently working at Decathlon. I'm passionate
                <br/>
                 about customer relationship and digital.
                 <br/>
                </p>
                <a class="btn btn-outline-danger" target="_blank" href="https://www.linkedin.com/in/matthieudeback/" role="button">Learn more</a>
                <p class="text">
                Beside work, I'm a huge fan of video games, music and
                <br/>
                nature.
                </p>
                <hr class="line"/>
              </div>


              <p class="text">
                Welcome to my online resume!<br/>
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
