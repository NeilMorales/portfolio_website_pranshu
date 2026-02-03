import { Users, Calendar, TrendingUp } from 'lucide-react';

export default function Leadership() {
  return (
    <div className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Leadership & Extracurriculars
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="bg-gray-950 rounded-xl p-8 md:p-10 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/30 flex-shrink-0">
              <Users className="w-8 h-8 text-blue-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Publicity Head & Event Coordinator
              </h3>
              <p className="text-lg text-blue-400 font-medium mb-4">
                Matrix – The Multimedia Club, VIT
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar size={16} />
                <span>2023 - Present</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                {[
                  'Lead publicity campaigns and marketing strategies to promote club events and initiatives',
                  'Coordinate and manage large-scale technical and multimedia events with diverse audiences',
                  'Collaborate with cross-functional teams to ensure seamless event execution',
                  'Develop creative content and promotional materials to enhance club visibility',
                  'Mentor junior members and foster a collaborative team environment',
                ].map((responsibility, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  <h5 className="font-semibold text-white">Event Scale</h5>
                </div>
                <p className="text-gray-300 text-sm">
                  Successfully organized and promoted events reaching hundreds of participants
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-blue-400" />
                  <h5 className="font-semibold text-white">Team Leadership</h5>
                </div>
                <p className="text-gray-300 text-sm">
                  Led and mentored team members to achieve collective goals effectively
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <h5 className="font-semibold text-white">Impact</h5>
                </div>
                <p className="text-gray-300 text-sm">
                  Increased club engagement and visibility through strategic initiatives
                </p>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-xl mt-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Skills Developed</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Leadership',
                  'Event Management',
                  'Team Coordination',
                  'Public Relations',
                  'Marketing Strategy',
                  'Creative Design',
                  'Communication',
                  'Project Management',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg text-sm font-medium border border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
