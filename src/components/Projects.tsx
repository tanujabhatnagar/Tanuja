
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Built a scalable microservices architecture for an e-commerce platform handling 10,000+ daily transactions. Implemented services for user management, product catalog, order processing, and payment integration.",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Real-time Chat Application API",
      description: "Developed a real-time messaging API with WebSocket support, user authentication, and message persistence. Supports group chats, file sharing, and message history with search functionality.",
      technologies: ["Java", "Spring WebSocket", "MongoDB", "JWT", "AWS S3"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Banking System Backend",
      description: "Created a secure banking system backend with features like account management, transaction processing, and fraud detection. Implemented ACID compliance and robust security measures.",
      technologies: ["Java", "Spring Security", "PostgreSQL", "RabbitMQ", "Maven"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management API",
      description: "Built a comprehensive task management system with user roles, project organization, deadline tracking, and notification services. Includes reporting and analytics features.",
      technologies: ["Java", "Hibernate", "MySQL", "Spring Mail", "Swagger"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some of the backend systems and APIs I've built throughout my career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
