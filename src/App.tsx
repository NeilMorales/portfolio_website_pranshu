import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import CoreCompetencies from './components/CoreCompetencies';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="leadership">
          <Leadership />
        </section>

        <section id="competencies">
          <CoreCompetencies />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-gray-950 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Pranshu Ranjan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
