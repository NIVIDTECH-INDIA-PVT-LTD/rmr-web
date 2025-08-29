import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const MarketDriversBarChart = () => {
  const data = {
    labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
    datasets: [
      {
        label: "Market Impact (USD Million)",
        data: [1000, 1062, 1128, 1198, 1272, 1350],
        backgroundColor: "#8B0000",
        borderColor: "#8B0000",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      datalabels: {
        anchor: 'end',
        align: 'end',
        // color: '#000',
        font: { weight: 'bold', size: 12 },
        formatter: (value) => value,
      },
    },
    scales: {
      y: { beginAtZero: true, title: { display: false } },
    },
  };

  return (
    <div className="bg-gray-100 p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
        Market Drivers Impact
      </h2>
      <div className="w-full h-auto md:h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default MarketDriversBarChart;
