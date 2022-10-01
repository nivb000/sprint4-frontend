import EnhancedTable from "./dash-table-lib";
import { Loader } from '../cmps/loader'
import { useEffect } from "react";
import { updateOrder } from "../store/order.action"
import { SelectStatus } from "./select-status";


export const BasicTable = ({ orders }) => {

    useEffect(() => {
        updateOrder()
      }, [orders])

  
    function converOrderToRow(order) {
        return { id: order._id, status: <SelectStatus order={order} />, buyer: order.buyer.fullname, startDate: order.startDate, endDate: order.endDate, placeName: order.stay.name, totalPrice: '$' + order.totalPrice };
    }
    // guests: +order.guests.adults + order.guests.children + order.guests.infants + order.guests.pets
    const headCells = [
        { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
        { id: 'startDate', numeric: false, disablePadding: false, label: 'Check-in' },
        { id: 'endDate', numeric: false, disablePadding: false, label: 'Check-out' },
        { id: 'buyer', numeric: false, disablePadding: false, label: 'Purchased by' , },
        { id: 'placeName', numeric: false, disablePadding: false, label: 'Stay Name' },
        { id: 'totalPrice', numeric: false, disablePadding: false, label: 'Orders Revenue' },
    ]

    if (!orders) return <Loader />
    const rows = orders.map(order => converOrderToRow(order))

    return (
        <EnhancedTable rows={rows} headCells={headCells}  />
    )

}





















