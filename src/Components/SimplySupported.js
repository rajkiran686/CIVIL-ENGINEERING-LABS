import { Button,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useRef, useState } from 'react'
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from './Textfield';
import { useReactToPrint } from 'react-to-print';
import Print10 from './Print10';
const SimplySupported = () => {
   var [res,setres]=useState(0);
   var [first,setfirst]=useState();
   var [second,setsecond]=useState();
   var ComponentRef=useRef();
   var handleprint=useReactToPrint({
    content:()=>ComponentRef.current
   })
   const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
   const Navigate=useNavigate();
   const back=()=>{
    Navigate(-1);
    }
    function submit(data){
      var I=(data.w1*data.w2*data.w2*data.w2)/12;
      const load=[data.w4,data.w6,data.w8,data.w10,data.w12,data.w14,data.w16,data.w18]
      const fdef=[data.w5,data.w7,data.w9,data.w11,data.w13,data.w15,data.w17,data.w19]
      var  E=new Array(8)
      for(let i=0;i<8;i++){
        let x=fdef[i]-1.66
        E[i]=(load[i]*data.w3*data.w3*data.w3)/(48*I*x)
      }
      for(let i=0;i<8;i++){
        res+=E[i]
      }
      res=(res/8).toFixed(2)
      setres(res)
      
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
      {
        trail:'Trail-7',
        name1:'w16',
        name2:'w17',
        er1:errors?.w16,
        er2:errors?.w17
      },
      {
        trail:'Trail-8',
        name1:'w18',
        name2:'w19',
        er1:errors?.w18,
        er2:errors?.w19
      }
    ]
return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>TENSION TEST ON STEEL</Typography>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
      <Typography variant='h6'><u>CROSS-SECTIONAL DIMENSIONS OF BEAM</u></Typography>
    <Textfield label="Width of the beam[b]" variant="outlined" name="w1" register={register} valueAsNumber={true} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w1?.message} error={errors?.w1}/>
    <Textfield label="Depth of the beam[d]" variant="outlined" name="w2" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w2?.message} error={errors?.w2}/>
    <Textfield label="Span of the beam[l]" variant="outlined" name="w3" register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w3?.message} error={errors?.w3}/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Enter the load applied in (kgs)" variant="outlined" name={val.name1} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er1}/><br/><br/>
    <Textfield label="Enter the final deflection reading in (mm)" variant="outlined" name={val.name2} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}}  error={val.er2}/>
    </div>)})}
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}}>print</button>
    </div>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </Stack><br/>
    <div style={{fontSize:'20px'}}>Young's Modulus Of The Given Specimen[E]:  {res} N/mm<sup>2</sup></div>

    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <Print10 first={first} Ref="SM/W 183/2021-22" second={second} res={res} head1="the mean diameter of the rod[d1]" head2=" the ultimate load of the rod[p]" head3="Ultimate tensile stress:" company="My Nest Developers," village="Narasimhapuram," city="Bhimavaram," dist="W.G.District."
         purpose='M30 grade RMC Concrete Cubes for "Construction of G+4 Costal Paradise apartment (B-Block) 1st slab, Narasimhapuram, Bhimavaram, W.G.District" -Reg.' dated='15-03-2023.' title='TENSION TEST ON STEEL:' lab='SM'/>

      </div>

    </div>
    </div>
  )
}
export default SimplySupported