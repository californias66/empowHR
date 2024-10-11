import React, { useState, forwardRef } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

interface PanelProps {
  title: string;
  children: React.ReactNode;
  color: string;
  icon?: React.ReactNode;
}

const Panel = forwardRef<HTMLDivElement, PanelProps>(({ title, children, color, icon }, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? 'fixed inset-4 z-50 bg-gray-900' : `bg-gradient-to-br ${color} hover:shadow-xl`
      }`}
      onClick={() => !isExpanded && setIsExpanded(true)}
    >
      <div className={`p-3 flex justify-between items-center ${isExpanded ? 'bg-gray-800' : ''}`}>
        <div className="flex items-center">
          {icon && <span className="mr-2 text-white">{icon}</span>}
          <h2 className="text-lg font-bold text-white">{title}</h2>
        </div>
        {isExpanded && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <Minimize2 size={18} />
          </button>
        )}
      </div>
      <div className={`p-4 overflow-auto ${isExpanded ? 'h-[calc(100%-3rem)]' : 'h-[calc(100%-3rem)]'}`} style={{ minHeight: '200px' }}>
        {children}
      </div>
    </div>
  );
});

Panel.displayName = 'Panel';

export default Panel;