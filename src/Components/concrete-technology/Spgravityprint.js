import React from 'react'

const Spgravityprint = ({first,second,third,fourth,res}) => {
  return (
    <div>
          <div > <h1 className='sample'>SAMPLE OUTPUT</h1>
    <table className='center'>
      <tr>
        <th>input</th>
        <th>value</th>
      </tr>
      <tr>
        <td>weight of the empty pycnometer[w1]</td>
        <td>{first}</td>
      </tr>
      <tr>
        <td>weight of the  pycnometer with (2/3) aggregate[w2]</td>
        <td>{second}</td>
      </tr>
      <tr>
        <td>weight of the  pycnometer with (2/3) aggregate and water[w3]</td>
        <td>{third}</td>
      </tr>
      <tr>
        <td>weight of the  pycnometer with water[w4]</td>
        <td>{fourth}</td>
      </tr>
      <tr>
        <td>specific gravity of given aggregate is</td>
        <td>{res}</td>
      </tr>
    </table></div>
    </div>
  )
}

export default Spgravityprint