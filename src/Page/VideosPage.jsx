import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Home,
  TrendingUp,
  Code,
  Video,
  Instagram,
  Github,
  Youtube,
  Share2,
  ShoppingCart,
  FileText,
  Zap,
  Menu,
  X,
} from "lucide-react";

function VideosPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-6">Video Tutorials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition">
            <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Video size={48} />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Tutorial Video {i}</h3>
              <p className="text-gray-400 text-sm">Learn amazing coding concepts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideosPage;