import React from 'react'
import '../Print.css';


const NotchPrint = ({arr1,arr2,arr3,arr4,arr5,arr6,sill,res,head}) => {

  return (
    <div>
        <div className='div6'>
            <h2 style={{textAlign:'center'}}>{head}</h2>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
      <tr>
        <th>S.NO</th>
        <th>Sill level<br/>h1(cm)</th>
        <th>Final level<br/>h2(cm)</th>
        <th>Time taken<br/>(sec)</th>
        <th>h1-h2<br/>h2(cm)</th>
        <th>Theoretical discharge<br/>(cm<sub>3</sub>/sec)</th>
        <th>Actual discharge<br/>(cm<sub>3</sub>/sec)</th>
        <th>coefficient of discharge<br/></th>

      </tr>
      </thead>
        <tbody>
        { arr1?.map((val,i)=>{return(
          <tr key={i}> 
          <td>{i+1}</td>
          <td>{sill}</td>
          <td>{val }</td>
          <td>{arr2[i]}</td>
          <td>{arr3[i]}</td>
          <td>{arr4[i]}</td>
          <td>{arr5[i]}</td>
          <td>{arr6[i]}</td>
          </tr>
          )})} 
        
        </tbody> 
    </table>
    <h3 style={{textAlign:'center'}}>Average coefficient of discharge is {res}</h3>
    </div>
    </div>
  )
}

export default NotchPrint