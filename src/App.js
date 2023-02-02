import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import { useEffect, useState } from 'react';
import { orderList } from './const/OrderList';


//setup chart(important)
import { CategoryScale } from 'chart.js';
import { Chart } from 'chart.js/auto';
Chart.register(CategoryScale);


function App() {
const [chartData, setChartData]=useState({
  labels:[],
  datasets: [
    {
      label: '',
      data: [],
      backgroundColor: [],
    },
  ],
})


useEffect(()=>{
    //kalo pake api
    //axios.get.then.catch
    //then isinya setchartData

  setChartData({
    labels: orderList.map(data=>data.date),
    datasets: [
      {
        label: 'Data penjualan blan agustus',
        data: orderList.map((data) => data.totalOrder),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  })
},[])




  return (
    <div className="App">
      <BarChart chartData={chartData}/>
    </div>
  );
}

export default App;
