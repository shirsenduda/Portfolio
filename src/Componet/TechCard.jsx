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

function TechCard({ tech, emoji, index }) {
  return (
    <div className={`${tech.color} rounded-2xl p-8 hover:scale-105 transition cursor-pointer h-40 flex items-center justify-center`}>
      <div className="text-center">
        {emoji && <div className="text-4xl md:text-5xl mb-3">{emoji}</div>}
        <h3 className="text-lg md:text-xl font-bold">{tech.name}</h3>
      </div>
    </div>
  );
}
export default TechCard;