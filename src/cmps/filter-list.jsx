import pools from '../assets/imgs/filter-icons/amazing-pools.jpeg'
import views from '../assets/imgs/filter-icons/amazing-views.jpeg'
import beaches from '../assets/imgs/filter-icons/beaches.jpeg'
import cabins from '../assets/imgs/filter-icons/cabins.jpeg'
import camping from '../assets/imgs/filter-icons/camping.jpeg'
import caravans from '../assets/imgs/filter-icons/caravans.jpeg'
import chef from '../assets/imgs/filter-icons/chef-kitchens.jpeg'
import country from '../assets/imgs/filter-icons/countryside.jpeg'
import desert from '../assets/imgs/filter-icons/desert.jpeg'
import design from '../assets/imgs/filter-icons/design.jpeg'
import city from '../assets/imgs/filter-icons/iconic-citys.jpeg'
import island from '../assets/imgs/filter-icons/island.jpeg'
import mansion from '../assets/imgs/filter-icons/mansions.jpeg'
import park from '../assets/imgs/filter-icons/national-park.jpeg'
import shared from '../assets/imgs/filter-icons/shared-homes.jpeg'
import ski from '../assets/imgs/filter-icons/skiing.jpeg'
import surfing from '../assets/imgs/filter-icons/surfing.jpeg'
import tiny from '../assets/imgs/filter-icons/tiny-homes.jpeg'
import tropical from '../assets/imgs/filter-icons/tropical.jpeg'
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
                       
                        <SwiperSlide>
                            <button onClick={handleChange} value="cabins"><img src={cabins} alt='cabins' />Cabins</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="pools"><img src={pools} alt='pools' />Pools</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="beaches"><img src={beaches} alt='beaches' /> Beaches</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="views"><img src={views} alt='views' /> Views </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="camping"><img src={camping} alt='camping' /> Camping</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="caravans"><img src={caravans} alt='caravans' /> Caravans</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="chef"><img src={chef} alt='chef' />Chef</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="country"><img src={country} alt='country' />Country</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="desert"><img src={desert} alt='desert' />Desert</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="design"><img src={design} alt='design' />Design</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="city"><img src={city} alt='city' />City</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="island"><img src={island} alt='island' /> Island</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="mansion"><img src={mansion} alt='mansion' />Mansion</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="park"><img src={park} alt='park' />Park</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="shared"><img src={shared} alt='shared' />Shared</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="ski"><img src={ski} alt='ski' />Ski</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="surfing"><img src={surfing} alt='surfing' />Surfing</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="tiny"><img src={tiny} alt='tiny' />Tiny</button>
                        </SwiperSlide>           
                             {/*add more icons hereee*/}
                        <SwiperSlide>
                            <button onClick={handleChange} value="surfing"><img src={tropical} alt='surfing' />Surfing</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="shared"><img src={shared} alt='shared' />Shared</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="park"><img src={park} alt='park' />Park</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="surfing"><img src={surfing} alt='surfing' />Surfing</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button onClick={handleChange} value="country"><img src={country} alt='country' />Country</button>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <button onClick={handleChange} value="desert"><img src={desert} alt='desert' />Desert</button>
                        </SwiperSlide> 
                
                   
                    </Swiper>
                    
                </>
            </div>
        </div>
    );
}