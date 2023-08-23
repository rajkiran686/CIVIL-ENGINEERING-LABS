import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';

const ExampleGraph = () => {
  const location = useLocation();
  const [x, setx] = useState('');
  const [y, sety] = useState('');

  const handleChange = (event) => {
    const xCoordinate = parseFloat(event.target.value);
    console.log("parse float value is",xCoordinate)
    const xAxis = location.state.arr1;
    const yAxis = location.state.arr2;

    const index = getInterpolatedIndex(xAxis, xCoordinate);
    console.log("return index is",index)

    if (index !== null) {
      const yCoordinate = interpolateYValue(xAxis, yAxis, xCoordinate, index);
      setx(xCoordinate.toString());
      sety(yCoordinate !== null ? yCoordinate.toFixed(2) : '');
    } else {
      setx(xCoordinate.toString());
      sety('');
    }
  };

  const getInterpolatedIndex = (xData, x) => {
    const index = xData.findIndex((value, i, arr) => {    // if true returns the index and false returns the - 
      if (i === 0 && value >= x) return true;
      if (i === arr.length - 1 && value <= x) return true;
      return value <= x && arr[i + 1] >= x;
    });
    console.log('interpolated index',index)

    return index !== -1 ? index : null;
  };

  const interpolateYValue = (xData, yData, x, index) => {
    if (index === null) return null;

    const x0 = xData[index];
    const x1 = xData[index + 1];
    const y0 = yData[index];
    const y1 = yData[index + 1];

    return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
  };

  const initialData = {
    labels: location.state.arr1,
    datasets: [
      {
        label: 'My Dataset',
        data: location.state.arr2,
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div>
        <label htmlFor="x-coordinate">Enter X-coordinate:</label>
        <input
          type="number"
          id="x-coordinate"
          value={x}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="y-coordinate">Y-coordinate:</label>
        <span id="y-coordinate">{y}</span>
      </div>
      <Line data={initialData} />
    </div>
  );
};

export default ExampleGraph;