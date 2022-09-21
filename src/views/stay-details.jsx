import { useEffect, useState } from 'react';
import { DetailsImgs } from './details-imgs'
import { HostDetails } from "../cmps/host-details";
import { AirCover } from "../cmps/air-cover";
import { StayAmenities } from "../cmps/stay-amenities";
import { useParams } from 'react-router-dom';
import { stayService } from '../services/stay.service';
import { OrderSection } from '../cmps/order-section'
import { Loader } from '../cmps/loader'
import { Rating } from '../cmps/rating'
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { GoogleMap } from '../cmps/google-map';


export const StayDetails = () => {

    const [stay, setStay] = useState()
    const params = useParams()

    useEffect(() => {
        loadStay()
        changeLayout('1270px')
        return () => {
            changeLayout('1760px')
        }
    }, [])

    const changeLayout = (value) => {
        document.documentElement.style.setProperty('--layoutWidth', value);
    }

    const loadStay = () => {
        const { stayId } = params
        stayService.getById(stayId)
            .then(stay => setStay(stay))
    }

    if (!stay) return <Loader />    


    return (
        <section className='stay-details'>
            <div className='deatils-header'>
                <h1> Beach front - weddings - private - 7 bedrooms </h1>
                <div className='deatils-sub-header'>
                    <div className='subheader-title'>
                        <div className='rating'>
                            <Rating rating={stay.rating} />
                            <span >&nbsp;&nbsp;·&nbsp;</span>
                            <span className='underline'>&nbsp;&nbsp;8 reviews</span> 
                            <span>&nbsp;&nbsp;·&nbsp;</span> 
                            <span className='underline' >&nbsp;&nbsp;Aytotoro, Larnaka, Cyprus.</span>
                        </div>
                    </div>
                    <div className='subheader-btns'>
                        <div className='share'>
                            <IosShareIcon fontSize='small' />
                            <span> Share</span>
                        </div>
                        <div className='save'>
                            <FavoriteBorderIcon fontSize='small' />
                            <span> Save</span>
                        </div>
                    </div>
                </div>
            </div>
            <DetailsImgs imgs={stay.imgUrls} />
            <div className='details-container'>
                <div className='left'>
                    <HostDetails stay={stay} />
                    <AirCover />
                    <StayAmenities amenities={stay.amenities} />
                </div>
                <div className='right'>
                    <OrderSection stay={stay} />
                </div>
            </div>
            <GoogleMap stay={stay} pos={{ lat: 32.0853, lng: 34.7818 }} />
        </section>
    )
}
