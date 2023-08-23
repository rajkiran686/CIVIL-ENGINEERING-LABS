import React, { useRef, useState } from 'react'
import { Button, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import Textfield from '../Textfield';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { useReactToPrint } from 'react-to-print';
import LiquidPrint from './LiquidPrint';
import PlasticPrint from './PlasticPrint';
const PlasticLimit = () => {
  const Navigate=useNavigate()
  var [emptyWeight,setemptyWeight]=useState([])
  var [cupAndDrySoil,setcupAndDrySoil]=useState([])
  var [cupAndWetSoil,setcupAndWetSoil]=useState([])
  var [weightOfWater,setweightOfWater]=useState([]);
  var [ovenDriedSoil,setovenDriedSoil]=useState([])
  var [waterContent,setwaterContent]=useState([])
  const back=()=>{
    Navigate(-1)
  }
  const {register,handleSubmit,formState:{errors}}=useForm({
    mode:'all'
  })
  const submit=(data)=>{
    setemptyWeight(data.w0)
    setcupAndDrySoil(data.w1)
    setcupAndWetSoil(data.w2)
   
      const num1=((data.w2-data.w1).toFixed(2))
      setweightOfWater(parseFloat(num1))
      const num2=((data.w1-data.w0).toFixed(2))
      setovenDriedSoil(parseFloat(num2))
      const num3=((num1/num2)*100).toFixed(2)
      setwaterContent(parseFloat(num3))
  }
  const ComponentRef=useRef()
  var handleprint=useReactToPrint({
    content:()=>ComponentRef.current,
    pageStyle:"@page { size: 10in 14in }"
   })
  return (
    <div>
      <Button variant='outlined' startIcon={<ArrowBackIosIcon/>} style={{marginLeft:'50px'}} onClick={back} >Back</Button>
      <Typography variant='h3' color='darkgrey' textAlign='center'>PLASTIC LIMIT OF SOIL</Typography>
      <div style={{textAlign:'center',display:'grid',justifyContent:'center',alignContent:'center'}}>
        <form onSubmit={handleSubmit(submit)}>
          <Stack spacing={2} direction='column' width="500px" >
            <div style={{marginTop:'100px'}}>
                <Stack spacing={2} direction='column'>
                  <Textfield label="Enter the weight of empty cup" variant="outlined" name="w0"  register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  helperText={errors.w0?.message} error={errors?.w0}/>
                  <Textfield label="Enter the weight of cup + dry soil" variant="outlined" name="w1" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  helperText={errors.w1?.message} error={errors?.w1}/>
                  <Textfield label="Enter the weight of cup + wet soil" variant="outlined" name="w2" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  helperText={errors.w2?.message} error={errors?.w2}/>
                  </Stack>
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                  <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
                  <button onClick={handleprint} style={{width:'20%'}}>print</button>
                  </div>
                  {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>} 
                  <Typography variant='h6'>The PlasticLimit of the given soil [wp]: {waterContent} %</Typography>
          </Stack>
        </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <PlasticPrint emptyWeight={emptyWeight} cupAndWetSoil={cupAndWetSoil} cupAndDrySoil={cupAndDrySoil}  waterContent={waterContent} weightOfWater={weightOfWater} ovenDriedSoil={ovenDriedSoil} />

      </div> 

    </div>
    </div>
  )
}

export default PlasticLimit