import { BasicTable } from "../cmps/basic-table"
import { MyChart } from "../cmps/my-chart"
import { useSelector, useDispatch } from 'react-redux';
import { loadOrdersByHost } from "../store/order.action"
import { useEffect } from "react";
import * as React from 'react';
import { green } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { useState } from "react";

import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';
import EqualizerSharpIcon from '@material-ui/icons/EqualizerSharp';
import { red } from "@material-ui/core/colors";
import { VerticalChart } from "../cmps/vertticaChart";


export const HostDashboard = () => {

    const user = useSelector(state => state.userModule.user)
    const orders = useSelector(state => state.orderModule.orders)
    const dispatch = useDispatch()
    console.log('userwerwerr:', user)

    console.log('orders:', orders)

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = () => {
        dispatch(loadOrdersByHost())
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
        let sum = 2355
        let numOfOrders = 0
        orders.map(order => {
            sum += +order.totalPrice
            numOfOrders++
        })
        if (sum > 0)
            return '$' + sum.toLocaleString('en-US')
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
            <div className="my-dashboard"><h1>My Dashboard</h1>
            <div className="user-img-dashboard"> 

            {/* <img style={{ borderRadius: '50%'}} src={user.imgUrl} alt="user profile" /> */}
            </div>
            </div>

            <div className="dashboard-cards-main">
                <div className="charts-main">
                    <MyChart orders={orders} />
                    <VerticalChart orders={orders} />
                </div>
                <div className="two-cards">
                    <div className="management-card">
                        <Avatar sx={{ bgcolor: red[300], height: 60, width: 60, marginTop: -4, boxShadow: 11, marginLeft: 0 }}>
                            <EqualizerSharpIcon fontSize='large' />
                        </Avatar>
                        <span className="card-header-txt"><h2>Orders Management </h2></span>
                        <div className="card-txt">
                            <p>Average Order Revenue <span className="calculation">{getAvragRevenue()}</span></p>
                            {/* <p>Average guests Per Order <span>{getAvgGuests()}</span></p> */}
                        </div>
                    </div>

                    <div className="income-card">
                        <Avatar sx={{ bgcolor: green[300], height: 60, width: 60, marginTop: -4, boxShadow: 11, marginLeft: 0 }}>
                            <AttachMoneySharpIcon fontSize='large' />
                        </Avatar>
                        <span className="card-header-txt"><h2>Total Revenue </h2></span>
                        <div className="card-txt">
                            <p>This Month<span>{getTotalRevenueThisYear()}</span></p>
                            <p> This Year<span style={{ color: 'green' }}>{getTotalIncome()}</span></p>


                        </div>
                    </div>
                </div>
            </div>
            <div >
                <BasicTable orders={orders} />
            </div>
        </div>
}



