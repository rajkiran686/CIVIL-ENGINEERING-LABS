import React from 'react'
import '../Print.css';
const LiquidPrint = ({emptyWeight,cupAndWetSoil,cupAndDrySoil,blows,waterContent,weightOfWater,ovenDriedSoil }) => {
  console.log("empty weight",emptyWeight)
  console.log("water content",waterContent)
  return (
    <div>
        <div className='div6'>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
      <tr>
        <th>Test No</th>
        <th>No. of blows</th>
        <th>Weight of cup<br/>(gm)</th>
        <th>Weight of cup + wet soil<br/>(gm)</th>
        <th>Weight of cup + ovenDriedSoil<br/>(gm)</th>
        <th>Weight of water<br/>(gm)</th>
        <th>Weight of ovenDriedSoil<br/>(gm)</th> 
        <th>Water content<br/>(%)</th> 
      </tr>
      </thead>
        <tbody>
        { emptyWeight?.map((val,i)=>{return(
          <tr > 
          <td>{i+1}</td>
          <td>{blows[i]}</td>
          <td>{emptyWeight[i]}</td>
          <td>{cupAndWetSoil[i]}</td>
          <td>{cupAndDrySoil[i]}</td>
          <td>{weightOfWater[i]}</td>
          <td>{ovenDriedSoil[i]}</td>
          <td>{waterContent[i]}</td>
          </tr>
          )})} 
        </tbody> 
        
    </table>
    </div>
    </div>
  )
}

export default LiquidPrint