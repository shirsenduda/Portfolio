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

function TrendingPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-6">Trending Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition">
            <div className="w-full h-40 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Trending Project {i}</h3>
            <p className="text-gray-400 text-sm">Amazing project description here</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingPage;