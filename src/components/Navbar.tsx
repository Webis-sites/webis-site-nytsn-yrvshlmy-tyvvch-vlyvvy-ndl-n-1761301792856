'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaBuilding, FaUser, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { id: 'home', label: 'בית', icon: <FaHome className="ml-2" /> },
    { id: 'services', label: 'שירותים', icon: <FaBuilding className="ml-2" /> },
    { id: 'portfolio', label: 'תיק עבודות', icon: <FaBuilding className="ml-2" /> },
    { id: 'about', label: 'אודות', icon: <FaUser className="ml-2" /> },
    { id: 'faq', label: 'שאלות נפוצות', icon: <FaQuestionCircle className="ml-2" /> },
    { id: 'contact', label: 'צור קשר', icon: <FaEnvelope className="ml-2" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleNavItemClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavItemClick(id);
    }
  };

  return (
    <nav 
      id="main-navigation"
      dir="rtl"
      ref={navRef}
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      aria-label="תפריט ראשי"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                alt="ניצן ירושלמי לוגו" 
                className="h-10 w-10 rounded-full object-cover mr-3"
              />
              <div>
                <h1 className="text-lg font-bold text-right text-gray-800">ניצן ירושלמי</h1>
                <p className="text-xs text-right text-gray-600">תיווך וליווי נדל״ן</p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavItemClick(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className={`px-4 py-2 mx-1 rounded-md flex items-center text-right transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                  activeSection === item.id
                    ? 'bg-[#ffae00] text-white font-medium'
                    : 'text-[#8c8c8c] hover:bg-gray-100'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                tabIndex={0}
              >
                {item.icon}
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#8c8c8c] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavItemClick(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className={`w-full py-3 px-4 rounded-md flex items-center text-right transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    activeSection === item.id
                      ? 'bg-[#ffae00] text-white font-medium'
                      : 'text-[#8c8c8c] hover:bg-gray-100'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  tabIndex={0}
                >
                  {item.icon}
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;