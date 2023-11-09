import React, { useRef, useState } from 'react'
import { Button, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import Textfield from '../Textfield';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { useReactToPrint } from 'react-to-print';
import LiquidPrint from './LiquidPrint';
const LiquidLimit = () => {
  const Navigate=useNavigate()
  var [emptyWeight,setemptyWeight]=useState([])
  var [cupAndDrySoil,setcupAndDrySoil]=useState([])
  var [cupAndWetSoil,setcupAndWetSoil]=useState([])
  var [blows,setblows]=useState([])  
  var [weightOfWater,setweightOfWater]=useState([]);
  var [ovenDriedSoil,setovenDriedSoil]=useState([])
  var [waterContent,setwaterContent]=useState([])
  const back=()=>{
    Navigate(-1)
  }
  const home=()=>{
        Navigate('/');
        }
  const {register,handleSubmit,formState:{errors}}=useForm({
    mode:'all'
  })
  const arr=[
    {
      title:"For cup1",
      blows:'n1',
      weight:'w1',
      cupanddrysoil:'wd1',
      cupandwetsoil:'ww1',
      er1:errors?.w1,
      er2:errors?.wd1,
      er3:errors?.ww1,
      er4:errors?.n1,
      her1:errors.w1?.message,
      her2:errors.wd1?.message,
      her3:errors.ww1?.message,
      her4:errors.n1?.message,
    },
    {
      title:"For cup2",
      blows:'n2',
      weight:'w2',
      cupanddrysoil:'wd2',
      cupandwetsoil:'ww2',
      er1:errors?.w2,
      er2:errors?.wd2,
      er3:errors?.ww2,
      er4:errors?.n2,
      her1:errors.w2?.message,
      her2:errors.wd2?.message,
      her3:errors.ww2?.message,
      her4:errors.n2?.message,
    },
    {
      title:"For cup3",
      blows:'n3',
      weight:'w3',
      cupanddrysoil:'wd3',
      cupandwetsoil:'ww3',
      er1:errors?.w3,
      er2:errors?.wd3,
      er3:errors?.ww3,
      er4:errors?.n3,
      her1:errors.w3?.message,
      her2:errors.wd3?.message,
      her3:errors.ww3?.message,
      her4:errors.n3?.message,
    },
    {
      title:"For cup4",
      blows:'n4',
      weight:'w4',
      cupanddrysoil:'wd4',
      cupandwetsoil:'ww4',
      er1:errors?.w4,
      er2:errors?.wd4,
      er3:errors?.ww4,
      er4:errors?.n4,
      her1:errors.w4?.message,
      her2:errors.wd4?.message,
      her3:errors.ww4?.message,
      her4:errors.n4?.message,
    }
  ]
  const submit=(data)=>{
    var arr1=[]
    var arr2=[]
    var arr3=[]
    var arr4=[]
    var arr5=[]
    var arr6=[]
    setemptyWeight([data.w1,data.w2,data.w3,data.w4])
    arr1=[data.w1,data.w2,data.w3,data.w4]
    arr2=[data.wd1,data.wd2,data.wd3,data.wd4]
    arr3=[data.ww1,data.ww2,data.ww3,data.ww4]
    setcupAndDrySoil([data.wd1,data.wd2,data.wd3,data.wd4])
    setcupAndWetSoil([data.ww1,data.ww2,data.ww3,data.ww4])
    setblows([data.n1,data.n2,data.n3,data.n4])
    
    for(var i=0;i<arr2.length;i++){
      const num1=((arr3[i]-arr2[i]).toFixed(2))
      arr4.push(parseFloat(num1))
      const num2=((arr2[i]-arr1[i]).toFixed(2))
      arr5.push(parseFloat(num2))
    }
    setweightOfWater(arr4)
    setovenDriedSoil(arr5)
    for(var i=0;i<weightOfWater.length;i++){
      const num3=((arr4[i]/arr5[i])*100).toFixed(2)
      arr6.push(parseFloat(num3))
    }
    console.log("water",arr6)
    setwaterContent(arr6)
    
  }
  const graph=()=>{
    Navigate('/sm/sieve_analysis/graph2',{state:{blows:blows,waterContent:waterContent.sort()}})
  }
  const ComponentRef=useRef()
  var handleprint=useReactToPrint({
    content:()=>ComponentRef.current,
    pageStyle:"@page { size: 10in 14in }"
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
      <p className='flex justify-center md:text-4xl text-gray-500  pt-10'>LIQUID LIMIT-CASAGRANDE METHOD</p>
      <div style={{textAlign:'center',display:'grid',justifyContent:'center',alignContent:'center'}}>
        <form onSubmit={handleSubmit(submit)}>
          <Stack spacing={2} direction='column'  >
            <div>
              {
                arr.map((val)=>{return(<>
                <Stack spacing={2} direction='column' className='w-auto   space-y-5  p-5   mx-auto'>
                  <Typography variant='h6'><u>{val.title}</u></Typography>
                  <Textfield label="Enter the weight of empty cup" variant="outlined" name={val.weight} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={val.her1} error={val.er1}/>
                  <Textfield label="Enter the weight of cup + dry soil" variant="outlined" name={val.cupanddrysoil} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={val.her2} error={val.er2}/>
                  <Textfield label="Enter the weight of cup + wet soil" variant="outlined" name={val.cupandwetsoil} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={val.her3} error={val.er3}/>
                  <Textfield label="Enter the no. of blows" variant="outlined" name={val.blows} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={val.her4} error={val.er4}/>
                  </Stack>
                  </>
                )})
              }
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                  <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
                  <button onClick={handleprint} style={{width:'20%'}} className=' bg-pink-600'>print</button>
                  </div>
                  <Button variant='contained'  onClick={graph} >Graph</Button>
                  {Object.keys(errors).length!==0 && <ErrorMessage>please fill all the fields</ErrorMessage>} 
          </Stack>
        </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <LiquidPrint emptyWeight={emptyWeight} cupAndWetSoil={cupAndWetSoil} cupAndDrySoil={cupAndDrySoil} blows={blows}  waterContent={waterContent} weightOfWater={weightOfWater} ovenDriedSoil={ovenDriedSoil} />

      </div>

    </div>
    </div>
  )
}

export default LiquidLimit