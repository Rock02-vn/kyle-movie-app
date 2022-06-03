import apiConfig from 'api/apiConfig';
import React from 'react';
import { Link } from 'react-router-dom';

function SimilarItem(props) {
  const { similar } = props;
  return (
    <div className="video" key={similar.id}>
      <Link to={`/detail/movie/${similar.id}`} className="image"><img
        src={apiConfig.w500Image(similar.poster_path)}
        alt={similar.title || similar.name} /></Link>
      <div className="info">
        <div className="name">{similar.title || similar.name}</div>
        <div className="rating">
          <span className="star">
            <i className='bx bxs-star'></i>
          </span>
          <span className="score">{similar.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default SimilarItem;