import React from 'react';
import './meteo.css';


const request = require("request");




class Meteo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: 0
    }
  }

temperature () {
this.setState({degree: 6})
}

handleclick () {
const a = this.getWeather('mexico')
this.setState({degree: a})
}

test () {
  console.log(10)
}


getWeather(city) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1a732d58cdcd372ec213ec6c8cda05a1`,

      method: "GET"
    },

    function(error, response, result) {
      const weather = JSON.parse(result);
      console.log(`${weather.main.temp}°C`);
      // this.setState({degree: weather.main.temp});
      // return weather.main.temp
    }
  );
}


  render() {



    return (
      <div>
      la temperature a Moscou est de {this.getWeather('moscow')}
        <h5> A lille, la meteo est de {this.state.degree}</h5>
        <button onClick={()=> this.handleclick()}>temperature a lille</button>
        <button onClick={()=> this.temperature()}>temperature a lille +2</button>
        <p>a mexico il fait {this.a}</p>
      </div>
    )
  }
}


export default Meteo;
