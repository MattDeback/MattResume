import React from 'react';
import './navbar.css';


class Navbar extends React.Component {
  render() {
    return (
      <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Work experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Travels</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Multimedia
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Photos</a>
          <a class="dropdown-item" href="#">Videos</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Concert</a>
        </div>
      </li>
    </ul>
  </div>
</nav>


      </div>
    );
  }
}

export default Navbar;
