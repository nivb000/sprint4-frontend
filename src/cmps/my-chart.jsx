import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'


ChartJS.register(ArcElement, Tooltip, Legend)


export const MyChart = ({orders}) => {

console.log('orders:' , orders)


  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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

  return <div  style={{ width: "250px", margin: "auto" ,}}><Doughnut data={data} /></div>
}


