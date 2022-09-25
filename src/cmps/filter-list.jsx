

import TuneIcon from '@mui/icons-material/Tune';
import { useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/styles/cmps/carusel.scss";
import { Pagination, Navigation } from "swiper";


export const FilterList = () => {



    const labels = [
        'beaches',
        'Amazing views',
        'cabins',
        'camping',
        'Amazing pools',
        'caravans',
        'kitchens',
        'country side',
        'desert',
        'design',
        'iconic citys',
        'island',
        'mansions',
        'national park',
        'shared homes',
        'ski',
        'surfing',
        'tiny homes',
        'tropical'
    ]




    const [searchParams, setSearchParams] = useSearchParams()

    const handleChange = (label) => {
        setSearchParams({ type: label })
    }


    return (

        <div className="filter-main">
            <button className='filters-btn'>
                <div className='filter-div'><TuneIcon fontSize='small' /> &nbsp;&nbsp;&nbsp;Filters</div>
            </button>
            <div className="carusel-filter-main">
                <>
                    <Swiper
                    slidesPerView={9.9}
                    spaceBetween={-85}
                    slidesPerGroup={3}
                    loop={false}
                    loopFillGroupWithBlank={false}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                    {labels.map(label =>
                        <SwiperSlide onClick={() => handleChange(label)}>
                            <button>
                                <span>
                                    <img src={require(`../assets/imgs/filter-icons/${label.toLowerCase()}.jpeg`)} alt={label} />
                                </span>
                                <span>{label}</span>
                            </button>
                        </SwiperSlide>
                    )}
                </Swiper>

            </>
        </div>
        </div >
    );
}

