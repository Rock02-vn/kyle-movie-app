import React, { useEffect, useState } from 'react';
import './main.css'

import tmdbApi, { movieType } from '../../api/tmdbApi'

function Main(props) {
  const [movieItems, setMovieItems] = useState([])

  useEffect(() => {
    const getMoviesList = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params })
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getMoviesList()
  }, [])

  return (
    <>
      <div className="hero-section">
        {/* <!-- HERO SLIDE --> */}
        <div className="hero-slide">
          <div className="owl-carousel carousel-nav-center" id="hero-carousel">
            {/* <!-- SLIDE ITEM --> */}
            <div className="hero-slide-item">
              <img src="https://ecdn.game4v.com/g4v-content/uploads/2021/07/Black-Panther-ra-di-1-game4v.jpg" alt="" />
              <div className="overlay"></div>
              <div className="hero-slide-item-content">
                <div className="item-content-wraper">
                  <div className="item-content-title top-down">
                    Black Panther
                  </div>
                  <div className="movie-infos top-down delay-2">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
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
                  <div className="item-content-description top-down delay-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum
                    vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium,
                    facere ab suscipit.
                  </div>
                  <div className="item-action top-down delay-6">
                    <a href="en" className="btn btn-hover">
                      <i className="bx bxs-right-arrow"></i>
                      <span>Watch now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END SLIDE ITEM --> */}
            {/* <!-- SLIDE ITEM --> */}
            <div className="hero-slide-item">
              <img src="https://d.newsweek.com/en/full/1641068/supergirl-canceled.png?w=1600&h=1200&l=65&t=12&q=88&f=65c77eea9b7a1f2d8699e74c22df17bc" alt="" />
              <div className="overlay"></div>
              <div className="hero-slide-item-content">
                <div className="item-content-wraper">
                  <div className="item-content-title top-down">
                    Supergirl
                  </div>
                  <div className="movie-infos top-down delay-2">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
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
                  <div className="item-content-description top-down delay-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum
                    vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium,
                    facere ab suscipit.
                  </div>
                  <div className="item-action top-down delay-6">
                    <a href="en" className="btn btn-hover">
                      <i className="bx bxs-right-arrow"></i>
                      <span>Watch now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END SLIDE ITEM --> */}
            {/* <!-- SLIDE ITEM --> */}
            <div className="hero-slide-item">
              <img src="https://genk.mediacdn.vn/139269124445442048/2020/12/11/mjfrnwreao3dchwffqlr3d-16076763546641599148237.jpg" alt="" />
              <div className="overlay"></div>
              <div className="hero-slide-item-content">
                <div className="item-content-wraper">
                  <div className="item-content-title top-down">
                    Wanda Vision
                  </div>
                  <div className="movie-infos top-down delay-2">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
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
                  <div className="item-content-description top-down delay-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum
                    vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium,
                    facere ab suscipit.
                  </div>
                  <div className="item-action top-down delay-6">
                    <a href="en" className="btn btn-hover">
                      <i className="bx bxs-right-arrow"></i>
                      <span>Watch now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END SLIDE ITEM --> */}
          </div>
        </div>
        {/* <!-- END HERO SLIDE --> */}
        {/* <!-- TOP MOVIES SLIDE --> */}
        <div className="top-movies-slide">
          <div className="owl-carousel" id="top-movies-slide">
            {/* <!-- MOVIE ITEM --> */}
            <div className="movie-item">
              <img src="./images/series/supergirl.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Supergirl
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </div>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <div className="movie-item">
              <img src="./images/movies/captain-marvel.png" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Captain Marvel
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </div>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <div className="movie-item">
              <img src="./images/cartoons/demon-slayer.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Infinity Train
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </div>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <div className="movie-item">
              <img src="./images/movies/blood-shot.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Bloodshot
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </div>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <div className="movie-item">
              <img src="./images/series/wanda.png" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Wanda Vision
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </div>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <div className="movie-item">
              <img src="./images/movies/bat-man.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  The Dark Knight
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </div>
            {/* <!-- END MOVIE ITEM --> */}
          </div>
        </div>
        {/* <!-- END TOP MOVIES SLIDE --> */}
      </div>
      {/* <!-- END HERO SECTION --> */}

      {/* <!-- LATEST MOVIES SECTION --> */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            latest movies
          </div>
          <div className="movies-slide carousel-nav-center owl-carousel">
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/movies/theatre-dead.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Theatre of the dead
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/movies/transformer.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Transformer
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/movies/resident-evil.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Resident Evil
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/movies/captain-marvel.png" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Captain Marvel
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/movies/hunter-killer.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Hunter Killer
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/movies/blood-shot.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Bloodshot
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/movies/call.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Call
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
          </div>
        </div>
      </div>
      {/* <!-- END LATEST MOVIES SECTION --> */}

      {/* <!-- LATEST SERIES SECTION --> */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            latest series
          </div>
          <div className="movies-slide carousel-nav-center owl-carousel">
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/series/supergirl.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Supergirl
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/series/stranger-thing.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Stranger Things
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/series/star-trek.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Star Trek
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/series/penthouses.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Penthouses
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/series/mandalorian.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Mandalorian
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/series/the-falcon.webp" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  The Falcon And The Winter Soldier
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/series/wanda.png" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Wanda Vision
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
          </div>
        </div>
      </div>
      {/* <!-- END LATEST SERIES SECTION --> */}

      {/* <!-- LATEST CARTOONS SECTION --> */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            latest cartoons
          </div>
          <div className="movies-slide carousel-nav-center owl-carousel">
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/cartoons/demon-slayer.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Demon Slayer
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/cartoons/croods.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Croods
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/cartoons/dragon.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Dragonball
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/cartoons/over-the-moon.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Over The Moon
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/cartoons/weathering.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Weathering With You
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/cartoons/your-name.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Your Name
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
            {/* <!-- MOVIE ITEM --> */}
            <a href="en" className="movie-item">
              <img src="./images/cartoons/coco.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">
                  Coco
                </div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
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
            </a>
            {/* <!-- END MOVIE ITEM --> */}
          </div>
        </div>
      </div>
      {/* <!-- END LATEST CARTOONS SECTION --> */}

      {/* <!-- SPECIAL MOVIE SECTION --> */}
      <div className="section">
        <div className="hero-slide-item">
          <img src="./images/transformer-banner.jpg" alt="" />
          <div className="overlay"></div>
          <div className="hero-slide-item-content">
            <div className="item-content-wraper">
              <div className="item-content-title">
                Transformer
              </div>
              <div className="movie-infos">
                <div className="movie-info">
                  <i className="bx bxs-star"></i>
                  <span>9.5</span>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero
                reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab
                suscipit.
              </div>
              <div className="item-action">
                <a href="en" className="btn btn-hover">
                  <i className="bx bxs-right-arrow"></i>
                  <span>Watch now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END SPECIAL MOVIE SECTION --> */}

      {/* <!-- PRICING SECTION --> */}
      <div className="section">
        <div className="container">
          <div className="pricing">
            <div className="pricing-header">
              Ky<span className="main-color">l</span>e pricing
            </div>
            <div className="pricing-list">
              <div className="row">
                <div className="col-4 col-md-12 col-sm-12">
                  <div className="pricing-box">
                    <div className="pricing-box-header">
                      <div className="pricing-name">
                        Basic
                      </div>
                      <div className="pricing-price">
                        Free
                      </div>
                    </div>
                    <div className="pricing-box-content">
                      <p>Originals</p>
                      <p>Swich plans anytime</p>
                      <p><del>65+ top Live</del></p>
                      <p><del>TV Channels</del></p>
                    </div>
                    <div className="pricing-box-action">
                      <a href="en" className="btn btn-hover">
                        <span>Register now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-12 col-sm-12">
                  <div className="pricing-box hightlight">
                    <div className="pricing-box-header">
                      <div className="pricing-name">
                        Premium
                      </div>
                      <div className="pricing-price">
                        $35.99 <span>/month</span>
                      </div>
                    </div>
                    <div className="pricing-box-content">
                      <p>Originals</p>
                      <p>Swich plans anytime</p>
                      <p><del>65+ top Live</del></p>
                      <p><del>TV Channels</del></p>
                    </div>
                    <div className="pricing-box-action">
                      <a href="en" className="btn btn-hover">
                        <span>Register now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-12 col-sm-12">
                  <div className="pricing-box">
                    <div className="pricing-box-header">
                      <div className="pricing-name">
                        VIP
                      </div>
                      <div className="pricing-price">
                        $65.99 <span>/month</span>
                      </div>
                    </div>
                    <div className="pricing-box-content">
                      <p>Originals</p>
                      <p>Swich plans anytime</p>
                      <p><del>65+ top Live</del></p>
                      <p><del>TV Channels</del></p>
                    </div>
                    <div className="pricing-box-action">
                      <a href="en" className="btn btn-hover">
                        <span>Register now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;