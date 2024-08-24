"use client"
import { useState, type ReactNode } from 'react';

export const Sidebar = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Initially open

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div 
        className={`bg-gray-800 text-white w-64 h-screen transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Sidebar Content */}
        <button 
          className="p-2 absolute right-0 top-0 m-2 bg-gray-700 rounded hover:bg-gray-600"
          onClick={toggleSidebar}
        >
          {/* Use an icon library or SVG for the toggle button */}
          {isSidebarOpen ? 'Close' : 'Open'} 
        </button>
        {children}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};