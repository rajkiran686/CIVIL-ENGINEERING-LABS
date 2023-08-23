import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import TotalSolidsPrint from './TotalSolidsPrint';

const TotalSolids = () => {
   var[initial,setinitial]=useState()
   var[volume,setvolume]=useState()
   var[final,setfinal]=useState()
   var[res,setres]=useState() 
   var[type,settype]=useState("")
   var[units,setunits]=useState("")
   const location=useLocation()
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
        setvolume(data.v)
        settype(data.name)
        setinitial(data.w1)
        setfinal(data.w2)
        setunits("mg/lit")
        res=(((data.w2-data.w1)/data.v)*1000).toFixed(2)
        setres(parseFloat(res))
        }
return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={home} >HOME</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>{location.state.head}</Typography>
    <div style={{textAlign:'center'}}>
    <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'550px',marginTop:'100px'}}>
    <Textfield label="Identification of sample [ex:tapwater]" variant="outlined" name="name" register={register}   required={{value:true,message:"this field is required"}}   pattern={{value: /^[A-Za-z]+$/i,message:'enter only alphabets'}}  error={errors?.name} helperText={errors.name?.message}/><br/>
    <Textfield label="Volume of Sample taken" variant="outlined" name="v" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.v} helperText={errors.v?.message}/><br/><br/>
    <Textfield label="Initial weight of dish" variant="outlined" name="w1" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.w1} helperText={errors.w1?.message}/><br/><br/>
    <Textfield label="Final weight of dish" variant="outlined" name="w2" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={errors?.w2} helperText={errors.w2?.message}/><br/><br/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}}>print</button>
    </div>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </Stack><br/>
    <div style={{fontSize:'30px'}}>{location.state.head}: {res} {units}</div>

    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <TotalSolidsPrint initial={initial} units={units} head={location.state.head} final={final} volume={volume} type={type} res={res}/>

      </div>

    </div>
    </div>
  )
}
export default TotalSolids