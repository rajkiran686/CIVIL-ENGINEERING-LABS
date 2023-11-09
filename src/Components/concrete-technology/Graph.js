import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import {Chart as chartjs,Tooltip,Legend,Title,LineElement,PointElement,LinearScale,CategoryScale,Filler} from 'chart.js'
import { Button } from '@mui/material';
chartjs.register({
  Tooltip,Legend,Title,LineElement,PointElement,LinearScale,CategoryScale,Filler

})
const Graph = ({arr1,arr2}) => {
  var location=useLocation()
  var Navigate=useNavigate()
  var [data,setdata]=useState({
    labels:location.state.arr1,
    datasets:[{
      label:'River sand',
      data:location.state.arr2,
      tension:0.4,
      borderColor:'black',
      backgroundColor:'yellow',
      pointBorderColor:'blue',
      pointbackgroundColor:'black',
      borderWidth:4,
      hoverBackgroundColor:'black',
      hoverBorderColor:'green',
      // fill: {
      //   target: 'origin',
      //   above: 'yellow',   // Area will be red above the origin   
      // },
      pointStyle:'rect',
      // showLine:false
    }]
  })
  var options={
    scales:{
      x:{
        grid: {
          color: 'rgba(255,0,0,0.1)',
          borderColor: 'red'  // <-- this line is answer to initial question
        },
        title:{
          display:true,
          text:'% Water Added',
          font: {
            size: 40,
            family:'vazir'
        }
          
        },
        ticks: {
          font: {
              size: 20,
          }
      }
      },
      
      y:{
        title:{
          display:true,
          text:'Volume of Sand(ml)',
          font: {
            size: 40,
            family:'vazir'
        }
          
        },
        ticks: {
          font: {
              size: 20,
          }
      }
      }
    },
    
  }
  const back=()=>{
    Navigate(-1)
  }
  const home=()=>{
        Navigate('/');
        }
  return (
    <div>
    <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5 mt-5 ml-2" onClick={back}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>
  BACK
</button>
     <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5" onClick={home}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
  HOME
</button>
    <div style={{width:'800px',height:'650px',display:'flex',margin:'250px'}}>
      <Line data={data} options={options} ></Line>
        
    </div>
    </div>
  )
}

export default Graph
