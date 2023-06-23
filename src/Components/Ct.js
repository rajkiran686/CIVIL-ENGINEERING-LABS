import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box} from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img7 from './7.jpg';
import img15 from './15.jpeg';
import img16 from './21.jpg'
import img17 from './22.jpg'
const Ct = () => {
  const Navigate=useNavigate();
  const back=()=>{
    Navigate(-1);
}
var arr=[
  {
    names:'FINENESS OF CEMENT',
    img:img7,
    path:'/Fineness'
  },
  {
    names:'SPECIFIC GRAVITY OF CEMENT',
    img:img16,
    path:'/spgravityofcement'
    

  },
  {
    names:'SPECIFIC GRAVITY OF AGGREGATE',
    img:img15,
    path:'/spgravityofaggregate'
  },
  {
    names:'UNIT WEIGHT OF AGGREGATE',
    img:img17,
    path:'/unitweight'
  }

]
  return (
    <div>
    <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>CONCRETE TECHNOLOGY</Typography>
    <marquee direction="right" style={{color:'yellow'}} ><h2>LIST OF EXPERIMENTS</h2></marquee>
    <div  style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap',gap:'100px 0px',marginTop:'100px',marginBottom:'100px'}}>
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
export default Ct