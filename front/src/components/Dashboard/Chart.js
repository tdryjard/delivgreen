import React from 'react';
import './Chart.css';
import { Bar } from 'react-chartjs-2';

const Chart = ({ width }) => {
  const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [
      {
        label: 'Nombre de livraisons réalisées',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [31, 48, 57, 28, 87, 78, 95]
      }
    ]
  };
  return (
    <div className="graphContainer">
      <Bar
        data={data}
        width={width > 1060 ? 750 : 250}
        height={width > 1060 ? 350 : 200}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default Chart;
