import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from "../store/order.action"
import { Loader } from '../cmps/loader'
import { utilService } from '../services/util.service'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


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
      {orders.reverse().map((order) => {
        return <li key={order._id}>
          <img src={require(`../assets/imgs/preview-imgs/${utilService.getRandomIntInclusive(1, 20)}.webp`)} alt="host-img" />
          <div className="trip-text-container">
            <div className="upper-section">
              <h4>{order.stay.name}</h4>
              <p>{`Hosted by ${order.fullname}`}</p>
              <p>{`${order.startDate} - ${order.endDate}`}</p>
            </div>
            <div className="bottom-section">
              <i>{order.status === 'approved' ? < DoneOutlineIcon color="success" fontSize="small"/> : <HourglassEmptyIcon sx={{ color: 'rgb(233, 198, 0)' }} fontSize="small"/>} </i>
              <p style={order.status === 'approved' ? { color: 'green' } : { color: 'rgb(233, 198, 0)' }}>{order.status}</p>
            </div>
          </div>
        </li>
      })}
    </ul>
  </section >
}