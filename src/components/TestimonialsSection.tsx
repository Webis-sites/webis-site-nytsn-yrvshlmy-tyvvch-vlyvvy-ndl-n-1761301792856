'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
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
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-right">{testimonial.content}</p>
              <div className="mt-4 flex justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#ffae00] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-[#ffae00] text-white font-bold py-3 px-8 rounded-full hover:bg-[#e09900] transition-colors duration-300"
          >
            דברו איתנו עוד היום
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;