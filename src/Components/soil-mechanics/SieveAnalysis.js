import { Button,FormControl,InputLabel,MenuItem,Select,Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useRef, useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {useForm} from 'react-hook-form'
import Textfield from '../Textfield';
import { useReactToPrint } from 'react-to-print';
import   SievePrint from './SievePrint';
// import Graph from './Graph.js';
const SieveAnalysis = () => {
   var [select,setselect]=useState();
   var [arr1,setarr1]=useState([])
   var [arr2,setarr2]=useState([])
   var [arr3,setarr3]=useState([])
   var [percentageRetained,setpercentageRetained]=useState([])
   var [cumulativePercentageRetained,setcumulativePercentageRetained]=useState([])
   var [percentageFiner,setpercentageFiner]=useState([])
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
    function submit(data){
      var weightRetained=[data.w2,data.w3,data.w4,data.w5,data.w6,data.w7,data.w8,data.w9,data.w10,];
      setarr3(weightRetained);
      for(let i=0;i<9;i++){
        percentageRetained[i]=(weightRetained[i]*100)/data.w1
        percentageRetained[i]=percentageRetained[i]
      }
      for(let j=0;j<9;j++){
        if(j==0){
          cumulativePercentageRetained[j]=percentageRetained[j];}
        else{
        cumulativePercentageRetained[j]=cumulativePercentageRetained[j-1]+percentageRetained[j];}
      }
      for(let k=0;k<9;k++){
        percentageFiner[k]=(100-cumulativePercentageRetained[k]).toFixed(1);
      }
      arr2=JSON.parse(JSON.stringify(percentageFiner));
      let popped=arr2.pop()
      setarr2(arr2)
      console.log(arr2)
      arr1=[4.75,2.36,1.18,0.6,0.425,0.3,0.15,0.075]
      setarr1(arr1)
    } 
      function graph(){
        
        Navigate('/sm/sieve_analysis/graph1',{state:{arr1:arr1.reverse(),arr2:arr2.reverse(),select:select}})
      }
      const soilOptions = ['Sand','Gravel'];
    var data=[
      {
        trail:'In 4.75mm sieve',
        name:'w2',
        er:errors?.w2,
        her:errors.w2?.message
      },
      {
        trail:'In 2.36mm sieve',
        name:'w3',
        er:errors?.w3,
        her:errors.w3?.message

      },
      {
        trail:'In 1.18mm sieve',
        name:'w4',
        er:errors?.w4,
        her:errors.w4?.message

      },
      {
        trail:'In 600-microns sieve',
        name:'w5',
        er:errors?.w5,
        her:errors.w5?.message

      },
      {
        trail:'In 425-microns sieve',
        name:'w6',
        er:errors?.w6,
        her:errors.w6?.message

      },
      {
        trail:'In 300-microns sieve',
        name:'w7',
        er:errors?.w7,
        her:errors.w7?.message
      },
      {
        trail:'In 150-microns sieve',
        name:'w8',
        er:errors?.w8,
        her:errors.w8?.message

      },
      {
        trail:'In 75-microns sieve',
        name:'w9',
        er:errors?.w9,
        her:errors.w9?.message

      },
      {
        trail:'In PAN',
        name:'w10',
        er:errors?.w10,
        her:errors.w10?.message

      },
      
    ]
return (
    <div>
    <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
    <Typography variant='h3' color='darkgrey' textAlign='center'>SIEVE ANALYSIS - IS CLASSIFICATION</Typography>
    <div style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(submit)}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
    <FormControl variant="outlined" fullWidth>
        <InputLabel>Select type of soil</InputLabel>  
        <Select
          {...register('selected',{required:{value:true,message:'This field is required'}})}
          label="Select type of soil"
          onChange={(e) => setselect('selected', e.target.value)}
          helperText={errors.selected?.message} error={errors?.selected}
        >
          {soilOptions.map((soil, index) => (
            <MenuItem key={index} value={soil}>
              {soil}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    <Textfield label="Weight of soil taken for sieving" variant="outlined" name="w1" register={register} valueAsNumber={true} required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={errors.w1?.message} error={errors?.w1}/>
    <div>
      {data.map((val)=>{return(<div>
    <Typography variant='h6'><u>{val.trail}</u></Typography>
    <Textfield label="Weight of soil retained in the sieve" variant="outlined" name={val.name} register={register} valueAsNumber={true}  required={{value:true,message:"this field is required"}}   pattern={{value:/^(0|[1-9]\d*)(\.\d+)?$/,message:'enter the numbers only'}} helperText={val.her} error={val.er}/><br/><br/>
    </div>)})}
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Button variant='contained' type='submit' style={{width:'80%'}}>submit</Button>
    <button onClick={handleprint} style={{width:'20%'}}>print</button>
    </div>
    <Button variant='contained'  onClick={graph} >Graph</Button>
    {Object.keys(errors).length!=0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    </Stack><br/>
    {/* <div style={{fontSize:'20px'}}>  {res}</div> */}

    </form>
    </div>
    <div style={{display:'none'}}>
      <div ref={ComponentRef}>
        <SievePrint arr1={[...arr1,"pan"]} percentageFiner={percentageFiner.reverse()} arr3={arr3} percentageRetained={percentageRetained} cumulativePercentageRetained={cumulativePercentageRetained}/>

      </div>

    </div>
    </div>
  )
}
export default SieveAnalysis