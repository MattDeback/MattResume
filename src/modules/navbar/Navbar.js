import React from 'react';
import './navbar.css';


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-fixed-top navbar-light bg-light">
          <a className="navbar-brand" href="#">Matthieu Deback</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/matthieudeback/">LinkedIn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/travel">Pictures</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Meteo</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
