import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import {useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../App.css'
import { Box} from '@mui/system';
import crushing from '../assets/crushing.jpg';
import impact from '../assets/aggregate_impact.jpg';
import elongation from '../assets/elongation.jpg';
import flakiness from '../assets/flakiness.jpg';
import devals from '../assets/devals.jpg';
import waterabsorption from '../assets/waterabsorption.jpeg';
import gradation from '../assets/gradation.jpg';
const Hmt = () => {
    const Navigate=useNavigate();
    function back(){
        Navigate(-1);
    }
    var arr=[
      {
        names:"AGGREGATE CRUSHING VALUE TEST",
        img:crushing,
        path:'/hmt/crushing',
        index:3
      },
      {
        names:"AGGREGATE  IMPACT VALUE TEST",
        img:impact,
        path:'/hmt/impact',
        index:4

      },
      {
        names:"ELONGATION TEST ON AGGREGATE",
        img:elongation,
        index:1,
        result:'Elongation index for given sample :'
      },
      {
        names:"FLAKINESS TEST",
        img:flakiness,
        index:2,
        result:'Flakiness index for given sample :'
      },
      {
        names:"DEVAL'S ATTRITION TEST",
        img:devals,
        path:'/hmt/devals',
        index:5
      },
      {
        names:" WATER ABSORPTION TEST",
        img:waterabsorption,
        path:'/hmt/spgravity',
        index:6
      },
      // {
      //   names:"AGGREGATE GRADATION TEST",
      //   img:gradation,
      //   path:'/hmt/gradation',
      //   index:7
      // }
    ]
  return (
    <div>
         <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5" onClick={back}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>
  BACK
</button>
        <p className='flex justify-center md:text-4xl text-purple-600 underline'>HIGHWAY MATERIALS TESTING LAB</p>
        <marquee direction="right" style={{color:'red'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
        <div  className=' grid grid-cols-2 md:grid-cols-3 justify-items-center  p-5  md:p-16  gap-y-5 md:gap-y-10 '>
         {
          arr.map((value)=>{return(
            <Box className='card md:w-60 lg:w-96   w-28    md:h-auto h-auto  bg-white  rounded-2xl '> 
            <Card sx={{borderRadius: '16px'}} >
                <CardActionArea onClick={()=>{
                  const head=value.names;
                  const result=value.result
                  // const index=value.index;
                  if(value.index<=2){
                  Navigate('/hmt/shapetest',{state:{head:head,result:result}})}
                  // else if(value.index===5||value.index===6){
                  // Navigate('/ee/tsolids',{state:{head:head,index:index}})
                  // }
                  // else if(value.index===10){
                  // Navigate('/ee/do')
                  // }
                  else{
                    Navigate(value.path)
                  }
                
                  }}>
                <CardMedia component='img' image={value.img} style={{flexShrink:0}} className='md:h-80 h-28 '></CardMedia>
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
export default Hmt