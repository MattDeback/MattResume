/**
 * Merci à Christophe le bug fixer
 */

import React from 'react';
import './meteo.css';
import Navbar from "../navbar/Navbar";

/**
 *
 */
class Meteo extends React.Component {

  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      city: 'lille',
      degree: '-',
      weather: ''
    }
  }

  /**
   *
   */
  componentDidMount() {
    this.getWeather(this.state.city);
  }

  /**
   *
   * @param {*} city
   */
  handleclick(city) {
    this.getWeather(city);
  }

  /**
   *
   * @param {*} city
   */
  getWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1a732d58cdcd372ec213ec6c8cda05a1`)
      .then(result => result.json())
      .then(result => {
                        console.log(result);
                        this.setState({
                          city: result.name,
                          degree: result.main.temp,
                          weather: result.weather[result.weather.length-1].description
                        })
                      });
  }

  /**
   *
   */
  render() {
    const city    = this.state.city;
    const degree  = this.state.degree;
    const weather  = this.state.weather;

    return (
      <div>
      <div className="snow">&nbsp;</div>
      <div className="snow2">&nbsp;</div>
      <div className="fill">
        <Navbar />
        <br/>
        <br/>
        <br/>
        <h1 className='textmeteo'>City : {city}</h1>
        <ul>
          <li className='textmeteo'>Weather : {weather}</li>
          <li className='textmeteo'>Temp : {degree}°C</li>
        </ul>
        <button onClick={()=> this.handleclick('steenbecque,fr')}>Steenbecque</button>
        <button onClick={()=> this.handleclick('autrans,fr')}>Autrans</button>
        <button onClick={()=> this.handleclick('bethune,fr')}>Bethune</button>
        <button onClick={()=> this.handleclick('rang-du-fliers,fr')}>Rang-du-Fliers</button>
        </div>
      </div>
    )
  }
}

export default Meteo;
