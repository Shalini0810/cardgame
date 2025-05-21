import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ wins, losses }) => {
  const data = {
    labels: ['Wins', 'Losses'],
    datasets: [
      {
        label: 'Game Results',
        data: [wins, losses],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
