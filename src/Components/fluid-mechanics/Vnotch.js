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
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>{location.state.head}</Typography>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'550px',marginTop:'100px'}}>
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
    <button onClick={handleprint} style={{width:'20%'}}>print</button>
    </div>
    {/* <Button variant='contained'  onClick={graph} >Graph</Button> */}
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
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
