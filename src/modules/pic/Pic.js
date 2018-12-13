import React from 'react';
import './pic.css';


//modules
import Navbar from "../navbar/Navbar";

let curly = require ("./images/curly.jpg")



class Pic extends React.Component {
  render() {
    return (

      <div class="snow2 fill">

      <Navbar />

      <img src={curly} className="profileimg" alt=""/>
</div>

    );
  }
}

export default Pic;
