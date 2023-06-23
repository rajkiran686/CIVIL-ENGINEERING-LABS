import React from 'react'
import './Print.css';
const Print1 = ({head,head1,first,res}) => {
  return (
    <div className='sample'>
        <h3>Sample output</h3>
        <table className='center'>
            <tr>
                <th>Input</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>{head}</td>
                <td>{first}</td>
            </tr>
            <tr>
                <td>{head1}</td>
                <td>{res}</td>
            </tr>

        </table>
    </div>
  )
}

export default Print1