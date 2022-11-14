import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export const DetailsImgs = React.forwardRef(({ imgs }, ref) => {

    const navigate = useNavigate()
    const onGoBack = () => {
        navigate(-1)
    }

    return (
        <>
            <div className='detalis-imgs-main' id='photos'>
                <div ref={ref} className='detalis-img1'>
                    <img className='img1' src={imgs[0]} alt="preview stay" />
                </div>
                <div className='detalis-imgs-sub'>
                    <div className='detalis-img2-3'>
                        <img className='img2' src={imgs[1]} alt="preview " />
                        <img className='img3' src={imgs[2]} alt="preview stay" />
                    </div>
                    <div className='detalis-img4-5'>
                        <img className='img4' src={imgs[3]} alt="preview stay" />
                        <img className='img5' src={imgs[4]} alt="preview stay" />
                    </div>
                </div>
            </div>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-size": "10px",
                }}
                speed={600}
                loop={true}
                parallax={true}
                pagination={true}
                modules={[Parallax, Pagination, Navigation]}
                className="details-image-gallery">
                <div slot="container-start"></div>
                {imgs.map((img, idx) =>
                    <SwiperSlide key={idx} >
                        <div className='title' data-swiper-parallax="-300">
                            <div className='details-img-container'>
                                <img className='main-img' src={img} alt='details' />
                                <ArrowBackIcon className="back-btn" onClick={onGoBack} />
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
})

