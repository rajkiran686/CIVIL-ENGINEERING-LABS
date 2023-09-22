import React from 'react'
import '../Print.css';


const Print1 = ({arr1,arr2,arr3,arr4,res,head,head1}) => {

  return (
    <div>
        <div className='div6'>
            <h2 style={{textAlign:'center'}}>{head}</h2>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
      <tr>
        <th>S.NO</th>
        <th>{head1}<br/>(cm)</th>
        <th>Theoretical discharge<br/>(cm<sup>3</sup>/sec)</th>
        <th>Actual discharge<br/>(cm<sup>3</sup>/sec)</th>
        <th>coefficient of discharge<br/></th>

      </tr>
      </thead>
        <tbody>
        { arr1?.map((val,i)=>{return(
          <tr key={i}> 
          <td>{i+1}</td>
          <td>{val }</td>
          <td>{arr2[i]}</td>
          <td>{arr3[i]}</td>
          <td>{arr4[i]}</td>
          </tr>
          )})} 
        
        </tbody> 
    </table>
    <h3 style={{textAlign:'center'}}>Average coefficient of discharge is {res}</h3>
    </div>
    </div>
  )
}

export default Print1