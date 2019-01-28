import React from 'react';
import './firstpage.css';

import Navbar from "../navbar/Navbar";

let fleur = require ("./images/fleur.png")
let contact = require ("./images/contact.png")
let music = require ("./images/music.png")

const request = require("request");


// function getWeather(city) {
//   request(
//     {
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1a732d58cdcd372ec213ec6c8cda05a1`,
//
//       method: "GET"
//     },
//
//     function(error, response, result) {
//       const weather = JSON.parse(result);
//       // console.log(`${weather.main.temp}°C`);
//     }
//   );
// }
//
// getWeather("bogota");



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
                <a className="btn btn-outline-danger" target="_blank" rel="noopener" href="https://www.linkedin.com/in/matthieudeback/" role="button">Learn more</a>
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
