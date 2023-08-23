import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import EnvironmentalPrint from './EnvironmentalPrint';

const Environmental = () => {
   var[initial,setinitial]=useState([])
   var[volume,setvolume]=useState()
   var[final,setfinal]=useState([])
   var[sol,setsol]=useState("")
   var[solution,setsolution]=useState([])
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
        setsol(location.state.solution)
        const arr1=[data.i1,data.i2,data.i3]
        const arr2=[data.f1,data.f2,data.f3]
        const arr3=[]
        setvolume(data.v1)
        settype(data.name)
        setinitial([data.i1,data.i2,data.i3])
        setfinal([data.f1,data.f2,data.f3])
        for(var i=0;i<arr1.length;i++){
            arr3[i]=(arr2[i]-arr1[i]).toFixed(2)
        }
        setsolution(arr3)
        const toFindDuplicates = arr3 => arr3.filter((item, index) => arr3.indexOf(item) !== index)
        const duplicateElement = parseFloat(toFindDuplicates(arr3));
        console.log("duplicate is",parseFloat(duplicateElement))
        if(location.state.index<=3){
        setunits("mg/lit as CaCO3")
        res=((duplicateElement/data.v1)*1000).toFixed(2)
        setres(parseFloat(res))
        }
        else{
          setunits("ppm")
          res=((duplicateElement*3*35.46*1000*0.0141)/data.v1).toFixed(2)
          setres(parseFloat(res))
        }

       
      }  
    var data=[
      {
        trail:'Trail-1',
        volume:'v1',
        Iburette:'i1',
        Fburette:'f1',
        er1:errors?.v1,
        er2:errors?.i1,
        er3:errors?.f1,
        hre1:errors.v1?.message,
        hre2:errors.i1?.message,
        hre3:errors.f1?.message,
      },
      {
        trail:'Trail-2',
        volume:'v2',
        Iburette:'i2',
        Fburette:'f2',
        er1:errors?.v2,
        er2:errors?.i2,
        er3:errors?.f2,
        hre1:errors.v2?.message,
        hre2:errors.i2?.message,
        hre3:errors.f2?.message,
      },
      {
        trail:'Trail-3',
        volume:'v3',
        Iburette:'i3',
        Fburette:'f3',
        er1:errors?.v3,
        er2:errors?.i3,
        er3:errors?.f3,
        hre1:errors.v3?.message,
        hre2:errors.i3?.message,
        hre3:errors.f3?.message,
      },
    ]
return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={home} >HOME</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>{location.state.head}</Typography>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'550px',marginTop:'100px'}}>
    <Textfield label="Identification of sample [ex:tapwater]" variant="outlined" name="name" register={register}   required={{value:true,message:"this field is required"}}   pattern={{value: /^[A-Za-z]+$/i,message:'enter only alphabets'}}  error={errors?.name} helperText={errors.name?.message}/><br/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Volume of Sample taken" variant="outlined" name={val.volume} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1} helperText={val.hre1}/><br/><br/>
    <Textfield label="Initial burette reading" variant="outlined" name={val.Iburette} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2} helperText={val.hre2}/><br/><br/>
    <Textfield label="Final burette reading" variant="outlined" name={val.Fburette} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er3} helperText={val.hre3}/><br/><br/>
    </div>)})}
    </div>
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
        <EnvironmentalPrint initial={initial} units={units} sol={sol}head={location.state.head} final={final} volume={volume} solution={solution} type={type} res={res}/>

      </div>

    </div>
    </div>
  )
}
export default Environmental