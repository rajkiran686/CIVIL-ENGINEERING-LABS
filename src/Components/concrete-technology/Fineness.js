import { Button,Typography } from '@mui/material';
import React, { useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Stack} from '@mui/system';
import ErrorMessage from '../ErrorMessage';
import { useForm } from 'react-hook-form';
import Textfield from '../Textfield';
import '../Print.css';

import { useReactToPrint } from 'react-to-print';
import FinenessPrint from './FinenessPrint';
const Fineness = () => {  
    const ComponentRef=useRef()
    const handleprint=useReactToPrint({
      content:()=>ComponentRef.current,
      documentTitle:"first",
      onAfterPrint:()=>alert("printed")
    })
    var [res,setres]=useState();
    var [first,setfirst]=useState();
    var [second,setsecond]=useState()
  

    const Navigate=useNavigate();
    var{register,handleSubmit,formState:{errors}}=useForm({
      mode:'all'
    })
  const back=()=>{
    Navigate(-1);
}
 return (
    <div> 
    <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>FINENESS OF CEMENT</Typography>
    <form onSubmit={handleSubmit((data)=>{
      
       setfirst(data.w1)
       setsecond(data.w2)
       res=((data.w2/data.w1)*100).toFixed(2)
       console.log("res is ",res)
      setres(res)
     })} style={{alignItems:'center'}}>
     <div style={{textAlign:'center'}}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}> 
    <Textfield   label="Enter the weight of cement taken (W)" valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} variant='outlined' name="w1" register={register} helperText={errors.w1?.message} error={errors?.w1} />
    <Textfield  label="Enter the weight retained on sieve (W1)" valueAsNumber={true} pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} required={{value:true,message:"this field is required"}} variant='outlined'  register={register} name="w2" helperText={errors.w2?.message} error={errors?.w2}/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained'  type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{ width:'20%'}}>print data</button>
    </div>
    <div>
    {  Object.keys(errors).length !=0 &&  <ErrorMessage>please fill all the fields</ErrorMessage>}
    </div>
    <div style={{fontSize:'20px'}}>percentage weight retained on sieve is:{res}</div> 
    </Stack>
    </div>  
    </form> 
    <div style={{display:'none'}}>
    <div ref={ComponentRef}>
     <FinenessPrint first={first} second={second} res={res} head1="Enter the weight of cement taken (W)" head2="Enter the weight retained on sieve (W1)" head3="percentage weight retained on sieve is:"/>
     </div>
     </div>
    </div>
  )
    }
export default Fineness