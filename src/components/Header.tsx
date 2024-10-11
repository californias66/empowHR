import React from 'react';
import { Users, Search, Bell, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <Users className="mr-2" />
            empowHR
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full py-1 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <button className="hover:text-blue-400 transition-colors duration-200">
              <Bell size={20} />
            </button>
            <button className="hover:text-blue-400 transition-colors duration-200">
              <Settings size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="font-bold">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;