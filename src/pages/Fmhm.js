import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box} from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img1 from '../assets/venturimeter.jpeg';
import img2 from '../assets/orifice.png';
import img3 from '../assets/orifice_constant.png'
import img4 from '../assets/orifice_falling.png'
import img5 from '../assets/mouthpiece.jpeg'
import img6 from '../assets/vnotch.jpeg';
import img7 from '../assets/pipefriction.jpeg';
import img8 from '../assets/impact.png';
import img9 from '../assets/centrifugal.jpeg';
import img10 from '../assets/reciprocating.jpeg';
import img11 from '../assets/pelton.jpeg';
const Fmhm = () => {
  const Navigate=useNavigate();
  const back=()=>{
    Navigate(-1);
}
var arr=[
  {
    names:'VENTURIMETER  EXPERIMENT',
    img:img1,
    path:'/fmhm/venturimeter',
    label:'Pressure difference',
    index:1,
  },
  {
    names:"ORIFICEMETER EXPERIMENT",
    img:img2,
    path:"/fmhm/orifice",
    index:2,
    label:'Pressure difference',
  },
  {
    names:'ORIFICE BY CONSTANT HEAD METHOD',
    img:img3,
    path:'/fmhm/orifice_constant',
    index:3,
    label:'Diameter of Mouthpiece',
  },
  {
    names:'ORIFICE BY FALLING HEAD METHOD',
    img:img4,
    path:'/fmhm/orifice_falling',
    index:4,
    label:'Diameter of Mouthpiece',
  },
  {
    names:'MOUTHPIECE BY CONSTANT  METHOD',
    img:img5,
    path:'/fmhm/mouthpiece_constant',
    index:5,
    label:'Area of Mouthpiece',
  },
  {
    names:'MOUTHPIECE BY FALLING  METHOD',
    img:img5,
    path:'/fmhm/mouthpiece_falling',
    index:6,
    label:'Area of Mouthpiece',
  },
  {
    names:'V-NOTCH',
    img:img6,
    path:'/fmhm/vnotch',
    index:7,
    label:'null',
  },
  {
    names:'PIPEFRICTION',
    img:img7,
    path:'/fmhm/pipefriction',
    index:8,
    label:'null',
  },
  {
    names:'IMPACT OF JET',
    img:img8,
    path:'/fmhm/impact',
    index:9,
    label:'null',
  },
    // {
    //   names:'CENTRIFUGAL PUMP',
    //   img:img9,
    //   path:'/fmhm/centrifugal',
    //   index:10,
    //   label:'null',
    // },
    // {
    //   names:'RECIPROCATING PUMP',
    //   img:img10,
    //   path:'/fmhm/reciprocating',
    //   index:11,
    //   label:'null',
    // },
]
  return (
    <div>
     <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5" onClick={back}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>
  BACK
</button>
    <p className='flex justify-center md:text-4xl text-purple-600 underline'>FLUID MECHANICS</p>
    <marquee direction="right" style={{color:'yellow'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
    <div  className=' grid grid-cols-2 lg:grid-cols-3 justify-items-center  p-5  md:p-16  gap-y-5 md:gap-y-10 '>
      {
        arr.map((value)=>{return(
          <Box className='card md:w-60 lg:w-96   w-28    md:h-auto h-auto  bg-white  rounded-2xl '> 
            <Card sx={{borderRadius: '16px'}} >
                <CardActionArea onClick={()=>{
                  const head=value.names
                  const index=value.index
                  const label=value.label
                  if((value.index>=1&&value.index<4)||value.index===5){
                    Navigate('/fmhm/venturimeter',{state:{head:head,index:index,label:label}})
                  }
                  else if(value.index==4||value.index==6){
                    Navigate('/fmhm/orifice_falling',{state:{head:head,label:label,index:index}})
                  }
                  else{
                    Navigate(value.path,{state:{head:head}})
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
export default Fmhm