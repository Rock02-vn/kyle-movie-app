import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tmdbApi from 'api/tmdbApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/lazy';
import MovieSwiperItem from 'components/MovieSwiperItem';

MovieItem.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

function MovieItem(props) {
  const { category, type } = props;

  const [itemList, setItemList] = useState([])

  useEffect(() => {
    const params = { page: 1 }
    let response = null

    const getItems = async () => {
      if (category === 'movie') {
        response = await tmdbApi.getMoviesList(type, { params })
        setItemList(response.results)
      } else {
        response = await tmdbApi.getTvList(type, { params })
        setItemList(response.results)
      }
    }

    getItems()
  }, [category, type])

  return (
    <>
      <Swiper
        navigation
        modules={Navigation}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={4}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1240: {
            slidesPerView: 4,
          },
        }}
      >
        {itemList.map((item, index) => (
          <SwiperSlide key={item.id}>
            <MovieSwiperItem category={category} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MovieItem;