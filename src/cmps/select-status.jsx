import { removeOrder, updateOrder } from "../store/order.action"
import {  useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";
import { orderService } from "../services/order.service";
import { loadOrders } from "../store/order.action"


export const SelectStatus = ({ order }) => {
    const dispatch = useDispatch()
    
    const options = [

        { value: 'pending', text: 'Pending ' },
        { value: 'approved', text: 'Approved' },
        { value: 'rejected', text: 'Rejected' },
    ];


    const handleChange = event => {
        
        const status = event.target.value
        order.status = status
        dispatch(updateOrder(order))
    };

    const onRemoveOrder = (orderId) => {
        dispatch(removeOrder(orderId))
    }
    
    return (
        <div className="host-select-btn">
            <button onClick={() => onRemoveOrder(order._id)}>X</button>
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