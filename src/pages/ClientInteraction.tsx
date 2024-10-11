import React, { useState } from 'react';
import { Phone, MessageSquare, User } from 'lucide-react';

const ClientInteraction: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Client data:', { clientName, clientPhone, clientNotes });
    setClientName('');
    setClientPhone('');
    setClientNotes('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-purple-700">New Client Intake</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
            Client Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="clientName"
              id="clientName"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="John Doe"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="tel"
              name="clientPhone"
              id="clientPhone"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="(123) 456-7890"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="clientNotes" className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <div className="mt-1">
            <textarea
              id="clientNotes"
              name="clientNotes"
              rows={3}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Enter any additional notes here..."
              value={clientNotes}
              onChange={(e) => setClientNotes(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <MessageSquare className="mr-2 h-5 w-5" aria-hidden="true" />
            Submit Intake
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientInteraction;