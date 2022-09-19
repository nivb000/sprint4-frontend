import { useState } from 'react';
import { Rating } from './rating'
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';


export const OrderSection = ({ stay }) => {

    const [checkDates, setCheckDates] = useState([null, null])
    console.log('checkDates is', checkDates);

    const [order, setOrder] = useState({
        //TODO ID AND CREATED AT ON SERVICE
        hostId: stay.host._id,
        totalPrice: stay.price,
        guests: '1',
        startDate: '1/1/22',
        endDate: '2/2/22',
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
        console.log(order);
    }

    return <section className="order-section">
        <section className="order-container">
            <div className="order-form-header">
                <p><span className="cost">${stay.price}</span> night</p>
                <p><Rating rating={stay.rating} /> · <span className="reviews">4 reviews</span></p>
            </div>

            <div className="order-data">
                <div className="date-picker">
                    <div className="date-input in">
                        <label>CHECK-IN</label>
                        <input type="date" name="startDate"/>
                    </div>
                    <div className="date-input out">
                        <label>CHECKOUT</label>
                        <input type="date" name="endDate"/>
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
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="content">
                    <button className="action-btn">
                        {!checkDates[1] ? <span>Check availability</span>
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
<input defaultValue={order.checkIn}></input>
</div>
<div className="date-input out">
<label>CHECKOUT</label>
<input defaultValue={order.checkOut}></input>
</div> */}