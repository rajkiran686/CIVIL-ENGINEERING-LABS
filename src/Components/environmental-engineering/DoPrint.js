import React from 'react'
import '../Print.css';
import { Typography } from '@mui/material';
const DoPrint = ({initial,final,volume,type,res,sol}) => {
  return (
    <div>
        <div className='div6'>
        <h2 style={{textAlign:'center'}}>DISSOLVED OXYGEN</h2>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography   fontSize="20px">volume of sample :</Typography>
        <Typography   fontSize="20px">{volume} ml</Typography>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography   fontSize="20px">Initial Burette Reading:</Typography>
        <Typography   fontSize="20px">{initial}</Typography>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography   fontSize="20px">Final Burette Reading:</Typography>
        <Typography   fontSize="20px">{final}</Typography>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography   fontSize="20px">Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> consumed:</Typography>
        <Typography   fontSize="20px">{sol}</Typography>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography   fontSize="20px">Amount of DO present :</Typography>
        <Typography  fontSize="20px">{res}</Typography>
        </div>
    <Typography  style={{textAlign:'center'}} fontSize="20px">Amount of Dissolved Oxygen present in {type} ={res} </Typography>
    </div>
    </div>
  )
}

export default DoPrint