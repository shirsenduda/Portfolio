import React from 'react';

function SkillsPage() {
  const skills = {
    frontend: [
      { name: 'HTML & CSS', level: 95, icon: '🎨' },
      { name: 'JavaScript', level: 90, icon: '⚡' },
      { name: 'React', level: 88, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 92, icon: '🌊' },
      { name: 'TypeScript', level: 85, icon: '📘' }
    ],
    backend: [
      { name: 'Node.js', level: 87, icon: '🟢' },
      { name: 'Python', level: 83, icon: '🐍' },
      { name: 'Express', level: 86, icon: '🚂' },
      { name: 'MongoDB', level: 81, icon: '🍃' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-3xl font-bold mb-6 capitalize">{category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((skill, i) => (
                  <div key={i} className="bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/50 transition">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{skill.icon}</span>
                        <span className="font-semibold text-lg">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;