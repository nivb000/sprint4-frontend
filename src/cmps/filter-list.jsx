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
import TuneIcon from '@mui/icons-material/Tune';
import { useSearchParams } from 'react-router-dom';



export const FilterList = () => {


    const [searchParams, setSearchParams] = useSearchParams()

    const handleChange = ({ target }) => {
        const value = target.value
        setSearchParams({ type: value })
    }


    return <div className="filter-main">
        <div className="filter-list">
            <button onClick={handleChange} value="cabins"><img src={cabins} alt='cabins' /> Cabins</button>
            <button onClick={handleChange} value="pools"><img src={pools} alt='pools' />Pools</button>
            <button onClick={handleChange} value="beaches"><img src={beaches} alt='beaches' /> Beaches</button>
            <button onClick={handleChange} value="views"><img src={views} alt='views' /> Views </button>
            <button onClick={handleChange} value="camping"><img src={camping} alt='camping' /> Camping</button>
            <button onClick={handleChange} value="caravans"><img src={caravans} alt='caravans' /> Caravans</button>
            <button onClick={handleChange} value="chef"><img src={chef} alt='chef' />Chef</button>
            <button onClick={handleChange} value="country"><img src={country} alt='country' />Country</button>
            <button onClick={handleChange} value="desert"><img src={desert} alt='desert' />Desert</button>
            <button onClick={handleChange} value="design"><img src={design} alt='design' />Design</button>
            <button onClick={handleChange} value="city"><img src={city} alt='city' />City</button>
            <button onClick={handleChange} value="island"><img src={island} alt='island' /> Island</button>
            <button onClick={handleChange} value="mansion"><img src={mansion} alt='mansion' />Mansion</button>
            <button onClick={handleChange} value="park"><img src={park} alt='park' />Park</button>
            <button onClick={handleChange} value="shared"><img src={shared} alt='shared' />Shared</button>
            <button onClick={handleChange} value="ski"><img src={ski} alt='ski' />Ski</button>
            {/* <button onClick={handleChange} value="surfing"><img src={surfing} alt='surfing' />Surfing</button>
            <button onClick={handleChange} value="tiny"><img src={tiny} alt='tiny' />Tiny</button> */}
        </div>
        <button className='filters-btn'>
            <div className='filter-div'> <TuneIcon />Filters</div>
        </button>

    </div>
}