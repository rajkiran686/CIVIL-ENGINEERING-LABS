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
import NotchPrint from './NotchPrint';
const Vnotch = () => {
   var [res,setres]=useState();
   var [arr1,setarr1]=useState()
   var [arr2,setarr2]=useState()
   var [arr3,setarr3]=useState()
   var [arr4,setarr4]=useState()
   var [arr5,setarr5]=useState()
   var [arr6,setarr6]=useState()
   var [sill,setsill]=useState()
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
      const h2=[data.f1,data.f2,data.f3,data.f4,data.f5]
      const t=[data.t1,data.t2,data.t3,data.t4,data.t5]
      setarr1(h2)
      setarr2(t)
      var sum=0
      setsill(data.level)
      const headOfWater=[]
      const theoreticalDischarge=[]
      const actualDischarge=[]
      const coefficient=[]
      for(let i=0;i<h2.length;i++){
        headOfWater[i]=data.level-h2[i]
        theoreticalDischarge[i]=parseFloat((0.534*44.30*Math.pow(headOfWater[i],2.5)).toFixed(2))
        actualDischarge[i]=parseFloat(((data.area*10)/t[i]).toFixed(2))
        coefficient[i]=parseFloat((actualDischarge[i]/theoreticalDischarge[i]).toFixed(2))
        sum+=coefficient[i]
      }
      setarr3(headOfWater)
      setarr4(theoreticalDischarge)
      setarr5(actualDischarge)
      setarr6(coefficient)
      sum=parseFloat((sum/5).toFixed(3))
      setres(sum)
      }  
      // function graph(){
        
      //   Navigate('/ct/bulking/bulking_graph',{state:{arr1:arr1,arr2:arr2}})
      // }
    var data=[
      {
        trail:'Trail-1',
        final:'f1',
        time:'t1',
        er1:errors?.f1,
        er2:errors?.t1,
      },
      {
        trail:'Trail-2',
        final:'f2',
        time:'t2',
        er1:errors?.f2,
        er2:errors?.t2,
      },
      {
        trail:'Trail-3',
        final:'f3',
        time:'t3',
        er1:errors?.f3,
        er2:errors?.t3,

      },
      {
        trail:'Trail-4',
        final:'f4',
        time:'t4',
        er1:errors?.f4,
        er2:errors?.t4,
      },
      {
        trail:'Trail-5',
        final:'f5',
        time:'t5',
        er1:errors?.f5,
        er2:errors?.t5,
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
    <Textfield label="Enter the sill level [h1] in cm" variant="outlined" name="level" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.level} helperText={errors.level?.message}/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Enter the reading of the final level in h2[cm]" variant="outlined" name={val.final} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1} helperText={val.er1?.message}/><br/><br/>
    <Textfield label="Enter the time for water rise [sec]" variant="outlined" name={val.time} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2} helperText={val.er2?.message}/><br/><br/>
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
        <NotchPrint arr1={arr1} arr2={arr2} arr3={arr3} arr4={arr4} arr5={arr5} arr6={arr6} res={res} sill={sill} head={location.state.head}/>
      </div>
    </div>
    </div>
  )
}
export default Vnotch
