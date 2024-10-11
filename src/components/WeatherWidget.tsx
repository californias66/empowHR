import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';

const WeatherWidget: React.FC = () => {
  return (
    <div className="text-white">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-bold">21°C</h3>
          <p className="text-sm">Partly Cloudy</p>
        </div>
        <Cloud className="w-16 h-16" />
      </div>
      <div className="mt-6 flex justify-between">
        <div className="text-center">
          <Sun className="w-8 h-8 mx-auto text-yellow-400" />
          <p className="text-xs mt-1">Mon</p>
          <p className="text-sm font-bold">24°</p>
        </div>
        <div className="text-center">
          <Cloud className="w-8 h-8 mx-auto text-gray-400" />
          <p className="text-xs mt-1">Tue</p>
          <p className="text-sm font-bold">22°</p>
        </div>
        <div className="text-center">
          <CloudRain className="w-8 h-8 mx-auto text-blue-400" />
          <p className="text-xs mt-1">Wed</p>
          <p className="text-sm font-bold">19°</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;