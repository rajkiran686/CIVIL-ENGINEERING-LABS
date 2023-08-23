import { Button, TextField, Typography,Stack } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import Textfield from '../Textfield';
import { useForm } from 'react-hook-form';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import ErrorMessage from '../ErrorMessage';
import Print2 from '../concrete-technology/FinenessPrint.js'


const Brineels = () => {
    const Navigate=useNavigate()
    const back=()=>{
        Navigate(-1)
    }
    var {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
    var submit=(data)=>{
      setfirst(data.w1)
      setsecond(data.w2)
      let d=(data.w1+data.w2)/2
      let area=3.927*(2.5-Math.sqrt(2.5*2.5-d*d))
      console.log("area is",area)
      res=187.5/area
      res=res.toFixed(2)
      setres(res)
      console.log("result is:",res)

    }
    var ComponentRef=useRef()
    var handleprint=useReactToPrint({
      content:()=>ComponentRef.current
    })
    var [first,setfirst]=useState()
    var [second,setsecond]=useState()
    var [res,setres]=useState()
  return (
    <div>
        <Button variant='outlined' startIcon={<ArrowBackIosIcon/>} style={{marginLeft:'50px'}} onClick={back}>back</Button>
        <Typography variant='h3' textAlign='center' color='darkgrey'>BRINEEL'S HARDNESS TEST</Typography>
        <form onSubmit={handleSubmit(submit)} style={{alignItems:'center'}}>
          <div style={{textAlign:'center'}}>
        <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
          <Textfield label="Diameter of indentation [d1]" valueAsNumber={true} variant='outlined' register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w1' helperText={errors.w1?.message} error={errors?.w1} />
          <Textfield label="Diameter of indentation [d2]" valueAsNumber={true} variant='outlined' register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w2' helperText={errors.w2?.message} error={errors?.w2} />
          <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <Button variant='contained' style={{width:'80%'}} type='submit'>Submit</Button>
            <button onClick={handleprint} style={{width:'20%'}}>Print</button>
          </div>
          <div>
            {
              Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>
            }
          </div>
          <div style={{fontSize:'20px'}}>Brineel's Hardness Number: {res} kg/mm<sup>2</sup></div>

        </Stack>
        </div>
        </form>
        <div style={{display:'none'}}>
          <div ref={ComponentRef}>
            <Print2 head1='Diameter of indentation [d1]' head2='Diameter of indentation [d2]' head3='Brineels Hardness Number:' first={first} second={second} res={res}/>
          </div>
        </div>
       
    </div>
  )
}

export default Brineels