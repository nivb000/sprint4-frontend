import { useState } from 'react';
import { Rating } from './rating'
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { addOrder } from '../store/order.action';
import { useDispatch, useSelector } from "react-redux"
import { LoginSignup } from './login-signup'

export const OrderSection = ({ stay }) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.userModule.user)
    const [dates, setDates] = useState([null, null])

    // const calcOrderPrice = () => {
    //     let Difference_In_Time = date2.getTime() - date1.getTime()
    //     let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);   
    // }

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
        order.startDate = `${dates[0].$D}/${dates[0].$M + 1}/${dates[0].$y}`
        order.endDate = `${dates[1].$D}/${dates[1].$M + 1}/${dates[1].$y}`
        if (user) {
            order.buyer = {
                _id: user._id,
                fullname: user.fullname
            }
            console.log('sending order...');
            console.log(order)
            dispatch(addOrder(order))
            alert('We received your order')
        } else {
            <LoginSignup />
        }
    }

    return <section className="order-section">
        <section className="order-container">
            <div className="order-form-header">
                <p><span className="cost">${stay.price}</span> night</p>
                <p><Rating rating={stay.rating} /> · <span className="reviews">{stay.reviews.length} reviews</span></p>
            </div>

            <div className="order-data">
                <div className="date-picker">
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        localeText={{ start: '', end: '' }}
                    >
                        <DateRangePicker
                            value={dates}
                            onChange={(newValue) => {
                                setDates(newValue)
                            }}
                            renderInput={(startProps, endProps) => (
                                <>
                                    <TextField {...startProps} />
                                    <Box sx={{ mx: 2 }}> </Box>
                                    <TextField {...endProps} />
                                </>
                            )}
                        />
                    </LocalizationProvider>
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
                        {!dates[1] ? <span>Check availability</span>
                            : <span>Reserve</span>}
                    </button>
                </div>
            </div>
            <div className='order-summary'>
                <p>You won't be charged yet</p>
                {dates[1] &&
                    <div>
                        <span style={{ textDecoration: 'underline' }}>${stay.price} x {dates[1].$D - dates[0].$D} nights</span>
                        <span>{stay.price * 5}</span>
                    </div>
                }
                <div>
                    <span style={{ textDecoration: 'underline' }}>Service fee</span>
                    <span>0$</span>
                </div>
                <hr />
                <div className='total-price'>
                    <span>Total</span>
                    <span>${stay.price * 5}</span>
                </div>
            </div>
        </section>
        <p className="order-footer"><AssistantPhotoIcon /><small>Report this listing</small></p>
    </section>
}




{/* <div className="date-input in">
    <label>CHECK-IN</label>
    <input type="date" name="startDate" />
</div>
<div className="date-input out">
    <label>CHECKOUT</label>
    <input type="date" name="endDate" />
</div> */}