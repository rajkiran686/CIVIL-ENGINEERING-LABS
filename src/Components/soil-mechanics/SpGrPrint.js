import React from 'react'

const SpGrPrint = ({first,second,third,fourth,res,wtOfWater,wtOfSoil}) => {
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
        <td>weight of the  pycnometer + Oven dried soil[w2]</td>
        <td>{second}</td>
      </tr>
      <tr>
        <td>weight of the  pycnometer + soil + water[w3]</td>
        <td>{third}</td>
      </tr>
      <tr>
        <td>weight of the  pycnometer + full of water[w4]</td>
        <td>{fourth}</td>
      </tr>
      <tr>
        <td>weight of Soil</td>
        <td>{wtOfSoil}</td>
      </tr>
      <tr>
        <td>weight of water</td>
        <td>{wtOfWater}</td>
      </tr>
      <tr>
        <td>specific gravity of given soil is</td>
        <td>{res}</td>
      </tr>
    </table></div>
    </div>
  )
}

export default SpGrPrint