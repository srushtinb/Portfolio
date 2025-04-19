import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.h1 
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        FullStack developer
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Hello, I'm SRUSHTI N B — passionate about building full stack applications that solve real-world problems.
      </motion.p>
      
      <motion.div 
        className="relative w-48 h-48 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <img
          src="image/sonu_cementbg.png"
          alt="Profile"
          className="rounded-full w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Link
          to="/about"
          className="bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-full mb-8 inline-block"
        >
          About me
        </Link>
      </motion.div>

      <motion.div 
        className="flex space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
        <motion.a 
          href="mailto:contact@example.com" 
          className="hover:text-gray-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Mail className="w-6 h-6" />
        </motion.a>
      </motion.div>

      <motion.footer 
        className="fixed bottom-4 left-0 w-full text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        © 2025 / SRUSHTI N B
      </motion.footer>
    </div>
  );
};

export default Home;