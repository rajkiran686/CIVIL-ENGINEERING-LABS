import React from 'react'
import '../Print.css';


const Print7 = ({first,res,second,third,fourth,five,six,seven}) => {
  return (
    <div>
        <h1 className='sample'>Sample Output</h1>
        <h2 className='sample'>FIELD DENSITY - CORE CUTTER METHOD</h2>
        <table className='center'>
            <tr>
                <th>Description</th>
                <th>Value</th>
                <th>Units</th>
            </tr>
            <tr>
                <td>Weight of core cutter</td>
                <td>{first}</td>
                <td>gm</td>
            </tr>
            <tr>
                <td>Weight of core cutter + soil</td>
                <td>{second}</td>
                <td>gm</td>
            </tr>
            <tr>
                <td>Internal diameter of core cutter</td>
                <td>{third}</td>
                <td>cm</td>
            </tr>
            <tr>
                <td>Height of core cutter</td>
                <td>{fourth}</td>
                <td>cm</td>
            </tr>
            <tr>
               <td>Weight of cup + wet soil</td>
               <td>{five}</td>
               <td>gm</td>
            </tr>
            <tr>
               <td>Weight of cup + oven dried soil</td>
               <td>{six}</td>
               <td>gm</td>
            </tr>
            <tr>
               <td>Weight of cup </td>
               <td>{seven}</td>
               <td>gm</td>
            </tr>
            <tr>
               <td>dry density of soil:</td>
               <td>{res}</td>
               <td>g/cc</td>
            </tr>

        </table>
    </div>
  )
}

export default Print7