
import React from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      title: "Building Scalable Microservices with Spring Boot",
      excerpt: "Learn how to design and implement microservices architecture using Spring Boot, including service discovery, load balancing, and fault tolerance patterns.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Java", "Spring Boot", "Microservices"],
      link: "https://medium.com/@johndoe/building-scalable-microservices",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
    },
    {
      title: "Optimizing Database Performance in Java Applications",
      excerpt: "Discover advanced techniques for database optimization, including connection pooling, query optimization, and caching strategies for better application performance.",
      date: "2023-12-10",
      readTime: "6 min read",
      tags: ["Java", "Database", "Performance"],
      link: "https://medium.com/@johndoe/database-optimization",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop"
    },
    {
      title: "JWT Authentication and Authorization in Spring Security",
      excerpt: "A comprehensive guide to implementing secure authentication and authorization using JWT tokens in Spring Boot applications with best practices.",
      date: "2023-11-22",
      readTime: "10 min read",
      tags: ["Security", "JWT", "Spring Security"],
      link: "https://medium.com/@johndoe/jwt-spring-security",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      title: "Docker and Kubernetes for Java Developers",
      excerpt: "Step-by-step guide to containerizing Java applications with Docker and deploying them to Kubernetes clusters for production-ready deployments.",
      date: "2023-10-05",
      readTime: "12 min read",
      tags: ["Docker", "Kubernetes", "DevOps"],
      link: "https://medium.com/@johndoe/docker-kubernetes-java",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge and insights about backend development, Java, and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(post.date)}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Read More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            View All Posts
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
