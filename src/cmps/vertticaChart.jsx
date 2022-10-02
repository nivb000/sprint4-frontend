import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const VerticalChart = ({orders}) => {

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
 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
    //   text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['August', 'September', 'October']

 const data = {
  labels,
  datasets: [
    {
      label: 'Last year earnings',
      data: [ 855 , 300 ,900] ,
      backgroundColor: 'rgba(129, 199, 132, 0.5)',

    },
    {
      label: 'Current year earnings ',
      data: [ 600 , 400 ,11],
      backgroundColor: 'rgba(229, 100, 115, 0.5)',
      // backgroundColor: 'rgba(255, 90, 95, 1)',
    },

  ],
};

if(orders )  return <div  style={{width: "600px"   }}>
    <Bar  options={options} data={data} />
  </div> 
}
