"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import ServiceStats from "@/components/dealership/ServiceStats"

export default function DealershipService() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleDropdown = (vehicleId: string) => {
    setDropdownOpen(dropdownOpen === vehicleId ? null : vehicleId)
  }

  const handleAction = (action: string, vehicleId: string) => {
    console.log(`Action: ${action} for vehicle: ${vehicleId}`)
    setDropdownOpen(null)
    // Handle the action here
  }

  // Expanded mock data for vehicles in service
  const allVehiclesInService = [
    { id: 'OLY001', model: 'Model 01', customer: 'John Smith', status: 'In Progress', tech: 'Mike Johnson', eta: '2 hours' },
    { id: 'OLY042', model: 'Model 42', customer: 'Sarah Davis', status: 'Scheduled', tech: 'Alex Brown', eta: '4 hours' },
    { id: 'OLY084', model: 'Model 84', customer: 'Robert Wilson', status: 'Completed', tech: 'Emily Chen', eta: 'Ready' },
    { id: 'OLY017', model: 'Model 01', customer: 'Lisa Garcia', status: 'In Progress', tech: 'David Lee', eta: '1 hour' },
    { id: 'OLY025', model: 'Model 42', customer: 'Michael Brown', status: 'Scheduled', tech: 'Mike Johnson', eta: '3 hours' },
    { id: 'OLY031', model: 'Model 84', customer: 'Jennifer White', status: 'In Progress', tech: 'Alex Brown', eta: '45 min' },
    { id: 'OLY058', model: 'Model 01', customer: 'David Johnson', status: 'Completed', tech: 'Emily Chen', eta: 'Ready' },
    { id: 'OLY063', model: 'Model 42', customer: 'Anna Martinez', status: 'Scheduled', tech: 'David Lee', eta: '5 hours' },
    { id: 'OLY079', model: 'Model 84', customer: 'Chris Anderson', status: 'In Progress', tech: 'Mike Johnson', eta: '90 min' },
    { id: 'OLY092', model: 'Model 01', customer: 'Emma Thompson', status: 'Completed', tech: 'Alex Brown', eta: 'Ready' },
    { id: 'OLY105', model: 'Model 42', customer: 'James Wilson', status: 'Scheduled', tech: 'Emily Chen', eta: '6 hours' },
    { id: 'OLY118', model: 'Model 84', customer: 'Sophia Miller', status: 'In Progress', tech: 'David Lee', eta: '30 min' },
    { id: 'OLY134', model: 'Model 01', customer: 'Oliver Garcia', status: 'Completed', tech: 'Mike Johnson', eta: 'Ready' },
    { id: 'OLY147', model: 'Model 42', customer: 'Isabella Rodriguez', status: 'Scheduled', tech: 'Alex Brown', eta: '2.5 hours' },
    { id: 'OLY159', model: 'Model 84', customer: 'Ethan Martinez', status: 'In Progress', tech: 'Emily Chen', eta: '20 min' },
    { id: 'OLY162', model: 'Model 01', customer: 'Mia Johnson', status: 'Completed', tech: 'David Lee', eta: 'Ready' },
    { id: 'OLY173', model: 'Model 42', customer: 'Lucas Brown', status: 'Scheduled', tech: 'Mike Johnson', eta: '4.5 hours' },
    { id: 'OLY186', model: 'Model 84', customer: 'Ava Davis', status: 'In Progress', tech: 'Alex Brown', eta: '1.5 hours' },
  ]

  // Pagination logic
  const totalItems = allVehiclesInService.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentVehicles = allVehiclesInService.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500 text-white'
      case 'In Progress': return 'bg-blue-500 text-white'
      case 'Scheduled': return 'bg-yellow-500 text-white'
      default: return 'bg-gray-200 text-gray-800'
    }
  }

  const getActionItems = (status: string) => {
    const baseActions = ['View Details', 'Edit Service', 'Reassign Technician', 'Add Notes']
    
    switch (status) {
      case 'Scheduled':
        return [...baseActions, 'Start Service', 'Cancel Appointment']
      case 'In Progress':
        return [...baseActions, 'Mark as Completed', 'Request Parts', 'Update ETA']
      case 'Completed':
        return [...baseActions, 'Generate Invoice', 'Schedule Follow-up', 'Customer Notification']
      default:
        return baseActions
    }
  }

  const getPaginationNumbers = () => {
    const pages = []
    const maxVisible = 5
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    const end = Math.min(totalPages, start + maxVisible - 1)
    
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1)
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
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
                <CardTitle className="text-3xl">{totalItems}</CardTitle>
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

          {/* Vehicle Service Status - Bigger Section */}
          <div className="bg-white rounded-lg border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Vehicles Currently in Service</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} vehicles
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Show:</label>
                <select 
                  value={itemsPerPage} 
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value))
                    setCurrentPage(1)
                  }}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-gray-600">per page</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technician</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentVehicles.map((vehicle) => (
                    <tr key={vehicle.id} className="hover:bg-gray-50">
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{vehicle.model}</div>
                        <div className="text-sm text-gray-500">{vehicle.id}</div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-900">{vehicle.customer}</td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(vehicle.status)}`}>
                          {vehicle.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-900">{vehicle.tech}</td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-900">{vehicle.eta}</td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-medium relative">
                        <button
                          onClick={() => toggleDropdown(vehicle.id)}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                          Actions
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {dropdownOpen === vehicle.id && (
                          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                            <div className="py-1">
                              {getActionItems(vehicle.status).map((action) => (
                                <button
                                  key={action}
                                  onClick={() => handleAction(action, vehicle.id)}
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                  {action}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Controls */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-600">
                <span>Page {currentPage} of {totalPages}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                <div className="flex space-x-1">
                  {getPaginationNumbers().map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        currentPage === page
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
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