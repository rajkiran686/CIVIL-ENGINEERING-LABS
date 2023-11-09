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
import ImpactPrint from './ImpactPrint';
const ImpactOfJet = () => {
   var [res,setres]=useState();
   var [arr1,setarr1]=useState()
   var [arr2,setarr2]=useState()
   var [arr3,setarr3]=useState()
   var [arr4,setarr4]=useState()
   var [arr5,setarr5]=useState()
   const location=useLocation()
   var ComponentRef=useRef()
   var handleprint=useReactToPrint({
    content:()=>ComponentRef.current,
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
      const pressure=[data.l1,data.l2,data.l3,data.l4,data.l5,data.l6]
      const weight=[data.r1,data.r2,data.r3,data.r4,data.r5,data.r6]
      const t=[data.t1,data.t2,data.t3,data.t4,data.t5,data.t6]
      var sum=0
      const pressureHead=[]
      const velocity=[]
      const discharge=[]
      const liftingForce=[]
      const efficiency=[]
      for(let i=0;i<pressure.length;i++){
        pressureHead[i]=parseFloat((pressure[i]*10).toFixed(2))
        velocity[i]=parseFloat((Math.sqrt(2*9.81*pressureHead[i])).toFixed(2))
        // discharge[i]=parseFloat(((data.area*0.000001)/t[i]).toFixed(2))
        liftingForce[i]=parseFloat(((2*1000*data.area1*velocity[i]*velocity[i])/(9810000)).toFixed(2))
        efficiency[i]=parseFloat(((2*weight[i]*100)/liftingForce[i]).toFixed(3))
        sum+=efficiency[i]        
      }
      console.log("discharge",discharge)
      setarr1(pressureHead)
      setarr2(velocity)
      // setarr3(discharge)
      setarr4(liftingForce)
      setarr5(efficiency)
      sum=parseFloat((sum/6).toFixed(3))
      setres(sum)
      }  
      // function graph(){
        
      //   Navigate('/ct/bulking/bulking_graph',{state:{arr1:arr1,arr2:arr2}})
      // }
    var data=[
      {
        trail:'Trail-1',
        left:'l1',
        right:'r1',
        time:'t1',
        er1:errors?.l1,
        er2:errors?.r1,
        er3:errors?.t1
      },
      {
        trail:'Trail-2',
        left:'l2',
        right:'r2',
        time:'t2',
        er1:errors?.l2,
        er2:errors?.r2,
        er3:errors?.t2
      },
      {
        trail:'Trail-3',
        left:'l3',
        right:'r3',
        time:'t3',
        er1:errors?.l3,
        er2:errors?.r3,
        er3:errors?.t3
      },
      {
        trail:'Trail-4',
        left:'l4',
        right:'r4',
        time:'t4',
        er1:errors?.l4,
        er2:errors?.r4,
        er3:errors?.t4
      },
      {
        trail:'Trail-5',
        left:'l5',
        right:'r5',
        time:'t5',
        er1:errors?.l5,
        er2:errors?.r5,
        er3:errors?.t5
      },
      {
        trail:'Trail-6',
        left:'l6',
        right:'r6',
        time:'t6',
        er1:errors?.l6,
        er2:errors?.r6,
        er3:errors?.t6
      },
      
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
    <p className='flex justify-center md:text-4xl text-gray-500  pt-10'>{location.state.head}</p>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto'>
    <Textfield label="Enter the area of the tank[m^2]" variant="outlined" name="area" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.area} helperText={errors.area?.message}/>
    <Textfield label="Enter the area of the jet[m^2]" variant="outlined" name="area1" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.area1} helperText={errors.area1?.message}/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Enter the pressure gauge reading in kg/cm2" variant="outlined" name={val.left} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1} helperText={val.er1?.message}/><br/><br/>
    <Textfield label="Enter the weight placed on hanger in kg" variant="outlined" name={val.right} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2} helperText={val.er2?.message}/><br/><br/>
    <Textfield label="time taken for 10cm rise T[sec]" variant="outlined" name={val.time} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er3} helperText={val.er3?.message}/><br/><br/>
    </div>)})}
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}} className=' bg-pink-600'>print</button>
    </div>
    {/* <Button variant='contained'  onClick={graph} >Graph</Button> */}
    {Object.keys(errors).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </Stack><br/>
    <div style={{fontSize:'20px'}}>Average efficiency of impact of jet :{res} </div>
    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <ImpactPrint arr1={arr1} arr2={arr2}  arr4={arr4} arr5={arr5} res={res}  head={location.state.head}/>
      </div>
    </div>
    </div>
  )
}
export default ImpactOfJet
