'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-motion-hooks';
import { FaHandshake, FaGlobeAmericas, FaHome, FaUserTie } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section 
      id="about" 
      dir="rtl" 
      className="py-16 md:py-24 bg-white text-right"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            >
              <span className="text-[#ffae00]">ניצן ירושלמי</span> - מומחה נדל״ן בעל ניסיון
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-700 leading-relaxed">
              ניצן ירושלמי הוא מתווך נדל״ן מקצועי ובעל ניסיון רחב בשוק הישראלי והאמריקאי. 
              עם שנים של ניסיון בתחום, ניצן מתמחה במכירת והשכרת דירות בתל אביב ובמרכז הארץ, 
              לצד ליווי משקיעים ברכישת נכסים בארצות הברית.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg mb-8 text-gray-700 leading-relaxed">
              הגישה האישית של ניצן מבוססת על אמינות, נגישות ומקצועיות. 
              ההבנה המעמיקה שלו בשוק המקומי והבינלאומי מאפשרת לו להציע ללקוחותיו 
              את הפתרונות הטובים ביותר המותאמים לצרכיהם הייחודיים.
            </motion.p>
            
            <motion.div 
              variants={containerVariants} 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
            >
              <motion.div variants={featureVariants} className="flex items-start">
                <div className="bg-[#ffae00] p-3 rounded-lg mr-4">
                  <FaHandshake className="text-white text-xl" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;