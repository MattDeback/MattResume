import React from 'react';
import './navbar.css';


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Matthieu Deback</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/matthieudeback/">LinkedIn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pictures</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Music</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
