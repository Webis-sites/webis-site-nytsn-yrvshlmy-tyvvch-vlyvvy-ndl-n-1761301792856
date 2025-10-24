'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'דניאל כהן',
    role: 'משקיע נדל"ן',
    content: 'ניצן ליווה אותי ברכישת דירה להשקעה בתל אביב. המקצועיות והידע שלו בשוק המקומי היו מרשימים ביותר. הוא הצליח למצוא לי עסקה מצוינת שעומדת בכל הדרישות שלי.',
    avatar: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'מיכל לוי',
    role: 'רוכשת דירה ראשונה',
    content: 'כזוג צעיר שרוכש דירה ראשונה, היינו זקוקים להדרכה צמודה. ניצן היה שם בשבילנו בכל שלב, הסביר בסבלנות את כל התהליך והצליח להשיג לנו את הדירה שחלמנו עליה במחיר שהתאים לתקציב שלנו.',
    avatar: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'אלון ברק',
    role: 'יזם נדל"ן',
    content: 'שיתוף הפעולה עם ניצן בפרויקטים בארה"ב הניב תוצאות מצוינות. הקשרים שלו והיכרותו עם השוק האמריקאי פתחו בפני הזדמנויות השקעה שלא הייתי מגיע אליהן בדרך אחרת.',
    avatar: '/images/testimonial-3.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
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
    hidden: { opacity: 0, y: 50 },
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
            הסיפורים האמיתיים של לקוחותינו מספרים את הסיפור טוב יותר מכל דבר אחר
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;