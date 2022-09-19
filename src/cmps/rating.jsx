import StarIcon from '@mui/icons-material/Star'

export const Rating = ({ rating }) => {

    return <span className="rating">
        <StarIcon fontSize='small' className='star-icon' />
        {rating.reviewsCount > 10 && rating.rate > 1 ? <span>{rating.rate}.00</span>
            : <span>New</span>}
    </span>
}