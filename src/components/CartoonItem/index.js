import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';

function CartoonItem(props) {
  const { cartoons } = props
  return (
    <Link to={`/detail/tv/${cartoons.id}`} state={cartoons} >
      <img src={apiConfig.originalImage(cartoons.backdrop_path)} alt="" />
      <div className="movie-item-content">
        <div className="movie-item-title">
          {cartoons.name}
        </div>
        <div className="movie-infos">
          <div className="movie-info">
            <i className="bx bxs-star"></i>
            <span>{cartoons.vote_average}</span>
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
    </Link>
  );
}

export default CartoonItem;