import React,{useState,useEffect}from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getStock } from '../../../service/StockService';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
 
  labels: ['Total Product','In Stock','Out of Stock'],
  datasets: [
    {
      label: 'Total Count',
      data: [],
      backgroundColor: [
        '#5D9C59',
        '#645CBB',
        '#D21312',
      ],
      borderColor: [
        '#5D9C59',
        '#645CBB',
        '#D21312',
      ],
      borderWidth: 2,
    },
  ],
};


const Piechart = () => {
  const [stockdata, setStockdata] = useState([])
  const [instock, setInstock] = useState([])
  const [outstock, setOutstock] = useState([])
    useEffect(() => {
      Stock();
     
    }, [])
    const Stock = ()=>{
      getStock().then((res)=>{
     
        let response = res.data.result
        let instacks = response.filter(item=>(item.stock>0)).map((i)=>(i.stock))
        let outstacks = response.filter(item=>(item.stock===0)).map((i)=>(i.stock))

        data.datasets[0].data=[response.length,instacks.length,outstacks.length,]
        data.datasets=[...data.datasets]
        console.log("dat",data)
        setInstock(instacks)
        setOutstock(outstacks)
        setStockdata(res.data.result)
      
      })
      
  
    }
   
  return (
    <Pie data={data} />
  )
}

export default Piechart