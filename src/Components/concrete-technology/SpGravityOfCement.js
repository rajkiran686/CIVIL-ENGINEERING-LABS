import React, { useState } from 'react'
import { Button, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Textfield from '../Textfield';
import { Stack } from '@mui/system';
import ErrorMessage from '../ErrorMessage';
import {useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print'; 
import Print5 from './Print5';
const SpGravityOfCement = () => {  
    var [res,setres]=useState();
    var [first,setfirst]=useState();
    var [second,setsecond]=useState();
    var [third,setthird]=useState();
    var [fourth,setfourth]=useState();
    var [five,setfive]=useState();
    const{register,handleSubmit,formState:{errors}}=useForm({mode:"all"})
    const Navigate=useNavigate()
    const back=()=>{
        Navigate(-1)
      }
      const ComponentRef=useRef()
      const handleprint=useReactToPrint({
        content:()=>ComponentRef.current,
        documentTitle:"spgravity",
        onAfterPrint:()=>alert("specific gravity printed")
      })
      function submit(data){
        setfirst(data.w1)
        setsecond(data.w2)
        setthird(data.w3)
        setfourth(data.w4)
        setfive(data.w5)
        var n=[data.w5*(data.w3-data.w1)];
        var d=[(data.w5+data.w3-data.w4)*(data.w2-data.w1)];
        res=(n/d).toFixed(2)
        setres(res)
      }
  return (
    <div>
      <div>
    <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>SPECIFIC GRAVITY OF CEMENT</Typography>
    <div style={{textAlign:'center'}}>
    <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
    <Textfield label="Enter the Mass of empty bottle[w1]" register={register} valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w1'  variant='outlined' helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Enter the Mass of empty bottle+ water[w2]" register={register} valueAsNumber={true}  pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w2' variant='outlined' helperText={errors.w2?.message} error={errors?.w2}/>
    <Textfield label="Enter the Mass of empty bottle + kerosene[w3]"  register={register} valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w3' variant='outlined' helperText={errors.w3?.message} error={errors?.w3}/>
    <Textfield label="Enter the Mass of bottle + cement + kerosene[w4]"   register={register} valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w4' variant='outlined' helperText={errors.w4?.message} error={errors?.w4}/>
    <Textfield label="Enter the Mass of cement[w5]"   register={register} valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w5' variant='outlined' helperText={errors.w5?.message} error={errors?.w5}/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:"80%"}}>submit</Button>
    <button style={{width:'20%'}} onClick={handleprint}>print</button>
    </div>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>specific gravity of given cement is:{res}</div>
    </Stack>
    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Print5 first={first} second={second} third={third} fourth={fourth} five={five} res={res}/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default SpGravityOfCement