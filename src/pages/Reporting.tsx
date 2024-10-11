import React, { useState } from 'react';
import { BarChart, PieChart, LineChart, FileText } from 'lucide-react';

const Reporting: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState('employeeStats');

  const renderReport = () => {
    switch (selectedReport) {
      case 'employeeStats':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Employee Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-md font-semibold mb-2">Department Distribution</h4>
                <PieChart size={150} />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-md font-semibold mb-2">Employee Growth</h4>
                <LineChart size={150} />
              </div>
            </div>
          </div>
        );
      case 'performanceMetrics':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Performance Metrics</h3>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-md font-semibold mb-2">Average Performance by Department</h4>
              <BarChart size={200} />
            </div>
          </div>
        );
      case 'timeOffAnalysis':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Time-Off Analysis</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-md font-semibold mb-2">Time-Off Types</h4>
                <PieChart size={150} />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-md font-semibold mb-2">Time-Off Trends</h4>
                <LineChart size={150} />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-purple-700">Reporting</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Generate Reports</h3>
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md ${selectedReport === 'employeeStats' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedReport('employeeStats')}
          >
            Employee Stats
          </button>
          <button
            className={`px-4 py-2 rounded-md ${selectedReport === 'performanceMetrics' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedReport('performanceMetrics')}
          >
            Performance Metrics
          </button>
          <button
            className={`px-4 py-2 rounded-md ${selectedReport === 'timeOffAnalysis' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedReport('timeOffAnalysis')}
          >
            Time-Off Analysis
          </button>
        </div>
        {renderReport()}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Export Options</h3>
        <div className="flex space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
            Export as PDF
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
            Export as CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reporting;