import React from 'react';
import { useDrag } from 'react-dnd';
import { Resizable } from 're-resizable';

interface DraggableWindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  x: number;
  y: number;
  width: number;
  height: number;
  onMove: (id: string, x: number, y: number) => void;
  onResize: (id: string, width: number, height: number) => void;
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({ id, title, children, x, y, width, height, onMove, onResize }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'window',
    item: { id, x, y },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDragEnd = (e: React.DragEvent) => {
    const newX = x + e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newY = y + e.clientY - e.currentTarget.getBoundingClientRect().top;
    onMove(id, newX, newY);
  };

  return (
    <Resizable
      size={{ width, height }}
      onResizeStop={(e, direction, ref, d) => {
        onResize(id, width + d.width, height + d.height);
      }}
      minWidth={300}
      minHeight={200}
      maxWidth={1000}
      maxHeight={800}
      className="absolute bg-white rounded-lg shadow-lg overflow-hidden"
      style={{ left: x, top: y }}
    >
      <div
        ref={drag}
        className={`cursor-move p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold ${
          isDragging ? 'opacity-50' : ''
        }`}
        onDragEnd={handleDragEnd}
      >
        {title}
      </div>
      <div className="p-4 overflow-auto" style={{ height: 'calc(100% - 40px)' }}>
        {children}
      </div>
    </Resizable>
  );
};

export default DraggableWindow;