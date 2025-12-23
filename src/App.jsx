

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Componet/Sidebar.jsx';
import MobileHeader from './Componet/MobileHeader.jsx';
import HomePage from './Page/HomePage.jsx';
import SnippetsPage from './page/SnippetsPage.jsx';
import ProjectsPage from './Page/ProjectsPage.jsx';
import SkillsPage from './Page/SkillsPage.jsx';
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