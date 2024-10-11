import React, { useState } from 'react';
import { UserCheck, Users, Briefcase } from 'lucide-react';

const ProfessionalAssignment: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState('');
  const [caseType, setCaseType] = useState('');

  const handleAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assignment data:', { selectedClient, selectedProfessional, caseType });
    setSelectedClient('');
    setSelectedProfessional('');
    setCaseType('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Assign Client to Professional</h2>
      <form onSubmit={handleAssignment} className="space-y-4">
        <div>
          <label htmlFor="selectedClient" className="block text-sm font-medium text-gray-700">
            Select Client
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <select
              id="selectedClient"
              name="selectedClient"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              required
            >
              <option value="">Select a client</option>
              <option value="client1">John Doe</option>
              <option value="client2">Jane Smith</option>
              <option value="client3">Bob Johnson</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="selectedProfessional" className="block text-sm font-medium text-gray-700">
            Select Professional
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserCheck className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <select
              id="selectedProfessional"
              name="selectedProfessional"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              value={selectedProfessional}
              onChange={(e) => setSelectedProfessional(e.target.value)}
              required
            >
              <option value="">Select a professional</option>
              <option value="prof1">Dr. Alice Williams</option>
              <option value="prof2">Atty. Michael Brown</option>
              <option value="prof3">Counselor Sarah Lee</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="caseType" className="block text-sm font-medium text-gray-700">
            Case Type
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="caseType"
              id="caseType"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="e.g., Legal Consultation, Therapy Session"
              value={caseType}
              onChange={(e) => setCaseType(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <UserCheck className="mr-2 h-5 w-5" aria-hidden="true" />
            Assign Professional
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalAssignment;