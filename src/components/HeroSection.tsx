'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: '#ffae00',
      color: '#ffffff',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section 
      id="hero-section" 
      className="relative h-screen w-full overflow-hidden"
      dir="rtl"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="נדל״ן מקצועי"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          className="text-right"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            ניצן ירושלמי
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-[#ffae00]">
              תיווך וייעוץ נדל״ן
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-white max-w-2xl mr-0 ml-auto mb-8"
            variants={itemVariants}
          >
            מתווך נדל״ן מקצועי ובעל ניסיון רחב בשוק הישראלי והאמריקאי. מתמחה במכירת והשכרת דירות בתל אביב ובמרכז הארץ, לצד ליווי משקיעים ברכישת נכסים בארצות הברית.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="flex items-center justify-center gap-2 bg-white text-[#8c8c8c] hover:bg-[#ffae00] hover:text-white px-8 py-4 rounded-md font-bold text-lg transition-colors duration-300 shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
          >
            צרו קשר
            <FaPhone className="ml-2" />
            <FaArrowLeft className="mr-1" />
          </motion.button>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="absolute bottom-10 left-10 h-20 w-20 border-l-4 border-b-4 border-[#ffae00]"
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            y: 0,
            transition: { 
              duration: 0.8, 
              delay: 1.2 
            } 
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;