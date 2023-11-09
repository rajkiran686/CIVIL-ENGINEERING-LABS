// import { Button } from '@mui/material';
// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { useLocation, useNavigate } from 'react-router-dom';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// const Graph1 = () => {
//   const location = useLocation();
//   var Navigate=useNavigate()

//   const [arr, setArr] = useState([]);
//   const [res, setRes] = useState('');

//   const initialData = {
//     labels: location.state.arr1,
//     datasets: [
//       {
//         label: 'My Dataset',
//         data: location.state.arr2,
//         borderWidth: 1,
//         tension:0.4,
//       borderColor:'black',
//       backgroundColor:'yellow',
//       pointBorderColor:'blue',
//       pointbackgroundColor:'black',
//       borderWidth:4,
//       hoverBackgroundColor:'black',
//       hoverBorderColor:'green',
//       // fill: {
//       //   target: 'origin',
//       //   above: 'yellow',   // Area will be red above the origin   
//       // },
//       pointStyle:'rect',
//       // showLine:false
//       },
//     ],
//   };

//   const handleButtonClick = (index, yCoordinate) => {
//     const yAxis = location.state.arr2;

//     const minValue = Math.min(...yAxis);
//     const maxValue = Math.max(...yAxis);

//     if (yCoordinate < minValue || yCoordinate > maxValue) {
//       setArr([]);
//     } else {
//       const interpolatedIndex = getInterpolatedIndex(yAxis, yCoordinate);

//       if (interpolatedIndex !== null) {
//         const xCoordinate = interpolateYValue(location.state.arr1, yAxis, yCoordinate, interpolatedIndex);
//         setArr([...arr.slice(0, index), parseFloat(xCoordinate).toFixed(2), ...arr.slice(index + 1)]);
//       } else {
//         setArr([...arr.slice(0, index), '', ...arr.slice(index + 1)]);
//       }
//     }
//   };

//   const getInterpolatedIndex = (yData, y) => {
//     const index = yData.findIndex((value, i, arr) => {
//       if (i === arr.length - 1 && value <= y) return true;
//       return value <= y && arr[i + 1] > y;
//     });

//     return index !== -1 ? index : null;
//   };

//   const interpolateYValue = (xData, yData, y, index) => {
//     if (index === null) return null;

//     const x0 = xData[index];
//     const x1 = xData[index + 1];
//     const y0 = yData[index];
//     const y1 = yData[index + 1];

//     const xCoordinate = x0 + ((y - y0) * (x1 - x0)) / (y1 - y0);
//     return xCoordinate;
//   };

//   const data = [
//     {
//       title: "Enter the size of particle[D10]",
//       value: arr[0],
//       setValue: (value) => setArr([value, ...arr.slice(1)]),
//     },
//     {
//       title: "Enter the size of particle[D30]",
//       value: arr[1],
//       setValue: (value) => setArr([arr[0], value, ...arr.slice(2)]),
//     },
//     {
//       title: "Enter the size of particle[D60]",
//       value: arr[2],
//       setValue: (value) => setArr([...arr.slice(0, 2), value]),
//     },
//   ];

//   const calculateResult = () => {
//     if (arr.length !== 3 || arr.some((x) => isNaN(x) || x === '')) {
//       setRes('');
//     } else {
//       const cu = parseFloat(arr[2]) / parseFloat(arr[0]);
//       const cc = (parseFloat(arr[1]) * parseFloat(arr[1])) / (parseFloat(arr[0]) * parseFloat(arr[2]));

//       if (cu > 6 && cc > 1 && cc < 3) {
//         setRes("SW");
//       } else {
//         setRes("SP");
//       }
//     }
//   };
//   const back=()=>{
//     Navigate(-1)
//   }

//   return (
//     <div >
//     <Button  variant='outlined'  startIcon={<ArrowBackIosIcon/>}  onClick={back} style={{marginLeft:'50px'}}>BACK</Button>
//       <div style={{width:'800px',height:'650px',display:'flex',marginLeft:'350px'}}>
//       <Line data={initialData} /></div>
//       <div style={{marginTop:'-200px'}}>
//         {data.map((val, index) => (
//           <div key={index}>
//             <div style={{ fontSize: '50px', display: 'flex', justifyContent: 'center' ,marginTop:'10px'}}>
//               <label htmlFor={`y-coordinate-${index}`}>{val.title}</label>
//               <input
//                 type="number"
//                 id={`y-coordinate-${index}`}
//                 value={val.value}
//                 style={{ height: '50px', width: '300px', fontSize: '50px' }}
//                 onChange={(event) => val.setValue(event.target.value)}
//               />
//               <button onClick={() => handleButtonClick(index, parseFloat(val.value))}>Calculate</button>
//             </div>
//             <div style={{ fontSize: '50px', display: 'flex', justifyContent: 'center' }}>
//               <label htmlFor={`x-coordinate-${index}`}>x-coordinate:</label>
//               <span id={`x-coordinate-${index}`}>{arr[index]}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <button onClick={calculateResult} style={{ height: '50px', marginTop: '20px' }}>click to see result</button>
//         <h1 style={{ textAlign: 'center' }}>The given soil is <p style={{backgroundColor:'red'}}>{res}</p></h1>
//       </div>
//     </div>
//   );
// };

// export default Graph1;
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Graph1 = ({select}) => {
  const location = useLocation();
  const Navigate = useNavigate();

  const [arr, setArr] = useState([]);
  const [res, setRes] = useState('');

  const initialData = {
    labels: location.state.arr1,
    datasets: [
      {
        label: 'My Dataset',
        data: location.state.arr2,
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
      const xCoordinate = interpolateXValue(location.state.arr1, location.state.arr2, newYCoordinate);
      if (xCoordinate !== null) {
        setArr([...arr.slice(0, index), xCoordinate.toFixed(2), ...arr.slice(index + 1)]);
      }
    }
  };

  useEffect(() => {
    // Calculate result whenever the arr state changes
    if (arr.length === 3) {
      const cu = parseFloat(arr[2]) / parseFloat(arr[0]);
      const cc = (parseFloat(arr[1]) * parseFloat(arr[1])) / (parseFloat(arr[0]) * parseFloat(arr[2]));
    if(location.state.select=="Gravel"){
      if (cu > 4 && cc > 1 && cc < 3) {
        setRes('WELL GRADED Gravel [GW]');
      } else {
        setRes('POOR GRADED Gravel [GP]');
      }
    }
    else{
      if (cu > 6 && cc > 1 && cc < 3) {
        setRes('WELL GRADE SOIL [SW]');
      } else {
        setRes('POOR GRADED SOIL [SP]');
      }

    }
  }
  }, [arr]);

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
    const newYValues = [10, 30, 60];
    const newXCoordinates = newYValues.map((yValue) =>
      interpolateXValue(location.state.arr1, location.state.arr2, yValue)
    );

    setArr(newXCoordinates.map((value) => value.toFixed(2)));
  }, [location.state.arr1, location.state.arr2]);

  const back = () => {
    Navigate(-1);
  };
const home = () => {
    Navigate('/');
  };
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
          { title: 'The value of D10:', index: 0 },
          { title: 'The value of D30:', index: 1 },
          { title: 'The value of D60:', index: 2 },
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
          The given soil is <p style={{ backgroundColor: 'red' }}>{res}</p>
        </h1>
      </div>
    </div>
  );
};

export default Graph1;

