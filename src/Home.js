import { Button, Card, CardActionArea,CardActions, CardContent, CardMedia, Typography ,Box} from '@mui/material'
import React from 'react'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img4 from './assets/4.jpg'
import img3 from './assets/3.jpg'
import img5 from './assets/5.JPG'
import img6 from './assets/6.jpg'
import background from './assets/bg-image2.jpg';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const Navigate=useNavigate();
    var arr=[{
            names:"STRENGTH OF MATERIALS",
            img:img1,
            path:"/Som"
        },
        {
            names:"CONCRETE TECHNOLOGY",
            img:img2,
            path:"/Ct"  
        },
        {
            names:"SOIL  MECHANICS ",
            img:img4,
            path:"/Sm"
        },
        {
            names:"ENVIRONMENTAL ENGINEERING",
            img:img3,
            path:"/Ee"
        },
        {
            names:"HIGHWAY MATERIALS TESTING",
            img:img5,
            path:"/Hmt"
        },
        {
            names:"FLUID AND HYDRAULIC MECHANICS ",
            img:img6,
            path:"/Fmhm"
        }]
return (
    <div >
        <div  className=' grid grid-cols-2 md:grid-cols-3 justify-items-center  p-5  md:p-16 md:my-10  gap-y-5 md:gap-y-10 '>
         {arr.map((value)=>{return(
            <Box   className='card md:w-60 lg:w-96   w-28    md:h-auto h-auto  bg-white  rounded-2xl ' > 
            <Card sx={{borderRadius: '16px' }}  >
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
            </Box>)
            })}    
    </div>
    </div>
  )
}
export default Home