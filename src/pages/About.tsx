import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    languages: {
      spoken: ['English – Fluent', 'Hindi – Conversational', 'Kannada – Native'],
      programming: ['C', 'Java', 'JavaScript']
    },
    webDev: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Next.js'],
    tools: ['GitHub', 'Figma', 'MongoDB', 'VS Code', 'Docker(CLI)', 'Leetcode', 'HackerRank', 'Codechef', 'Linux', 'NPM']
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen py-20 px-4 max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-start gap-12">
        <motion.div 
          className="w-full md:w-1/3"
          variants={itemVariants}
        >
          <motion.img
            src="image/sonu_cementbg.png"
            alt="Profile"
            className="rounded-lg w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="mt-6 space-y-6">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.spoken.map((lang) => (
                  <motion.span
                    key={lang}
                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.programming.map((lang) => (
                  <motion.span
                    key={lang}
                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.webDev.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-2/3"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="space-y-6 text-gray-300">
            <motion.p variants={itemVariants}>
              I'm a Computer Science Engineering undergraduate at Alva's Institute of Engineering and Technology, 
              with a strong passion for software development and modern web technologies. I've completed hands-on 
              training in the MERN stack (MongoDB, Express.js, React, Node.js) and further expanded my expertise 
              by learning Next.js to build high-performance, scalable web applications.
            </motion.p>
            <motion.p variants={itemVariants}>
              I've developed full-stack projects ranging from Srunova-Interior design website and AI-powered chatbot to 
              design-centric websites. Beyond development, I'm actively involved in competitive programming and 
              problem-solving, with a growing number of solved problems on platforms like CodeChef and LeetCode. 
              These experiences have strengthened my logical thinking, algorithmic skills, and ability to tackle 
              real-world challenges efficiently.
            </motion.p>
            <motion.p variants={itemVariants}>
              I constantly explore the latest advancements in tech to stay ahead in the web development space. 
              My goal is to build seamless, user-friendly digital experiences that solve problems and deliver impact.
            </motion.p>

            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold">Education</h2>
              <div>
                <h3 className="text-xl font-medium">Alva's Institute of Engineering and Technology</h3>
                <p className="text-gray-400">Bachelor's degree in Computer Science and Engineering (Current)</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Siddaganga PU College</h3>
                <p className="text-gray-400">Higher Secondary Education (12th Standard)</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-white/5 rounded-lg p-6 mt-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Schedule a Call</h2>
            <p className="text-gray-300 mb-4">
              Interested in working together? Let's schedule a call to discuss your project.
            </p>
            <motion.a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Call
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;