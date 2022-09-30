import { useState, forwardRef } from 'react'
import { Rating } from './rating'
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto'
import { addOrder } from '../store/order.action'
import { useDispatch, useSelector } from "react-redux"
import { ConfirmationModal } from './reservation-confirmation'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const OrderSection = ({ stay }) => {

    const dispatch = useDispatch()
    const [confirmIsOpen, setConfirmIsOpen] = useState(false)
    const user = useSelector(state => state.userModule.user)
    const [dates, setDates] = useState([Date.now(), Date.now() + 6.048e+8]);
    const [openAlert, setOpenAlert] = useState(false);

    const calcOrderNights = () => {
        let Difference_In_Time = dates[1] - dates[0]
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return Difference_In_Days
    }


    const [order, setOrder] = useState({
        hostId: stay.host._id,
        totalPrice: stay.price,
        guests: '1',
        startDate: null,
        endDate: null,
        stay: {
            _id: stay._id,
            name: stay.name,
            price: stay.price
        },
        status: 'pending'
    })

    const handleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        setOrder(prevOrder => ({ ...prevOrder, [name]: value }))
    }

    const handleReserve = () => {
        // order.startDate = `${dates[0].$D}/${dates[0].$M + 1}/${dates[0].$y}`
        // order.endDate = `${dates[1].$D}/${dates[1].$M + 1}/${dates[1].$y}`
        // if (user) {
        //     order.buyer = {
        //         _id: user._id,
        //         fullname: user.fullname
        //     }
        //     console.log('sending order...');
        //     dispatch(addOrder(order))
        //     calcOrderNights()
        //     setConfirmIsOpen(true)
        // } else {
        //     setOpenAlert(true)
        //     setTimeout(() => {
        //         setOpenAlert(false)
        //     }, 3000);
        // }
    }

    return <section className="order-section">
        <section className="order-container">
            <div className="order-form-header">
                <p><span className="cost">${stay.price}</span> night</p>
                <p><Rating ratingCount={stay.reviews.length} rate={stay.rate} /> · <span className="reviews">{stay.reviews.length} reviews</span></p>
            </div>
            <div className="order-data">
                <div className="date-picker">
                    <div className="date-input in">
                        <label>CHECK-IN</label>
                        <input type="text" name="startDate" placeholder='Add date' />
                    </div>
                    <div className="date-input out">
                        <label>CHECKOUT</label>
                        <input type="text" name="endDate" placeholder='Add date' />
                    </div>
                </div>
                <div className="guest-input">
                    <label>GUESTS</label>
                    <select defaultValue='1' name="guests" onChange={handleChange}>
                        <option value="1">1 guests</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                    </select>
                </div>
            </div>

            <div className="btn-container" onClick={handleReserve}>
                {Array(79).fill(<div className="cell"></div>)}
                <div className="content">
                    <button className="action-btn">
                        <span>Reserve</span>
                    </button>
                </div>
            </div>
            <div className='order-summary'>
                <p>You won't be charged yet</p>
                {dates[1] &&
                    <div>
                        {/* <span style={{ textDecoration: 'underline' }}>${stay.price} x {calcOrderNights().toFixed(0)} nights</span> */}
                        {/* <span>${stay.price * calcOrderNights().toFixed(0)}</span> */}
                    </div>
                }
                <div>
                    <span style={{ textDecoration: 'underline' }}>Service fee</span>
                    <span>$0</span>
                </div>
                <div className='total-price'>
                    <span>Total</span>
                    {/* <span>${stay.price * calcOrderNights().toFixed(0)}</span> */}
                </div>
            </div>
        </section>
        <p className="order-footer"><AssistantPhotoIcon /><small>Report this listing</small></p>
        {confirmIsOpen && <ConfirmationModal
            stay={stay}
            order={order}
            confirm={confirmIsOpen}
            closeConfirm={setConfirmIsOpen}
            userId={user._id}
            calcNights={calcOrderNights} />}

        <Snackbar open={openAlert}>
            <Alert severity="error" sx={{ width: '100%' }}>
                You must login to reserve an order
            </Alert>
        </Snackbar>
    </section>
}