import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import Print7 from './Print7.js'
const CoreCutter = () => {
   var [res,setres]=useState();
   var [first,setfirst]=useState();
   var [second,setsecond]=useState();
   var [third,setthird]=useState();
   var [fourth,setfourth]=useState();
   var [five,setfive]=useState();
   var [six,setsix]=useState();
   var [seven,setseven]=useState();
   var ComponentRef=useRef();
   var handleprint=useReactToPrint({
    content:()=>ComponentRef.current,
    // pageStyle:"@page { size: 10in 14in }"
   })
   const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
   const Navigate=useNavigate();
   const back=()=>{
    Navigate(-1);
    }
    function submit(data){
      setfirst(data.w1)
      setsecond(data.w2)
      setthird(data.D)
      setfourth(data.H)
      setfive(data.w3)
      setsix(data.w4)
      setseven(data.w5)
      var volume=(3.14*data.D*data.D*data.H)/4
      var waterContent=(data.w3-data.w4)/(data.w4-data.w5) 
      res=(data.w2-data.w1)/(volume*(1+waterContent))
      res=res.toFixed(2)
      setres(res)
      console.log("volume is",volume)
      console.log("water conetent",waterContent)
      console.log("result is",res)
    }
return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>FIELD DENSITY-CORE CUTTER METHOD</Typography>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
    <Textfield label="Enter the weight of core cutter[w1]" variant="outlined" name="w1" register={register} valueAsNumber={true} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Enter the weight of core cutter+soil[w2] " variant="outlined" name="w2" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w2?.message} error={errors?.w2}/>
    <Textfield label="Enter the internal diameter of core cutter[D]" variant="outlined" name="D" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.D?.message} error={errors?.D}/>
    <Textfield label="Enter the Height of core cutter[H] " variant="outlined" name="H" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.H?.message} error={errors?.H}/>
    <Textfield label="Enter the weight of cup+wet soil[w3] " variant="outlined" name="w3" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w3?.message} error={errors?.w3}/>
    <Textfield label="Enter the weight of cup+oven dried soil[w4] " variant="outlined" name="w4" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w4?.message} error={errors?.w24}/>
    <Textfield label="Enter the weight of cup[w5] " variant="outlined" name="w5" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w5?.message} error={errors?.w5}/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}}>print</button>
    </div>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>dry density of soil:{res} g/cc</div>
    </Stack>
    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Print7 first={first} second={second} third={third} fourth={fourth} five={five} six={six} seven={seven} res={res}  />

      </div>

    </div>
    </div>
  )
}
export default CoreCutter