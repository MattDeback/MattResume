import React from 'react';
import './firstpage.css';


//modules
import Navbar from "../navbar/Navbar";

let curly = require ("./images/curly.jpg")

class Firstpage extends React.Component {
  render() {
    return (
      <div>
      <Navbar />

      <div class="container text space">
        <div class="row">
          <div class="col align-self-start">
            <h3>Hi!</h3>
            <p>welcome to my website. this is a writing test and i dunno what to say for the moment! </p>
          </div>
          <div class="col align-self-center">
            <img src={curly} className="img-fluid rounded" alt="..."/>
          </div>
          <div class="col align-self-end">
            <p> this is a writing test and i dunno what to say for the moment! I really don't. But i like the text font
            </p>
          </div>
        </div>
      </div>







      </div>
    );
  }
}

export default Firstpage;
