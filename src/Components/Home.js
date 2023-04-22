import { Button, Card, CardActionArea,CardActions, CardContent, CardMedia, Typography ,Box, ButtonBase, Alert} from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img4 from './4.jpg'
import img3 from './3.jpg'
import img5 from './5.JPG'
import img6 from './6.jpg'
import background from './13.jpg';
import { useNavigate } from 'react-router-dom';
import { borders } from '@mui/system';



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
            names:"FLUID MECHANICS",
            img:img6,
            path:"/Fmhm"
            

        }
        

    ]


    
   
  return (
    <div className='qbg' style={{backgroundImage:`url(${background})`, backgroundSize: 'cover',overflow: 'hidden', backgroundRepeat  : 'no-repeat',width:'100% ',height:'100%',
       backgroundPosition: 'center',}}>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginTop:'100px', gap:'100px 0px',marginBottom:'100px'}}>

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
            </Box> )
            })
         }    
    
    </div>
    </div>
  )
}

export default Home