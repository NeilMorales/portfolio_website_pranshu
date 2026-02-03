import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently open to internship opportunities, research collaborations, and full-time positions
            in software engineering , data science and machine learning. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <a
              href="mailto:your.email@example.com"
              className="flex items-start gap-4 p-4 bg-gray-950 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-200 group"
            >
              <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/30 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  ranjan.pranshu010@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+919733299594"
              className="flex items-start gap-4 p-4 bg-gray-950 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-200 group"
            >
              <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/30 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  +91 97332 99594
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 bg-gray-950 rounded-xl border border-gray-800">
              <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/30">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Location</p>
                <p className="text-white font-medium">Vellore, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/NeilMorales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-950 rounded-xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-200 group"
                  title="Visit GitHub"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pranshu-ranjan-837b0028a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-950 rounded-xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-200 group"
                  title="Visit LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
