import React from 'react';
import './firstpage.css';

import Navbar from "../navbar/Navbar";

let fleur = require ("./images/fleur.png")
let contact = require ("./images/contact.png")
let music = require ("./images/music.png")

class Firstpage extends React.Component {
  render() {
    return (

      <div>
        <div className="snow">&nbsp;</div>
        <div className="snow2">&nbsp;</div>
        <div className="fill">
          <Navbar />

          <div className="page">
            <div className="element">


              <div className="jumbotron">
                <h1 className="textitle text-center">Hello, world!</h1>
                <p className="text text-center">Welcome to my online resume!</p>
                <hr className="line"/>
                <p className="text2">My name is Matt. I currently live in Lille, North of France.
                <br/>
                I'm currently working at Decathlon. I'm passionate about
                <br/>
                customer relationship and digital.
                 <br/>
                </p>
                <a className="btn btn-outline-danger" target="_blank" href="https://www.linkedin.com/in/matthieudeback/" role="button">Learn more</a>
                <p className="text">
                Beside work, I'm a huge fan of video games, music and nature.
                </p>
                <hr className="line"/>
              </div>


              <div className="row">
                <div className="col-sm" align="center">
                  <img src={music} className="imgfirstpage" alt=""/>
                </div>
                <div className="col-sm" align="center">
                  <img src={fleur} className="imgfirstpage" alt=""/>
                </div>
                <div className="col-sm" align="center">
                  <img src={contact} className="imgfirstpage" alt=""/>
                </div>
              </div>






            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Firstpage;
