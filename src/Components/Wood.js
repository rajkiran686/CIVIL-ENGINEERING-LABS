import { Button, TextField, Typography } from '@mui/material'
import { Stack, fontSize } from '@mui/system'
import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';


const Wood = () => {
    const Navigate=useNavigate();
    var [l,setl]=useState();
    var [b,setb]=useState();
    var [d,setd]=useState();
    var [p,setp]=useState();
    var [res1,setres1]=useState();
    var [res2,setres2]=useState();

    var [error1,seterror1]=useState(false);
    var [error2,seterror2]=useState(false);


    var area;

    const back=()=>{
      Navigate(-1);
  }
  const fun=()=>{
    if((l&&b&&d&&p) != null){
    area=b*d;
    res1=p/area;
    res1=res1.toFixed(2)
    setres1(res1);}
    else{
        seterror1(true)
    }
  }
  const func=()=>{
    if((l&&b&&d&&p) != null){
        area=l*b;
        res2=p/area;
        res2=res2.toFixed(2)
        setres2(res2);}
        else{
            seterror2(true)
        }
  }
  const fun1=(e)=>
  {seterror1(false)
  seterror2(false)

       setl(e.target.value)

  }
  const fun2=(e)=>
  {seterror1(false)
    seterror2(false)

    
       setb(e.target.value)

  }
  const fun3=(e)=>
  {seterror1(false)
    seterror2(false)
       setd(e.target.value)

  }
  const fun4=(e)=>
  {seterror1(false)
    seterror2(false)
       setp(e.target.value)

  }
  return (
    
  
    <div>
        <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
        <Typography variant='h3' color='darkgrey' textAlign='center'>COMPRESSION TEST ON WOOD</Typography>
        <div style={{textAlign:'center'}}>
            <Typography style={{textAlign:'center' ,marginTop:'50px' }} variant='h4'>FOR PARALLEL TO GRAINS</Typography>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>

    <TextField label="Enter the Length of specimen[L]" variant='outlined'color='' onChange={fun1} required/>
    <TextField label="Enter the width of specimen[B]" variant='outlined' onChange={fun2}  required/>
    <TextField label="Enter the Depth of specimen[D]" variant='outlined' onChange={fun3}  required/>
    <TextField label="Enter the Load at specimen fain[p]" variant='outlined' onChange={fun4}  required/>
    
    <Button variant='contained' onClick={fun}>submit</Button>
    {error1 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>Crushing strenght,when the loading is parallel to grains:{res1} N/mm2</div>
    
    </Stack>
    <Typography style={{textAlign:'center' ,marginTop:'50px' }} variant='h4'>FOR PERPENDICULAR TO GRAINS</Typography>

    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
    <TextField label="Enter the Length of specimen[L]" variant='outlined'color='' onChange={fun1} required/>
    <TextField label="Enter the width of specimen[B]" variant='outlined' onChange={fun2}  required/>
    <TextField label="Enter the Depth of specimen[D]" variant='outlined' onChange={fun3}  required/>
    <TextField label="Enter the Load at specimen fain[p]" variant='outlined' onChange={fun4}  required/>

    
    
    <Button variant='contained' onClick={func}>submit</Button>
    {error2 && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>Crushing strenght,when the loading is perpendicular to grains: {res2} N/mm2</div>
    
    </Stack>
    </div>
    </div>
  )
}

export default Wood