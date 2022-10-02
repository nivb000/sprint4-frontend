import { useEffect, useState } from 'react';
import { DetailsImgs } from '../cmps/details-imgs'
import { HostDetails } from "../cmps/host-details";
import aircover from '../assets/imgs/filter-icons/aircover.png'
import { StayAmenities } from "../cmps/stay-amenities";
import { Reviews } from "../cmps/reviews";
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
        changeLayout('1280px')
        return () => {
            changeLayout('1760px')
        }
    },[])

    const changeLayout = (value) => {
        document.documentElement.style.setProperty('--layoutWidth', value);
    }

    const loadStay = async() => {
        const { stayId } = params
        const stay = await stayService.getById(stayId)
        setStay(stay)
    }
    
    if (!stay) return <Loader />


    return (
        <section className='stay-details'>
            <div className='deatils-header'>
                <h1> {stay.name} </h1>
                <div className='deatils-sub-header'>
                    <div className='subheader-title'>
                        <pre>
                            <Rating ratingCount={stay.reviews.length} rate={stay.rate} /> · <span className='underline'>{stay.reviews.length} reviews</span>  ·  <span className='underline'>{stay.loc.address}</span>
                        </pre>
                    </div>
                    <div className='subheader-btns'>
                        <div className='share'>
                            <IosShareIcon fontSize='small' />
                            <span>Share</span>
                        </div>
                        <div className='save'>
                            <FavoriteBorderIcon color='red' fontSize='small' />
                            <span>Save</span>
                        </div>
                    </div>
                </div>
            </div>
            <DetailsImgs imgs={stay.imgUrls} />
            <div className='details-container'>
                <div className='left'>
                    <HostDetails stay={stay} />
                    <section className="air-cover">
                        <img className='aircover-img' src={aircover} alt="aircover" />
                        <p>
                            Every booking includes free protection from Host cancellations,
                            listing inaccuracies, and other issues like trouble checking in.
                        </p>
                    </section>
                    <StayAmenities amenities={stay.amenities} />
                </div>
                <div className='right'>
                    <OrderSection stay={stay} />
                </div>
            </div>
            <div className="reviews-container">
                <Reviews reviews={stay.reviews} rating={stay.rate}/>
            </div>
            <GoogleMap pos={{lat: stay.loc.lat, lan: stay.loc.lan}} />
                      
        </section>
    )
}
