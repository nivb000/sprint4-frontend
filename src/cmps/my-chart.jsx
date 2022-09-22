import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { loadOrders } from "../store/order.action"
import { useEffect } from "react";
import { Loader } from '../cmps/loader'

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

  if (!orders) return <div></div>
  const data = {
    labels: ['Approved','Pending', 'Rejected' ],

    datasets: [
      {
        label: '# Orders segmentation by nights',
        data: orders.map(order => order.status ),
        data:['4', '5' ,'9' , '2'],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(5, 206, 86, 0.2)',
          'rgba(255, 206, 6, 0.2)',
          'rgba(255, 26, 86, 0.2)',
          'rgba(25,56, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 132, 1)',
          'rgba(54, 206, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(132, 206, 4, 1)',
          'rgba(155, 206, 86, 1)',
          'rgba(255, 206, 53, 1)',
        ],
        borderWidth: 0.4,
      },
    ],
  }

  if(orders)
  return <div className='Doughnut-chart' style={{
    width: "300px", font: "20px" , fontWeight: "bold"}}>
    <Doughnut data={data} /></div>
}






