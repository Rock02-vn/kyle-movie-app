import React from 'react';
// import '../Main/main.css'
import './HeroSlideItem.css'
import apiConfig from '../../api/apiConfig'

function HeroSlideItem(props) {
  const { hero } = props
  return (
    <>
      <img src={apiConfig.originalImage(hero.backdrop_path)} alt="" />
      <div className="overlay"></div>
      <div className="hero-slide-item-content">
        <div className="item-content-wraper">
          <div className="item-content-title">
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
          <div className="item-content-description">
            {hero.overview}
          </div>
          <div className="item-action">
            <a href="en" className="btn btn-hover">
              <i className="bx bxs-right-arrow"></i>
              <span>Watch now</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSlideItem;