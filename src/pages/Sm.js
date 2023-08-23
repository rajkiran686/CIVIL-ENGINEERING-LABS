import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import {useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../App.css'
import { Box} from '@mui/system';
import img1 from '../assets/26.jpg';
import img2 from '../assets/27.jpg';
import img3 from '../assets/28.jpg';
import img4 from '../assets/29.jpg'
import img5 from '../assets/30.jpg'
import img6 from '../assets/31.jpg'
import img7 from '../assets/32.jpg'
import img8 from '../assets/33.jpg'
import img9 from '../assets/34.jpg'
import img10 from '../assets/35.jpg'
import img11 from '../assets/36.jpg'
import img12 from '../assets/37.jpg'
import img13 from '../assets/38.jpg'

const Som = () => {
    const Navigate=useNavigate();
    function back(){
        Navigate(-1);
    }
    var arr=[
      {
        names:"SIEVE ANALYSIS-IS CLASSIFICATION",
        img:img1,
        path:"/sm/sieve_analysis"
      },
      {
        names:"LIQUID LIMIT-CASAGRANDE METHOD",
        img:img2,
        path:"/sm/liquid_limit"
      },
      {
        names:"PLASTIC LIMIT OF SOIL",
        img:img3,
        path:"/sm/plastic_limit"
      },
      {
        names:"FIELD DENSITY-CORE CUTTER METHOD",
        img:img4,
        path:"/sm/core_cutter"
      },
      {
        names:"FIELD DENSITY-SAND REPLACEMENT METHOD",
        img:img5,
        path:'/sm/sand_replacement'
      },
      {
        names:"SPECIFIC GRAVITY OF SOIL SOLIDS",
        img:img6,
        path:'/sm/spgravity',
      },
      {
        names:"IS-LIGHT COMPACTION",
        img:img7,
        path:'/sm/light_compaction'
      },
      {
        names:"RELATIVE DENSITY TEST",
        img:img8,
        path:'/sm/relative_density'
      },
      {
        names:"UNCONFINED COMPRESSION TEST",
        img:img9,
        path:'/som/springtest'
      },
      {
        names:"DIRECT SHEAR TEST",
        img:img10,
        path:'/som/springtest'
      },
      {
        names:"VANE SHEAR TEST",
        img:img11,
        path:'/som/springtest'
      },
      {
        names:"TRIAXIAL TEST",
        img:img12,
        path:'/som/springtest'
      },
      {
        names:"CALIFORNIA BEARING RATIO TEST",
        img:img13,
        path:'/som/springtest'
      }
    ]
  return (
    <div>
        <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
        <Typography variant='h3' color='purple' textAlign='center'>SOIL MECHANICS</Typography>
        <marquee direction="right" style={{color:'red'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
        <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap',gap:'100px 50px',marginTop:'100px',marginBottom:'100px'}} className='grid-container'>
         {
          arr.map((value)=>{return(
            <Box width='450px'  className='card' borderRadius='16px'> 
            <Card sx={{borderRadius: '16px',height:'500px'}} >
                <CardActionArea onClick={()=>{Navigate(value.path)}}>
                <CardMedia component='img' image={value.img}  height='350px'></CardMedia>
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
export default Som