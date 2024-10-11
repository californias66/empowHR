import React from 'react';
import { Bell, Mail, Calendar } from 'lucide-react';

const NotificationsWidget: React.FC = () => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Notifications</h3>
      <ul className="space-y-4">
        <li className="flex items-center bg-white bg-opacity-10 p-2 rounded">
          <Bell className="w-6 h-6 mr-3 text-yellow-400" />
          <span className="text-sm">New client request</span>
        </li>
        <li className="flex items-center bg-white bg-opacity-10 p-2 rounded">
          <Mail className="w-6 h-6 mr-3 text-blue-400" />
          <span className="text-sm">2 unread messages</span>
        </li>
        <li className="flex items-center bg-white bg-opacity-10 p-2 rounded">
          <Calendar className="w-6 h-6 mr-3 text-green-400" />
          <span className="text-sm">Team meeting at 3 PM</span>
        </li>
      </ul>
    </div>
  );
};

export default NotificationsWidget;