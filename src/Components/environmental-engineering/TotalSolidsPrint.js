import React from 'react'
import '../Print.css';
import { Typography } from '@mui/material';
const TotalSolidsPrint = ({initial,final,volume,head,type,res,units}) => {
  return (
    <div>
        <div className='div6'>
        <h2 style={{textAlign:'center'}}>{head}</h2>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography   fontSize="20px">volume of sample (ml):</Typography>
        <Typography   fontSize="20px">{volume}</Typography>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography   fontSize="20px">Initial weight of dish:</Typography>
        <Typography   fontSize="20px">{initial}</Typography>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography   fontSize="20px">Final weight of dish</Typography>
        <Typography   fontSize="20px">{final}</Typography>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography   fontSize="20px">{head} :</Typography>
        <Typography  fontSize="20px">{res}</Typography>
        </div>
    <Typography  style={{textAlign:'center'}} fontSize="20px">{head}  [{type}] ={res} {units}</Typography>
    </div>
    </div>
  )
}

export default TotalSolidsPrint