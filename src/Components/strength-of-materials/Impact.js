import { Button, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import Textfield from '../Textfield';
import { Stack } from '@mui/system';
import { useReactToPrint } from 'react-to-print';
import Print1 from './Print1';


const Impact = () => {
    var Navigate=useNavigate()
    function back(){
        Navigate(-1)
    }
    const home=()=>{
        Navigate('/');
        }
    var {handleSubmit,register,formState:{errors}}=useForm({mode:'all'})
    var {handleSubmit:handleSubmit1,register:register1,formState:{errors:errors1}}=useForm({mode:'all'})

    var submit=(data)=>{
        setfirst(data.w1)
        if(data.w1){
        setfirst(data.w1)
        console.log("data",data)
        res=data.w1/0.5
        res=res.toFixed(2)
        setres(res)}
        else{   
        
            setsecond(data.w2)
            res1=data.w2/0.8
            res1=res1.toFixed(2)
            setres1(res1)
        }
    }
    var [res,setres]=useState()
    var [res1,setres1]=useState()
    var [first,setfirst]=useState()
    var [second,setsecond]=useState()
    var ComponentRef=useRef()
    var ComponentRef1=useRef()
    var handleprint=useReactToPrint({
        content:()=>ComponentRef.current
    })
    var handleprint1=useReactToPrint({
        content:()=>ComponentRef1.current
    })
    
    var data=[
        {
            head:"CHARPY TEST",
            names:"w1",
            result:res,
            errors:errors,
            register:register,
            handleSubmit:handleSubmit,
            er:errors?.w1,
            ComponentRef:ComponentRef,
            handleprint:handleprint,
            value:first
        },
        {
            head:"IZOD TEST",
            names:"w2",
            result:res1,
            errors:errors1,
            register:register1,
            handleSubmit:handleSubmit1,
            er:errors1?.w2,
            ComponentRef:ComponentRef1,
            handleprint:handleprint1,
                value:second

        }

    ]
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
        <p className='flex justify-center md:text-4xl text-gray-500  pt-10'>IMPACT STRENGTH TEST</p>
        <div>{data.map((val)=>{return(
        <p>
        <u> <p className='md:text-xl md:mt-5 flex justify-center '>{val.head}</p></u>
        <form onSubmit={val.handleSubmit(submit)}>
        <div style={{textAlign:'center'}}>
        <Stack spacing={2} direction='column' className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto'>
        <Textfield   label="Energy absorbed area specimen" valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} variant='outlined' name={val.names} register={val.register}  error={val.er}/>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <Button variant='contained'  type='submit' style={{width:'80%'}}>submit</Button>
        <button onClick={val.handleprint} style={{ width:'20%'}} className=' bg-pink-600'>print</button>
        </div>
        <div>
        {  Object.keys(val.errors).length !==0 &&  <ErrorMessage>please fill all the fields</ErrorMessage>}
        </div>
        <div style={{fontSize:'20px'}}>impact value: {val.result} j/cm<sup>2</sup></div> 
        </Stack>
        </div>
        </form>
        <div style={{display:'none'}}>
            <div ref={val.ComponentRef}>
                <Print1 head="Energy absorbed area specimen" head1="impact value: " first={val.value}  res={val.result}/>

            </div>

        </div>
        </p>

        )})}
        </div>
        
    </div>
  )
}

export default Impact