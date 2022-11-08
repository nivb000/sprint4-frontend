import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Loader } from './loader'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 750,
    outline: 0,
    bgcolor: 'background.paper',
    border: '0.11px solid  #dfdfdf',
    boxShadow: 24,
    p: 0,
    overflow: 'hidden',
    borderRadius: '15px'
}



export const ConfirmationModal = ({ stay, order, confirm, closeConfirm, userId, calcNights }) => {

    if (!order) return <Loader />
    return <Modal
        open={confirm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
            <div className='confirmation-header'>
                <Typography sx={{mr: 21}} className='section-four-total'><span className='close-btn-confirmation' onClick={() => closeConfirm(false)}><CloseIcon fontSize='medium' /></span></Typography>
                <p className='confirmation-header-txt'>We received your order</p>
            </div>
            <div className='sub-txt-main'>
                <div className='confirmation-img-container'>
                    <img style={{ width: '100%' }} className='confirmation-img' src={stay.imgUrls[0]} alt="preview " />
                </div>
                <div className='inside-card'>
                    <p className='section-one-header' >Your Trip</p>
                    <Typography className='section-one-trip'> <span >Dates</span> <span>{`${order.startDate} - ${order.endDate}`} </span> </Typography>
                    <Typography className='section-one-trip'> <span >Location</span> <span>{stay.name} </span> </Typography>
                </div>
                <div className='inside-card'>
                    <p className='section-two-header'>Price Details</p>
                    <Typography className='section-two-price'>
                        ${order.stay.price * calcNights().toFixed(0)}
                        <span className='price-section'> ${order.stay.price} x {calcNights().toFixed(0)} nights</span>
                    </Typography>
                    <Typography className='section-two-fee'> $0
                        <span className='price-section'>Service fee</span>
                    </Typography>
                </div>
                <div className='inside-card'>
                    <Typography className='section-three-total'>
                        <span>Total</span>
                        <span className='total'>${order.totalPrice.toFixed(0)} </span>
                    </Typography>
                </div>
                <div className='inside-card-4'>
                    <Link className='back-to-trips' to={`/trips/${userId}`}>Go to my trips</Link>
                </div>
            </div>
        </Box>
    </Modal >
}
