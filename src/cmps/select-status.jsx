import { removeOrder, updateOrder } from "../store/order.action"
import {  useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";
import { orderService } from "../services/order.service";
import { loadOrders } from "../store/order.action"


export const SelectStatus = ({ order }) => {
    const dispatch = useDispatch()
    let updatedOrder = order;
    
    const options = [

        { value: 'pending', text: 'Pending ' },
        { value: 'approved', text: 'Approved' },
        { value: 'rejected', text: 'Rejected' },
    ];

    // const [setOrder] = useState(order);
    const [count, setCount] = useState(0);
    useEffect(() => {
      }, [updatedOrder]);


    const handleChange = event => {
        const status = event.target.value
        updatedOrder = { ...order, status: status };

        dispatch(updateOrder(updatedOrder))
    };

    const removeOrder = () => {
        dispatch(removeOrder(order.id))
    };

    return (
        <div className="host-select-btn">
            <select value={order.status} onChange={handleChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
};