import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Stack } from '@mui/system';
import ErrorMessage from './ErrorMessage';
import { useForm } from 'react-hook-form';
import Textfield from './Textfield';

const Fineness = () => {
    
    var [res,setres]=useState();
    const Navigate=useNavigate();
    var{register,handleSubmit,formState:{errors}}=useForm({
      mode:'all'
    })
    
   
  const back=()=>{
    Navigate(-1);
}


  return (
    <div> 
      <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
     <Typography variant='h3' color='darkgrey' textAlign='center'>FINENESS OF CEMENT</Typography>
    
    
    <form onSubmit={handleSubmit((data)=>{
      console.log("hey this is submit function",data);
      

   res=((data.w2/data.w1)*100).toFixed(2)
   console.log("res is ",res)
   setres(res)
  // data.preventDefault()
     })} style={{alignItems:'center'}}>

     <div style={{textAlign:'center'}}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}> 

   
    <Textfield   label="Enter the weight of cement taken (W)" pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'} }variant='outlined' name="w1" register={register} helperText={errors.w1?.message} error={errors?.w1} />


    <Textfield  label="Enter the weight retained on sieve (W1)"   variant='outlined'  register={register} name="w2" helperText={errors.w2?.message} error={errors?.w2}/>
    
    <Button variant='contained'  type='submit'>submit</Button>
    <div>
    {  Object.keys(errors).length !=0 &&  <ErrorMessage>please fill all the fields</ErrorMessage>}
    </div>
    <div style={{fontSize:'20px'}}>percentage weight retained on sieve is:{res}</div> 
   

    </Stack>
    </div>  
    </form>
    

    </div>
  )
}

export default Fineness