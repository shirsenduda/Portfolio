import React from 'react';
import { Menu, Code } from 'lucide-react';

function MobileHeader({ toggleSidebar }) {
  return (
    <div className="lg:hidden sticky top-0 z-30 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 px-6 py-4 flex items-center justify-between shadow-lg">
      <button 
        onClick={toggleSidebar}
        className="text-gray-400 hover:text-white transition"
      >
        <Menu size={24} />
      </button>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Code className="w-4 h-4 text-white" />
        </div>
        <span className="text-lg font-bold">Portfolio</span>
      </div>
      <div className="w-6"></div>
    </div>
  );
}

export default MobileHeader;