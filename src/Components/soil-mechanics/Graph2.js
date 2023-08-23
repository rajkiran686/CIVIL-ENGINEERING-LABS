
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

  return (
    <div>
      <Button
        variant='outlined'
        startIcon={<ArrowBackIosIcon />}
        onClick={back}
        style={{ marginLeft: '50px' }}
      >
        BACK
      </Button>
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




