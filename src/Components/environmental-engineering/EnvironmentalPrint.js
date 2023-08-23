import React from 'react'
import '../Print.css';
import { Typography } from '@mui/material';
const EnvironmentalPrint = ({initial,sol,final,volume,solution,head,type,res,units}) => {
    console.log("type",type)
  return (
    <div>
        <div className='div6'>
            <h2 style={{textAlign:'center'}}>{head}</h2>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
      <tr>
        <th>sno</th>
        <th>volume of sample<br/>(ml)</th>
        <th>Initial Burette Reading</th>
        <th>Final Burette Reading</th>
        <th>Volume of {sol} used<br/>(ml)</th> 
      </tr>
      </thead>
        <tbody>
        { initial?.map((val,i)=>{return(
          <tr > 
          <td>{i+1}</td>
          <td>{volume}</td>
          <td>{initial[i]}</td>
          <td>{final[i]}</td>
          <td>{solution[i]}</td>
          </tr>
          )})} 
        </tbody> 
        
    </table>
    <Typography  style={{textAlign:'center'}} fontSize="20px">{head}  [{type}] ={res} {units}</Typography>
    </div>
    </div>
  )
}

export default EnvironmentalPrint