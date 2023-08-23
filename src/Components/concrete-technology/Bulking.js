import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import   BulkingPrint from './BulkingPrint';
import Graph from './Graph.js';
const Bulking = () => {
   var [res,setres]=useState();
   var [arr1,setarr1]=useState()
   var [arr2,setarr2]=useState()
   var [arr3,setarr3]=useState()
   var [initialVolume,setinitialVolume]=useState([])
   var ComponentRef=useRef();
   var ComponentRef1=useRef()
   var handleprint=useReactToPrint({
    content:()=>ComponentRef.current,
    pageStyle:"@page { size: 10in 14in }"
   })
   const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
   const Navigate=useNavigate();
   const back=()=>{
    Navigate(-1);
    }
    function submit(data){
      const waterAdded=[data.w4,data.w6,data.w8,data.w10,data.w12,data.w14]
      for(let i=0;i<6;i++){
        initialVolume[i]=(waterAdded[i]*1000)/100
      }
      arr1=waterAdded
      
     
      setarr1(arr1)
      
      const finalVolume=[data.w5,data.w7,data.w9,data.w11,data.w13,data.w15]
     
      arr2=finalVolume
      setarr2(arr2)
   
      var  percentageChange=new Array(6)
      for(let i=0;i<6;i++){
        percentageChange[i]=((finalVolume[i]-data.w2)*100)/data.w2
        
      }
      arr3=percentageChange
      console.log("arr3 has",arr3)
      setarr3(arr3)

      
      for(let i=0;i<6;i++){
        if(percentageChange[i]>percentageChange[i+1])
        {
            res=waterAdded[i]
            setres(res)
            break;
        }
        }
      }  
      function graph(){
        
        Navigate('/ct/bulking/bulking_graph',{state:{arr1:arr1,arr2:arr2}})
      }
    
    var data=[
      {
        trail:'Trail-1',
        name1:'w4',
        name2:'w5',
        er1:errors?.w4,
        er2:errors?.w5
      },
      {
        trail:'Trail-2',
        name1:'w6',
        name2:'w7',
        er1:errors?.w6,
        er2:errors?.w7
      },
      {
        trail:'Trail-3',
        name1:'w8',
        name2:'w9',
        er1:errors?.w8,
        er2:errors?.w9
      },
      {
        trail:'Trail-4',
        name1:'w10',
        name2:'w11',
        er1:errors?.w10,
        er2:errors?.w11
      },
      {
        trail:'Trail-5',
        name1:'w12',
        name2:'w13',
        er1:errors?.w12,
        er2:errors?.w14
      },
      {
        trail:'Trail-6',
        name1:'w14',
        name2:'w15',
        er1:errors?.w14,
        er2:errors?.w15
      },
     
    ]
return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>BULKING OF SAND</Typography>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
      {/* <Typography variant='h6'><u>CROSS-SECTIONAL DIMENSIONS OF BEAM</u></Typography> */}
    <Textfield label="Weight of sand taken" variant="outlined" name="w1" register={register} valueAsNumber={true} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Initial volume of the sand[v1]" variant="outlined" name="w2" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w2?.message} error={errors?.w2}/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Total % of Water added" variant="outlined" name={val.name1} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1}/><br/><br/>
    <Textfield label="Volume of Sand [v2]" variant="outlined" name={val.name2} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2}/>
    </div>)})}
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}}>print</button>
    </div>
    <Button variant='contained'  onClick={graph} >Graph</Button>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </Stack><br/>
    <div style={{fontSize:'20px'}}>Maximum bulking of sand is observed at:  {res}% of water.</div>

    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <BulkingPrint arr1={arr1} arr2={arr2} arr3={arr3} initialVolume={initialVolume} Ref="SM/W 183/2021-22"  res={res}   company="My Nest Developers," village="Narasimhapuram," city="Bhimavaram," dist="W.G.District."
         purpose='M30 grade RMC Concrete Cubes for "Construction of G+4 Costal Paradise apartment (B-Block) 1st slab, Narasimhapuram, Bhimavaram, W.G.District" -Reg.' dated='15-03-2023.' title='BULKING OF SAND' lab='CT'/>

      </div>

    </div>
    </div>
  )
}
export default Bulking