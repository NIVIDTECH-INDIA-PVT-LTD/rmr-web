import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const MarketSharePieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) chartInstance.current.destroy();

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Sorbitan Monostearate',
          'Sorbitan Tristearate',
          'Sorbitan',
          'Sorbitan Monooleate',
          'Sorbitan Trioleate',
          'Others'
        ],
        datasets: [
          {
            data: [35, 20, 15, 12, 10, 8],
            backgroundColor: [
              '#1E3A8A',
              '#DC2626',
              '#F59E0B',
              '#10B981',
              '#F97316',
              '#87CEEB'
            ],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: false }
        }
      }
    });

    return () => chartInstance.current.destroy();
  }, []);

  return (
    <div className="bg-gray-100 rounded-lg p-6 w-full max-w-xl mx-auto flex justify-center items-center">
      <div className="w-full max-w-md aspect-square">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default MarketSharePieChart;
