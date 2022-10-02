import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { loadOrders } from "../store/order.action"
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend)


export const MyChart = ({stay}) => {


  const orders = useSelector(state => state.orderModule.orders)
  const dispatch = useDispatch()


  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = () => {
    dispatch(loadOrders())
  }

  const getPendingStatus = () => {
    let isPending = 0
    orders.map(order => {
        isPending += order.status === 'pending'
    })
    return isPending 
}
  const getApprovedStatus = () => {
    let isApproved = 0
    orders.map(order => {
      isApproved += order.status === 'approved'
    })
    return isApproved 
}
  const getRejectedStatus = () => {
    let isRejected = 0
    orders.map(order => {
        isRejected += order.status === 'rejected'
    })
    return isRejected 
}

if (!orders) return <div></div>
const data = { 
    labels: ['Pending' , 'Rejected' , 'Aprroved'],
    datasets: [
      {
        data: [getPendingStatus(), getRejectedStatus(), getApprovedStatus()],
        backgroundColor: [
          'rgba(54, 162, 235, 0.4)',
          'rgba(229, 120, 115, 0.4)',
          'rgba(129, 199, 132, 0.4)',
          // 'rgba(255, 206, 6, 0.2)',
          // 'rgba(255, 26, 86, 0.2)',
          // 'rgba(25,56, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 132, 1)',
          'rgba(54, 206, 235, 1)',
          'rgba(255, 206, 86, 1)',
          // 'rgba(132, 206, 4, 1)',
          // 'rgba(155, 206, 86, 1)',
          // 'rgba(255, 206, 53, 1)',
        ],
        borderWidth: 0.4,

      },
    ],
  }
 

  if(orders )
  return <div className='Doughnut-chart' style={{
    width: "250px", font: "20px" ,textAlign: "center" , marginBottom: '30px'}}> <h2>Reservations status</h2>
    <Doughnut className='mmm' data={data} /> </div>
    
}






