import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import Print1 from './Print1';
import Print2 from '../Print2';
import OrificePrint from './OrificePrint';
const OrificeByFalling = () => {
   var [res,setres]=useState();
   var [arr1,setarr1]=useState()
   var [arr2,setarr2]=useState()
   var [arr3,setarr3]=useState()
   var [arr4,setarr4]=useState()
  
   var [head1,sethead1]=useState("")
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
      const h1=[data.i1,data.i2,data.i3,data.i4,data.i5]
      const h2=[data.f1,data.f2,data.f3,data.f4,data.f5]
      const t=[data.t1,data.t2,data.t3,data.t4,data.t5]
      setarr1(h1)
      setarr2(h2)
      setarr3(t)
      var sum=0
      const coefficient=[]
      for(let i=0;i<h1.length;i++){
        coefficient[i]=parseFloat(((2*data.area*(Math.sqrt(h1[i])-Math.sqrt(h2[i])))/(t[i]*data.area1*(Math.sqrt(2*981)))).toFixed(3))
        sum+=coefficient[i]
      }
      console.log('coefficents are',coefficient)
      setarr4(coefficient)
      sum=parseFloat((sum/5).toFixed(3))
      setres(sum)
      }  
      // function graph(){
        
      //   Navigate('/ct/bulking/bulking_graph',{state:{arr1:arr1,arr2:arr2}})
      // }
    var data=[
      {
        trail:'Trail-1',
        initial:'i1',
        final:'f1',
        time:'t1',
        er1:errors?.i1,
        er2:errors?.f1,
        er3:errors?.t1,
      },
      {
        trail:'Trail-2',
        initial:'i2',
        final:'f2',
        time:'t2',
        er1:errors?.i2,
        er2:errors?.f2,
        er3:errors?.t2,
      },
      {
        trail:'Trail-3',
        initial:'i3',
        final:'f3',
        time:'t3',
        er1:errors?.i3,
        er2:errors?.f3,
        er3:errors?.t3,
      },
      {
        trail:'Trail-4',
        initial:'i4',
        final:'f4',
        time:'t4',
        er1:errors?.i4,
        er2:errors?.f4,
        er3:errors?.t4,
      },
      {
        trail:'Trail-5',
        initial:'i5',
        final:'f5',
        time:'t5',
        er1:errors?.i5,
        er2:errors?.f5,
        er3:errors?.t5,
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
    <Textfield label="Enter the area through water flow in cm2" variant="outlined" name="area1" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.area1} helperText={errors.area1?.message}/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Enter the reading of the initial head in H1[cm]" variant="outlined" name={val.initial} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1} helperText={val.er1?.message}/><br/><br/>
    <Textfield label="Enter the reading of the final head in H2[cm]" variant="outlined" name={val.final} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2} helperText={val.er2?.message}/><br/><br/>
    <Textfield label="Time taken for fall of head from H1 to H2" variant="outlined" name={val.time} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er3} helperText={val.er3?.message}/>
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
        <OrificePrint arr1={arr1} arr2={arr2} arr3={arr3} arr4={arr4} res={res} head={location.state.head}/>
      </div>
    </div>
    </div>
  )
}
export default OrificeByFalling
