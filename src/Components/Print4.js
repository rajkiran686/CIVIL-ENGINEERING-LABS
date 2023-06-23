import React from 'react'
import './Print.css';


const Print4 = ({title,head1,head2,head3,head4,head5,one,two,three,four,res}) => {
  return (
    <div>
        <h1 className='sample'>Sample Output</h1>
        <h2 className='sample'>{title}</h2>
        <table className='center'>
            <tr>
                <th>Input</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>{head1}</td>
                <td>{one}</td>
            </tr>
            <tr>
                <td>{head2}</td>
                <td>{two}</td>
            </tr>
            <tr>
                <td>{head3}</td>
                <td>{three}</td>
            </tr>
            <tr>
                <td>{head4}</td>
                <td>{four}</td>
            </tr>
            <tr>
               <td>{head5}</td>
               <td>{res}</td>
            </tr>

        </table>
    </div>
  )
}

export default Print4