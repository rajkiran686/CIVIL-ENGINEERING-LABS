import React from 'react'
import '../Print.css';


const OrificePrint = ({arr1,arr2,arr3,arr4,res,head}) => {

  return (
    <div>
        <div className='div6'>
            <h2 style={{textAlign:'center'}}>{head}</h2>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
      <tr>
        <th>S.NO</th>
        <th>Initial head<br/>(cm)</th>
        <th>Final head<br/>(cm)</th>
        <th>Time taken<br/>(sec)</th>
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

export default OrificePrint