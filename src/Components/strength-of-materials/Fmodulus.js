import { Button,Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';
import { Stack } from '@mui/system';
import Textfield from '../Textfield';
import { useForm } from 'react-hook-form';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import Print11 from './Print11';
var Fmodulus = () => {
    var Navigate=useNavigate();
    const form=useForm({mode:'all'})
    var {register,handleSubmit,formState:{errors}}=form
    var [res,setres]=useState()
    var [one,setone]=useState()
    var [two,settwo]=useState()
    var [three,setthree]=useState()
    var [four,setfour]=useState()
    var [five,setfive]=useState()
    var [six,setsix]=useState()
    var [seven,setseven]=useState()
    var [eight,seteight]=useState()
    var [nine,setnine]=useState()
    var [ten,setten]=useState()
    var [eleven,seteleven]=useState()


    const back=()=>{
        Navigate(-1);
      }     
      const home=()=>{
        Navigate('/');
        }
   var ComponentRef=useRef()
   var handleprint=useReactToPrint({
    content:()=>ComponentRef.current
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
    <p className='flex justify-center md:text-4xl text-gray-500  pt-10'>FINENESS MODULUS OF AGGREGATE</p>
    <div style={{textAlign:'center'}}>
    <form onSubmit={handleSubmit((data)=>{
          setone(data.w1)
          settwo(data.w2)
          setthree(data.w3)
          setfour(data.w4)
          setfive(data.w5)
          setsix(data.w6)
          setseven(data.w7)
          seteight(data.w8)
          setnine(data.w9)
          setten(data.w10)
          seteleven(data.w11)
          

          var cw = new Array(11);
            var pcw=new Array(11)
            var val=[data.w1,data.w2,data.w3,data.w4,data.w5,data.w6,data.w7,data.w8,data.w9,data.w10,data.w11];//stored entered input values in an array
           for(var i=0;i<cw.length;i++){//for cumulative weight
              if(i==0){
                cw[i]=val[i];
              }
              else{
              cw[i]=cw[i-1]+val[i]
            }
         }
        pcw[0]=((val[0]*100)/(data.w1+data.w2+data.w3+data.w4+data.w5+data.w6+data.w7+data.w8+data.w9+data.w10+data.w11));
          for(var i=1;i<pcw.length;i++){//for percentage cumulative weight
            pcw[i]=(((cw[i-1]+val[i])/(data.w1+data.w2+data.w3+data.w4+data.w5+data.w6+data.w7+data.w8+data.w9+data.w10+data.w11))*100)
        }
        res=(pcw[0]+pcw[1]+pcw[2]+pcw[3]+pcw[4]+pcw[5]+pcw[6]+pcw[7]+pcw[8]+pcw[9])/100//fineness modulus
        res=res.toFixed(2)
        setres(res)
        })}>
    <Stack spacing={2} direction='column' className='w-auto   space-y-5  p-5 md:max-w-lg mx-auto'>
    <Stack spacing={2} direction='column'>
    <Textfield label="Enter the weight of aggregate retained on 80mm (W1)" variant='outlined' valueAsNumber={true}  register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w1' helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Enter the weight of aggregate retained on 40mm (W2)" variant='outlined' valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w2' helperText={errors.w2?.message} error={errors?.w2}/>
    <Textfield label="Enter the weight of aggregate retained on 20mm (W3)" variant='outlined'  valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w3' helperText={errors.w3?.message} error={errors?.w3}/>
    <Textfield label="Enter the weight of aggregate retained on 10mm (W4)" variant='outlined' valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w4' helperText={errors.w4?.message} error={errors?.w4}/>
    <Textfield label="Enter the weight of aggregate retained on 4.75mm (W5)" variant='outlined' valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w5' helperText={errors.w5?.message} error={errors?.w5}/>
    <Textfield label="Enter the weight of aggregate retained on 2.36mm (W6)" variant='outlined' valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w6' helperText={errors.w6?.message} error={errors?.w6}/>
    <Textfield label="Enter the weight of aggregate retained on 1.18mm (W7)" variant='outlined'valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w7' helperText={errors.w7?.message} error={errors?.w7}/>
    <Textfield label="Enter the weight of aggregate retained on 600µ (W8)" variant='outlined' valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w8' helperText={errors.w8?.message} error={errors?.w8}/>
    <Textfield label="Enter the weight of aggregate retained on 300µ (W9)" variant='outlined' valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w9' helperText={errors.w9?.message} error={errors?.w9}/>
    <Textfield label="Enter the weight of aggregate retained on 150µ (W10)" variant='outlined' valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w10' helperText={errors.w10?.message} error={errors?.w10}/>
    <Textfield label="Enter the weight of aggregate retained on pan (W11)" variant='outlined' valueAsNumber={true} register={register} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} name='w11' helperText={errors.w11?.message} error={errors?.w11} />
    <div style={{display:'flex' , justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}} >Submit</Button>
    <button onClick={handleprint} style={{width:'20%'}} className=' bg-pink-600'>Print</button>
    </div>
    </Stack>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>Fineness Modulus of the aggregate:{res}</div>
   </Stack>
    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Print11  one={one} two={two} three={three} four={four} five={five} six={six} seven={seven} eight={eight} nine={nine} ten={ten} eleven={eleven}  res={res}/>

      </div>

    </div>
    </div>
  )
  }
export default Fmodulus;