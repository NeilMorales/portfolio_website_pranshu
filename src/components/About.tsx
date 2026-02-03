import { Code2, Brain, Award, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Software Engineering',
      description: 'Strong foundation in algorithms, data structures, and system design',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Deep learning, computer vision, and data-driven solutions',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Consistent performance with zero arrears throughout academic career',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Leading technical teams and organizing large-scale events',
    },
  ];

  return (
    <div className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a Computer Science Engineering student at Vellore Institute of Technology (2023–2027),
              pursuing a minor in Data Science & Engineering. My academic journey is marked by a strong
              record with zero arrears, reflecting my commitment to excellence.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My technical expertise spans software development, machine learning, and data-driven systems.
              I am particularly interested in building scalable solutions that leverage cutting-edge technologies
              to address complex real-world challenges.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond technical skills, I bring leadership experience as Publicity Head & Event Coordinator
              at Matrix – The Multimedia Club, where I have organized events and led teams to deliver impactful results.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am actively seeking opportunities in software engineering, machine learning research, and
              product-based companies where I can contribute to innovative projects and continue growing as an engineer.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <item.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
