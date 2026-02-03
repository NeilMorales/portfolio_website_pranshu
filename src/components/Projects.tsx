import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <div className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="bg-gray-950 rounded-xl p-8 md:p-10 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <h3 className="text-3xl font-bold text-white mb-4 md:mb-0">
              Plastic Waste Detection System
            </h3>
            <div className="flex gap-3">
              <button className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-200">
                <Github className="w-5 h-5 text-gray-400 hover:text-blue-400" />
              </button>
              <button className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-200">
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">Problem</h4>
              <p className="text-gray-300 leading-relaxed">
                Plastic waste management is a critical environmental challenge. Manual detection and
                classification of plastic waste is time-consuming, error-prone, and inefficient at scale.
                There is a need for an automated system that can accurately identify and categorize
                plastic waste in real-time.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">Approach</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Developed an end-to-end deep learning pipeline leveraging computer vision techniques
                to detect and classify different types of plastic waste. The system uses convolutional
                neural networks (CNNs) trained on a custom dataset of plastic waste images, incorporating
                data augmentation and transfer learning to improve model accuracy and generalization.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Implemented preprocessing techniques including image normalization, edge detection,
                and feature extraction to enhance model performance. The solution includes real-time
                inference capabilities for deployment in waste management facilities.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'Deep Learning', 'Computer Vision'].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">Impact</h4>
              <ul className="space-y-2">
                {[
                  'Achieved high accuracy in plastic waste classification across multiple categories',
                  'Reduced manual inspection time and improved waste sorting efficiency',
                  'Demonstrated strong understanding of ML pipeline: data collection, preprocessing, model training, evaluation, and deployment',
                  'Created a scalable solution applicable to real-world waste management scenarios',
                ].map((impact, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
