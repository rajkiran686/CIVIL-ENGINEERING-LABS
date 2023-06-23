import React from 'react'
import './Print.css';


const Print11 = ({ one, two, three, four ,five, six, seven ,eight, nine ,ten ,eleven,res}) => {
  return (
    <div >
      <h1 className='sample'>Sample output</h1>
      <table className='center'>
        <tr>
          <th>input</th>
          <th>value</th>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 80mm (W1)</td>
          <td>{one}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 40mm (W2)</td>
          <td>{two}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 20mm (W3)</td>
          <td>{three}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 10mm (W4)</td>
          <td>{four}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 4.75mm (W5)</td>
          <td>{five}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 2.36mm (W6)</td>
          <td>{six}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 1.18mm (W7)</td>
          <td>{seven}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 600µ (W8)</td>
          <td>{eight}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 300µ (W9)</td>
          <td>{nine}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on 150µ (W10)</td>
          <td>{ten}</td>
        </tr>
        <tr>
          <td>Enter the weight of aggregate retained on pan (W11)</td>
          <td>{eleven}</td>
        </tr>
        <tr>
          <td>Fineness Modulus of the aggregate:</td>
          <td>{res}</td>
          </tr>
        

      </table>

    </div>
  )
}

export default Print11