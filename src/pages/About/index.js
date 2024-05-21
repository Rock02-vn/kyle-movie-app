import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

import './about.css'

function About(props) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <h1>Made by: Kyle</h1>
        <p><i className='bx bxs-envelope bx-tada personal-icon'></i>: leky.developer@gmail.com</p>
        <p><i className='bx bxs-phone bx-tada personal-icon' ></i>: (+84) 963 284 451</p>
        <i className='bx bxl-github bx-tada personal-icon' ></i>: <a style={{ textDecoration: 'underline' }} href="https://github.com/levinhky" rel="noreferrer" target="_blank">Github </a>
      </div>
      <Footer />
    </>
  );
}

export default About;