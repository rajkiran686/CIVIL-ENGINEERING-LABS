import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useRef, useState } from 'react'
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from './Textfield';
import { useReactToPrint } from 'react-to-print';
import Print2 from './Print2.js'
const CantileverBeam = () => {
   var [res,setres]=useState();
   var [first,setfirst]=useState();
   var [second,setsecond]=useState();
   var ComponentRef=useRef();
   var handleprint=useReactToPrint({
    content:()=>ComponentRef.current
   })
   const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
   const Navigate=useNavigate();
   const back=()=>{
    Navigate(-1);
    }
return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>TENSION TEST ON STEEL</Typography>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit((data)=>{
            setfirst(data.w1)
            setsecond(data.w2)
            res=(data.w2/(3.14*data.w1*data.w1/4)).toFixed(2)
            setres(res)
          })}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
    <Textfield label="enter the mean diameter of the rod[d1]" variant="outlined" name="w1" register={register} valueAsNumber={true} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Enter the ultimate load of the rod[p]" variant="outlined" name="w2" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w2?.message} error={errors?.w2}/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}}>print</button>
    </div>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>Ultimate tensile stress:{res} N/mm<sup>2</sup></div>
    </Stack>
    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Print2 first={first} Ref="SM/W 183/2021-22" second={second} res={res} head1="the mean diameter of the rod[d1]" head2=" the ultimate load of the rod[p]" head3="Ultimate tensile stress:" company="My Nest Developers," village="Narasimhapuram," city="Bhimavaram," dist="W.G.District."
         purpose='M30 grade RMC Concrete Cubes for "Construction of G+4 Costal Paradise apartment (B-Block) 1st slab, Narasimhapuram, Bhimavaram, W.G.District" -Reg.' dated='15-03-2023.' title='TENSION TEST ON STEEL:' lab='SM'/>

      </div>

    </div>
    </div>
  )
}
export default CantileverBeam