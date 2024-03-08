import tmdbApi from "api/tmdbApi";
import SimilarItem from "components/SimilarItem";
import useDebounce from "hooks/useDebounce";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./movie.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  collection,
  query,
  where,
  onSnapshot,
  getFirestore,
  addDoc,
} from "firebase/firestore";

function MovieDetail(props) {
  const { category, id } = useParams();
  const [episode, setEpisode] = useState(1);
  const [season, setSeason] = useState(1);
  const [movie, setMovie] = useState({});
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [comments, setComments] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [commentContent, setCommentContent] = useState("");

  const isUser = useSelector((state) => state.auth.currentUser);
  const debounced = useDebounce(commentContent, 300);

  const db = getFirestore();

  // Get episodes
  function episodesTv(value = detail?.next_episode_to_air?.episode_number || detail?.number_of_episodes) {
    return Array.from(
      {
        length: value
      },
      (_, i) => i + 1
    );
  }

  useEffect(() => {
    episodesTv()
  }, [season])

  // Get detail movie
  useEffect(() => {
    const getMovieDetail = async () => {
      const response = await tmdbApi.getVideos(category, id);
      const response2 = await tmdbApi.similar(category, id);
      const response3 = await tmdbApi.detail(category, id, { params: {} });
      setMovie(response.results[response.results.length - 1]);
      setSimilarMovies(response2.results);
      setDetail(response3);
      setGenres(response3.genres);
    };

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    getMovieDetail();
  }, [category, id]);

  // Post comment
  const handlePostComment = useCallback(
    async (e) => {
      e.preventDefault();
      const data = {
        displayName: isUser.displayName,
        photoUrl: isUser.photoURL,
        uid: isUser.uid,
        commentContent: debounced,
        movieId: detail.id,
      };
      await addDoc(collection(db, "comments"), data);
      setCommentContent("");
    },
    [
      debounced,
      detail?.id,
      isUser?.displayName,
      isUser?.photoURL,
      isUser?.uid,
      db,
    ]
  );
  // Post comment
  useEffect(() => {
    const gettttt = async () => {
      const q = query(
        collection(db, "comments"),
        where("movieId", "==", detail.id)
      );
      const list = [];
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setComments(list);
      });
    };
    gettttt();
  }, [detail.id, db, debounced, handlePostComment]);

  // Post comment
  useEffect(() => {
    const enterEvent = (e) => {
      if (e.keyCode === 13) handlePostComment();
    };

    document.addEventListener("keyup", enterEvent);
    // Clean up
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [handlePostComment]);
  console.log(season);
  return (
    <div className="section">
      {movie ? (
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-12 col-sm-12">
              <div className="video-container">
                {category === 'movie' ?
                  <iframe
                    title="video-detail"
                    width="420"
                    height="450"
                    // src={`https://www.youtube-nocookie.com/embed/${movie.key}`}
                    src={`https://2embed.cc/embed/${detail.imdb_id}`}
                  ></iframe>
                  :
                  <iframe
                    title="video-detail"
                    width="420"
                    height="450"
                    // src={`https://www.youtube-nocookie.com/embed/${movie.key}`}
                    src={`https://2embed.cc/embed/${detail.id}/${season}/${episode}`}
                  ></iframe>
                }
              </div>

              <div className="movie-details">
                <h1>{detail.title || detail.original_name}</h1>
                <div className="movie-info">
                  <div className="rating">
                    <span className="star">
                      <i className="bx bxs-star"></i>
                    </span>
                    <span className="score">{detail.vote_average}</span>
                  </div>
                  <div className="release">
                    <span className="calendar">
                      <i className="bx bxs-calendar"></i>
                    </span>
                    <span className="year">
                      {detail.release_date || detail.first_air_date}
                    </span>
                  </div>
                </div>
                <div className="movie-genre">
                  {genres.map((genre) => (
                    <span href="=" className="genre" key={genre.id}>
                      {genre.name}
                    </span>
                  ))}
                </div>
                <div className="movie-description">
                  <p>{detail.overview}</p>
                </div>
              </div>
              {category === 'tv' && (
                <>
                  <h2>Seasons</h2>
                  <div className="episodes-list">
                    {detail?.seasons?.map((_, se) => (
                      <Link
                        to={{ pathname: `?episode=${se}` }}
                        className="episode"
                        style={season - 1 === se ? {
                          backgroundColor: '#0d90f3'
                        } : {}}
                        key={se}
                        onClick={() => {
                          setSeason(se + 1)
                          setEpisodes(episodesTv(_.episode_count))
                          console.log(_);
                        }}
                      >
                        {se + 1}
                      </Link>
                    ))}
                  </div>
                </>
              )}
              {category === "tv" && (
                <>
                  <h2>Episodes</h2>
                  <div className="episodes-list">
                    {episodes.map((ep) => (
                      <Link
                        to={{ pathname: `?episode=${ep}` }}
                        className="episode"
                        style={episode === ep ? {
                          backgroundColor: '#0d90f3'
                        } : {}}
                        key={ep}
                        onClick={() => setEpisode(ep)}
                      >
                        {ep}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="col-4 col-md-12 col-sm-12">
              <div className="similar-container">
                <div className="header">
                  <h2>Similar to this</h2>
                </div>
                <div className="similar-list">
                  {similarMovies.map((similarMovie) => (
                    <SimilarItem similar={similarMovie} key={similarMovie.id} />
                  ))}
                </div>
              </div>
            </div>
            {/* Comment section */}
            <div className="col-8 col-md-12 col-sm-12">
              <div className="comments-section">
                <h2>Comments</h2>

                {/* When user logged in */}
                {isUser && (
                  <form className="comment-box">
                    <div className="avatar">
                      <LazyLoadImage
                        style={{
                          width: "30px",
                          borderRadius: "50%",
                        }}
                        src={isUser.photoURL}
                        alt={isUser.photoURL}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Comment what yout think..."
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                    />
                    <button onClick={(e) => handlePostComment(e)}>
                      <i className="bx bxs-send"></i>
                    </button>
                  </form>
                )}

                {/* When user not logged in*/}
                {!isUser && (
                  <div className="comment-alert">
                    <div className="avatar">
                      <LazyLoadImage
                        style={{
                          width: "30px",
                          borderRadius: "50%",
                        }}
                        src="https://filmhot.live/default-avatar.png"
                        alt=""
                      />
                    </div>
                    <p>
                      You need to <Link to="/login">Sign in</Link> to comment !
                    </p>
                  </div>
                )}

                {comments.map((user) => (
                  <div className="comment-item" key={user.id}>
                    <LazyLoadImage src={user.photoUrl} alt={user.photoUrl} />
                    <div className="info">
                      <div className="info-name">
                        <span className="name">{user.displayName}</span>
                        <span className="time">{user.createdAt}</span>
                      </div>
                      <div className="content">{user.commentContent}</div>
                    </div>
                  </div>
                ))}

                {comments.length === 0 && (
                  <h4 style={{ textAlign: "center" }}>No one has commented</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Data not found!</h1>
      )}
    </div>
  );
}

export default MovieDetail;
