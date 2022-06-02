
import tmdbApi, { movieType, tvType } from "api/tmdbApi";
import MovieSwiperItem from "components/MovieSwiperItem";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./movie-grid.css"

function MovieGrid(props) {
  const { category } = useParams();
  const [itemList, setItemList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    const params = {}
    let response = null

    const getItems = async () => {
      if (category === 'movie') {
        response = await tmdbApi.getMoviesList(movieType.upcoming, { params })
      } else {
        response = await tmdbApi.getTvList(tvType.popular, { params })
      }
      setItemList(response.results)
      setTotalPages(response.total_pages)
      console.log(response);
    }
    getItems()
  }, [category])

  const loadMore = async () => {
    const params = { page: page + 1 }
    let response = null

    if (category === 'movie') {
      response = await tmdbApi.getMoviesList(movieType.upcoming, { params })
    } else {
      response = await tmdbApi.getTvList(tvType.popular, { params })
    }
    setItemList([...itemList, ...response.results])
    setPage(page + 1)
  }

  return (
    <>
      <h1 className="movie-grid-h1">{category === "movie" ? "Movies" : "Tv Series"}</h1>

      <div className="col-12" onTouchMove={loadMore}>
        <div className="row">
          {itemList.map(item => {
            return item.backdrop_path !== null && <div className="col-3" key={item.id}>
              <MovieSwiperItem category={category} item={item} />
            </div>
          })}
        </div>
      </div>

      {page < totalPages ? <div className="button-load-more"><button onClick={loadMore}>Load more</button></div> : null}
    </>
  );
}

export default MovieGrid;
