'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaHandshake, FaSearch, FaEye, FaComments, FaFileSignature } from 'react-icons/fa';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const RTLProcessSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "פגישת ייעוץ ראשונית",
      description: "נפגשים לשיחת היכרות, מבינים את הצרכים והציפיות שלך ומגדירים יעדים ברורים",
      icon: <FaHandshake className="text-2xl md:text-3xl" />
    },
    {
      id: 2,
      title: "חיפוש/רישום נכס",
      description: "מאתרים את הנכסים המתאימים ביותר או מכינים את הנכס שלך לשוק באופן אופטימלי",
      icon: <FaSearch className="text-2xl md:text-3xl" />
    },
    {
      id: 3,
      title: "צפייה בנכסים/שיווק",
      description: "מלווים אותך בסיורים בנכסים או מפעילים אסטרטגיית שיווק יעילה למכירת הנכס שלך",
      icon: <FaEye className="text-2xl md:text-3xl" />
    },
    {
      id: 4,
      title: "משא ומתן",
      description: "מנהלים משא ומתן מקצועי להשגת התנאים הטובים ביותר עבורך",
      icon: <FaComments className="text-2xl md:text-3xl" />
    },
    {
      id: 5,
      title: "סגירת העסקה",
      description: "מלווים את תהליך החתימה והעברת הנכס באופן חלק ובטוח",
      icon: <FaFileSignature className="text-2xl md:text-3xl" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="rtl-process-section" dir="rtl" className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8c8c8c]">
            תהליך העבודה שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            אנו מלווים אותך בכל שלב בדרך לעסקת הנדל״ן המושלמת
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={`flex ${isMobile ? 'flex-col space-y-8' : 'flex-row-reverse justify-between items-start'}`}
        >
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                variants={itemVariants}
                className={`flex flex-col items-center ${isMobile ? 'w-full' : 'w-1/5'}`}
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#8c8c8c] flex items-center justify-center text-white shadow-lg mb-4"
                  >
                    {step.icon}
                  </motion.div>
                  {!isMobile && index < processSteps.length - 1 && (
                    <motion.div
                      variants={lineVariants}
                      className="absolute top-1/2 right-full w-full h-1 bg-[#ffae00] origin-right"
                      style={{ transform: 'translateY(-50%)' }}
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#8c8c8c] mb-2 text-right w-full">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-right w-full">
                  {step.description}
                </p>
              </motion.div>

              {isMobile && index < processSteps.length - 1 && (
                <motion.div
                  variants={lineVariants}
                  className="w-1 h-8 bg-[#ffae00] mx-auto"
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RTLProcessSection;