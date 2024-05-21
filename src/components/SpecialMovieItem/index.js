import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SpecialMovieItem(props) {
  const { specialMovie } = props

  return (
    <div className="hero-slide-item">
      <LazyLoadImage src={apiConfig.originalImage(specialMovie.backdrop_path)} alt={specialMovie.original_title} />
      <div className="overlay"></div>
      <div className="hero-slide-item-content">
        <div className="item-content-wraper">
          <div className="item-content-title">
            {specialMovie.original_title}
          </div>
          <div className="movie-infos">
            <div className="movie-info">
              <i className="bx bxs-star"></i>
              <span>{specialMovie.vote_average}</span>
            </div>
            {/* <div className="movie-info">
              <i className="bx bxs-time"></i>
              <span>120 mins</span>
            </div> */}
            <div className="movie-info">
              <span>HD</span>
            </div>
            <div className="movie-info">
              <span>16+</span>
            </div>
          </div>
          <div className="item-content-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero
            reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab
            suscipit.
          </div>
          <div className="item-action">
            <Link to={`/detail/movie/${specialMovie.id}`} state={specialMovie} className="btn btn-hover">
              <i className="bx bxs-right-arrow"></i>
              <span>Watch now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialMovieItem;