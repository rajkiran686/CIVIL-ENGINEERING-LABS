import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Typography } from '@mui/material';
import ErrorMessage from '../ErrorMessage';
import {useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { useForm } from 'react-hook-form';
import Textfield from '../Textfield';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Spgravityprint from './Spgravityprint';
const Spgravity = () => {
    var [res,setres]=useState();
    var [first,setfirst]=useState();
    var [second,setsecond]=useState();
    var [third,setthird]=useState();
    var [fourth,setfourth]=useState();

    const{register,handleSubmit,formState:{errors}}=useForm({mode:"all"})
    const Navigate=useNavigate()
    const back=()=>{
        Navigate(-1)
      }
      const home=()=>{
        Navigate('/');
        }
      const ComponentRef=useRef()
      const handleprint=useReactToPrint({
        content:()=>ComponentRef.current,
        documentTitle:"spgravity",
        onAfterPrint:()=>alert("specific gravity printed")
      })
  return (
    <div>
    <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5 mt-5 ml-2" onClick={back}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>
  BACK
</button>
     <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5" onClick={home}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
  HOME
</button>
    <p className='flex justify-center md:text-4xl text-gray-500  pt-10'>SPECIFIC GRAVITY OF AGGREGATE</p>
    <div style={{textAlign:'center'}}>
    <form onSubmit={handleSubmit((data)=>{
       setfirst(data.w1);setsecond(data.w2);setthird(data.w3);setfourth(data.w4)
        res=((data.w2-data.w1)/((data.w2-data.w1)-(data.w3-data.w4))).toFixed(2)
        setres(res)
    })}>
    <Stack spacing={2} direction='column' className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto'>
    <Textfield label="Enter the weight of the empty pycnometer[w1]" register={register} valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w1'  variant='outlined' helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Enter the weight of the  pycnometer with (2/3) aggregate[w2]" register={register} valueAsNumber={true}  pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w2' variant='outlined' helperText={errors.w2?.message} error={errors?.w2}/>
    <Textfield label="Enter the weight of the  pycnometer with (2/3) aggregate and water[w3]"  register={register} valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w3' variant='outlined' helperText={errors.w3?.message} error={errors?.w3}/>
    <Textfield label="Enter the weight of the  pycnometer with water[w4]"   register={register} valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w4' variant='outlined' helperText={errors.w4?.message} error={errors?.w4}/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:"80%"}}>submit</Button>
    <button style={{width:'20%'}} onClick={handleprint} className=' bg-pink-600'>print</button>
    </div>
    {Object.keys(errors).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>specific gravity of given aggregate is:{res}</div>
    </Stack>
    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Spgravityprint first={first} second={second} third={third} fourth={fourth} res={res}/>

      </div>

    </div>
    </div>
  )
}

export default Spgravity