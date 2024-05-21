import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/lazy';
import SwiperCore, { Autoplay, Lazy, Navigation } from 'swiper';

import './main.css';

import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi'

import HeroSlideItem from '../HeroSlideItem'
import TopMovies from '../TopMovieItem';
import SpecialMovieItem from '../SpecialMovieItem';
import MovieSwiper from 'components/MovieSwiper';

function Main(props) {
  const [heroSlides, setHeroSlides] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [specialMovie, setSpecialMovie] = useState({})

  SwiperCore.use([Autoplay, Navigation])

  useEffect(() => {
    const getMoviesList = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params })
        setHeroSlides(response?.results.slice(0, 5))
        setSpecialMovie(response?.results[0])
        setTopMovies(response?.results.slice(10, 20))
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
            <SwiperSlide className="hero-slide-item" key={hero.id}>
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
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              1240: {
                slidesPerView: 4
              }
            }}
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
          <MovieSwiper category={category.movie} type={movieType.upcoming} />

        </div>
      </div>
      {/* <!-- END LATEST MOVIES SECTION --> */}

      {/* <!-- LATEST SERIES SECTION --> */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            latest series
          </div>
          <MovieSwiper category={category.tv} type={tvType.popular} />
        </div>
      </div>
      {/* <!-- END LATEST SERIES SECTION --> */}

      {/* <!-- LATEST CARTOONS SECTION --> */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            latest cartoons
          </div>
          <MovieSwiper category={category.tv} type={tvType.top_rated} />
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