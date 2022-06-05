import React from "react";
import apiConfig from "../../api/apiConfig";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function HeroSlideItem(props) {
  const { hero } = props;
  return (
    <>
      <LazyLoadImage src={apiConfig.originalImage(hero.backdrop_path)} alt={hero.title} />
      <div className="overlay"></div>
      <div className="hero-slide-item-content">
        <div className="item-content-wraper">
          <div className="item-content-title">{hero.title}</div>
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
          <div className="item-content-description">{hero.overview}</div>
          <div className="item-action">
            <Link to={`/detail/movie/${hero.id}`} state={hero} className="btn btn-hover">
              <i className="bx bxs-right-arrow"></i>
              <span>Watch now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSlideItem;
