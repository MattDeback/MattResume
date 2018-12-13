import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

//modules
import Navbar from "./modules/navbar/Navbar";
import Firstpage from "./modules/firstpage/Firstpage";
import Pic from "./modules/pic/Pic";


//App
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Firstpage} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/pic" component={Pic} />
        </div>
      </Router>
    );
  }
}

export default App;
