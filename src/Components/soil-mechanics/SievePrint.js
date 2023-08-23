import React from 'react'
import '../Print.css';


const SievePrint = ({select,arr1,percentageFiner,arr3,percentageRetained,cumulativePercentageRetained}) => {
  return (
    <div>
        <div className='div6'>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
      <tr>
        <th>IS Sieve No<br/>(mm)</th>
        <th>Weight retained<br/>(gm)</th>
        <th>% retained</th>
        <th>Cumulative % retained<br/>(ml)</th>
        <th>% Finer</th>

      </tr>
      </thead>
        <tbody>
        { arr1?.map((val,i)=>{return(
          <tr > 
          <td>{val}</td>
          <td>{arr3[i]}</td>
          <td>{percentageRetained[i]}</td>
          <td>{cumulativePercentageRetained[i]}</td>
          <td>{percentageFiner[i]}</td>
          </tr>
          )})} 
        
        </tbody> 
    </table>
    </div>
    </div>
  )
}

export default SievePrint