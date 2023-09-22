import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>{location.state.head}</Typography>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'550px',marginTop:'100px'}}>
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
    <button onClick={handleprint} style={{width:'20%'}}>print</button>
    </div>
    {/* <Button variant='contained'  onClick={graph} >Graph</Button> */}
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
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
