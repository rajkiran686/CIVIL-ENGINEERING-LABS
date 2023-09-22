import React from 'react'
import '../Print.css';


const PipePrint = ({arr1,arr2,arr3,arr4,res,head}) => {

  return (
    <div>
        <div className='div6'>
            <h2 style={{textAlign:'center'}}>{head}</h2>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
      <tr>
        <th>S.NO</th>
        <th>Head loss in terms of water<br/>H<sub>f</sub>(cm)</th>
        <th>Discharge<br/>(cm<sub>3</sub>/sec)</th>
        <th>Velocity<br/>(cm/sec)</th>
        <th>Darley's friction factor</th>
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
    <h3 style={{textAlign:'center'}}>Average Darley's friction factor for given pipe: {res}</h3>
    </div>
    </div>
  )
}

export default PipePrint