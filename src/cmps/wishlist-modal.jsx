import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ToggleButton from '@mui/material/ToggleButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { display } from '@mui/system';
import { Trips } from '../views/trips';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 615,
    height: 595,
    bgcolor: 'background.paper',
    border: '0.11px solid  #dfdfdf',
    boxShadow: 24,
    p: 0,
    overflow: 'hidden',
    'border-radius': '15px',
};


let wishList = [];

export const WishListModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div >
            <Button onClick={handleOpen}> 
            
            <FavoriteIcon/>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}> 
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='wish-list-header'>
                            <p className='header-txt'>  <span className='close-btn-wishlist'><CloseIcon onClick={handleClose} /> </span>Your Wishlists</p>
                        </div>
                        <div className='sub-txt-main'>
                            <div className='section-one'>Create new wishlist</div>
                            <div className='section-one'>Create new wishlist</div>
                            <div className='section-one'>Create new wishlist</div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
