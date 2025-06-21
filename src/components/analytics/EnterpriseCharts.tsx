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

export default function EnterpriseCharts() {
  // Monthly Revenue & Spend Data
  const revenueSpendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [85000, 92000, 78000, 105000, 98000, 112000, 125000, 118000, 135000, 142000, 128000, 155000],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        yAxisID: 'y',
      },
      {
        label: 'Spend',
        data: [45000, 48000, 42000, 52000, 51000, 58000, 62000, 59000, 68000, 71000, 65000, 78000],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        yAxisID: 'y',
      },
    ],
  }

  // Revenue by Source Data
  const revenueSourceData = {
    labels: ['Direct Sales', 'Online Store', 'Partner Network', 'Enterprise Clients', 'Marketplace'],
    datasets: [
      {
        data: [35, 28, 18, 12, 7],
        backgroundColor: [
          '#3B82F6',
          '#10B981', 
          '#F59E0B',
          '#8B5CF6',
          '#EF4444',
        ],
        borderWidth: 2,
        borderColor: '#FFFFFF',
      },
    ],
  }

  // Order Analytics Data
  const orderAnalyticsData = {
    labels: ['Total Orders', 'Completed', 'Returned', 'Refunded', 'Cancelled'],
    datasets: [
      {
        label: 'Orders',
        data: [12450, 11200, 650, 320, 280],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B', 
          '#EF4444',
          '#6B7280',
        ],
        borderColor: [
          '#2563EB',
          '#059669',
          '#D97706',
          '#DC2626',
          '#4B5563',
        ],
        borderWidth: 1,
      },
    ],
  }

  // Customer Acquisition Data
  const customerAcquisitionData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'New Customers',
        data: [1240, 1580, 1320, 1750],
        backgroundColor: '#3B82F6',
        borderColor: '#2563EB',
        borderWidth: 1,
      },
      {
        label: 'Returning Customers',
        data: [2150, 2380, 2650, 2920],
        backgroundColor: '#10B981',
        borderColor: '#059669',
        borderWidth: 1,
      },
    ],
  }

  // Geographic Revenue Data  
  const geographicData = {
    labels: ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Others'],
    datasets: [
      {
        data: [42, 28, 18, 8, 4],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B', 
          '#8B5CF6',
          '#6B7280',
        ],
        borderWidth: 0,
      },
    ],
  }

  // Product Performance Data
  const productPerformanceData = {
    labels: ['Model 01', 'Model 42', 'Model 84', 'Accessories', 'Services'],
    datasets: [
      {
        label: 'Revenue ($K)',
        data: [450, 380, 320, 180, 120],
        backgroundColor: '#3B82F6',
        borderColor: '#2563EB',
        borderWidth: 1,
      },
      {
        label: 'Units Sold',
        data: [1200, 950, 680, 2400, 850],
        backgroundColor: '#10B981',
        borderColor: '#059669',
        borderWidth: 1,
        yAxisID: 'y1',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          padding: 20,
          color: '#374151',
          font: {
            size: 11,
          },
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
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          color: '#F3F4F6',
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 10,
          },
        },
        beginAtZero: true,
      },
    },
  }

  const dualAxisOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          padding: 20,
          color: '#374151',
          font: {
            size: 11,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 10,
          },
        },
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        grid: {
          color: '#F3F4F6',
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 10,
          },
        },
        beginAtZero: true,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 10,
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
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 15,
          color: '#374151',
          font: {
            size: 10,
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
            return `${context.label}: ${percentage}%`;
          }
        }
      },
    },
  }

  return (
    <div className="space-y-8">
      {/* Revenue & Spend Trend */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue vs Spend</h3>
          <div className="h-80">
            <Line data={revenueSpendData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Source</h3>
          <div className="h-80">
            <Doughnut data={revenueSourceData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Order Analytics & Customer Acquisition */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Analytics</h3>
          <div className="h-80">
            <Bar data={orderAnalyticsData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Acquisition (Quarterly)</h3>
          <div className="h-80">
            <Bar data={customerAcquisitionData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Geographic Revenue & Product Performance */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Region</h3>
          <div className="h-80">
            <Doughnut data={geographicData} options={doughnutOptions} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Performance</h3>
          <div className="h-80">
            <Bar data={productPerformanceData} options={dualAxisOptions} />
          </div>
        </div>
      </div>
    </div>
  )
} 