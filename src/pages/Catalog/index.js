import Footer from 'components/Footer';
import Header from 'components/Header';
import MovieGrid from 'components/MovieGrid';
import React from 'react';

function Catalog(props) {
  return (
    <>
      <Header />
      <MovieGrid />
      <Footer />
    </>
  );
}

export default Catalog;