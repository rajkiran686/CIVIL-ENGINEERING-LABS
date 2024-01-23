import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box} from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img1 from '../assets/7.jpg';
import img2 from '../assets/pycnometer.jpeg';
import img3 from '../assets/21.jpg'
import img4 from '../assets/22.jpg'
import img5 from '../assets/25.jpg'
import img12 from '../assets/12.jpd.jpg';
const Ct = () => {
  const Navigate=useNavigate();
  const back=()=>{
    Navigate(-1);
}
var arr=[
  {
    names:'FINENESS TEST OF CEMENT',
    img:img1,
    path:'/ct/Fineness'
  },
  {
    names:"FINENESS MODULUS OF AGGREGATE",
    img:img12,
    path:"/ct/fineness modulus"
  },
  {
    names:'SPECIFIC GRAVITY OF CEMENT',
    img:img3,
    path:'/ct/spgravityofcement'
    

  },
  {
    names:'SPECIFIC GRAVITY OF AGGREGATE',
    img:img2,
    path:'/ct/spgravityofaggregate'
  },
  {
    names:'UNIT WEIGHT OF AGGREGATE',
    img:img4,
    path:'/ct/unitweight'
  },
  {
    names:'BULKING OF SAND EXPERIMENT',
    img:img5,
    path:'/ct/bulking'
  }

]
  return (
    <div>
    <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5" onClick={back}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>
  BACK
</button>
    <p className='flex   justify-center md:text-4xl text-purple-600 underline'>CONCRETE TECHNOLOGY</p>
    <marquee direction="right" style={{color:'yellow'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
    <div  className=' grid grid-cols-2 lg:grid-cols-3 justify-items-center  p-5  md:p-16  gap-y-5 md:gap-y-10 '>
      {
        arr.map((value)=>{return(
          <Box  className='card md:w-60 lg:w-96   w-28    md:h-auto h-auto  bg-white  rounded-2xl '> 
           
<Card sx={{ borderRadius: '16px' }}>
  <CardActionArea onClick={() => { Navigate(value.path) }}>
    <CardMedia component='img' image={value.img} className='w-full h-28 object-cover md:h-80' />
    <CardContent className='text-green-400 md:text-blue-500'>
      <p className='text-xs md:text-3xl'>{value.names}</p>
    </CardContent>
    <CardActions className='text-xs md:text-2xl text-blue-400'>
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
export default Ct