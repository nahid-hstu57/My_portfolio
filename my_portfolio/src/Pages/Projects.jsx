import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faUtensils,
  faCamera,
  faLeaf,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = [
    {
      id: 1,
      title: "Shop Our Meals",
      subtitle: "Main Meals",
      description: "A comprehensive meal shop platform where users can browse, select, and order delicious main meals. Features smooth navigation and an engaging user interface.",
      icon: faUtensils,
      iconColor: "text-orange-500",
      bgGradient: "from-orange-50 to-red-50",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router", "LocalStorage"],
      githubLink: "#",
      liveLink: "#",
      images: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
      ]
    },
    {
      id: 2,
      title: "Encore",
      subtitle: "Low-Calorie Food Brand Website",
      description: "Encore is a stylish website for a low-calorie food brand targeting married couples. It allows users to explore healthy meals, add items to cart, view team info, and read terms — all through a smooth and engaging user experience.",
      icon: faLeaf,
      iconColor: "text-green-500",
      bgGradient: "from-green-50 to-emerald-50",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router", "LocalStorage"],
      githubLink: "#",
      liveLink: "#",
      images: [
        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop",
      ]
    },
    {
      id: 3,
      title: "Resolve",
      subtitle: "Photo Sharing Website for Solo Users",
      description: "A platform where users can upload their own photos, browse images shared by others, and subscribe to a newsletter. Designed to help people who live alone feel connected through visual moments.",
      icon: faCamera,
      iconColor: "text-purple-500",
      bgGradient: "from-purple-50 to-pink-50",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Express"],
      githubLink: "#",
      liveLink: "#",
      images: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
      ]
    },
  ];

  const nextImage = (projectId, currentIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (currentIndex + 1) % totalImages
    }));
  };

  const prevImage = (projectId, currentIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (currentIndex - 1 + totalImages) % totalImages
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-1 rounded-2xl mb-16 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl opacity-95 animate-slide-up">
            Explore my creative works and innovative projects
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-1 align-middle lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const currentIdx = currentImageIndex[project.id] || 0;
            
            return (
              <div
                key={project.id}
                className={`group bg-gradient-to-br ${project.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Slider Section */}
                <div className="relative bg-black">
                  <img
                    src={project.images[currentIdx]}
                    alt={`${project.title} screenshot ${currentIdx + 1}`}
                    className="w-full h-56 object-cover transition-opacity duration-300"
                  />
                  
                  {/* Slider Buttons */}
                  <button
                    onClick={() => prevImage(project.id, currentIdx, project.images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  
                  <button
                    onClick={() => nextImage(project.id, currentIdx, project.images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: idx }))}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-xl bg-white shadow-md ${project.iconColor}`}>
                      <FontAwesomeIcon icon={project.icon} className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white bg-opacity-70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}