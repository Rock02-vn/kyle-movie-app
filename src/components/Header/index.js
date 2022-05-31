import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'


function Header(props) {
  return (
    <div className="nav-wrapper">
      <div className="container">
        <div className="nav">
          <Link to='/' className="logo">
            <i className='bx bx-movie-play bx-tada main-color'></i>Ky<span className="main-color">l</span>e
          </Link>
          <ul className="nav-menu" id="nav-menu">
            <li><Link to='/'>Home</Link></li>
            <li><a href="hihi">Genre</a></li>
            <li><a href="hihi">Movies</a></li>
            <li><a href="hihi">Series</a></li>
            <li><a href="hihi">About</a></li>
            <li>
              <a href="hihi" className="btn btn-hover">
                <span>Sign in</span>
              </a>
            </li>
            <li style={{ position: "relative" }}>
              <input type="text" placeholder="Search..." className="header-search-input" />
              <a href="hihi" className="header-btn-search"><i className='bx bx-search'></i></a>
            </li>
          </ul>

          <div className="hamburger-menu" id="hamburger-menu">
            <div className="hamburger"></div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Header;