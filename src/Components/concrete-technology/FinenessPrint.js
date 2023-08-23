import React from 'react'
import '../Print.css';
import { Typography } from '@mui/material'

const FinenessPrint = ({res,first,second,head1,head2,head3,title,lab}) => {

  return (
     <div className='maindivT'> 
      <div><u className='size'><b>{title}</b></u></div>  <br/>
     <div className='div6'>
    <table style={{width:'100%',textAlign:'center'}}>
      <tr>
        <th>S.No.</th>
        <th>Description</th>
        <th>Value</th>
        <th>Units</th>

      </tr>
      <tr>
        <td>1</td>
        <td>{head2}</td>
        <td>{second}</td>
        <td>N</td>
      </tr>
      <tr>
        <td>2</td>
        <td>{head1}</td>
        <td>{first}</td>
        <td>mm</td>
      </tr>
      <tr>
        <td></td>
        <td>{head3}</td>
        <td>{res}</td>
        <td>N/mm<sup>2</sup></td>
      </tr>
    </table>
    </div>
    

    </div>

    
  )
}

export default FinenessPrint