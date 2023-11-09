import { Button,FormControl,InputLabel,MenuItem,Select,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import   SievePrint from './SievePrint';
// import Graph from './Graph.js';
const SieveAnalysis = () => {
   var [select,setselect]=useState();
   var [arr1,setarr1]=useState([])
   var [arr2,setarr2]=useState([])
   var [arr3,setarr3]=useState([])
   var [percentageRetained,setpercentageRetained]=useState([])
   var [cumulativePercentageRetained,setcumulativePercentageRetained]=useState([])
   var [percentageFiner,setpercentageFiner]=useState([])
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
      var weightRetained=[data.w2,data.w3,data.w4,data.w5,data.w6,data.w7,data.w8,data.w9,data.w10,];
      setarr3(weightRetained);
      for(let i=0;i<9;i++){
        percentageRetained[i]=(weightRetained[i]*100)/data.w1
        percentageRetained[i]=percentageRetained[i]
      }
      for(let j=0;j<9;j++){
        if(j==0){
          cumulativePercentageRetained[j]=percentageRetained[j];}
        else{
        cumulativePercentageRetained[j]=cumulativePercentageRetained[j-1]+percentageRetained[j];}
      }
      for(let k=0;k<9;k++){
        percentageFiner[k]=(100-cumulativePercentageRetained[k]).toFixed(1);
      }
      arr2=JSON.parse(JSON.stringify(percentageFiner));
      let popped=arr2.pop()
      setarr2(arr2)
      console.log(arr2)
      arr1=[4.75,2.36,1.18,0.6,0.425,0.3,0.15,0.075]
      setarr1(arr1)
    } 
      function graph(){
        
        Navigate('/sm/sieve_analysis/graph1',{state:{arr1:arr1.reverse(),arr2:arr2.reverse(),select:select}})
      }
      const soilOptions = ['Sand','Gravel'];
    var data=[
      {
        trail:'In 4.75mm sieve',
        name:'w2',
        er:errors?.w2,
        her:errors.w2?.message
      },
      {
        trail:'In 2.36mm sieve',
        name:'w3',
        er:errors?.w3,
        her:errors.w3?.message

      },
      {
        trail:'In 1.18mm sieve',
        name:'w4',
        er:errors?.w4,
        her:errors.w4?.message

      },
      {
        trail:'In 600-microns sieve',
        name:'w5',
        er:errors?.w5,
        her:errors.w5?.message

      },
      {
        trail:'In 425-microns sieve',
        name:'w6',
        er:errors?.w6,
        her:errors.w6?.message

      },
      {
        trail:'In 300-microns sieve',
        name:'w7',
        er:errors?.w7,
        her:errors.w7?.message
      },
      {
        trail:'In 150-microns sieve',
        name:'w8',
        er:errors?.w8,
        her:errors.w8?.message

      },
      {
        trail:'In 75-microns sieve',
        name:'w9',
        er:errors?.w9,
        her:errors.w9?.message

      },
      {
        trail:'In PAN',
        name:'w10',
        er:errors?.w10,
        her:errors.w10?.message

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
    <p className='flex justify-center md:text-4xl text-gray-500  pt-10'>SIEVE ANALYSIS - IS CLASSIFICATION</p>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto'>
    <FormControl variant="outlined" fullWidth>
        <InputLabel>Select type of soil</InputLabel>  
        <Select
          {...register('selected',{required:{value:true,message:'This field is required'}})}
          label="Select type of soil"
          onChange={(e) => setselect('selected', e.target.value)}
          helperText={errors.selected?.message} error={errors?.selected}
        >
          {soilOptions.map((soil, index) => (
            <MenuItem key={index} value={soil}>
              {soil}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    <Textfield label="Weight of soil taken for sieving" variant="outlined" name="w1" register={register} valueAsNumber={true} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w1?.message} error={errors?.w1}/>
    <div>
      {data.map((val)=>{return(<div>
    <p className='md:text-xl'><u>{val.trail}</u></p>
    <Textfield label="Weight of soil retained in the sieve" variant="outlined" name={val.name} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={val.her} error={val.er}/><br/><br/>
    </div>)})}
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}} className=' bg-pink-600'>print</button>
    </div>
    <Button variant='contained'  onClick={graph} >Graph</Button>
    {Object.keys(errors).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </Stack><br/>
    {/* <div style={{fontSize:'20px'}}>  {res}</div> */}

    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <SievePrint arr1={[...arr1,"pan"]} percentageFiner={percentageFiner.reverse()} arr3={arr3} percentageRetained={percentageRetained} cumulativePercentageRetained={cumulativePercentageRetained}/>

      </div>

    </div>
    </div>
  )
}
export default SieveAnalysis