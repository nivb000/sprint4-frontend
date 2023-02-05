import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from "../store/order.action"
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { socketService } from '../services/socket.service';

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
    dispatch(loadOrders())
  }, [])

  useEffect(() => {
    socketService.on('order-status-updated',(order) => console.log('socket', order))
  }, [])

  if (!orders) return (
    <Stack spacing={1}>
      <ul className='trips-grid-cointainer'>
        <li>
          <Skeleton variant="rounded" width={'auto'} height={150} />
          <div className='trips-text-cointainer'>
            <div className='upper-section'>
              <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </div>
          </div>
        </li>
      </ul>
    </Stack>
  )

  return <section className="trips">
    <h1 className='trips-title'>My trips</h1>
    {orders.length < 1 && <p>No Trips booked</p>}
    <ul className="trips-grid-container">
      {orders.reverse().map((order,idx) => {
          return <li key={idx}>
            {order.stay && <img src={order.stay.img} alt="host-img" />}
            <div className="trip-text-container">
              <div className="upper-section">
                {order.stay && <h4>{order.stay.name}</h4>}
                <p>Hosted by Kevin</p>
                <p>{`${order.startDate} - ${order.endDate}`}</p>
                {order.guests && <p>{`${order.guests.adults + order.guests.children}`} Guests</p>}
              </div>

              <div className="bottom-section">
                {order.status === 'approved' &&
                <>
                  <DoneOutlineIcon color="success" fontSize="small" />
                  <p style={{color: 'green'}}>{order.status}</p>
                </>
                }
                {order.status === 'rejected' &&
                <>
                  <HighlightOffOutlinedIcon color="error" fontSize="small" />
                  <p style={{color: '#d32f2f'}}>{order.status}</p>
                </>
                }
                {order.status === 'pending' &&
                <>
                  <HourglassEmptyIcon sx={{ color: 'rgb(232, 174, 0)' }} fontSize="small" />
                  <p style={{color: 'rgb(232, 174, 0)'}}>{order.status}</p>
                </>
                }
              </div>
            </div>

          </li>
      })}
    </ul>
  </section >
}