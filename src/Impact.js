import { Button, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useForm } from 'react-hook-form';
import ErrorMessage from './Components/ErrorMessage';
import Textfield from './Components/Textfield';
import { Stack } from '@mui/system';
import { useReactToPrint } from 'react-to-print';
import Print1 from './Components/Print1';


const Impact = () => {
    var Navigate=useNavigate()
    function back(){
        Navigate(-1)
    }
    var {handleSubmit,register,formState:{errors}}=useForm({mode:'all'})
    var {handleSubmit:handleSubmit1,register:register1,formState:{errors:errors1}}=useForm({mode:'all'})

    var submit=(data)=>{
        setfirst(data.w1)
        if(data.w1){
        setfirst(data.w1)
        console.log("data",data)
        res=data.w1/0.5
        res=res.toFixed(2)
        setres(res)}
        else{   
        
            setsecond(data.w2)
            res1=data.w2/0.8
            res1=res1.toFixed(2)
            setres1(res1)
        }
    }
    var [res,setres]=useState()
    var [res1,setres1]=useState()
    var [first,setfirst]=useState()
    var [second,setsecond]=useState()
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
            head:"CHARPY TEST",
            names:"w1",
            result:res,
            errors:errors,
            register:register,
            handleSubmit:handleSubmit,
            er:errors?.w1,
            ComponentRef:ComponentRef,
            handleprint:handleprint,
            value:first
        },
        {
            head:"IZOD TEST",
            names:"w2",
            result:res1,
            errors:errors1,
            register:register1,
            handleSubmit:handleSubmit1,
            er:errors1?.w2,
            ComponentRef:ComponentRef1,
            handleprint:handleprint1,
                value:second

        }

    ]
  return (
    <div>
        <Button variant='outlined' startIcon={<ArrowBackIosIcon/>} onClick={back} style={{marginLeft:'50px'}}>Back</Button>
        <Typography style={{textAlign:'center'}} variant='h3' color='darkgrey'>IMPACT STRENGTH TEST</Typography>
        <div>{data.map((val)=>{return(
        <p>
        <u> <Typography style={{textAlign:'center' ,marginTop:'50px' }} variant='h4'>{val.head}</Typography></u>
        <form onSubmit={val.handleSubmit(submit)}>
        <div style={{textAlign:'center'}}>
        <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'50px'}}>
        <Textfield   label="Energy absorbed area specimen" valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} variant='outlined' name={val.names} register={val.register}  error={val.er}/>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <Button variant='contained'  type='submit' style={{width:'80%'}}>submit</Button>
        <button onClick={val.handleprint} style={{ width:'20%'}}>print data</button>
        </div>
        <div>
        {  Object.keys(val.errors).length !=0 &&  <ErrorMessage>please fill all the fields</ErrorMessage>}
        </div>
        <div style={{fontSize:'20px'}}>impact value: {val.result} j/cm<sup>2</sup></div> 
        </Stack>
        </div>
        </form>
        <div style={{display:'none'}}>
            <div ref={val.ComponentRef}>
                <Print1 head="Energy absorbed area specimen" head1="impact value: " first={val.value}  res={val.result}/>

            </div>

        </div>
        </p>

        )})}
        </div>
        
    </div>
  )
}

export default Impact