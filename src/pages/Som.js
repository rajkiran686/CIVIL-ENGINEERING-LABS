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
        names:"TENSION TEST ON STEEL",
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
        names:"IMPACT STRENGTH TEST",
        img:img17,
        path:"/som/impact"
      },
      {
        names:"BENDING TEST ON SIMPLY SUPPORTED BEAMS",
        img:img18,
        path:'/som/simplysupportedbeam'
      },
      {
        names:"BENDING TEST ON CANTILEVER BEAMS",
        img:img19,
        path:'/som/cantileverbeam',
      },
      {
        names:"TEST ON SPRINGS",
        img:img20,
        path:'/som/springtest'
      }
    ]
  return (
    <div>
        <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
        <Typography variant='h3' color='purple' textAlign='center'>STRENGTH OF MATERIALS</Typography>
        <marquee direction="right" style={{color:'red'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
        <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap',gap:'100px 50px',marginTop:'100px',marginBottom:'100px'}} className='grid-container'>
         {
          arr.map((value)=>{return(
            <Box width='450px'  className='card' borderRadius='16px'> 
            <Card sx={{borderRadius: '16px',height:'500px'}} >
                <CardActionArea onClick={()=>{Navigate(value.path)}}>
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
export default Som