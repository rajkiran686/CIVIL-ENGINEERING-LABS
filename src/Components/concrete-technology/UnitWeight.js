import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Typography } from '@mui/material';
import ErrorMessage from '../ErrorMessage';
import {useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { useForm } from 'react-hook-form';
import Textfield from '../Textfield';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Print3 from './Print3';
const UnitWeight = () => {
    var [res,setres]=useState();
    var [first,setfirst]=useState();
    var [second,setsecond]=useState();
    var [third,setthird]=useState();

    const{register,handleSubmit,formState:{errors}}=useForm({mode:"all"})
    const Navigate=useNavigate()
    const back=()=>{
        Navigate(-1)
      }
      const ComponentRef=useRef()
      const handleprint=useReactToPrint({
        content:()=>ComponentRef.current,
      })
      function submit(data){
        setfirst(data.w1)
        setsecond(data.w2)
        setthird(data.w3)
        res=(data.w3-data.w1)/(data.w2-data.w1)
        res=res.toFixed(2)
        setres(res)
      }
  return (
    <div>
    <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>UNIT WEIGHT OF AGGREGATE</Typography>
    <div style={{textAlign:'center'}}>
    <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
    <Textfield label="Weight of empty cylinder" register={register} valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w1'  variant='outlined' helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Weight of cylinder with water" register={register} valueAsNumber={true}  pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w2' variant='outlined' helperText={errors.w2?.message} error={errors?.w2}/>
    <Textfield label="Weight of cylinder with compacted aggregate"  register={register} valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w3' variant='outlined' helperText={errors.w3?.message} error={errors?.w3}/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:"80%"}}>submit</Button>
    <button style={{width:'20%'}} onClick={handleprint}>print</button>
    </div>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>Unit weight of given aggregate is:{res} kg/lit</div>
    </Stack>
    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Print3 first={first} second={second} third={third}  res={res}/>

      </div>

    </div>
    </div>
  )
}

export default UnitWeight