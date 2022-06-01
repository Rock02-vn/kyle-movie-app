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
        <p><i class='bx bxs-envelope'></i>: leky.developer@gmail.com</p>
        <p><i class='bx bxs-phone' ></i>: (+84) 989 788 749</p>
      </div>
      <Footer />
    </>
  );
}

export default About;