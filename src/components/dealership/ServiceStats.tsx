"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  TooltipItem,
} from 'chart.js'
import { Line, Doughnut, Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
)

export default function ServiceStats() {
  // Service Volume Over Time Data
  const serviceVolumeData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Vehicles Serviced',
        data: [12, 19, 15, 25, 22, 18, 8],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  }

  // Service Type Breakdown Data
  const serviceTypeData = {
    labels: ['Maintenance', 'Repairs', 'Recalls', 'Inspections'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          '#3B82F6', // Blue
          '#10B981', // Green
          '#F59E0B', // Amber
          '#6B7280', // Gray
        ],
        borderWidth: 2,
        borderColor: '#FFFFFF',
        hoverBorderWidth: 3,
      },
    ],
  }

  // Average Service Time Data
  const serviceTimeData = {
    labels: ['Oil Change', 'Brake Service', 'Battery Replace', 'Tire Rotation', 'Software Update'],
    datasets: [
      {
        label: 'Average Hours',
        data: [0.5, 2.5, 1.0, 0.75, 1.5],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#8B5CF6',
          '#EF4444',
        ],
        borderColor: [
          '#2563EB',
          '#059669',
          '#D97706',
          '#7C3AED',
          '#DC2626',
        ],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  }

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Daily Service Volume Trend',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        color: '#374151',
        padding: {
          bottom: 20,
        },
      },
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#374151',
          font: {
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: '#374151',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: '#D1D5DB',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day of Week',
          color: '#6B7280',
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Vehicles',
          color: '#6B7280',
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
        grid: {
          color: '#F3F4F6',
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11,
          },
        },
        beginAtZero: true,
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Service Type Distribution',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        color: '#374151',
        padding: {
          bottom: 20,
        },
      },
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          color: '#374151',
          font: {
            size: 11,
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: '#374151',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: '#D1D5DB',
        borderWidth: 1,
        callbacks: {
          label: function(context: TooltipItem<'doughnut'>) {
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((context.parsed / total) * 100);
            return `${context.label}: ${context.parsed} (${percentage}%)`;
          }
        }
      },
    },
  }

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Average Service Time by Type',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        color: '#374151',
        padding: {
          bottom: 20,
        },
      },
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#374151',
          font: {
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: '#374151',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: '#D1D5DB',
        borderWidth: 1,
        callbacks: {
          label: function(context: TooltipItem<'bar'>) {
            return `${context.dataset.label || 'Value'}: ${context.parsed.y} hours`;
          }
        }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Service Type',
          color: '#6B7280',
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 10,
          },
          maxRotation: 45,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Hours',
          color: '#6B7280',
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
        grid: {
          color: '#F3F4F6',
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11,
          },
        },
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Service Volume Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="h-80">
          <Line data={serviceVolumeData} options={lineChartOptions} />
        </div>
      </div>

      {/* Service Type Breakdown */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="h-80">
          <Doughnut data={serviceTypeData} options={doughnutOptions} />
        </div>
      </div>

      {/* Average Service Time */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="h-80">
          <Bar data={serviceTimeData} options={barChartOptions} />
        </div>
      </div>
    </div>
  )
} 