import React, { useState } from 'react';
import { FileText, Calendar, DollarSign, CheckCircle } from 'lucide-react';

const GrantTracking: React.FC = () => {
  const [grants, setGrants] = useState([
    { id: 1, name: 'Community Outreach Program', status: 'Active', amount: 50000, dueDate: '2024-12-31' },
    { id: 2, name: 'Youth Education Initiative', status: 'Pending', amount: 75000, dueDate: '2024-09-30' },
    { id: 3, name: 'Environmental Sustainability Project', status: 'Completed', amount: 100000, dueDate: '2024-06-30' },
  ]);

  const [newGrant, setNewGrant] = useState({ name: '', amount: '', dueDate: '' });

  const handleAddGrant = (e: React.FormEvent) => {
    e.preventDefault();
    const grantToAdd = {
      id: grants.length + 1,
      name: newGrant.name,
      status: 'Pending',
      amount: parseFloat(newGrant.amount),
      dueDate: newGrant.dueDate,
    };
    setGrants([...grants, grantToAdd]);
    setNewGrant({ name: '', amount: '', dueDate: '' });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Grant Tracking</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Active Grants</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {grants.map((grant) => (
                <tr key={grant.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{grant.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      grant.status === 'Active' ? 'bg-green-100 text-green-800' :
                      grant.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {grant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">${grant.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{grant.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Add New Grant</h3>
        <form onSubmit={handleAddGrant} className="space-y-4">
          <div>
            <label htmlFor="grantName" className="block text-sm font-medium text-gray-700">Grant Name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FileText className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="grantName"
                id="grantName"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter grant name"
                value={newGrant.name}
                onChange={(e) => setNewGrant({...newGrant, name: e.target.value})}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="grantAmount" className="block text-sm font-medium text-gray-700">Grant Amount</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="number"
                name="grantAmount"
                id="grantAmount"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter grant amount"
                value={newGrant.amount}
                onChange={(e) => setNewGrant({...newGrant, amount: e.target.value})}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="grantDueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="date"
                name="grantDueDate"
                id="grantDueDate"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                value={newGrant.dueDate}
                onChange={(e) => setNewGrant({...newGrant, dueDate: e.target.value})}
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <CheckCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Add Grant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GrantTracking;