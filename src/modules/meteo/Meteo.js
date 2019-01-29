/**
 * 
 */

import React from 'react';
import './meteo.css';

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
        <h1>City : {city}</h1>
        <ul>
          <li>Weather : {weather}</li>
          <li>Temp : {degree}°C</li>
        </ul>
        <button onClick={()=> this.handleclick('lille')}>Lille</button>
        <button onClick={()=> this.handleclick('london')}>London</button>
        <button onClick={()=> this.handleclick('moscow')}>Moscow</button>
        <button onClick={()=> this.handleclick('tokyo')}>Tokyo</button>
      </div>
    )
  }
}

export default Meteo;
