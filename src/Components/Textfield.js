import { TextField } from '@mui/material'
import React, { useState } from 'react'


const Textfield= ({label,variant,helperText,error,register,pattern,name,...props}) => {
  console.log("pattern is ",pattern )


  return (
    
     <TextField label={label} fullWidth={true} variant={variant} {...register(name,{required:{value:true,message:'this field is required'},pattern:pattern})} name={name} helperText={helperText} error={error} {...props} 

     
     />
    

  )
}

export default Textfield