import { Button, TextField, Typography,Stack } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
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
    const home=()=>{
        Navigate('/');
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
        <p className='flex justify-center md:text-4xl text-gray-500  pt-10'>BRINEEL'S HARDNESS TEST</p>
        <form onSubmit={handleSubmit(submit)} style={{alignItems:'center'}}>
          <div style={{textAlign:'center'}}>
        <Stack spacing={2} direction='column' className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto'>
          <Textfield label="Diameter of indentation [d1]"  variant='outlined' register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w1' helperText={errors.w1?.message} error={errors?.w1} />
          <Textfield label="Diameter of indentation [d2]"  variant='outlined' register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w2' helperText={errors.w2?.message} error={errors?.w2} />
          <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <Button variant='contained' style={{width:'80%'}} type='submit'>Submit</Button>
            <button onClick={handleprint} style={{width:'20%'}} className=' bg-pink-600'>Print</button>
          </div>
          <div>
            {
              Object.keys(errors).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>
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