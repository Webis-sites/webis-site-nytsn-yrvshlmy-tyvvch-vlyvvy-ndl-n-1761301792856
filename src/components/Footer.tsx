'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  // Check if we need to show the back to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Animation variants for social icons
  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Animation variants for back to top button
  const backToTopVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
      }
    },
  };

  return (
    <footer id="footer" dir="rtl" className="bg-gray-100 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info Section */}
          <div className="space-y-4">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-[#8c8c8c]"
            >
              ניצן ירושלמי - תיווך וליווי נדל״ן
            </motion.h3>
            <p className="text-gray-600">
              מתווך נדל״ן מקצועי ובעל ניסיון רחב בשוק הישראלי והאמריקאי. מתמחה במכירת והשכרת דירות בתל אביב ובמרכז הארץ, לצד ליווי משקיעים ברכישת נכסים בארצות הברית.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl font-bold text-[#8c8c8c]"
            >
              ניווט מהיר
            </motion.h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#hero" className="text-gray-600 hover:text-[#ffae00] transition-colors duration-300">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-[#ffae00] transition-colors duration-300">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-[#ffae00] transition-colors duration-300">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="/#properties" className="text-gray-600 hover:text-[#ffae00] transition-colors duration-300">
                  נכסים
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-600 hover:text-[#ffae00] transition-colors duration-300">
                  המלצות
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-[#ffae00] transition-colors duration-300">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-bold text-[#8c8c8c]"
            >
              צור קשר
            </motion.h3>
            <div className="space-y-2">
              <div className="flex items-center justify-end space-x-2 space-x-reverse">
                <span className="text-gray-600">050-1234567</span>
                <FaPhone className="text-[#ffae00]" />
              </div>
              <div className="flex items-center justify-end space-x-2 space-x-reverse">
                <span className="text-gray-600">nitzan@realestate.com</span>
                <FaEnvelope className="text-[#ffae00]" />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-end space-x-4 space-x-reverse mt-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="bg-[#8c8c8c] text-white p-2 rounded-full"
              >
                <FaFacebook size={18} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="bg-[#8c8c8c] text-white p-2 rounded-full"
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="bg-[#8c8c8c] text-white p-2 rounded-full"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a 
                href="https://wa.me/9721234567" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="bg-[#8c8c8c] text-white p-2 rounded-full"
              >
                <FaWhatsapp size={18} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-center md:text-right w-full">
            © {currentYear} ניצן ירושלמי - תיווך וליווי נדל״ן. כל הזכויות שמורות.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 bg-[#ffae00] text-white p-3 rounded-full shadow-lg focus:outline-none"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={backToTopVariants}
        aria-label="חזרה לראש העמוד"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;