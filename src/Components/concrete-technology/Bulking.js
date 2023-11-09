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
import   BulkingPrint from './BulkingPrint';
import Graph from './Graph.js';
const Bulking = () => {
   var [res,setres]=useState();
   var [arr1,setarr1]=useState()
   var [arr2,setarr2]=useState()
   var [arr3,setarr3]=useState()
   var [initialVolume,setinitialVolume]=useState([])
   var ComponentRef=useRef();
   var ComponentRef1=useRef()
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
      const waterAdded=[data.w4,data.w6,data.w8,data.w10,data.w12,data.w14]
      for(let i=0;i<6;i++){
        initialVolume[i]=(waterAdded[i]*1000)/100
      }
      arr1=waterAdded
      
     
      setarr1(arr1)
      
      const finalVolume=[data.w5,data.w7,data.w9,data.w11,data.w13,data.w15]
     
      arr2=finalVolume
      setarr2(arr2)
   
      var  percentageChange=new Array(6)
      for(let i=0;i<6;i++){
        percentageChange[i]=((finalVolume[i]-data.w2)*100)/data.w2
        
      }
      arr3=percentageChange
      console.log("arr3 has",arr3)
      setarr3(arr3)

      
      for(let i=0;i<6;i++){
        if(percentageChange[i]>percentageChange[i+1])
        {
            res=waterAdded[i]
            setres(res)
            break;
        }
        }
      }  
      function graph(){
        
        Navigate('/ct/bulking/bulking_graph',{state:{arr1:arr1,arr2:arr2}})
      }
    
    var data=[
      {
        trail:'Trail-1',
        name1:'w4',
        name2:'w5',
        er1:errors?.w4,
        er2:errors?.w5
      },
      {
        trail:'Trail-2',
        name1:'w6',
        name2:'w7',
        er1:errors?.w6,
        er2:errors?.w7
      },
      {
        trail:'Trail-3',
        name1:'w8',
        name2:'w9',
        er1:errors?.w8,
        er2:errors?.w9
      },
      {
        trail:'Trail-4',
        name1:'w10',
        name2:'w11',
        er1:errors?.w10,
        er2:errors?.w11
      },
      {
        trail:'Trail-5',
        name1:'w12',
        name2:'w13',
        er1:errors?.w12,
        er2:errors?.w14
      },
      {
        trail:'Trail-6',
        name1:'w14',
        name2:'w15',
        er1:errors?.w14,
        er2:errors?.w15
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
    <p className='flex justify-center md:text-4xl text-gray-500  pt-10'>BULKING OF SAND</p>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto'>
      {/* <Typography variant='h6'><u>CROSS-SECTIONAL DIMENSIONS OF BEAM</u></Typography> */}
    <Textfield label="Weight of sand taken" variant="outlined" name="w1" register={register} valueAsNumber={true} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Initial volume of the sand[v1]" variant="outlined" name="w2" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w2?.message} error={errors?.w2}/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Total % of Water added" variant="outlined" name={val.name1} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1}/><br/><br/>
    <Textfield label="Volume of Sand [v2]" variant="outlined" name={val.name2} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2}/>
    </div>)})}
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}} className=' bg-pink-600'>print</button>
    </div>
    <Button variant='contained'  onClick={graph} >Graph</Button>
    {Object.keys(errors).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </Stack><br/>
    <div style={{fontSize:'20px'}}>Maximum bulking of sand is observed at:  {res}% of water.</div>

    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <BulkingPrint arr1={arr1} arr2={arr2} arr3={arr3} initialVolume={initialVolume} Ref="SM/W 183/2021-22"  res={res}   company="My Nest Developers," village="Narasimhapuram," city="Bhimavaram," dist="W.G.District."
         purpose='M30 grade RMC Concrete Cubes for "Construction of G+4 Costal Paradise apartment (B-Block) 1st slab, Narasimhapuram, Bhimavaram, W.G.District" -Reg.' dated='15-03-2023.' title='BULKING OF SAND' lab='CT'/>

      </div>

    </div>
    </div>
  )
}
export default Bulking