import React from 'react'
import '../Print.css';
const PlasticPrint = ({emptyWeight,cupAndWetSoil,cupAndDrySoil,waterContent,weightOfWater,ovenDriedSoil }) => {
  return (
    <div>
        <div className='div6'>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
      <tr>
        <th>Test No</th>
        <th>Weight of cup<br/>(gm)</th>
        <th>Weight of cup + wet soil<br/>(gm)</th>
        <th>Weight of cup + ovenDriedSoil<br/>(gm)</th>
        <th>Weight of water<br/>(gm)</th>
        <th>Weight of ovenDriedSoil<br/>(gm)</th> 
        <th>Water content<br/>(%)</th> 
      </tr>
      </thead>
        <tbody>
       <tr>
        <td>1</td>
        <td>{emptyWeight}</td>
        <td>{cupAndWetSoil}</td>
        <td>{cupAndDrySoil}</td>
        <td>{weightOfWater}</td>
        <td>{ovenDriedSoil}</td>
        <td>{waterContent}</td>
       </tr>
       <tr>
       <td></td><td></td><td></td><td></td><td></td>
       <td>The Plastic Limit of the given soil [wp] :</td>
       <td>{waterContent} %</td></tr>
        </tbody> 
        
    </table>
    </div>
    </div>
  )
}

export default PlasticPrint