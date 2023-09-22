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
    names:'VENTURIMETER',
    img:img1,
    path:'/fmhm/venturimeter',
    label:'Pressure difference',
    index:1,
  },
  {
    names:"ORIFICEMETER",
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
    names:'FLOW THROUGH MOUTHPIECE BY CONSTANT HEAD METHOD',
    img:img5,
    path:'/fmhm/mouthpiece_constant',
    index:5,
    label:'Area of Mouthpiece',
  },
  {
    names:'FLOW THROUGH MOUTHPIECE BY FALLING HEAD METHOD',
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
  {
    names:'CENTRIFUGAL PUMP',
    img:img9,
    path:'/fmhm/centrifugal',
    index:10,
    label:'null',
  },
  {
    names:'RECIPROCATING PUMP',
    img:img10,
    path:'/fmhm/reciprocating',
    index:11,
    label:'null',
  },
]
  return (
    <div>
    <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>FLUID MECHANICS</Typography>
    <marquee direction="right" style={{color:'yellow'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
    <div  style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap',gap:'100px 50px',marginTop:'100px',marginBottom:'100px'}} className='grid-container'>
      {
        arr.map((value)=>{return(
          <Box width='450px' className='card' borderRadius= '16px'> 
            <Card sx={{borderRadius: '16px',height:'500px'}} >
                <CardActionArea onClick={()=>{
                  const head=value.names
                  const index=value.index
                  const label=value.label
                  if((value.index>=1&&value.index<4)||value.index==5){
                    Navigate('/fmhm/venturimeter',{state:{head:head,index:index,label:label}})
                  }
                  else if(value.index==4||value.index==6){
                    Navigate('/fmhm/orifice_falling',{state:{head:head,label:label,index:index}})
                  }
                  else{
                    Navigate(value.path,{state:{head:head}})
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
export default Fmhm