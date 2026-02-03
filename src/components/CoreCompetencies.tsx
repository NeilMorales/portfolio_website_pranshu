import { Users, Brain, MessageSquare, Lightbulb } from 'lucide-react';

export default function CoreCompetencies() {
  const competencies = [
    {
      icon: Users,
      title: 'Leadership & Collaboration',
      description:
        'Proven ability to lead technical teams, coordinate cross-functional projects, and foster collaborative environments that drive results.',
      skills: ['Team Leadership', 'Project Coordination', 'Mentoring', 'Stakeholder Management'],
    },
    {
      icon: Brain,
      title: 'Analytical & Problem-Solving',
      description:
        'Strong foundation in algorithms and data structures with a systematic approach to breaking down complex problems into actionable solutions.',
      skills: ['Critical Thinking', 'Algorithm Design', 'Data Analysis', 'System Design'],
    },
    {
      icon: MessageSquare,
      title: 'Communication & Organization',
      description:
        'Effective communicator with experience in technical documentation, presentations, and managing large-scale events with meticulous attention to detail.',
      skills: ['Technical Writing', 'Public Speaking', 'Event Management', 'Documentation'],
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Adaptability',
      description:
        'Passionate about learning emerging technologies and adapting quickly to new frameworks, tools, and methodologies in fast-paced environments.',
      skills: ['Quick Learning', 'Technology Adoption', 'Creative Thinking', 'Continuous Improvement'],
    },
  ];

  return (
    <div className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Core Competencies</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <competency.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{competency.title}</h3>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{competency.description}</p>

              <div className="flex flex-wrap gap-2">
                {competency.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gray-950 text-gray-400 rounded-lg text-xs font-medium border border-gray-800"
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
