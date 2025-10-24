'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref);

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

  const testimonials = [
    {
      id: 1,
      name: 'דניאל כהן',
      role: 'רוכש דירה בתל אביב',
      content: 'ניצן ליווה אותנו בתהליך רכישת הדירה הראשונה שלנו. המקצועיות והסבלנות שלו עשו את כל ההבדל. הוא היה זמין עבורנו בכל שעה והפך תהליך מלחיץ לחוויה נעימה.',
      avatar: '/images/testimonial-1.jpg',
    },
    {
      id: 2,
      name: 'מיכל לוי',
      role: 'משקיעה בנדל"ן',
      content: 'כמשקיעה בנדל"ן, אני מחפשת אנשי מקצוע אמינים ומקצועיים. ניצן הוא בדיוק כזה. הוא הבין בדיוק את הצרכים שלי והציע נכסים שהתאימו בדיוק למה שחיפשתי. ממליצה בחום!',
      avatar: '/images/testimonial-2.jpg',
    },
    {
      id: 3,
      name: 'אלון ברק',
      role: 'משקיע בנדל"ן בארה"ב',
      content: 'ניצן ליווה אותי ברכישת נכס ראשון בארה"ב. למרות המרחק והמורכבות, הוא הצליח להפוך את התהליך לפשוט ובטוח. הידע והקשרים שלו בשוק האמריקאי הם נכס אמיתי.',
      avatar: '/images/testimonial-3.jpg',
    },
  ];

  return (
    <section id="testimonials" dir="rtl" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            מה <span className="text-[#ffae00]">הלקוחות שלנו</span> אומרים
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            אנחנו גאים להעניק שירות מקצועי ואישי לכל לקוח ולקוחה. הנה כמה מהחוויות של הלקוחות שלנו.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-right leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;