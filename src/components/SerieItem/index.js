import React from 'react';
import apiConfig from '../../api/apiConfig';

function SerieItem(props) {
  const { series } = props;
  return (
    < >
      <img src={apiConfig.originalImage(series.backdrop_path)} alt="" />
      <div className="movie-item-content">
        <div className="movie-item-title">
          {series.original_name}
        </div>
        <div className="movie-infos">
          <div className="movie-info">
            <i className="bx bxs-star"></i>
            <span>{series.vote_average}</span>
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
    </>
  );
}

export default SerieItem;