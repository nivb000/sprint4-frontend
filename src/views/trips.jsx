import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from "../store/order.action"
import { Loader } from '../cmps/loader'

export const Trips = () => {

  const orders = useSelector(state => state.orderModule.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    changeLayout('1270px')
    return () => {
      changeLayout('1760px')
    }
  }, [])

  const changeLayout = (value) => {
    document.documentElement.style.setProperty('--layoutWidth', value);
  }

  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = () => {
    dispatch(loadOrders())
  }

  if (!orders ) return <Loader />

  return <section className="trips">
    <h1 className='trips-title'>Trips</h1>
    <h3>Where you've been</h3>
    <ul className="trips-grid-container">
      {/* {orders.map((order) => {
        <li key={order._id}>
          <p>{order.stay.name}</p>
          <p>{order.hostId}</p>
          <p>{`${order.startDate} - ${order.endDate}`}</p>
        </li>
      })} */}
    </ul>
  </section >
}