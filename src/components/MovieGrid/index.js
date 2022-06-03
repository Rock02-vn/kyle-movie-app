import tmdbApi, { movieType, tvType } from "api/tmdbApi";
import MovieSwiperItem from "components/MovieSwiperItem";
import useDebounce from "hooks/useDebounce";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./movie-grid.css";

function MovieGrid(props) {
  const { category, keyword } = useParams();

  const navigate = useNavigate();

  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let response = null;

    const getItems = async () => {
      if (keyword === undefined) {
        const params = {};
        category === "movie"
          ? (response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            }))
          : (response = await tmdbApi.getTvList(tvType.popular, { params }));
      } else {
        const params = { query: keyword };
        response = await tmdbApi.search(category, { params });
      }

      setItemList(response.results);
      setTotalPages(response.total_pages);
    };
    getItems();
  }, [category, keyword]);

  const loadMore = async () => {
    const params = { page: page + 1 };
    let response = null;

    if (category === "movie") {
      response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
    } else {
      response = await tmdbApi.getTvList(tvType.popular, { params });
    }
    setItemList([...itemList, ...response.results]);
    setPage(page + 1);
  };
  const debounced = useDebounce(searchText, 300);

  const goToSearch = useCallback(() => {
    if (debounced.trim().length > 0) {
      navigate(`/${category}/search/${debounced}`);
    }
  }, [category, debounced, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      if (e.keyCode === 13) goToSearch();
    };

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [goToSearch]);

  return (
    <>
      <h1 className="movie-grid-h1">
        {category === "movie" ? "Movies" : "TV Series"}
      </h1>

      <div className="col-12" onTouchMove={loadMore}>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search..."
            className="header-search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="header-btn-search" onClick={goToSearch}>
            <i className="bx bx-search"></i>
          </span>
        </div>
        <div className="row">
          {itemList.length > 0 ? (
            itemList.map((item) => {
              return (
                item.backdrop_path !== null && (
                  <div className="col-3 col-md-4 col-sm-6" key={item.id}>
                    <MovieSwiperItem category={category} item={item} />
                  </div>
                )
              );
            })
          ) : (
            <h1 className="col-12 movie-grid-h1">Data not found !</h1>
          )}
        </div>
      </div>

      {page < totalPages ? (
        <div className="button-load-more">
          <button onClick={loadMore}>Load more</button>
        </div>
      ) : null}
    </>
  );
}

export default MovieGrid;
