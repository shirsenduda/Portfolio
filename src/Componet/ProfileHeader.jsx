// ProfileHeader.jsx
import React from "react";
import { Github, Linkedin, Mail, MapPin, Briefcase } from "lucide-react";

function ProfileHeader() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shirsenduda", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
  ];

  return (
    <div className="mb-8">
      <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800/50">
        <div className="flex items-center gap-6">
          {/* Profile Image */}
          <div className="relative group flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 shadow-lg shadow-purple-500/20">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <span className="text-3xl">👨‍💻</span>
              </div>
            </div>
            {/* Status Badge */}
            {/* <div className="absolute -bottom-1 -right-1 bg-gray-900 rounded-full px-2 py-0.5 border border-green-500">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-green-500">Open</span>
              </div>
            </div> */}
          </div>

          {/* Profile Info */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Shirsendu Das
            </h1>
            <p className="text-sm text-purple-400 font-medium mb-2">@SHIR_8</p>
            <p className="text-sm text-purple-400 font-medium mb-2">BTECH CSE 3RD YEAR AT KIIT UNIVERSITY</p>
            
            {/* Role & Location */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
              <div className="flex items-center gap-1.5">
                <Briefcase size={14} className="text-purple-400" />
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-pink-400" />
                <span>Agartala, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon size={16} className="text-gray-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Stats - Hidden on mobile */}
          <div className="hidden md:flex gap-3">
            <div className="bg-gray-800/50 rounded-xl px-4 py-2 text-center border border-gray-700/50">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl px-4 py-2 text-center border border-gray-700/50">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                3+
              </div>
              <div className="text-xs text-gray-400">Years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;