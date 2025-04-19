import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'SruAura - Portfolio Website',
      description: 'A modern portfolio website built with React and Tailwind CSS, featuring a clean design and smooth animations. Showcases projects, skills, and professional experience in an elegant layout.',
      image: 'image/suraura.png',
      github: 'https://github.com/srushtinb/SruAura',
      live: 'https://srushtinb.github.io/SruAura/',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5']
    },
    {
      title: 'SruNova ChatBot',
      description: 'An AI-powered chatbot application that provides intelligent responses and assistance. Built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/srushtinb/SruNova-ChatBot',
      live: 'https://github.com/srushtinb/SruNova-ChatBot',
      technologies: ['Python', 'NLP', 'Machine Learning', 'AI']
    },
    {
      "title": "To-Do List Web App",
      "description": "A simple and interactive To-Do list application built with HTML, CSS, and JavaScript. Users can add, remove, and mark tasks as completed. It's designed with a clean, responsive interface.",
      "image": "image/Todo.png",
      "github": "https://github.com/srushtinb/To-Do",
      "live": "https://srushtinb.github.io/To-Do/",
      "technologies": ["HTML", "CSS", "JavaScript"]
    }
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen py-20 px-4 max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
            variants={projectVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-gray-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-gray-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;