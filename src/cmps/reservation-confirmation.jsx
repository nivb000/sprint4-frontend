import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star'
import { useState } from 'react';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 555,
    height: 820,
    bgcolor: 'background.paper',
    border: '0.11px solid  #dfdfdf',
    boxShadow: 24,
    p: 0,
    overflow: 'hidden',
    'border-radius': '15px',
};



export const ConfirmationModal = ({ stay, order }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    if (order)
        return (

            <div >
                <Button onClick={handleOpen}>Reserve
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                            <div className='confirmation-header'>
                                <p className='confirmation-header-txt'>Your reservation is confirmed
                                </p>
                            </div>
                            <div className='sub-txt-main'>
                                <div>
                                    <div className='confirmation-img-container' >
                                        <img className='confirmation-img' src={stay.imgUrls[1]} alt="preview " />
                                        <div className='confirmation-img-container-txt'>
                                            <span className='roomtype' >{stay.roomType}</span>
                                            <div>{stay.name}</div>
                                            <div className='reviews-confirmation'> <StarIcon fontSize='small' className='star-icon' /> 5<span className='reviews-num'> ({stay.reviews.length} reviews) </span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inside-card'>
                                    <p className='section-one-header' >Your Trip</p>
                                    <p className='section-one-trip'> <span >Dates</span> <span>{`${order.startDate} - ${order.endDate}`} </span> </p>






                                    <p className='section-one-guests'>  <span>Guests</span>{order.guests}</p>
                                </div>
                                <div className='inside-card'>


                                    <p className='section-two-header' >Price Details</p>
                                    <p className='section-two-price'>  ${order.stay.price}
                                        <span className='price-section'> ${order.stay.price} x  22 night  </span>
                                    </p>

                                    <p className='section-two-fee'> $0
                                        <span className='price-section'>Service fee</span></p>
                                </div>

                                <div className='inside-card'>
                                    <p className='section-three-total'>  <span>Total</span>   <span className='total'>${order.totalPrice * (8)} </span></p>
                                </div>

                                <div className='inside-card'>
                                    <p className='section-four-total'><span className='close-btn-confirmation'><CloseIcon fontSize='medium' onClick={handleClose} /></span></p>

                                </div>
                            </div>


                        </Typography >
                    </Box>
                </Modal >

            </div >
        );
}
