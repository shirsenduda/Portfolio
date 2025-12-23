

import React from 'react';
import { ExternalLink } from 'lucide-react';

// ==================== PROJECT CARD COMPONENT ====================
function ProjectCard({ project }) {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition group ${
        project.link ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition`}
        >
          <project.icon size={28} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            {project.link && (
              <ExternalLink
                size={18}
                className="text-gray-400 group-hover:text-white transition"
              />
            )}
          </div>
          <p className="text-sm text-gray-400">{project.desc}</p>
          {project.link && (
            <p className="text-xs text-blue-400 mt-2 group-hover:text-blue-300 transition">
              View Live Demo →
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
