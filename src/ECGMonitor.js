// src/ECGMonitor.js
import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const ECGMonitor = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: Array(32).fill(''), // Increase the number of labels to show multiple curves
    datasets: [
      {
        label: 'ecg',
        data: Array(32).fill(0), // Initialize with more data points
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4, // Smoother curves
      },
    ],
  });

  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data[indexRef.current].ecg.Samples;
      setChartData((prevData) => {
        const updatedData = [...prevData.datasets[0].data, ...newData].slice(-32); // Add new data and keep the latest 32 points
        return {
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: updatedData,
            },
          ],
        };
      });

      indexRef.current = (indexRef.current + 1) % data.length;
    }, 500); // Update every 500ms

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          animation: {
            duration: 0,
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              min: -1500,
              max: 2500,
            },
          },
        }}
      />
    </div>
  );
};

export default ECGMonitor;
