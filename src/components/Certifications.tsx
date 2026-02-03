import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <div className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="bg-gray-900 rounded-xl p-8 md:p-10 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/30 flex-shrink-0">
              <Award className="w-8 h-8 text-blue-400" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Data Structures & Algorithms Certification
                  </h3>
                  <p className="text-lg text-blue-400 font-medium">GeeksforGeeks</p>
                </div>
                <button className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-200 text-gray-300 hover:text-blue-400">
                  <span className="text-sm font-medium">View Certificate</span>
                  <ExternalLink size={16} />
                </button>
              </div>

              <div className="space-y-4 mt-6">
                <p className="text-gray-300 leading-relaxed">
                  Completed comprehensive training in Data Structures and Algorithms, demonstrating
                  proficiency in fundamental computer science concepts essential for solving complex
                  computational problems efficiently.
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Areas Covered</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Arrays, Linked Lists, Stacks & Queues',
                      'Trees & Binary Search Trees',
                      'Graphs & Graph Algorithms',
                      'Sorting & Searching Algorithms',
                      'Dynamic Programming',
                      'Greedy Algorithms',
                      'Hashing & Hash Tables',
                      'Recursion & Backtracking',
                    ].map((area, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">✓</span>
                        <span className="text-sm">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 mt-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-semibold text-blue-400">Achievement:</span> This certification
                    demonstrates strong problem-solving capabilities and algorithmic thinking, essential
                    for technical interviews and building efficient software systems. Mastery of these
                    concepts enables optimization of code performance and scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
