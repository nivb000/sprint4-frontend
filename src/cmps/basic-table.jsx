import EnhancedTable from "./dash-table-lib";
import { Loader } from '../cmps/loader'
import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { updateOrder } from "../store/order.action"
import { SelectStatus } from "./select-status";


export const BasicTable = ({ orders }) => {

    console.log('orders---:', orders)

    const dispatch = useDispatch()


    const onUpdateOrder = ({ order }) => {
        console.log(':orders', order)
        dispatch(updateOrder(order))
    }
    const onUpdatebtn = ({ status }) => {
      
    }

    function converOrderToRow({ _id, status, guests, startDate, endDate, stay, totalPrice }) {
        return { id: _id, status: <SelectStatus status={status} />,  guests, startDate, endDate, placeName: stay.name, totalPrice: '$' + totalPrice };
    }

    const headCells = [

        { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
        { id: 'guests', numeric: true, disablePadding: false, label: 'Guests' },
        { id: 'startDate', numeric: true, disablePadding: false, label: 'Check-in' },
        { id: 'endDate', numeric: true, disablePadding: false, label: 'Check-out' },
        { id: 'placeName', numeric: true, disablePadding: false, label: 'Street Name' },
        { id: 'totalPrice', numeric: true, disablePadding: false, label: 'Total Payout' },
    ];

    if (!orders) return <Loader />
    const rows = orders.map(order => converOrderToRow(order))

    return (
        <EnhancedTable rows={rows} headCells={headCells}  />
    )

}





















