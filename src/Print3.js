import React from 'react'
import './Components/Print.css'


const Print3 = ({first,second,third,res}) => {
  return (
    <div>
        <h1 className='sample'>Sample Output</h1>
        <table className='center'>
            <tr>
                <th>Input</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Weight of empty cylinder</td>
                <td>{first}</td>
            </tr>
            <tr>
                <td>Weight of cylinder with water</td>
                <td>{second}</td>
            </tr>
            <tr>
                <td>Weight of cylinder with compacted aggregate</td>
                <td>{third}</td>
            </tr>
            <tr>
                <td>Unit Weight Of Aggregate:</td>
                <td>{res} </td>
            </tr>

        </table>
    </div>
  )
}

export default Print3