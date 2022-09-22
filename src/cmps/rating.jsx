import StarIcon from '@mui/icons-material/Star'
import { utilService } from '../services/util.service'


export const Rating = ({ rating }) => {

    const demoRating = {
        reviewsCount: utilService.getRandomIntInclusive(10, 100),
        rate: utilService.getRandomIntInclusive(0, 5)
    }

    return <span className="rating">

        <StarIcon fontSize='small' className='star-icon' />
        {demoRating.reviewsCount > 10 && demoRating.rate > 1 ? <span>{demoRating.rate}.00</span>
            : <span>New</span>}
    </span>
}