import pools from '../assets/img/filter-icons/amazing-pools.jpeg'
import views from '../assets/img/filter-icons/amazing-views.jpeg'
import beaches from '../assets/img/filter-icons/beaches.jpeg'
import cabins from '../assets/img/filter-icons/cabins.jpeg'
import camping from '../assets/img/filter-icons/camping.jpeg'
import caravans from '../assets/img/filter-icons/caravans.jpeg'
import chef from '../assets/img/filter-icons/chef-kitchens.jpeg'
import country from '../assets/img/filter-icons/countryside.jpeg'
import desert from '../assets/img/filter-icons/desert.jpeg'
import design from '../assets/img/filter-icons/design.jpeg'
import city from '../assets/img/filter-icons/iconic-citys.jpeg'
import island from '../assets/img/filter-icons/island.jpeg'
import mansion from '../assets/img/filter-icons/mansions.jpeg'
import park from '../assets/img/filter-icons/national-park.jpeg'
import shared from '../assets/img/filter-icons/shared-homes.jpeg'
import ski from '../assets/img/filter-icons/skiing.jpeg'
import surfing from '../assets/img/filter-icons/surfing.jpeg'
import tiny from '../assets/img/filter-icons/tiny-homes.jpeg'
import tropical from '../assets/img/filter-icons/tropical.jpeg'
import TuneIcon from '@mui/icons-material/Tune';
import { useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/styles/cmps/carusel.scss";
import { Pagination, Navigation } from "swiper";


export const FilterList = () => {


    const [searchParams, setSearchParams] = useSearchParams()

    const handleChange = ({ target }) => {
        const value = target.value
        setSearchParams({ type: value })
    }


    return (
        <div className="filter-main">

            <button className='filters-btn'>
                <div className='filter-div'> <TuneIcon />Filters</div>
            </button>
            <div className="carusel-filter-main">
                         
                <>
                    <Swiper
                        slidesPerView={16.8}
                        spaceBetween={-85}
                        slidesPerGroup={10}
                        loop={false}
                        loopFillGroupWithBlank={true}
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
        </div>
    );
}