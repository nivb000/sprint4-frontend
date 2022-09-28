import StarIcon from '@mui/icons-material/Star'


export const Rating = ({ ratingCount , rate }) => {

    return <span className="rating">
        <StarIcon fontSize='small' className='star-icon' />
        {ratingCount > 7 ? <span>{rate}</span>
            : <span>New</span>}
    </span>
}