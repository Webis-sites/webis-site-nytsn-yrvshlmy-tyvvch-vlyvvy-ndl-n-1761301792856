'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaHandshake, FaGlobeAmericas, FaHome, FaUserTie } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
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
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">אמינות ומקצועיות</h3>
                  <p className="text-gray-600">מחויבות לשקיפות מלאה ושירות ברמה הגבוהה ביותר</p>
                </div>
              </motion.div>
              
              <motion.div variants={featureVariants} className="flex items-start">
                <div className="bg-[#ffae00] p-3 rounded-lg mr-4">
                  <FaGlobeAmericas className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">ניסיון בינלאומי</h3>
                  <p className="text-gray-600">מומחיות בשווקי נדל״ן בישראל ובארצות הברית</p>
                </div>
              </motion.div>
              
              <motion.div variants={featureVariants} className="flex items-start">
                <div className="bg-[#ffae00] p-3 rounded-lg mr-4">
                  <FaHome className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">התמחות מקומית</h3>
                  <p className="text-gray-600">ידע מעמיק בשוק הנדל״ן בתל אביב והמרכז</p>
                </div>
              </motion.div>
              
              <motion.div variants={featureVariants} className="flex items-start">
                <div className="bg-[#ffae00] p-3 rounded-lg mr-4">
                  <FaUserTie className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">ליווי אישי</h3>
                  <p className="text-gray-600">תמיכה וייעוץ לאורך כל תהליך העסקה</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#ffae00] rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="ניצן ירושלמי - מתווך נדל״ן מקצועי" 
                className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover relative z-10"
                style={{ aspectRatio: '3/4' }}
              />
              <div className="absolute -bottom-6 -left-6 bg-[#8c8c8c] text-white p-4 rounded-lg shadow-lg z-20">
                <p className="font-bold text-lg">ניצן ירושלמי</p>
                <p className="text-sm">מומחה נדל״ן | 10+ שנות ניסיון</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-20 p-8 bg-gray-50 rounded-lg border-r-4 border-[#ffae00] shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">הגישה שלי</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            "אני מאמין שרכישת או מכירת נכס היא אחת ההחלטות הפיננסיות המשמעותיות ביותר בחיים. 
            המטרה שלי היא להפוך את התהליך לפשוט, שקוף ומוצלח עבור כל לקוח. 
            אני מחויב להבין את הצרכים הייחודיים של כל אחד ולהתאים את השירות בהתאם, 
            תוך שימוש בניסיון הרב שלי בשוק המקומי והבינלאומי."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;