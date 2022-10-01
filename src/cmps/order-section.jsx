import { useState, forwardRef } from 'react'
import { Rating } from './rating'
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto'
import { addOrder } from '../store/order.action'
import { useDispatch, useSelector } from "react-redux"
import { ConfirmationModal } from './reservation-confirmation'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Guests } from './guests'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns'
import Slide from '@mui/material/Slide';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}


export const OrderSection = ({ stay }) => {

    const dispatch = useDispatch()
    const [confirmIsOpen, setConfirmIsOpen] = useState(false)
    const user = useSelector(state => state.userModule.user)
    const [openAlert, setOpenAlert] = useState(false)
    const [guestsIsOpen, setGuestsIsOpen] = useState(false);
    const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);


    const calcOrderNights = () => {
        let Difference_In_Time = dates[0].endDate - dates[0].startDate
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return Difference_In_Days
    }


    const [order, setOrder] = useState({
        hostId: stay.host._id,
        totalPrice: stay.price,
        guests: {
            adults: 1,
            children: 0,
            infants: 0,
            pets: 0
        },
        startDate: `${dates[0].startDate.getDate()}/${dates[0].startDate.getMonth() + 1}/${dates[0].startDate.getFullYear()}`,
        endDate: `${dates[0].endDate.getDate()}/${dates[0].endDate.getMonth() + 1}/${dates[0].endDate.getFullYear()}`,
        stay: {
            _id: stay._id,
            name: stay.name,
            price: stay.price
        },
        status: 'pending'
    })

    const handleGuests = (guestsObj) => {
        setOrder(prevOrder => ({ ...prevOrder, guests: guestsObj }))
    }

    const handleReserve = () => {
        order.startDate = `${dates[0].startDate.getDate()}/${dates[0].startDate.getMonth() + 1}/${dates[0].startDate.getFullYear()}`
        order.endDate = `${dates[0].endDate.getDate()}/${dates[0].endDate.getMonth() + 1}/${dates[0].endDate.getFullYear()}`
        if (user) {
            order.buyer = {
                _id: user._id,
                fullname: user.fullname
            }
            dispatch(addOrder(order))
            calcOrderNights()
            setConfirmIsOpen(true)
            console.log('sending order...')
        } else {
            setOpenAlert(true)
            setTimeout(() => {
                setOpenAlert(false)
            }, 3000);
        }
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
                        <label onClick={() => setDatePickerIsOpen(prev => !prev)}>CHECK-IN</label>
                        <p onClick={() => setDatePickerIsOpen(prev => !prev)}>
                            {`${dates[0].startDate.getDate()}/${dates[0].startDate.getMonth() + 1}/${dates[0].startDate.getFullYear()}`}
                        </p>
                        {datePickerIsOpen && <DateRangePicker
                            onChange={item => setDates([item.selection])}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={dates}
                            direction="horizontal"
                        />}
                    </div>
                    <div className="date-input out">
                        <label onClick={() => setDatePickerIsOpen(prev => !prev)}>CHECKOUT</label>
                        <p onClick={() => setDatePickerIsOpen(prev => !prev)}>
                            {`${dates[0].endDate.getDate()}/${dates[0].endDate.getMonth() + 1}/${dates[0].endDate.getFullYear()}`}
                        </p>
                    </div>
                </div>
                <div className="guest-input" onClick={() => setGuestsIsOpen(prev => !prev)}>
                    <label>GUESTS</label>
                    <p>{order.guests.adults+order.guests.children+order.guests.infants+order.guests.pets} guests</p>
                    <svg viewBox="0 0 320 512" width="100" title="angle-down">
                        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                    </svg>
                </div>
                {guestsIsOpen && <Guests setGuestsIsOpen={setGuestsIsOpen} handleGuests={handleGuests} />}
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
                <div>
                    <span style={{ textDecoration: 'underline' }}>${stay.price} x {calcOrderNights()} nights</span>
                    <span>${stay.price * calcOrderNights().toFixed(0)}</span>
                </div>
                <div>
                    <span style={{ textDecoration: 'underline' }}>Service fee</span>
                    <span>$0</span>
                </div>
                <div className='total-price'>
                    <span>Total</span>
                    <span>${stay.price * calcOrderNights().toFixed(0)}</span>
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
        <Snackbar open={openAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <Alert severity="error" sx={{ width: '100%' }}>
                You must login to reserve an order
            </Alert>
        </Snackbar>
    </section>
}