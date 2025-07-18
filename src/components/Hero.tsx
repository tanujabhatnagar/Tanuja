
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="../IMG_5756.jpg"
              alt="Tanujs Bhatnagar"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-700 shadow-lg"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
             Tanuja Bhatnagar
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 mb-6">
              Backend Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionate backend developer with 4+ years of experience in Java and software development. 
              I specialize in building scalable, efficient, and maintainable server-side applications 
              that power modern web and mobile experiences.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:john@example.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-6 h-6 text-red-500" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
