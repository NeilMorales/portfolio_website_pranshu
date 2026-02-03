import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Pranshu Ranjan
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            Computer Science Engineering Student
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Software Development | Data Science & Machine Learning
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Building scalable software solutions and ML-driven systems with strong CS fundamentals.
            Passionate about leveraging data science and engineering to solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://drive.google.com/file/d/1FzE6WJ0PgizEz_Yipb_oesnioI25vSos/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center border border-gray-700"
            >
              <Download size={20} />
              Download Resume
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center border border-gray-700"
            >
              <Mail size={20} />
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
