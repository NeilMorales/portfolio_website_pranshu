export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'R'],
    },
    {
      category: 'Software & Tools',
      skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Jupyter', 'Google Colab'],
    },
    {
      category: 'Core CS Concepts',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'System Design',
      ],
    },
    {
      category: 'Specialized Domains',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Natural Language Processing',
        'Data Analysis',
        'Statistical Modeling',
        'Web Development',
      ],
    },
  ];

  return (
    <div className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-950 text-gray-300 rounded-lg text-sm font-medium border border-gray-800 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
