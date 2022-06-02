import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'


function Header(props) {
  const handleMenu = () => {
    const btn = document.getElementById('hamburger-menu');
    btn.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
    console.log(btn);
  }

  return (
    <div className="nav-wrapper">
      <div className="container">
        <div className="nav">
          <Link to='/' className="logo">
            <i className='bx bx-movie-play bx-tada main-color'></i>Ky<span className="main-color">l</span>e
          </Link>
          <ul className="nav-menu" id="nav-menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movie'>Movies</Link></li>
            <li><Link to='/tv'>Tv Series</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li>
              <a href="hihi" className="btn btn-hover">
                <span>Sign in</span>
              </a>
            </li>
          </ul>

          <div className="hamburger-menu" id="hamburger-menu" onClick={handleMenu}>
            <div className="hamburger"></div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Header;