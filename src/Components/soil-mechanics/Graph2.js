
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Graph2 = ({select}) => {
  const location = useLocation();
  const Navigate = useNavigate();

  const [arr, setArr] = useState([]);
  const [res, setRes] = useState('');

  const initialData = {
    labels: location.state.arr4,
    datasets: [
      {
        label: 'My Dataset',
        data: location.state.waterContent,
        borderWidth: 1,
        tension: 0.4,
        borderColor: 'black',
        backgroundColor: 'yellow',
        pointBorderColor: 'blue',
        pointBackgroundColor: 'black',
        borderWidth: 4,
        hoverBackgroundColor: 'black',
        hoverBorderColor: 'green',
        pointStyle: 'rect',
      },
    ],
  };

  const handleValueChange = (index, yValue) => {
    const newYCoordinate = parseFloat(yValue);
    if (!isNaN(newYCoordinate)) {
      const xCoordinate = interpolateXValue(location.state.arr4, location.state.waterContent, newYCoordinate);
      if (xCoordinate !== null) {
        setArr([...arr.slice(0, index), xCoordinate, ...arr.slice(index + 1)]);
      }
    }
  };
  const interpolateXValue = (xData, yData, y) => {
    const interpolatedIndex = getInterpolatedIndex(yData, y);
    if (interpolatedIndex !== null) {
      return interpolateYValue(xData, yData, y, interpolatedIndex);
    }
    return null;
  };

  const getInterpolatedIndex = (yData, y) => {
    const index = yData.findIndex((value, i, arr) => {
      if (i === arr.length - 1 && value <= y) return true;
      return value <= y && arr[i + 1] > y;
    });

    return index !== -1 ? index : null;
  };

  const interpolateYValue = (xData, yData, y, index) => {
    if (index === null) return null;

    const x0 = xData[index];
    const x1 = xData[index + 1];
    const y0 = yData[index];
    const y1 = yData[index + 1];

    const xCoordinate = x0 + ((y - y0) * (x1 - x0)) / (y1 - y0);
    return xCoordinate;
  };

  useEffect(() => {
    // Automatically calculate x-coordinates for y-values of 10, 20, and 30
    const newYValues = [25];
    const newXCoordinates = newYValues.map((yValue) =>
      interpolateXValue(location.state.arr4, location.state.waterContent, yValue)
    );

    setArr(newXCoordinates.map((value) => value));
  }, [location.state.arr4, location.state.waterContent]);

  const back = () => {
    Navigate(-1);
  };
  const home=()=>{
    Navigate('/')
  }

  return (
    <div>
     <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5 mt-5 ml-2" onClick={back}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
</svg>
  BACK
</button>
     <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5" onClick={home}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
  HOME
</button>
      <div style={{ width: '800px', height: '650px', display: 'flex', marginLeft: '350px' }}>
        <Line data={initialData} />
      </div>
      <div style={{ marginTop: '-200px' }}>
        {[
          { title: 'Water content corresponding to 25 blows', index: 0 }
        ].map((item) => (
          <div key={item.index}>
            <div style={{ fontSize: '50px', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <label htmlFor={`y-coordinate-${item.index}`}>{item.title}</label>
              <input
                type='number'
                id={`y-coordinate-${item.index}`}
                value={arr[item.index] || ''}
                style={{ height: '50px', width: '300px', fontSize: '50px' }}
                onChange={(event) => handleValueChange(item.index, event.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>
          The liquid limit of the given soil [wL]<p style={{ backgroundColor: 'red' }}>{res}</p>
        </h1>
      </div>
    </div>
  );
};

export default Graph2;




