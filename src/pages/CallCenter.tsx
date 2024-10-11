import React, { useState, useEffect } from 'react';
import { Phone, User, Clock, FileText } from 'lucide-react';

interface Call {
  id: string;
  caller: string;
  status: 'ongoing' | 'completed' | 'forwarded';
  duration: number;
  timestamp: Date;
  transcription: string;
}

const CallCenter: React.FC = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);

  useEffect(() => {
    // Simulating real-time call data
    const interval = setInterval(() => {
      const newCall: Call = {
        id: Math.random().toString(36).substr(2, 9),
        caller: `Caller ${Math.floor(Math.random() * 100)}`,
        status: Math.random() > 0.7 ? 'completed' : 'ongoing',
        duration: Math.floor(Math.random() * 600),
        timestamp: new Date(),
        transcription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      };
      setCalls(prevCalls => [newCall, ...prevCalls.slice(0, 19)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleForwardCall = (call: Call) => {
    setCalls(prevCalls =>
      prevCalls.map(c =>
        c.id === call.id ? { ...c, status: 'forwarded' } : c
      )
    );
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Call Center Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800">Active Calls</h3>
          <p className="text-3xl font-bold text-blue-600">{calls.filter(c => c.status === 'ongoing').length}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">Completed Calls</h3>
          <p className="text-3xl font-bold text-green-600">{calls.filter(c => c.status === 'completed').length}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800">Forwarded Calls</h3>
          <p className="text-3xl font-bold text-yellow-600">{calls.filter(c => c.status === 'forwarded').length}</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Recent Calls</h3>
          <div className="overflow-y-auto h-64">
            {calls.map(call => (
              <div
                key={call.id}
                className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedCall(call)}
              >
                <div className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  <span>{call.caller}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  call.status === 'ongoing' ? 'bg-blue-200 text-blue-800' :
                  call.status === 'completed' ? 'bg-green-200 text-green-800' :
                  'bg-yellow-200 text-yellow-800'
                }`}>
                  {call.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Call Details</h3>
          {selectedCall ? (
            <div>
              <p><User className="inline mr-2" size={16} /> Caller: {selectedCall.caller}</p>
              <p><Clock className="inline mr-2" size={16} /> Duration: {selectedCall.duration}s</p>
              <p><FileText className="inline mr-2" size={16} /> Transcription:</p>
              <p className="mt-2 text-sm text-gray-600">{selectedCall.transcription}</p>
              {selectedCall.status === 'ongoing' && (
                <button
                  onClick={() => handleForwardCall(selectedCall)}
                  className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Forward to Human Employee
                </button>
              )}
            </div>
          ) : (
            <p className="text-gray-500">Select a call to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallCenter;