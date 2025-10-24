'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaHome, FaKey, FaChartLine, FaComments } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start h-full border-r-4 border-[#ffae00]"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.2,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="text-[#ffae00] text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#8c8c8c] mb-3 text-right w-full">{title}</h3>
      <p className="text-gray-600 text-right w-full">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const services = [
    {
      icon: <FaHome />,
      title: "מכירת נכסים בתל אביב והמרכז",
      description: "ליווי מקצועי ואישי בתהליך מכירת דירות ונכסים באזור תל אביב והמרכז, כולל שיווק, פרסום, ניהול משא ומתן וסגירת עסקאות בהצלחה.",
    },
    {
      icon: <FaKey />,
      title: "השכרת נכסים בתל אביב והמרכז",
      description: "מציאת שוכרים איכותיים לנכסים שלך, ניהול תהליך ההשכרה מא׳ עד ת׳, כולל חוזים, בדיקות רקע, והתאמה מדויקת בין בעלי נכסים לשוכרים.",
    },
    {
      icon: <FaChartLine />,
      title: "ייעוץ השקעות נדל״ן בארה״ב",
      description: "ליווי משקיעים ישראלים ברכישת נכסים בארצות הברית, ניתוח שווקים, איתור הזדמנויות השקעה, וניהול תהליך הרכישה מרחוק באופן בטוח ויעיל.",
    },
    {
      icon: <FaComments />,
      title: "ייעוץ נדל״ן מקצועי",
      description: "שירותי ייעוץ מקיפים בתחום הנדל״ן, כולל הערכות שווי, ניתוח כדאיות עסקאות, תכנון אסטרטגיות השקעה ארוכות טווח, ופתרון בעיות מורכבות.",
    },
  ];

  return (
    <section id="services-section" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#8c8c8c] mb-4">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-[#ffae00] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-right">
            ניצן ירושלמי מציע מגוון שירותי תיווך וייעוץ נדל״ן מקצועיים, המותאמים לצרכים הספציפיים של כל לקוח, בשוק הישראלי והאמריקאי.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;