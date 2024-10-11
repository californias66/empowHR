import React from 'react';
import { CheckSquare, Square } from 'lucide-react';

const TasksWidget: React.FC = () => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Tasks</h3>
      <ul className="space-y-4">
        <li className="flex items-center bg-white bg-opacity-10 p-2 rounded">
          <CheckSquare className="w-6 h-6 mr-3 text-green-400" />
          <span className="text-sm line-through">Review client files</span>
        </li>
        <li className="flex items-center bg-white bg-opacity-10 p-2 rounded">
          <Square className="w-6 h-6 mr-3 text-gray-400" />
          <span className="text-sm">Prepare monthly report</span>
        </li>
        <li className="flex items-center bg-white bg-opacity-10 p-2 rounded">
          <Square className="w-6 h-6 mr-3 text-gray-400" />
          <span className="text-sm">Schedule team building</span>
        </li>
      </ul>
    </div>
  );
};

export default TasksWidget;