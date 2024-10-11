import React, { useState } from 'react';
import { BarChart, TrendingUp, Award } from 'lucide-react';

const PerformanceTracking: React.FC = () => {
  const [employees] = useState([
    { id: 1, name: 'John Doe', department: 'Sales', performance: 85, goals: ['Increase sales by 10%', 'Improve customer satisfaction'] },
    { id: 2, name: 'Jane Smith', department: 'Marketing', performance: 92, goals: ['Launch new campaign', 'Increase social media engagement'] },
    { id: 3, name: 'Bob Johnson', department: 'IT', performance: 78, goals: ['Implement new CRM system', 'Reduce ticket response time'] },
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-indigo-700">Performance Tracking</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Employee Performance</h3>
        <div className="space-y-4">
          {employees.map((employee) => (
            <div key={employee.id} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{employee.name}</span>
                <span className="text-sm text-gray-500">{employee.department}</span>
              </div>
              <div className="mt-2 flex items-center">
                <BarChart className="text-indigo-500 mr-2" size={20} />
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${employee.performance}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">{employee.performance}%</span>
              </div>
              <div className="mt-2">
                <strong className="text-sm text-gray-700">Goals:</strong>
                <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                  {employee.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <TrendingUp className="text-green-500 mr-2" size={20} />
            Top Performers
          </h3>
          <ol className="list-decimal list-inside">
            {employees
              .sort((a, b) => b.performance - a.performance)
              .slice(0, 3)
              .map((employee) => (
                <li key={employee.id} className="text-sm text-gray-700">
                  {employee.name} - {employee.performance}%
                </li>
              ))}
          </ol>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Award className="text-yellow-500 mr-2" size={20} />
            Department Rankings
          </h3>
          <ol className="list-decimal list-inside">
            {Array.from(new Set(employees.map((e) => e.department))).map((dept, index) => (
              <li key={index} className="text-sm text-gray-700">
                {dept}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTracking;