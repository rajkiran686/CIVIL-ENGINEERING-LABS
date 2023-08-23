import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box} from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img1 from '../assets/7.jpg';
import img2 from '../assets/15.jpeg';
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
    names:'FINENESS OF CEMENT',
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
    names:'BULKING OF SAND',
    img:img5,
    path:'/ct/bulking'
  }

]
  return (
    <div>
    <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>CONCRETE TECHNOLOGY</Typography>
    <marquee direction="right" style={{color:'yellow'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
    <div  style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap',gap:'100px 50px',marginTop:'100px',marginBottom:'100px'}} className='grid-container'>
      {
        arr.map((value)=>{return(
          <Box width='450px' className='card' borderRadius= '16px'> 
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
export default Ct