"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import ServiceStats from "@/components/dealership/ServiceStats"

export default function DealershipService() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Mock data for vehicles in service
  const vehiclesInService = [
    { id: 'OLY001', model: 'Model 01', customer: 'John Smith', status: 'In Progress', tech: 'Mike Johnson', eta: '2 hours' },
    { id: 'OLY042', model: 'Model 42', customer: 'Sarah Davis', status: 'Scheduled', tech: 'Alex Brown', eta: '4 hours' },
    { id: 'OLY084', model: 'Model 84', customer: 'Robert Wilson', status: 'Completed', tech: 'Emily Chen', eta: 'Ready' },
    { id: 'OLY017', model: 'Model 01', customer: 'Lisa Garcia', status: 'In Progress', tech: 'David Lee', eta: '1 hour' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500 text-white'
      case 'In Progress': return 'bg-blue-500 text-white'
      case 'Scheduled': return 'bg-yellow-500 text-white'
      default: return 'bg-gray-200 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'md:pl-64' : 'md:pl-0'}`}>
        <div className="px-8 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Center Dashboard</h1>
            <p className="text-gray-600">Manage appointments, track service status, and monitor operations</p>
          </div>

          {/* Quick Search & Actions */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search by VIN, customer name, or vehicle..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                  </svg>
                  Filter
                </Button>
                <Button>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  New Appointment
                </Button>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Today&apos;s Appointments</CardDescription>
                <CardTitle className="text-3xl">24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">+3 from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Vehicles in Service</CardDescription>
                <CardTitle className="text-3xl">12</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">4 completed today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Average Wait Time</CardDescription>
                <CardTitle className="text-3xl">1.5h</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Below target</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Parts Availability</CardDescription>
                <CardTitle className="text-3xl">96%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-600">3 items low stock</p>
              </CardContent>
            </Card>
          </div>

          {/* Vehicle Service Status */}
          <div className="bg-white rounded-lg border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Vehicles Currently in Service</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technician</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {vehiclesInService.map((vehicle) => (
                    <tr key={vehicle.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{vehicle.model}</div>
                        <div className="text-sm text-gray-500">{vehicle.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(vehicle.status)}`}>
                          {vehicle.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.tech}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.eta}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Button variant="ghost" size="sm">Update</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Charts Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Service Analytics</h2>
            <ServiceStats />
          </div>

          {/* Parts Inventory & Technician Workload */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Parts Inventory */}
            <Card>
              <CardHeader>
                <CardTitle>Parts Inventory Status</CardTitle>
                <CardDescription>Critical parts and stock levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { part: 'Brake Pads', stock: 15, min: 10, status: 'normal' },
                    { part: 'Air Filters', stock: 8, min: 12, status: 'low' },
                    { part: 'Batteries (12V)', stock: 25, min: 8, status: 'normal' },
                    { part: 'Windshield Wipers', stock: 5, min: 15, status: 'critical' },
                  ].map((item) => (
                    <div key={item.part} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{item.part}</p>
                        <p className="text-sm text-gray-500">Min: {item.min}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{item.stock}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'critical' ? 'bg-red-100 text-red-800' :
                          item.status === 'low' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technician Workload */}
            <Card>
              <CardHeader>
                <CardTitle>Technician Workload</CardTitle>
                <CardDescription>Current assignments and availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Mike Johnson', jobs: 2, available: true },
                    { name: 'Alex Brown', jobs: 1, available: true },
                    { name: 'Emily Chen', jobs: 3, available: false },
                    { name: 'David Lee', jobs: 2, available: true },
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{tech.name}</p>
                        <p className="text-sm text-gray-500">{tech.jobs} active jobs</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tech.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {tech.available ? 'Available' : 'Busy'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 