import React from 'react'
import '../Print.css';
const ImpactPrint = ({arr1,arr2,arr4,arr5,res,head}) => {
  return (
    <div>
        <div className='div6'>
        <h2 style={{textAlign:'center'}}>{head}</h2>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
      <tr>
        <th>S.NO</th>
        <th>Pressure head<br/>(m)</th>
        <th>velocity in pipe<br/>(m/sec)</th>
        <th>Liftingforce</th>
        <th>Efficiency of jet</th>
      </tr>
      </thead>
        <tbody>
        { arr1?.map((val,i)=>{return(
          <tr key={i}> 
          <td>{i+1}</td>
          <td>{val }</td>
          <td>{arr2[i]}</td>
          <td>{arr4[i]}</td>
          <td>{arr5[i]}</td>
          </tr>
          )})} 
        </tbody> 
    </table>
    <h3 style={{textAlign:'center'}}>Average Darley's friction factor for given pipe: {res}</h3>
    </div>
    </div>
  )
}
export default ImpactPrint