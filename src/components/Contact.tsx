import React from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const freelanceLink = "https://calendly.com/tanujabhatnagar09/30min"; // replace with actual link
  const jobLink = "https://calendly.com/tanujabhatnagar09/job-opportunity"; // replace with actual link

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and software development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">tanujabhatnagar09@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Noida, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Buttons Instead of Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center space-y-6">
            <button
              onClick={() => window.open(freelanceLink, "_blank")}
              className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-800 transition-colors duration-200 font-medium text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Discuss Freelance Project
            </button>

            <button
              onClick={() => window.open(jobLink, "_blank")}
              className="w-full flex items-center justify-center px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-800 transition-colors duration-200 font-medium text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Discuss Experience & Job Opportunity
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
