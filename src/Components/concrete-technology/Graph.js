import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
  return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <div style={{width:'800px',height:'650px',display:'flex',margin:'250px'}}>
      <Line data={data} options={options} ></Line>
        
    </div>
    </div>
  )
}

export default Graph
