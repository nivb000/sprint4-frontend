import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from "../store/order.action"
import { Loader } from '../cmps/loader'
import { utilService } from '../services/util.service'

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

  if (!orders) return <Loader />

  return <section className="trips">
    <h1 className='trips-title'>Trips</h1>
    <h3>Where you've been</h3>
    <ul className="trips-grid-container">
      {orders.map((order) => {
        // {console.log('order:', order)}
        const TripImg = require(`../assets/imgs/preview-imgs/${utilService.getRandomIntInclusive(1, 20)}.webp`)
        return <li key={order._id}>
          <div className="trip-img-container">
            <img src={TripImg} alt="host-img" />
          </div>
          <div className="trip-text-container">
            <h4>{order.stay.name}</h4>
            <p>{`Hosted by ${order.hostId}`}</p>
            {/* <p>{`$${order.stay.price}`}</p> */}
            <p>{`${order.startDate} - ${order.endDate}`}</p>
            <p>{order.status}</p>
          </div>
        </li>
      })}
    </ul>
  </section >
}