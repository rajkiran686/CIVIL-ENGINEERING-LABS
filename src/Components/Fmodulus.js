import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import { Box, Stack } from '@mui/system';



var Fmodulus = () => {
    var Navigate=useNavigate();
    var [error,seterror]=useState(false);
    var [w1,setw1]=useState()
    var [w2,setw2]=useState()
    var [w3,setw3]=useState()
    var [w4,setw4]=useState()
    var [w5,setw5]=useState()
    var [w6,setw6]=useState()
    var [w7,setw7]=useState()
    var [w8,setw8]=useState()
    var [w9,setw9]=useState()
    var [w10,setw10]=useState()
    var [w11,setw11]=useState()


    var w,cw1,cw2,cw3,cw4,cw5,cw6,cw7,cw8,cw9,cw10,pcw1,pcw2,pcw3,pcw4,pcw5,pcw6,pcw7,pcw8,pcw9,pcw10;
    var [FM,setFM]=useState(null);

    const back=()=>{
        Navigate(-1);
    }

    var fun=()=>{
        if((w1&&w2&&w3&&w4&&w5&&w6&&w7&&w8&&w9&&w10&&w11) !=null)
        {
            seterror(false)
        w=(w1+w2+w3+w4+w5+w6+w7+w8+w9+w10+w11);
        cw1=w1
        cw2=(cw1+w2);
        cw3=(cw2+w3);
        cw4=(cw3+w4);
        cw5=(cw4+w5);
        cw6=(cw5+w6);
        cw7=(cw6+w7);
        cw8=(cw7+w8);
        cw9=(cw8+w9);
        cw10=(cw9+w10);
        pcw1=((w1/w)*100);
        pcw2=(((cw1+w2)/w)*100)
        pcw3=(((cw2+w3)/w)*100)
        pcw4=(((cw3+w4)/w)*100)
        pcw5=(((cw4+w5)/w)*100)
        pcw6=(((cw5+w6)/w)*100)
        pcw7=(((cw6+w7)/w)*100)
        pcw8=(((cw7+w8)/w)*100)
        pcw9=(((cw8+w9)/w)*100)
        pcw10=(((cw9+w10)/w)*100)
        FM=((pcw1+pcw2+pcw3+pcw4+pcw5+pcw6+pcw7+pcw8+pcw9+pcw10)/100)
        FM=FM.toFixed(2)
        setFM(FM)

      
        
    
    }
        else{
            seterror(true);
        }



    }
    
    const fun1=(e)=>{
        seterror(false)
        setw1(parseInt(e.target.value));
        
    }
    const fun2=(e1)=>{seterror(false)
        setw2(parseInt(e1.target.value));
        
    }
    const fun3=(e2)=>{seterror(false)
        setw3(parseInt(e2.target.value));
    
    }
    const fun4=(e3)=>{seterror(false)
        setw4(parseInt(e3.target.value));
        
    }
    const fun5=(e4)=>{seterror(false)
        
        setw5(parseInt(e4.target.value));
    }
    const fun6=(e5)=>{seterror(false)
        setw6(parseInt(e5.target.value));
        
    }
    const fun7=(e6)=>{seterror(false)
        setw7(parseInt(e6.target.value));
        
    }
    const fun8=(e7)=>{seterror(false)
        setw8(parseInt(e7.target.value));
        
    }
    const fun9=(e8)=>{seterror(false)
        
        setw9(parseInt(e8.target.value));
    }
    const fun10=(e9)=>{seterror(false)
        setw10(parseInt(e9.target.value));
        
    }
    const fun11=(e10)=>{seterror(false)
        setw11(parseInt(e10.target.value));
        
    }

  return (
    <div>
        <Button variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
        <Typography variant='h3' color='darkgrey' textAlign='center'>FINENESS MODULUS OF AGGREGATE</Typography>
        <div style={{textAlign:'center'}}>
    <Stack spacing={2} direction='column' width='500px' style={{marginLeft:'500px',marginTop:'100px'}}>
        
    <form onSubmit={e=>e.preventDefault()}>
    <Stack spacing={2} direction='column'>
        
    <TextField label="Enter the weight of aggregate retained on 80mm (W1)" variant='outlined' onChange={fun1} required/>
    <TextField label="Enter the weight of aggregate retained on 40mm (W2)" variant='outlined' onChange={fun2} required/>
    <TextField label="Enter the weight of aggregate retained on 20mm (W3)" variant='outlined' onChange={fun3} required/>
    <TextField label="Enter the weight of aggregate retained on 10mm (W4)" variant='outlined' onChange={fun4} required/>
    <TextField label="Enter the weight of aggregate retained on 4.75mm (W5)" variant='outlined' onChange={fun5} required/>
    <TextField label="Enter the weight of aggregate retained on 2.36mm (W6)" variant='outlined' onChange={fun6} required/>
    <TextField label="Enter the weight of aggregate retained on 1.18mm (W7)" variant='outlined' onChange={fun7} required/>
    <TextField label="Enter the weight of aggregate retained on 600µ (W8)" variant='outlined' onChange={fun8}required/>
    <TextField label="Enter the weight of aggregate retained on 300µ (W9)" variant='outlined' onChange={fun9} required/>
    <TextField label="Enter the weight of aggregate retained on 150µ (W10)" variant='outlined' onChange={fun10} required/>
    <TextField label="Enter the weight of aggregate retained on pan (W11)" variant='outlined' onChange={fun11} required/>


  
    <Button variant='contained' type='submit' onClick={fun} >submit</Button>
    </Stack>
    </form>
   
    {error && <ErrorMessage>please fill all the fields</ErrorMessage>}
    <div style={{fontSize:'20px'}}>percentage weight retained on sieve is:{  FM }</div>
    
    </Stack>
    </div>
    </div>
  )
}

export default Fmodulus