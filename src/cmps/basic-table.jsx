import EnhancedTable from "./dash-table-lib";
import { Loader } from '../cmps/loader'
import { useRef, useState } from 'react';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { updateOrder ,removeOrder  } from "../store/order.action"
import { SelectStatus } from "./select-status";


export const BasicTable = ({ orders }) => {

    useEffect(() => {
        updateOrder()
      }, [orders])

  
    function converOrderToRow(order) {
        return { id: order._id, status: <SelectStatus order={order} />,  guests: order.guests, startDate: order.startDate, endDate: order.endDate, placeName: order.stay.name, totalPrice: '$' + order.totalPrice };
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





















