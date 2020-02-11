import React from 'react';
import './Chart.css';
import { Bar } from 'react-chartjs-2';

const Chart = ({ width }) => {
  const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [
      {
        label: 'Nombre de livraisons réalisées',
        backgroundColor: 'rgba(23, 185, 148, 0.6)',
        borderColor: 'rgba(23, 185, 148, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(23, 185, 148, 0.3)',
        hoverBorderColor: 'rgba(23, 185, 148, 1)',
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
