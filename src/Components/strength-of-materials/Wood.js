import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import Textfield from '../Textfield';
import { set, useForm } from 'react-hook-form';
import { useReactToPrint } from 'react-to-print';
import Print4 from './Print4';
const Wood = () => {
    const Navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'});
    const {register:register1,handleSubmit:handleSubmit1,formState:{errors:errors1}}=useForm({mode:'all'})
    var [res,setres]=useState()
    var [res1,setres1]=useState()
    var [one,setone]=useState()
    var [two,settwo]=useState()
    var [three,setthree]=useState()
    var [four,setfour]=useState()
    const back=()=>{
      Navigate(-1);
      }
      var ComponentRef=useRef()
      var ComponentRef1=useRef()

      var handleprint=useReactToPrint({
      content:()=>ComponentRef.current
      })
      var handleprint1=useReactToPrint({
        content:()=>ComponentRef1.current
        })
      var data=[
        {
          title:"FOR PARALLEL TO GRAINS",
          field1:"w1",
          field2:"w2",
          field3:"w3",
          field4:"w4",
          res:res,
          er1:errors?.w1,
          er2:errors?.w2,
          er3:errors?.w3,
          er4:errors?.w4,
          register:register,
          handleSubmit:handleSubmit,
          errors:errors,
          ComponentRef:ComponentRef,
          handleprint:handleprint
        },
       
        {
          title:"FOR PERPENDICULAR TO GRAINS",
          field1:"w5",
          field2:"w6",
          field3:"w7",
          field4:"w8",
          er1:errors1?.w5,
          er2:errors1?.w6,
          er3:errors1?.w7,
          er4:errors1?.w8,
          res:res1,
          register:register1,
          handleSubmit:handleSubmit1,
          errors:errors1,
          ComponentRef:ComponentRef1,
          handleprint:handleprint1
        }
      ]
      var submit=(data)=>{
        if(data.w1){
          setone(data.w1)
          settwo(data.w2)
          setthree(data.w3)
          setfour(data.w4)
          console.log("hi yes")
        let a=(data.w2*data.w3)
        res=(data.w4/a).toFixed(2)
        setres(res)}
        else{
          setone(data.w5)
          settwo(data.w6) 
          setthree(data.w7)
          setfour(data.w8)
          console.log("hi no")
          let a=(data.w5*data.w6)
        res1=(data.w8/a).toFixed(2)
        setres1(res1)}
        }

        

      
  return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>COMPRESSION TEST ON WOOD</Typography>
    <div style={{textAlign:'center'}}>
      {data.map((val)=>{return(

    <div>
    <u><Typography style={{textAlign:'center' ,marginTop:'50px' }} variant='h4'>{val.title}</Typography></u>
    <form onSubmit={val.handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
    <Textfield label="Enter the Length of specimen[L in cm]" variant='outlined' name={val.field1} valueAsNumber={true} register={val.register} required={{value:true,message:"this field is required"}} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} error={val.er1}/>
    <Textfield label="Enter the width of specimen[B in cm]" variant='outlined' name={val.field2} valueAsNumber={true} register={val.register} required={{value:true,message:"this field is required"}} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2}/>
    <Textfield label="Enter the Depth of specimen[D in cm]" variant='outlined' name={val.field3} valueAsNumber={true} register={val.register} required={{value:true,message:"this field is required"}} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er3}/>
    <Textfield label="Enter the Load at specimen fain[p in kN]" variant='outlined' name={val.field4} valueAsNumber={true} register={val.register} required={{value:true,message:"this field is required"}} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er4}/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button style={{width:'20%'}} onClick={val.handleprint}>print</button>
    </div>
    {Object.keys(val.errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>Crushing strength,when the loading is parallel to grains:{val.res} kN/cm<sup>2</sup></div>
    </Stack>
    </form>
    <div style={{display:'none'}}>
      <div ref={val.ComponentRef}>
                <Print4 title={val.title} head1="Enter the Length of specimen[L in cm]" head2="Enter the width of specimen[B in cm]" head3="Enter the Depth of specimen[D in cm]" head4="Enter the Load at specimen fain[p in kN]" head5="Crushing strenght:" one={one} two={two} three={three} four={four} res={val.res}/>
      </div>
    </div>
    </div>
    )})}
    
    {/* <u><Typography style={{textAlign:'center' ,marginTop:'50px' }} variant='h4'>FOR PERPENDICULAR TO GRAINS</Typography></u> */}
    {/* <form onSubmit={handleSubmit1((data)=>{
      setone(data.w5)
      settwo(data.w6)
      setthree(data.w7)
      setfour(data.w8)
      res1=((data.w8*1000)/(data.w5*data.w6*100))
      setres1(res1.toFixed(2))})}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
    <Textfield label="Enter the Length of specimen[L in cm]" variant='outlined'name='w5' valueAsNumber={true} register={register1} required={{value:true,message:"this field is required"}} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors1.w5?.message} error={errors1?.w5}/>
    <Textfield label="Enter the width of specimen[B in cm]" variant='outlined' name='w6' valueAsNumber={true} register={register1} required={{value:true,message:"this field is required"}} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors1.w6?.message} error={errors1?.w6}/>
    <Textfield label="Enter the Depth of specimen[D in cm]" variant='outlined' name='w7' valueAsNumber={true} register={register1} required={{value:true,message:"this field is required"}} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors1.w7?.message} error={errors1?.w7}/>
    <Textfield label="Enter the Load at specimen fain[p in kN]" variant='outlined' name='w8' valueAsNumber={true} register={register1} required={{value:true,message:"this field is required"}} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors1.w8?.message} error={errors1?.w8}/>
    <div style={{display:'flex', justifyContent:"space-evenly"}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button style={{width:'20%'}} onClick={handleprint}>Print</button>
    </div>
    {Object.keys(errors1).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>Crushing strenght,when the loading is perpendicular to grains: {res1} N/mm2</div>
    </Stack>
    </form> */}
    </div>
    
    </div>
  )
}

export default Wood