import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import Print2 from '../Print2.js'
import Textarea from '@mui/joy/Textarea';
const Tension = () => {
   var [res,setres]=useState();
   var [first,setfirst]=useState();
   var [second,setsecond]=useState();
   var [company,setcompany]=useState();
   var [village,setvillage]=useState();
   var [city,setcity]=useState();
   var [district,setdistrict]=useState();
   var [subject,setsubject]=useState()
   var ComponentRef=useRef();
   var handleprint=useReactToPrint({
    content:()=>ComponentRef.current,
    // pageStyle:"@page { size: 10in 14in }"
   })
   const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
    const {register:register1,handleSubmit:handleSubmit1,formState:{errors:errors1}}=useForm({mode:'all'})
   const Navigate=useNavigate();
   const back=()=>{
    Navigate(-1);
    }
    const home=()=>{
        Navigate('/');
        }
    function submit(data){
      setfirst(data.w1)
      setsecond(data.w2)
      res=(data.w2/(3.14*data.w1*data.w1/4)).toFixed(2)
      setres(res)
    }
    function submit1(data){
      setcompany(data.w3)
      setvillage(data.w4)
      setcity(data.w5)
      setdistrict(data.w6)
      setsubject(data.w7)
      console.log("data.w7",data.w7)
      handleprint()
      
    }
    function print(){
      document.getElementById("demo").style.display="block"
    }
  
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
    <p className='flex justify-center md:text-4xl text-gray-500  pt-10'>TENSION TEST ON STEEL</p>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <div className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto'>
    <Textfield label="enter the mean diameter of the rod in [mm]"  variant="outlined" name="w1" register={register} valueAsNumber={true} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Enter the ultimate load of the rod in [N]"  variant="outlined" name="w2" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w2?.message} error={errors?.w2}/>
    <div style={{display:'flex',justifyContent:'space-evenly'}} >
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button  onClick={print} style={{width:'20%'}} className=' bg-pink-600'>print</button>
    </div>
    {Object.keys(errors).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div className='text-lg md:text-3xl'>Ultimate tensile stress:{res} N/mm<sup>2</sup></div>
    </div>
    </form>
    </div>
    <div style={{display:'none'}} id='demo'>
      <form onSubmit={handleSubmit1(submit1)}>
    <div className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto'>
    <Textfield label="enter the company name"  variant="outlined" name="w3" register={register1}  required={{value:true,message:"this field is required"}}   pattern={{value:/^[a-zA-Z]+$/,message:'enter the characters only'}} helperText={errors1.w3?.message} error={errors1?.w3}/>
    <Textfield label="Enter the village name"  variant="outlined" name="w4" register={register1}  required={{value:true,message:"this field is required"}}   pattern={{value:/^[a-zA-Z]+$/,message:'enter the characters only'}} helperText={errors1.w4?.message} error={errors1?.w4}/>
    <Textfield label="Enter the city name"  variant="outlined" name="w5" register={register1}  required={{value:true,message:"this field is required"}}   pattern={{value:/^[a-zA-Z]+$/,message:'enter the characters only'}} helperText={errors1.w5?.message} error={errors1?.w5}/>
    <Textfield label="Enter the district name"  variant="outlined" name="w6" register={register1}  required={{value:true,message:"this field is required"}}   pattern={{value:/^[a-zA-Z]+$/,message:'enter the characters only'}} helperText={errors1.w6?.message} error={errors1?.w6}/>
   <Textarea
   className='w-full bg-pink-200'
  maxRows={4}
  placeholder="Enter the subject"
  defaultValue='Erase and Enter subject for Example:M30 grade RMC Concrete Cubes for "Construction of G+4 Costal Paradise apartment (B-Block) 1st slab, Narasimhapuram, Bhimavaram, W.G.District"'
   {...register1("w7",{required:true,message:"this field is required"})}  helperText={errors1.w7?.message} error={errors1?.w7}
/>
    <Button variant='contained' type='submit' len={Object.keys(errors1).length} >submit    [click twice]</Button>
    {Object.keys(errors1).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </div>
    </form>

    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Print2 first={first} Ref="SM/W 183/2021-22" second={second} res={res} head1="the mean diameter of the rod[d1]" head2=" the ultimate load of the rod[p]" head3="Ultimate tensile stress:" company={company} village={village} city={city} district={district}
         subject={subject} dated='15-03-2023.' title='TENSION TEST ON STEEL:' lab='SM'/>

      </div>

    </div>
    </div>
  )
}
export default Tension