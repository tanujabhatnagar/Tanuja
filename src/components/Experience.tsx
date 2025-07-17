
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Newgen Software",
      location: "Noida, India",
      period: "Jan 2022 - Sep 2025",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Optimized database queries reducing response time by 40%",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines using Jenkins and Docker"
      ]
    },
    {
      title: "Junior Developer",
      company: "Cargoflash Infotech",
      location: "Gurgaon, India",
      period: "Jan 2021 - Dec 2021",
      description: [
        "Developed RESTful APIs for Air Cargo Tariff Accounts",
        "Integrated third-party payment systems and APIs",
        "Created UI Designs and Developed UI using Angular",
        "Created BRDs and SRS documents for System"
      ]
    },
    {
      title: "Mobile Application Developer",
      company: "Techknowten",
      location: "Noida, India",
      period: "Sep 2020 - Dec 2020",
      description: [
        "Built Makeup app using Flutter",
        "Recreated their already existing app using flutter"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in backend development and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="sticky top-24">
                    <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-8">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                      {exp.company}
                    </h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
