import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
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
        names:"CHLORIDES IN WATER TEST",
        img:chlorides,
        sol:'AgNO3',
        index:4
      },
      {
        names:"TOTAL SOLIDS IN WATER TEST",
        img:total_solids,
        index:5
      },
      {
        names:"TOTAL DISSOLVED SOLIDS IN WATER",
        img:total_dissolved,
        index:6
      },
      // {
      //   names:"TOTAL SUSPENDED SOLIDS IN WATER",
      //   img:total_suspended,
      //   path:'/ee/ts_solids',
      //   index:7
      // },
      // {
      //   names:"JAR TEST",
      //   img:jar_test,
      //   path:'/ee/jar_test',
      //   index:8
      // },
      // {
      //   names:"AVAILABLE CHLORINE IN WATER",
      //   img:available_chlorine,
      //   path:'/ee/available_chlorine',
      //   index:9
      // },
      {
        names:"DISSOLVED OXYGEN IN WATER",
        img:dissolved_oxygen,
        index:10      }
    ]
  return (
    <div>
         <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5" onClick={back}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>
  BACK
</button>
        <p className='flex justify-center md:text-4xl text-purple-600 underline'>ENVIRONMENTAL ENGINEERING</p>
        <marquee direction="right" style={{color:'red'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
        <div className=' grid grid-cols-2 lg:grid-cols-3 justify-items-center  p-5  md:p-16  gap-y-5 md:gap-y-10 '>
         {
          arr.map((value)=>{return(
            <Box className='card md:w-60 lg:w-96   w-28    md:h-auto h-auto  bg-white  rounded-2xl '> 
            <Card sx={{borderRadius: '16px'}} >
                <CardActionArea onClick={()=>{
                  const head=value.names;
                  const solution=value.sol;
                  const index=value.index;
                  if(value.index<=4){
                  Navigate('/ee/environmental',{state:{head:head,solution:solution,index:index}})}
                  else if(value.index===5||value.index===6){
                  Navigate('/ee/tsolids',{state:{head:head,index:index}})
                  }
                  else if(value.index===10){
                  Navigate('/ee/do')
                  }
                  else{
                    Navigate(value.path)
                  }
                  }}>
                <CardMedia component='img' image={value.img}  className='md:h-80 h-28 '></CardMedia>
                <CardContent className='text-green-400 md:text-blue-500 '>
                    <p className='text-xs md:text-3xl '>{value.names}</p>
                </CardContent>
                <CardActions className='text-xs md:text-2xl text-blue-400 '>
                    <button>CLICK</button>
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