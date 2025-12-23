// ==========================================
// FILE: src/components/Sidebar.jsx (Same as before)
// ==========================================
import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  X,
} from "lucide-react";
import SidebarSlider from "./SidebarSlider";
import { GrProjects } from "react-icons/gr";
import { SiHyperskill } from "react-icons/si";

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "Github", icon: Github, url: "https://github.com/shirsenduda" },
    // { name: "Youtube", icon: Youtube, url: "https://youtube.com" },
    // { name: "Stack Overflow", icon: Share2, url: "https://stackoverflow.com" },
    // { name: "LinkedIn", icon: FileText, url: "https://linkedin.com" },
    // { name: "Twitter", icon: Share2, url: "https://twitter.com" },
    { name: "Discord", icon: Share2, url: "https://discord.com" },
  ];

  const projects = [
    { name: "Ex Chatting", icon: Zap },
    { name: "eCommerce", icon: ShoppingCart },
    { name: "Lottery", icon: FileText },
    { name: "File Sharing", icon: Share2 },
    { name: "Dalle Clone", icon: Code },
    { name: "Weather App", icon: Zap },
    { name: "Task Manager", icon: FileText },
  ];

  const socialItems = socialLinks.map((social, index) => (
    <a
      key={index}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
    >
      <social.icon size={20} />
      <span className="text-sm font-medium">{social.name}</span>
    </a>
  ));

  const projectItems = projects.map((project, index) => (
    <button
      key={index}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
    >
      <project.icon size={20} />
      <span className="text-sm font-medium">{project.name}</span>
    </button>
  ));

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-gray-900 border-r border-gray-800 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        flex flex-col overflow-y-auto
      `}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 lg:justify-start">
            
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-1">
            <Link
              to="/"
              onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                isActive("/")
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Home size={20} />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <Link
              to="/ProjectsPage"
              onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                isActive("/ProjectsPage")
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <GrProjects size={20} />
              <span className="text-sm font-medium">Projects</span>
            </Link>
            <Link
              to="/snippets"
              onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                isActive("/snippets")
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Code size={20} />
              <span className="text-sm font-medium">Snippets</span>
            </Link>
            <Link
              to="/skills"
              onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                isActive("/skills")
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <SiHyperskill size={20} />
              <span className="text-sm font-medium">Skills</span>
            </Link>
          </nav>
        </div>

        <div className="px-6 mt-4">
          <SidebarSlider items={socialItems} title="Socials" />
        </div>

        {/* <div className="px-6 mt-6 pb-6">
          <SidebarSlider items={projectItems} title="Projects" />
        </div> */}
      </aside>
    </>
  );
}

export default Sidebar;