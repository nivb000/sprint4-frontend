import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from "../store/order.action"
import { Loader } from '../cmps/loader'
import { utilService } from '../services/util.service'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';


export const Trips = () => {

  const orders = useSelector(state => state.orderModule.orders)
  const dispatch = useDispatch()


  console.log('orders:' , orders)
  
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
    <ul className="trips-grid-container">
      {orders.reverse().map((order) => {
          return <li key={order._id}>
            <img src={require(`../assets/imgs/preview-imgs/${utilService.getRandomIntInclusive(1, 20)}.webp`)} alt="host-img" />
            <div className="trip-text-container">
              <div className="upper-section">
                <h4>{order.stay.name}</h4>
                <p>{`Hosted by Kevin`}</p>
                <p>{`${order.startDate} - ${order.endDate}`}</p>
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

{/* <div className="bottom-section">
<i>{order.status === 'approved' ? < DoneOutlineIcon color="success" fontSize="small" /> : <HourglassEmptyIcon sx={{ color: 'rgb(255, 211, 0)' }} fontSize="small" />} </i>
<p>{order.status}</p>
</div> */}