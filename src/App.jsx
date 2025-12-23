

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Componet/Sidebar';
import MobileHeader from './Componet/MobileHeader';
import HomePage from './page/HomePage';
import TrendingPage from './page/TrendingPage';
import SnippetsPage from './page/SnippetsPage';
import VideosPage from './page/VideosPage';
import ProjectCard from './Componet/ProjectCard';
import ProjectsPage from './page/ProjectsPage';
import SkillsPage from './Page/SkillsPage';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto">
          <MobileHeader toggleSidebar={toggleSidebar} />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ProjectsPage" element={<ProjectsPage />} />
            <Route path="/snippets" element={<SnippetsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;