import { BasicTable } from "../cmps/basic-table"
import { MyChart } from "../cmps/my-chart"
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders,updateOrder } from "../store/order.action"
import { useEffect } from "react";



export const HostDashboard = () => {

    const orders = useSelector(state => state.orderModule.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = () => {
        dispatch(loadOrders())
    }
    const onUpdateOrder = () => {
        dispatch(updateOrder())
    }


    const getAvragRevenue = () => {
        let sum = 0
        let numOfOrders = 0
        orders.map(order => {
            sum += +order.totalPrice
            numOfOrders++
        })
        return '$' + (sum / numOfOrders).toFixed(2)
    }

    const getTotalIncome = () => {
        let sum = 0
        let numOfOrders = 0
        orders.map(order => {
            sum += +order.totalPrice
            numOfOrders++
        })
        if (sum > 0)
            return '$' + sum.toLocaleString('en-US')
    }

    const getAvgGuests = () => {
        let sum = 0
        let numOfGuests = 0
        orders.map(order => {
            sum += +order.guests
            numOfGuests++
        })
        return (sum / numOfGuests).toFixed(2)
    }


    const getTotalRevenueThisYear = () => {

        const today = Date.now()
        const thisYear = new Date('january 1, 22 00:20:18').getFullYear()
        let sum = 0
        let numOfOrders = 0
        orders.map(order => {
            sum += +order.totalPrice
            numOfOrders++
        })
        if (today > thisYear)
            return '$' + sum.toLocaleString('en-US')
    }

    if (orders)
        return <div>
            <div className="my-dashboard"><h1>My Dashboard</h1></div>
            <div className="dashboard-cards-main">
                <div className="management-card">
                    <h2>Orders Management </h2>
                    <div className="card-txt">
                        <p>Average Order Revenue <span className="calculation">{getAvragRevenue()}</span></p>
                        <p>Average guests Per Order <span>{getAvgGuests()}</span></p>
                    </div>
                </div>

                <div className="income-card">
                    <h2>Total Revenue</h2>
                    <div className="card-txt">
                        <p>This Year<span>{getTotalRevenueThisYear()}</span></p>
                        <p> Total Revenue<span style={{ color: 'green' }}>{getTotalIncome()}</span></p>
                    </div>
                </div>

                <div>
                    <MyChart orders={orders} />
                </div>
            </div>

            <div >
                <BasicTable orders={orders} />
            </div>
        </div>
}

