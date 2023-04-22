import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Typography } from '@mui/material';
import ErrorMessage from './ErrorMessage';
// import { error } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { useForm } from 'react-hook-form';
// import ErrorMessage from './ErrorMessage';
import Textfield from './Textfield';



const Spgravity = () => {
    var [res,setres]=useState();
    const{register,handleSubmit,watch,formState:{errors}}=useForm({mode:"all"})



     const Navigate=useNavigate()
    const back=()=>{
        Navigate(-1)
    }
   
    

  return (
    <div>
        <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>SPECIFIC GRAVITY OF AGGREGATE</Typography>
    
    <div style={{textAlign:'center'}}>
    <form onSubmit={handleSubmit((data)=>{
        
        res=((data.w2-data.w1)/((data.w2-data.w1)-(data.w3-data.w4))).toFixed(2)
        setres(res)
    })}>
        
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>

    <Textfield label="Enter the weight of the empty pycnometer[w1]" register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} name='w1'  variant='outlined' helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Enter the weight of the  pycnometer with (2/3) aggregate[w2]" register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} name='w2' variant='outlined' helperText={errors.w2?.message} error={errors?.w2}/>
    <Textfield label="Enter the weight of the  pycnometer with (2/3) aggregate and water[w3]"  register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} name='w3' variant='outlined' helperText={errors.w2?.message} error={errors?.w2}/>
    <Textfield label="Enter the weight of the  pycnometer with water[w4]"   register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} name='w4' variant='outlined' helperText={errors.w2?.message} error={errors?.w2}/>


    <Button variant='contained' type='submit'>submit</Button>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>percentage weight retained on sieve is:{res}</div>
    
    </Stack>
    </form>
    </div>
    
    </div>
  )
}

export default Spgravity