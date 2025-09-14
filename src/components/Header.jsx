import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      className="bg-white shadow-md sticky top-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-1 flex justify-center md:justify-start">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-3xl mr-2">☕</span>
              <div>
                <h1 className="text-2xl font-bold text-amber-900">Pioni Coffee</h1>
                <p className="text-xs text-amber-700">Premium Coffee Experience</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-amber-900 ${
                  location.pathname === item.path
                    ? 'text-amber-900 border-b-2 border-amber-900'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-amber-900"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 px-4 font-medium transition-colors hover:text-amber-900 hover:bg-amber-50 ${
                  location.pathname === item.path
                    ? 'text-amber-900 bg-amber-50'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;