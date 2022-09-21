import { BasicTable } from "../cmps/basic-table"
import { MyChart } from "../cmps/my-chart"
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from "../store/order.action"
import { useEffect } from "react";



export const HostDashboard = () => {

    const orders = useSelector(state => state.orderModule.orders)
    const dispatch = useDispatch()


    useEffect (()=> {
        getOrders()
    },[]) 


    const getOrders = () => {
        dispatch(loadOrders())
    }

    console.log('orders:', orders)

    return <div >
        <MyChart orders={orders} />
        <BasicTable />
    </div>
}