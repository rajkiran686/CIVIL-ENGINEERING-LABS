import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import Print10 from './Print10';
const SimplySupported = () => {
   var [res,setres]=useState();
   var [arr1,setarr1]=useState()
   var [arr2,setarr2]=useState()
   var [arr3,setarr3]=useState()
   var ComponentRef=useRef();
   var handleprint=useReactToPrint({
    content:()=>ComponentRef.current,
    pageStyle:"@page { size: 10in 14in }"
   })
   const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
   const Navigate=useNavigate();
   const back=()=>{
    Navigate(-1);
    }
    const home=()=>{
        Navigate('/');
    }
    function submit(data){
    
      var I=(data.w1*data.w2*data.w2*data.w2)/12;
      const load=[data.w4,data.w6,data.w8,data.w10,data.w12,data.w14,data.w16,data.w18]
      arr1=load
      
     
      setarr1(arr1)
      
      const fdef=[data.w5,data.w7,data.w9,data.w11,data.w13,data.w15,data.w17,data.w19]
     
      arr2=fdef
      setarr2(arr2)
      setarr2(fdef) 
   
      var  E=new Array(8)
      for(let i=0;i<8;i++){
        let x=(fdef[i]-1.66)
        E[i]=(load[i]*data.w3*data.w3*data.w3)/(48*I*x)
        
      }
      arr3=E
      console.log("arr3 has",arr3)
      setarr3(arr3)

      res=0
      for(let i=0;i<8;i++){
        res+=E[i]
        if(i===7){
          res=(res/800000).toFixed(2)
          setres(res)
        }
      }
      
      // setres(res)
      
    }
    var data=[
      {
        trail:'Trail-1',
        name1:'w4',
        name2:'w5',
        er1:errors?.w4,
        er2:errors?.w5,
        ht1: errors.w4?.message,
        ht2: errors.w5?.message,
      },
      {
        trail:'Trail-2',
        name1:'w6',
        name2:'w7',
        er1:errors?.w6,
        er2:errors?.w7,
        ht1: errors.w6?.message,
        ht2: errors.w7?.message,
      },
      {
        trail:'Trail-3',
        name1:'w8',
        name2:'w9',
        er1:errors?.w8,
        er2:errors?.w9,
        ht1: errors.w8?.message,
        ht2: errors.w9?.message,
      },
      {
        trail:'Trail-4',
        name1:'w10',
        name2:'w11',
        er1:errors?.w10,
        er2:errors?.w11,
        ht1: errors.w10?.message,
        ht2: errors.w11?.message,
      },
      {
        trail:'Trail-5',
        name1:'w12',
        name2:'w13',
        er1:errors?.w12,
        er2:errors?.w13,
        ht1: errors.w12?.message,
        ht2: errors.w13?.message,
      },
      {
        trail:'Trail-6',
        name1:'w14',
        name2:'w15',
        er1:errors?.w14,
        er2:errors?.w15,
        ht1: errors.w14?.message,
        ht2: errors.w15?.message,
      },
      {
        trail:'Trail-7',
        name1:'w16',
        name2:'w17',
        er1:errors?.w16,
        er2:errors?.w17,
        ht1: errors.w16?.message,
        ht2: errors.w17?.message,
      },
      {
        trail:'Trail-8',
        name1:'w18',
        name2:'w19',
        er1:errors?.w18,
        er2:errors?.w19,
        ht1: errors.w18?.message,
        ht2: errors.w19?.message,
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
</button><div className='text-center '>
    <p className=' md:text-4xl text-gray-500  pt-10'>BENDING TEST ON SIMPLY SUPPORTED BEAM</p></div>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto' >
      <Typography variant='h6'><u>CROSS-SECTIONAL DIMENSIONS OF BEAM</u></Typography>
    <Textfield label="Width of the beam[b]" variant="outlined" name="w1" register={register}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Depth of the beam[d]" variant="outlined" name="w2" register={register} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w2?.message} error={errors?.w2}/>
    <Textfield label="Span of the beam[l]" variant="outlined" name="w3" register={register} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w3?.message} error={errors?.w3}/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Enter the load applied in (kgs)" variant="outlined" name={val.name1} register={register}   required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1} helperText={val.ht1}/><br/><br/>
    <Textfield label="Enter the final deflection reading in (mm)" variant="outlined" name={val.name2} register={register}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2} helperText={val.ht2}/>
    </div>)})}
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}} className=' bg-pink-600'>print</button>
    </div>
    {Object.keys(errors).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </Stack><br/>
    <div style={{fontSize:'20px'}}>Young's Modulus Of The Given Specimen[E]:  {res}x10<sup>5</sup> N/mm<sup>2</sup></div>

    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Print10 arr1={arr1} arr2={arr2} arr3={arr3} initialdef='1.66' Ref="SM/W 183/2021-22"  res={res}   company="My Nest Developers," village="Narasimhapuram," city="Bhimavaram," dist="W.G.District."
         purpose='M30 grade RMC Concrete Cubes for "Construction of G+4 Costal Paradise apartment (B-Block) 1st slab, Narasimhapuram, Bhimavaram, W.G.District" -Reg.' dated='15-03-2023.' title='BENDING TEST ON SIMPLY SUPPORTED BEAMS:' lab='SM'/>

      </div>

    </div>
    </div>
  )
}
export default SimplySupported