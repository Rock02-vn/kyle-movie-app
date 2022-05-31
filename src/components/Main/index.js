import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/lazy';
import SwiperCore, { Autoplay, Lazy, Navigation } from 'swiper';

import './main.css';

import tmdbApi, { movieType, tvType } from '../../api/tmdbApi'

import HeroSlideItem from '../HeroSlideItem/index'
import TopMovies from '../TopMovieItem';
import LatestMovieItem from '../latestMovieItem';
import SerieItem from '../SerieItem';
import CartoonItem from '../CartoonItem';
import SpecialMovieItem from '../SpecialMovieItem';

function Main(props) {
  const [heroSlides, setHeroSlides] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [latestMovies, setLatestMovies] = useState([])
  const [seriesList, setSeriesList] = useState([])
  const [cartoonList, setCartoonList] = useState([])
  const [specialMovie, setSpecialMovie] = useState({})

  SwiperCore.use([Autoplay, Navigation])

  useEffect(() => {
    const getMoviesList = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params })
        setHeroSlides(response?.results.slice(1, 5))
        setTopMovies(response?.results.slice(10, 20))
        setLatestMovies(response?.results.slice(10, 20))
        console.log(response.results.slice(0, 1));
      } catch (error) {
        console.log(error);
      }
    }

    const getTopMovies = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.top_rated, { params })
        setTopMovies(response?.results)
        setSpecialMovie(response?.results[15])
      } catch (error) {
        console.log(error);
      }
    }

    const getLatestMovies = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.upcoming, { params })
        setLatestMovies(response?.results)
      } catch (error) {
        console.log(error);
      }
    }

    const getSeriesList = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getTvList(tvType.popular, { params })
        setSeriesList(response?.results)
      } catch (error) {
        console.log(error);
      }
    }

    const getCartoonList = async () => {
      const params = { page: 2 }
      try {
        const response = await tmdbApi.getTvList(tvType.top_rated, { params })
        setCartoonList(response?.results)
      } catch (error) {
        console.log(error);
      }
    }

    getMoviesList()
    getLatestMovies()
    getTopMovies()
    getSeriesList()
    getCartoonList()
  }, [])
  return (
    <>
      <div className="hero-section">
        {/* <!-- HERO SLIDE --> */}
        <Swiper
          navigation
          modules={[Autoplay, Lazy, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {heroSlides.map((hero, index) => (
            <SwiperSlide key={hero.id}>
              <HeroSlideItem hero={hero} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <!-- END HERO SLIDE --> */}
        {/* <!-- TOP MOVIES SLIDE --> */}
        <div className="top-movies-slide">
          <Swiper
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={3}
          >
            {
              topMovies.map((hero, index) => (
                <SwiperSlide key={hero.id}>
                  <TopMovies hero={hero} />
                </SwiperSlide>
              ))
            }
          </Swiper>
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
          <Swiper
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={4}
          >
            {latestMovies.map((hero, index) => (
              <SwiperSlide key={hero.id}>
                <LatestMovieItem hero={hero} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
      {/* <!-- END LATEST MOVIES SECTION --> */}

      {/* <!-- LATEST SERIES SECTION --> */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            latest series
          </div>
          <Swiper
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={4}
          >
            {seriesList.map((series, index) => (
              <SwiperSlide key={series.id}>
                <SerieItem series={series} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
      {/* <!-- END LATEST SERIES SECTION --> */}

      {/* <!-- LATEST CARTOONS SECTION --> */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            latest cartoons
          </div>
          <Swiper
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={4}
          >
            {cartoonList.map((cartoons, index) => (
              <SwiperSlide key={cartoons.id}>
                <CartoonItem cartoons={cartoons} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <!-- END LATEST CARTOONS SECTION --> */}

      {/* <!-- SPECIAL MOVIE SECTION --> */}
      <div className="section">
        <SpecialMovieItem specialMovie={specialMovie} />
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