import React from 'react'

const Print5 = ({first,second,third,fourth,five,res}) => {
  return (
    <div>
          <div > <h1 className='sample'>SAMPLE OUTPUT</h1>
    <table className='center'>
      <tr>
        <th>input</th>
        <th>value</th>
      </tr>
      <tr>
        <td>Enter the Mass of empty bottle[w1]</td>
        <td>{first}</td>
      </tr>
      <tr>
        <td>Enter the Mass of empty bottle+ water[w2]</td>
        <td>{second}</td>
      </tr>
      <tr>
        <td>Enter the Mass of empty bottle + kerosene[w3]</td>
        <td>{third}</td>
      </tr>
      <tr>
        <td>Enter the Mass of bottle + cement + kerosene[w4]</td>
        <td>{fourth}</td>
      </tr>
      <tr>
        <td>Enter the Mass of cement[w5]</td>
        <td>{five}</td>
      </tr>
      <tr>
        <td>specific gravity of given cement is</td>
        <td>{res}</td>
      </tr>
    </table></div>
    </div>
  )
}

export default Print5