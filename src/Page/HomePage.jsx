// HomePage.jsx - Modern Frontend & Backend Sections
import React from "react";
import { Code, Share2, Sparkles } from "lucide-react";
import ProfileHeader from "../Componet/ProfileHeader";
import ProjectCard from "../Componet/ProjectCard";
import TechCard from "../Componet/TechCard";
import { RiBankCard2Fill } from "react-icons/ri";
import { FaFileMedicalAlt } from "react-icons/fa";
import { MdTurnedInNot } from "react-icons/md";
import { GiCoffeePot } from "react-icons/gi";
function HomePage() {
  const projects = [
    {
      name: "GREENBANK",
      icon: RiBankCard2Fill,
      desc: "A modern, secure, and scalable Money Transfer App built with React.JS and Node.js.",
      color: "bg-teal-600",
      link: 'https://bank-management-system-frontent.vercel.app/'
    },
    {
      name: "Vitalcare",
      icon: FaFileMedicalAlt,
      desc: "VitalCare is a full-stack healthcare management and communication platform designed to connect patients, doctors, and admins.",
      color: "bg-yellow-500",
      link: 'https://bank-management-system-frontent.vercel.app/'
    },
    {
      name: "aroma cafe",
      icon: GiCoffeePot,
      desc: "A stylish eCommerce platform for a coffee shop, featuring product browsing, shopping cart, and secure checkout.",
      color: "bg-orange-500",
      link: 'https://shirsenduda.github.io/aroma/'

    },
    {
      name: "Snake Game Clone",
      icon: Code,
      desc: "Classic snake game with modern UI",
      color: "bg-gray-700",
    },
  ];

  const frontend = [
    {
      name: "HTML & CSS",
      level: 95,
      description: "Semantic markup & modern styling",
      color: "from-orange-500 to-blue-500",
      icon: "🎨"
    },
    { 
      name: "Tailwind CSS", 
      level: 92,
      description: "Utility-first CSS framework",
      color: "from-cyan-400 to-blue-500",
      icon: "🌊"
    },
    { 
      name: "JavaScript & TypeScript", 
      level: 90,
      description: "Modern ES6+ & type safety",
      color: "from-yellow-400 to-orange-500",
      icon: "⚡"
    },
  ];

  const backend = [
    { 
      name: "Node.js", 
      level: 87,
      description: "Server-side JavaScript runtime",
      color: "from-green-500 to-emerald-600",
      icon: "🟢"
    },
    { 
      name: "Python", 
      level: 83,
      description: "Versatile programming language",
      color: "from-blue-400 to-indigo-600",
      icon: "🐍"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <ProfileHeader />

      {/* Projects Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-sm">Building innovative solutions</p>
          </div>
          <MdTurnedInNot className="text-purple-400 animate-pulse" size={24} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section with Modern Design */}
      <section className="mb-16">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
        </div> */}

        {/* Frontend Section - Modern Card Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30">
              <span className="text-2xl">💻</span>
              <h3 className="text-xl font-bold text-purple-300">Frontend</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {frontend.map((tech, i) => (
              <div 
                key={i}
                className="group relative bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{tech.icon}</span>
                    <div className="px-3 py-1 bg-gray-800/80 rounded-lg border border-gray-700">
                      <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {tech.level}%
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">{tech.description}</p>
                  
                  {/* Modern Progress Bar */}
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${tech.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section - Modern Card Grid */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full border border-green-500/30">
              <span className="text-2xl">⚙️</span>
              <h3 className="text-xl font-bold text-green-300">Backend</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {backend.map((tech, i) => (
              <div 
                key={i}
                className="group relative bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{tech.icon}</span>
                    <div className="px-3 py-1 bg-gray-800/80 rounded-lg border border-gray-700">
                      <span className="text-sm font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                        {tech.level}%
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">{tech.description}</p>
                  
                  {/* Modern Progress Bar */}
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${tech.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;