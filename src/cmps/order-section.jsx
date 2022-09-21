import { useState } from 'react';
import { Rating } from './rating'
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export const OrderSection = ({ stay }) => {

    const [order, setOrder] = useState({
        //TODO ID AND CREATED AT ON SERVICE
        hostId: stay.host._id,
        totalPrice: stay.price,
        guests: '1',
        dates: [null, null],
        // startDate: new Date(),
        // endDate: new Date(),
        stay: {
            _id: stay._id,
            name: stay.name,
            price: stay.price
        }
    })

    const handleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        setOrder(prevOrder => ({ ...prevOrder, [name]: value }))
    }

    const handleReserve = () => {
        console.log('sending order...');
        console.log(order)
    }

    return <section className="order-section">
        <section className="order-container">
            <div className="order-form-header">
                <p><span className="cost">${stay.price}</span> night</p>
                <p><Rating rating={stay.rating} /> · <span className="reviews">4 reviews</span></p>
            </div>

            <div className="order-data">
                <div className="date-picker">
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                    >
                        <DateRangePicker
                            value={order.dates}
                            onChange={(newValue) => {
                                setOrder((
                                    {
                                        ...order,
                                        dates: [`${newValue[0].$D}/${newValue[0].$M + 1}/${newValue[0].$y}`,
                                        `${newValue[1].$D}/${newValue[1].$M + 1}/${newValue[1].$y}`]
                                    }
                                ));
                            }}
                            renderInput={(startProps, endProps) => (
                                <>
                                    <TextField {...startProps} />
                                    <Box sx={{ mx: 2 }}></Box>
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
                        {!order.dates[1] ? <span>Check availability</span>
                            : <span>Reserve</span>}
                    </button>
                </div>
            </div>
        </section>
        <p className="footer"><AssistantPhotoIcon /><span>Report this listing</span> </p>
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