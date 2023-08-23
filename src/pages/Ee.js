import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../App.css'
import { Box} from '@mui/system';
import hardness from '../assets/hardness.jpeg';
import acidity from '../assets/acidity.jpeg';
import alkalinity from '../assets/alkalinity.jpeg';
import chlorides from '../assets/chlorides.jpeg'
import total_solids from '../assets/total_solids.jpeg'
import total_dissolved from '../assets/total_dissolved.jpeg'
import total_suspended from '../assets/total_suspended.jpg'
import jar_test from '../assets/jar_test.jpeg'
import available_chlorine from '../assets/avaliable_chlorine.jpeg'
import dissolved_oxygen from '../assets/dissolved_oxygen.jpeg'

const Ee = () => {
    const Navigate=useNavigate();
    function back(){
        Navigate(-1);
    }
    var arr=[
      {
        names:"HARDNESS OF WATER",
        img:hardness,
        sol:'EDTA',
        index:1
      },
      {
        names:"ACIDITY OF WATER",
        img:acidity,
        sol:'NAOH',
        index:2

      },
      {
        names:"ALKALINITY OF WATER",
        img:alkalinity,
        sol:'H2SO4',
        index:3
      },
      {
        names:"CHLORIDES IN WATER",
        img:chlorides,
        sol:'AgNO3',
        index:4
      },
      {
        names:"TOTAL SOLIDS IN WATER",
        img:total_solids,
        index:5
      },
      {
        names:"TOTAL DISSOLVED SOLIDS IN WATER",
        img:total_dissolved,
        index:6
      },
      {
        names:"TOTAL SUSPENDED SOLIDS IN WATER",
        img:total_suspended,
        path:'/ee/ts_solids',
        index:7
      },
      {
        names:"JAR TEST",
        img:jar_test,
        path:'/ee/jar_test',
        index:8
      },
      {
        names:"AVAILABLE CHLORINE IN WATER",
        img:available_chlorine,
        path:'/ee/available_chlorine',
        index:9
      },
      {
        names:"DISSOLVED OXYGEN IN WATER",
        img:dissolved_oxygen,
        index:10      }
    ]
  return (
    <div>
        <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
        <Typography variant='h3' color='purple' textAlign='center'>ENVIRONMENTAL ENGINEERING</Typography>
        <marquee direction="right" style={{color:'red'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
        <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap',gap:'100px 50px',marginTop:'100px',marginBottom:'100px'}} className='grid-container'>
         {
          arr.map((value)=>{return(
            <Box width='450px'  className='card' borderRadius='16px'> 
            <Card sx={{borderRadius: '16px',height:'500px'}} >
                <CardActionArea onClick={()=>{
                  const head=value.names;
                  const solution=value.sol;
                  const index=value.index;
                  if(value.index<=4){
                  Navigate('/ee/environmental',{state:{head:head,solution:solution,index:index}})}
                  else if(value.index==5||value.index==6){
                  Navigate('/ee/tsolids',{state:{head:head,index:index}})
                  }
                  else if(value.index==10){
                  Navigate('/ee/do')
                  }
                  else{
                    Navigate(value.path)
                  }
                  }}>
                <CardMedia component='img' image={value.img}  height='350'></CardMedia>
                <CardContent>
                    <Typography variant='h5' gutterBottom color='blue'>{value.names}</Typography>
                </CardContent>
                <CardActions>
                    <Button>CLICK</Button>
                </CardActions>
                </CardActionArea>
            </Card>
            </Box>
          )})
         }
         </div>
    </div>
  )
  }
export default Ee