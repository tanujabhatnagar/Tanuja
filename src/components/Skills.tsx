
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "Kotlin", level: 60 },
        { name: "JavaScript", level: 75 },
        { name: "C", level: 90 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "Hibernate", level: 85 },
        { name: "Maven/Gradle", level: 80 },
        { name: "JUnit", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MS SQL", level: 100 },
        { name: "PostgreSQL", level: 95 },
        { name: "MongoDB", level: 65 },
        { name: "Oracle", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "AWS", level: 80 },
        { name: "Git", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build robust backend solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
