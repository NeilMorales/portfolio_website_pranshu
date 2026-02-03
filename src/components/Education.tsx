import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: 'Vellore Institute of Technology',
      degree: 'B.Tech in Computer Science Engineering',
      minor: 'Minor in Data Science & Engineering',
      duration: '2023 - 2027',
      location: 'Vellore, Tamil Nadu',
      achievements: [
        'Zero arrears throughout academic tenure',
        'Strong academic performance across core CS subjects',
        'Active participation in technical clubs and events',
      ],
    },
    {
      institution: 'Mayo International School',
      degree: 'CBSE Class 12th',
      duration: '2022 - 2023',
      location: 'Delhi',
      achievements: [
        'Consistent academic performance',
        'Strong foundation in Mathematics and Computer Science',
      ],
    },
    {
      institution: 'Delhi Public School, Indirapuram',
      degree: 'CBSE Class 10th',
      duration: '2020 - 2021',
      location: 'Ghaziabad, Uttar Pradesh',
      achievements: [
        'Excellent academic record',
        'Built foundational skills in core subjects',
      ],
    },
  ];

  return (
    <div className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.institution}</h3>
                      <p className="text-lg text-blue-400 font-medium">{edu.degree}</p>
                      {edu.minor && (
                        <p className="text-base text-gray-400 mt-1">{edu.minor}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 ml-12">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
