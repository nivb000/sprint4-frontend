import { utilService } from '../services/util.service'
import { Link } from 'react-router-dom'
import { Rating } from './rating'
import "../assets/styles/cmps/stay-preview.scss"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//for pagination  dont delete!
// import "swiper/css/bundle";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ToggleButton from '@mui/material/ToggleButton';
import { useDispatch } from 'react-redux';
import { updateStay } from "../store/stay.action"
import { useSelector } from 'react-redux';


export const StayPreview = ({ stay }) => {

  const user = useSelector(state => state.userModule.user)
  const dispatch = useDispatch()

  const onUpdateStay = () => {
    stay.likedByUsers.push(user.fullname)
    dispatch(updateStay(stay))
  }

  const handleHover = (ev, value) => {
    ev.stopPropagation();
    ev.nativeEvent.stopImmediatePropagation();
  }

  const toggleLikeBtn = () => {
    console.log('toggle');
  }

  return <section className="stay-preview">
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
            "--swiper-pagination-size": "10px",
        }}
        speed={600}
        loop={true}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper">
        <div slot="container-start"></div>
        {stay.imgUrls.map(img =>
          <SwiperSlide  >
            <Link to={`/stay/${stay._id}`}>
              <div className='title' data-swiper-parallax="-300">
                <div className='preview-img-container'>

                  <img src={img} alt='preview' />
                  < ToggleButton className='preview-unlike-btn'>
                    <FavoriteIcon />
                  </ToggleButton>
                  < ToggleButton className='preview-like-btn'>
                    <FavoriteIcon  />
                  </ToggleButton>

                </div>
              </div>
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
    </>

    <div className="preview-title">
      {stay.name.length > 25 ? <h1>{stay.name.substring(0, 25) + '...'}</h1> : <h1>{stay.name}</h1>}
      <div className='preview-rating'>
        <Rating ratingCount={stay.reviews.length} rate={stay.rate} />
      </div>
    </div>
    <div className="preview-subtitle">
      <p>{utilService.getRandomIntInclusive(100, 3000).toLocaleString('en-US')} Kilometers</p>
      <p>Sep 18 - 23</p>
    </div>
    <div className="preview-price">
      <p><span >${stay.price.toLocaleString('en-US')}</span> night</p>
    </div>
  </section>
}