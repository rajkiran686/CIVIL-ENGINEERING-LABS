import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Stack } from '@mui/system';
import img11 from './11.jpeg';
import img15 from './15.jpg';

import img12 from './12.jpd.jpg';


const Som = () => {
    const Navigate=useNavigate();
    function back(){
        Navigate(-1);
    }
    
    var arr=[
      {
        names:"TENSION TEST ON STEE",
        img:img11,
        path:"/tension"

      },
      {
        names:"FINENESS MODULUS OF AGGREGATE",
        img:img12,
        path:"/fineness modulus"
      },
      {
        names:"COMPRESSION TEST ON WOOD",
        img:img15,
        path:"/wood"
      }
    ]
  return (
   
    <div>
        <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
        <Typography variant='h3' color='purple' textAlign='center'>STRENGTH OF MATERIALS</Typography>
        <marquee direction="right" style={{color:'red'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
        <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap',gap:'100px 0px',marginTop:'100px',marginBottom:'100px'}}>
         {
          arr.map((value)=>{return(
            <Box width='400px'  > 
            <Card sx={{borderRadius: '16px',height:'450px'}}>
                <CardActionArea onClick={()=>{Navigate(value.path)}}>
                <CardMedia component='img' image={value.img}  height='300'></CardMedia>
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