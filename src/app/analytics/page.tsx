"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import EnterpriseCharts from "@/components/analytics/EnterpriseCharts"

export default function EnterpriseAnalytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [timeRange, setTimeRange] = useState('12M')

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Mock data for key metrics
  const keyMetrics = [
    {
      title: "Total Revenue",
      value: "$1.34M",
      change: "+12.5%",
      changeType: "positive",
      description: "vs last month"
    },
    {
      title: "Total Spend", 
      value: "$699K",
      change: "+8.2%",
      changeType: "negative",
      description: "vs last month"
    },
    {
      title: "Net Profit",
      value: "$641K",
      change: "+18.9%", 
      changeType: "positive",
      description: "vs last month"
    },
    {
      title: "Profit Margin",
      value: "47.8%",
      change: "+2.1%",
      changeType: "positive", 
      description: "vs last month"
    },
    {
      title: "Customer LTV",
      value: "$2,847",
      change: "+15.3%",
      changeType: "positive",
      description: "avg lifetime value"
    },
    {
      title: "Return Rate",
      value: "5.2%",
      change: "-0.8%",
      changeType: "positive",
      description: "vs last month"
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      change: "+0.4%",
      changeType: "positive",
      description: "vs last month"
    },
    {
      title: "AOV",
      value: "$287",
      change: "+6.7%",
      changeType: "positive",
      description: "avg order value"
    }
  ]

  // Top performing products
  const topProducts = [
    { name: "Model 01", revenue: "$450K", units: 1200, growth: "+15%" },
    { name: "Model 42", revenue: "$380K", units: 950, growth: "+22%" },
    { name: "Model 84", revenue: "$320K", units: 680, growth: "+8%" },
    { name: "Accessories", revenue: "$180K", units: 2400, growth: "+31%" },
    { name: "Services", revenue: "$120K", units: 850, growth: "+12%" },
  ]

  // Regional performance
  const regionalData = [
    { region: "North America", revenue: "$562K", growth: "+14%", customers: 3200 },
    { region: "Europe", revenue: "$374K", growth: "+18%", customers: 2100 },
    { region: "Asia Pacific", revenue: "$241K", growth: "+25%", customers: 1800 },
    { region: "Latin America", revenue: "$107K", growth: "+9%", customers: 650 },
    { region: "Others", revenue: "$56K", growth: "+5%", customers: 420 },
  ]

  // Department performance
  const departmentMetrics = [
    { department: "Sales", kpi: "Revenue", value: "$1.34M", target: "$1.25M", performance: "107%" },
    { department: "Marketing", kpi: "CAC", value: "$89", target: "$95", performance: "106%" },
    { department: "Operations", kpi: "Fulfillment", value: "1.2 days", target: "1.5 days", performance: "125%" },
    { department: "Support", kpi: "CSAT", value: "94%", target: "90%", performance: "104%" },
  ]

  const getChangeColor = (changeType: string) => {
    return changeType === "positive" ? "text-green-600" : "text-red-600"
  }

  const getPerformanceColor = (performance: string) => {
    const perf = parseInt(performance)
    if (perf >= 110) return "text-green-600"
    if (perf >= 100) return "text-blue-600" 
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'md:pl-64' : 'md:pl-0'}`}>
        <div className="px-8 py-8">
          {/* Header Section */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Enterprise Analytics</h1>
              <p className="text-gray-600">Comprehensive business insights and performance metrics</p>
            </div>
            <div className="flex items-center gap-3">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="1M">Last Month</option>
                <option value="3M">Last 3 Months</option>
                <option value="6M">Last 6 Months</option>
                <option value="12M">Last 12 Months</option>
                <option value="YTD">Year to Date</option>
              </select>
              <Button variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Report
              </Button>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {keyMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardDescription>{metric.title}</CardDescription>
                  <CardTitle className="text-2xl">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${getChangeColor(metric.changeType)}`}>
                      {metric.change}
                    </span>
                    <span className="text-sm text-gray-500">{metric.description}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Overview</h2>
            <EnterpriseCharts />
          </div>

          {/* Detailed Analytics Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Top Products */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
                <CardDescription>Revenue and unit sales by product line</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.units} units sold</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{product.revenue}</p>
                        <p className="text-sm text-green-600">{product.growth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Regional Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Regional Performance</CardTitle>
                <CardDescription>Revenue breakdown by geographic region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalData.map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{region.region}</p>
                        <p className="text-sm text-gray-500">{region.customers} customers</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{region.revenue}</p>
                        <p className="text-sm text-green-600">{region.growth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Department Performance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Department Performance</CardTitle>
              <CardDescription>Key performance indicators by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KPI</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {departmentMetrics.map((dept, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{dept.department}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{dept.kpi}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{dept.value}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{dept.target}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`font-semibold ${getPerformanceColor(dept.performance)}`}>
                            {dept.performance}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Action Items & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Action Items</CardTitle>
                <CardDescription>Priority items requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium text-red-800">High return rate in Europe</p>
                      <p className="text-xs text-red-600">Investigate quality issues with Model 42</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Marketing CAC trending up</p>
                      <p className="text-xs text-yellow-600">Review advertising spend efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium text-green-800">Q4 revenue target achieved</p>
                      <p className="text-xs text-green-600">Congratulations to the sales team!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Alerts</CardTitle>
                <CardDescription>Automated system notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Inventory Alert</p>
                      <p className="text-xs text-gray-600">Model 01 stock running low</p>
                    </div>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Medium</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Performance Milestone</p>
                      <p className="text-xs text-gray-600">Monthly revenue goal exceeded</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Success</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">System Update</p>
                      <p className="text-xs text-gray-600">Analytics dashboard refreshed</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Info</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 