import apiConfig from 'api/apiConfig';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieSwiperItem = ({ category, item }) => {

  return (
    <>
      {item.backdrop_path !== null &&
        <Link to={`/detail/${category}/${item.id}`} state={item} className="item-grid" >
          <img src={apiConfig.w500Image(item.backdrop_path)} alt={item.backdrop_path} />
          <div className="movie-item-content">
            <div className="movie-item-title">
              {item.name || item.title}
            </div>
            <div className="movie-infos">
              <div className="movie-info">
                <i className="bx bxs-star"></i>
                <span>{item.vote_average}</span>
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
      }
    </>
  );
};

export default MovieSwiperItem;