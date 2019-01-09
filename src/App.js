import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//modules
import Firstpage from "./modules/firstpage/Firstpage";
import Navbar from "./modules/navbar/Navbar";
import Travel from "./modules/travel/Travel";



//App
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Firstpage} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/travel" component={Travel} />
        </div>
      </Router>
    );
  }
}

export default App;
