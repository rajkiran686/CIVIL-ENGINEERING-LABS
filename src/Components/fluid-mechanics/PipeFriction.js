import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import NotchPrint from './NotchPrint';
import PipePrint from './PipePrint';
const PipeFriction = () => {
   var [res,setres]=useState();
   var [arr1,setarr1]=useState()
   var [arr2,setarr2]=useState()
   var [arr3,setarr3]=useState()
   var [arr4,setarr4]=useState()
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
      const h1=[data.l1,data.l2,data.l3,data.l4,data.l5]
      const h2=[data.r1,data.r2,data.r3,data.r4,data.r5]
      const t=[data.t1,data.t2,data.t3,data.t4,data.t5]
      var sum=0
      const headLoss=[]
      const discharge=[]
      const velocity=[]
      const darlysFriction =[]
      for(let i=0;i<h1.length;i++){
        headLoss[i]=parseFloat((12.6*(h1[i]-h2[i])).toFixed(2))
        discharge[i]=parseFloat(((data.area*10)/t[i]).toFixed(2))
        velocity[i]=parseFloat((discharge[i]*4/(data.diameter*data.diameter*3.14)).toFixed(2))
        darlysFriction[i]=parseFloat(((headLoss[i]*2*981*data.diameter)/(data.length*velocity[i]*velocity[i])).toFixed(3))
        sum+=darlysFriction[i]
      }
      setarr1(headLoss)
      setarr2(discharge)
      setarr3(velocity)
      setarr4(darlysFriction)
      sum=parseFloat((sum/5).toFixed(3))
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
      
    ]
return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>{location.state.head}</Typography>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'550px',marginTop:'100px'}}>
    <Textfield label="Enter the area of the tank[A] in cm2" variant="outlined" name="area" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.area} helperText={errors.area?.message}/>
    <Textfield label="Enter the length of the pipe [cm]" variant="outlined" name="length" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.length} helperText={errors.length?.message}/>
    <Textfield label="Enter the diameter of the pipe [cm]" variant="outlined" name="diameter" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.diameter} helperText={errors.diameter?.message}/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Enter the reading of left limb h1[cm]" variant="outlined" name={val.left} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1} helperText={val.er1?.message}/><br/><br/>
    <Textfield label="Enter the reading of right limb h2[cm]" variant="outlined" name={val.right} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2} helperText={val.er2?.message}/><br/><br/>
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
    <div style={{fontSize:'20px'}}>Average Darley's friction factor for the given pipe :{res} </div>
    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <PipePrint arr1={arr1} arr2={arr2} arr3={arr3} arr4={arr4} res={res}  head={location.state.head}/>
      </div>
    </div>
    </div>
  )
}
export default PipeFriction
