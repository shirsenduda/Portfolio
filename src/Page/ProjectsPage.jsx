// ProjectsPage.jsx - New Card Design
import React from 'react';
import { Code, Star, GitBranch, ExternalLink, ArrowUpRight } from 'lucide-react';

function ProjectsPage() {
  const projects = [
    {
      name: 'GREENBANK',
      desc: 'Modern money transfer application with secure transactions',
      color: 'from-teal-600 to-cyan-600',
      link: 'https://bank-management-system-frontent.vercel.app/',
      stars: 45,
      forks: 12,
      image: '🏦'
    },
    {
      name: 'VitalCare',
      desc: 'Healthcare management platform for patients and doctors',
      color: 'from-yellow-600 to-orange-600',
      link: 'https://bank-management-system-frontent.vercel.app/',
      stars: 32,
      forks: 8,
      image: '🏥'
    },
    {
      name: 'E-Commerce Platform',
      desc: 'Full-featured online store with payment integration',
      color: 'from-purple-600 to-pink-600',
      link: '#',
      stars: 28,
      forks: 15,
      image: '🛍️'
    },
    {
      name: 'Task Manager Pro',
      desc: 'Advanced productivity tool with team collaboration',
      color: 'from-blue-600 to-indigo-600',
      link: '#',
      stars: 19,
      forks: 6,
      image: '✅'
    },
    {
      name: 'Weather Dashboard',
      desc: 'Real-time weather tracking with forecasts',
      color: 'from-cyan-600 to-blue-600',
      link: '#',
      stars: 24,
      forks: 9,
      image: '🌤️'
    },
    {
      name: 'File Sharing App',
      desc: 'Secure file transfer system with encryption',
      color: 'from-orange-600 to-red-600',
      link: '#',
      stars: 17,
      forks: 5,
      image: '📁'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3">All Projects</h1>
          <p className="text-gray-400">A collection of my work and contributions</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-6 h-full transition-all duration-300 hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-500/20">
                
                {/* Icon Circle with Gradient */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{project.image}</span>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Divider */}
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Star size={14} className="group-hover:fill-yellow-400 group-hover:text-yellow-400 transition-all" />
                          <span className="font-medium">{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <GitBranch size={14} />
                          <span className="font-medium">{project.forks}</span>
                        </div>
                      </div>
                      
                      <ExternalLink size={16} className="text-gray-600 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Gradient Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;