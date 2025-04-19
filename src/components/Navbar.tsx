import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Image } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-white/10' : '';
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-md rounded-full px-6 py-3">
      <ul className="flex items-center space-x-6">
        <li>
          <Link to="/" className={`p-2 rounded-full ${isActive('/')}`}>
            <Home className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link to="/about" className={`p-2 rounded-full ${isActive('/about')}`}>
            <User className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link to="/work" className={`p-2 rounded-full ${isActive('/work')}`}>
            <Briefcase className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={`p-2 rounded-full ${isActive('/gallery')}`}>
            <Image className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;