import { Button, TextField, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage';
import { Error } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'

const Tension = () => {
    const [val1,setval1]=useState();
    const [val2,setval2]=useState();
    const [val3,setval3]=useState();
    const [val4,setval4]=useState();

    var [res,setres]=useState();
    var [error,seterror]=useState(false);
    var area;
    const {register,handleSubmit,formState:{errors}}=useForm({mode:'onSubmit'})



    const Navigate=useNavigate();
  const back=()=>{
    Navigate(-1);
}
const fun1=(e)=>
{
  seterror(false)
  setval1(e.target.value)
}
const fun2=(e)=>
{
  seterror(false)
  setval2(e.target.value)
}
const fun3=(e)=>
{
  seterror(false)
  setval3(parseInt(e.target.value))
}
const fun4=(e)=>
{
  seterror(false)
  setval4(e.target.value)
}
    const fun=()=>{
      area=(3.14*(val1*val1))/4;
      console.log("area ,is ",area)
      
  
        
        
    }
  return (
    <div>
        <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
        <Typography variant='h3' color='darkgrey' textAlign='center'>TENSION TEST ON STEEL</Typography>
        <form onSubmit={handleSubmit((data)=>{console.log("data is ",data)})}>
        <div style={{textAlign:'center'}}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>

    <TextField {...register('d',{required:{value:true,message:'this field is required'},pattern:{  value: /^(0|[1-9]\d*)(\.\d+)?$/,message:'please enter only numbers' }})}  label="Enter the Diameter of rod[d]" variant='outlined'color='' helperText={errors.d?.message} error={errors?.d}/>
    <TextField label="Enter the weight of the rod[W]" variant='outlined' onChange={fun2}  required/>
    <TextField label="Enter the Length of the rod[L]" variant='outlined' onChange={fun3}  required/>
    <TextField label="Enter the weight of the rod[W]" variant='outlined' onChange={fun4}  required/>
    
    <Button variant='contained' onClick={fun}>submit</Button>
    {Error && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>percentage weight retained on sieve is:{}</div>
    
    </Stack>
    </div>
    </form>

    </div>
  )
}

export default Tension