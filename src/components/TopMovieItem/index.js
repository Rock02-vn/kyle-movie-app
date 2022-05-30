import React from 'react';
import apiConfig from '../../api/apiConfig';

function TopMovies(props) {
  const { hero } = props;
  return (
    <>
      {/* <div className="movie-item"> */}
      <img src={apiConfig.originalImage(hero.backdrop_path)} alt="" />
      <div className="movie-item-content">
        <div className="movie-item-title">
          {hero.title}
        </div>
        <div className="movie-infos">
          <div className="movie-info">
            <i className="bx bxs-star"></i>
            <span>{hero.vote_average}</span>
          </div>
          <div className="movie-info">
            <i className="bx bxs-time"></i>
            <span>120 mins</span>
          </div>
          <div className="movie-info">
            <span>HD</span>
          </div>
          <div className="movie-info">
            <span>16+</span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default TopMovies;