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
import Print1 from './Print1';
const Venturimeter = () => {

   var [res,setres]=useState();
   var [arr1,setarr1]=useState()
   var [arr2,setarr2]=useState()
   var [arr3,setarr3]=useState()
   var [arr4,setarr4]=useState()
   var arr5=[]
   var [head1,sethead1]=useState("")
   const location=useLocation()
      console.log("label",location.state.label)

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
        
        const time=[data.t1,data.t2,data.t3,data.t4,data.t5]
        
        const pressure=[]
        const theoreticalDischarge=[]
        const actualDischarge=[]
        const coefficientDischarge=[]
        var sum=0;
        if(location.state.index<=2){
          const left=[data.l1,data.l2,data.l3,data.l4,data.l5]
        const right=[data.r1,data.r2,data.r3,data.r4,data.r5]
        for(let i=0;i<left.length;i++){
            pressure[i]=parseFloat((12.6*(left[i]-right[i])).toFixed(2))
            theoreticalDischarge[i]=parseFloat((335.14*Math.sqrt(pressure[i])).toFixed(2))
            actualDischarge[i]=parseFloat((10*data.area/time[i]).toFixed(2))
            coefficientDischarge[i]=parseFloat((actualDischarge[i]/theoreticalDischarge[i]).toFixed(2))
            sum+=coefficientDischarge[i]
       
        }
         setarr1(pressure)
        setarr2(theoreticalDischarge)
        setarr3(actualDischarge)
        setarr4(coefficientDischarge)
        sum=parseFloat(sum/5).toFixed(3)
        setres(sum)
        sethead1("Pressure difference")
      
      }
        else{
          arr5=[data.h1,data.h2,data.h3,data.h4,data.h5]
          for(let i=0;i<time.length;i++){
            actualDischarge[i]=parseFloat((data.area*10/time[i]).toFixed(2))
            theoreticalDischarge[i]=parseFloat((data.area1*Math.sqrt(2*981*arr5[i])).toFixed(2))
            coefficientDischarge[i]=parseFloat((actualDischarge[i]/theoreticalDischarge[i]).toFixed(2))
            sum+=coefficientDischarge[i]
          }
           setarr1(arr5)
        setarr2(theoreticalDischarge)
        console.log("therotical",theoreticalDischarge)
        console.log("actual",actualDischarge)
        setarr3(actualDischarge)
        setarr4(coefficientDischarge)
        sum=parseFloat(sum/5).toFixed(3)
        setres(sum)
        sethead1("Head in supply")
        }
       
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
        head:'h1',
        er1:errors?.l1,
        er2:errors?.r1,
        er3:errors?.t1,
        er4:errors?.h1
      },
      {
        trail:'Trail-2',
        left:'l2',
        right:'r2',
        time:'t2',
        head:'h2',
        er1:errors?.l2,
        er2:errors?.r2,
        er3:errors?.t2,
        er4:errors?.h2
      },
      {
        trail:'Trail-3',
        left:'l3',
        right:'r3',
        time:'t3',
        head:'h3',
        er1:errors?.l3,
        er2:errors?.r3,
        er3:errors?.t3,
        er4:errors?.h3
      },
      {
        trail:'Trail-4',
        left:'l4',
        right:'r4',
        time:'t4',
        head:'h4',
        er1:errors?.l4,
        er2:errors?.r4,
        er3:errors?.t4,
        er4:errors?.h4
      },
      {
        trail:'Trail-5',
        left:'l5',
        right:'r5',
        time:'t5',
        head:'h5',
        er1:errors?.l5,
        er2:errors?.r5,
        er3:errors?.t5,
        er4:errors?.h5
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
    <Textfield label="Enter the area of the tank[A] in cm2" variant="outlined" name="area" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.area} helperText={errors.area?.message}/>
    <div>{
      (location.state.index==3||location.state.index==5) &&
    <Textfield label={location.state.label} variant="outlined" name="area1" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.area1} helperText={errors.area1?.message}/>
      }
    </div>
    
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <div>
    {location.state.index<=2 &&<div>
    <Textfield label="Enter the reading of the left limb h1[cm]" variant="outlined" name={val.left} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1} helperText={val.er1?.message}/><br/><br/>
    <Textfield label="Enter the reading of the right limb h2[cm]" variant="outlined" name={val.right} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2} helperText={val.er2?.message}/><br/><br/>
    </div>}</div>
    <div>
  {
      (location.state.index===3||location.state.index===5) &&
      <div>
       <Textfield label="Head in supply [cm]" variant="outlined" name={val.head} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er4} helperText={val.er4?.message}/><br/><br/>
       </div>
    }
    </div>
    <Textfield label="Time taken for 10 cm rise in the collecting tank[sec]" variant="outlined" name={val.time} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er3} helperText={val.er3?.message}/>
    </div>)})}
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}} className=' bg-pink-600'>print</button>
    </div>
    {/* <Button variant='contained'  onClick={graph} >Graph</Button> */}
    {Object.keys(errors).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </Stack><br/>
    <div style={{fontSize:'20px'}}>Average coefficient of discharge : {res} </div>
    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Print1 arr1={arr1} arr2={arr2} arr3={arr3} arr4={arr4} res={res} head={location.state.head} head1={head1}/>
      </div>
    </div>
    </div>
  )
}
export default Venturimeter