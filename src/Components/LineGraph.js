// import React, { useEffect, useRef, useState } from 'react';
// import { Chart } from 'chart.js/auto';

// const LineGraph = (props) => {
//   const [graphData, setGraphData] = useState([]);

//   useEffect(() => {
//     setGraphData([...props.lineGraph]);
//   }, [props.lineGraph]);

//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   let labels = graphData.map((item) => item.data.timestamp);
//   let datasets = [];

//   const fields = [
//     { key: 'indoorTemperature10xF', label: 'Indoor Temperature' },
//     { key: 'outdoorHumidityPer', label: 'Outdoor Humidity' },
//     { key: 'indoorHumidityPer', label: 'Indoor Humidity' },
//     { key: 'outdoorTemperature10xF', label: 'Outdoor Temperature' },
//   ];

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     datasets = fields.map((field) => ({
//       label: field.label,
//       data: graphData.map((item) => item.data[field.key]),
//       fill: false,
//       borderColor: getRandomColor(),
//       tension: 0.1,
//     }));

//     chartInstance.current = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: labels,
//         datasets: datasets,
//       },
//       options: {
//         maintainAspectRatio: true,
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }, [graphData]);

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return <canvas ref={chartRef} style={{ width: '100%', height: '200px' }} />;
// };

// export default LineGraph;

// import React, { useEffect, useRef, useState } from 'react';
// import { Chart } from 'chart.js/auto';

// const LineGraph = (props) => {
//   const [graphData, setGraphData] = useState([]);

//   useEffect(() => {
//     setGraphData([...props.lineGraph]);
//   }, [props.lineGraph]);

//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   let labels = graphData.map((item) => item.data.timestamp);
//   let datasets = [];

//   const fields = [
//     { key: 'indoorTemperature10xF', label: 'Indoor Temperature' },
//     { key: 'outdoorHumidityPer', label: 'Outdoor Humidity' },
//     { key: 'indoorHumidityPer', label: 'Indoor Humidity' },
//     { key: 'outdoorTemperature10xF', label: 'Outdoor Temperature' },
//   ];

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     datasets = fields.map((field) => ({
//       label: field.label,
//       data: graphData.map((item) => item.data[field.key]),
//       fill: false,
//       borderColor: getRandomColor(),
//       tension: 0.1,
//     }));

//     chartInstance.current = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: labels,
//         datasets: datasets,
//       },
//       options: {
//         maintainAspectRatio: true,
//         scales: {
//           x: {
//             display: true,
//             title: {
//               display: true,
//               text: 'Timestamp',
//             },
//           },
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: 'Value',
//             },
//           },
//         },
//       },
//     });
//   }, [graphData]);

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return <canvas ref={chartRef}  />;
// };

// export default LineGraph;
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';

const LineGraph = (props) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    setGraphData([...props.lineGraph]);
  }, [props.lineGraph]);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  let labels = graphData.map((item) => item.data.timestamp);
  let datasets = [];

  const fields = [
    { key: 'indoorTemperature10xF', label: 'Indoor Temperature' },
    { key: 'outdoorHumidityPer', label: 'Outdoor Humidity' },
    { key: 'indoorHumidityPer', label: 'Indoor Humidity' },
    { key: 'outdoorTemperature10xF', label: 'Outdoor Temperature' },
  ];

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    datasets = fields.map((field) => ({
      label: field.label,
      data: graphData.map((item) => item.data[field.key]),
      fill: false,
      borderColor: getRandomColor(),
      tension: 0.1,
    }));

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        maintainAspectRatio: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Timestamp',
            },
            axis: 'auto', // Set the x-axis display to 'auto'
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    });
  }, [graphData]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return <canvas ref={chartRef} />;
};

export default LineGraph;

