import React from 'react';
import './firstpage.css';

//modules
import Navbar from "../navbar/Navbar";

class Firstpage extends React.Component {
  render() {
    return (
      <div className="Navbar">
      <Navbar />
        <h5>Firstpage</h5>
      </div>
    );
  }
}

export default Firstpage;
