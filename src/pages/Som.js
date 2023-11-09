import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import {useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../App.css'
import { Box} from '@mui/system';
import img11 from '../assets/11.jpeg';
import img15 from '../assets/15.jpg';
import img16 from '../assets/16.jpg';
import img17 from '../assets/17.jpg'
import img18 from '../assets/18.jpg'
import img19 from '../assets/19.jpg'
import img20 from '../assets/20.jpg'
const Som = () => {
    const Navigate=useNavigate();
    function back(){
        Navigate(-1);
    }
    var arr=[
      {
        names:"TENSION TEST ON MILD STEEL ",
        img:img11,
        path:"/som/tension"
      },
      {
        names:"COMPRESSION TEST ON WOOD",
        img:img15,
        path:"/som/wood"
      },
      {
        names:"BRINEEL'S HARDNESS TEST",
        img:img16,
        path:"/som/brineels"
      },
      {
        names:"IMPACT STRENGTH TEST ON STEEL",
        img:img17,
        path:"/som/impact"
      },
      {
        names:"BENDING TEST ON SIMPLY SUPPORT BEAMS",
        img:img18,
        path:'/som/simplysupportedbeam'
      },
      {
        names:"BENDING TEST ON CANTILEVER BEAMS",
        img:img19,
        path:'/som/cantileverbeam',
      },
      // {
      //   names:"TEST ON SPRINGS",
      //   img:img20,
      //   path:'/som/springtest'
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
        <p className='flex justify-center md:text-4xl text-purple-600 underline'>STRENGTH OF MATERIALS</p>
        <marquee direction="right" style={{color:'red'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
        <div className=' grid grid-cols-2 md:grid-cols-3 justify-items-center  p-5  md:p-16  gap-y-5 md:gap-y-10 '>
         {
          arr.map((value)=>{return(
            <Box className='card md:w-60 lg:w-96   w-28    md:h-auto h-auto  bg-white  rounded-2xl '> 
            <Card sx={{borderRadius: '16px'}} >
                <CardActionArea onClick={()=>{Navigate(value.path)}}>
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
export default Som