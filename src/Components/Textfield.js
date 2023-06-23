import { TextField } from '@mui/material'
import React, { useState } from 'react'



const Textfield= ({label,valueAsNumber,variant,helperText,error,register,pattern,required,name,...props}) => {
 


  return (
    
     <TextField label={label} fullWidth={true} variant={variant} {...register(name,{required:required,pattern:pattern,valueAsNumber})} name={name} helperText={helperText} error={error} {...props} 

     
     />
    

  )
}

export default Textfield