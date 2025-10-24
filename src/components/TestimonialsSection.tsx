'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  propertyType: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'דניאל כהן',
    propertyType: 'רכישת דירה בתל אביב',
    quote: 'ניצן ליווה אותנו בתהליך רכישת הדירה הראשונה שלנו בצורה מקצועית ואישית. הוא הבין בדיוק מה אנחנו מחפשים והצליח למצוא לנו את הדירה המושלמת במחיר שהתאים לתקציב שלנו.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'מיכל לוי',
    propertyType: 'השקעה בנדל״ן בארה״ב',
    quote: 'הידע והניסיון של ניצן בשוק הנדל״ן האמריקאי היה קריטי להצלחת ההשקעה שלי. הוא הציג בפני הזדמנויות שלא הייתי מוצאת בעצמי ודאג לכל הפרטים הקטנים לאורך כל הדרך.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'אלון שפירא',
    propertyType: 'השכרת דירה ברמת גן',
    quote: 'ניצן עזר לי למצוא שוכר לדירה שלי בתוך שבוע! הוא טיפל בכל התהליך מא׳ עד ת׳, כולל חוזה מסודר וביטחונות. אני ממליץ עליו בחום לכל מי שמחפש מתווך אמין ומקצועי.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 4,
    name: 'רונית אברהם',
    propertyType: 'מכירת פנטהאוז בהרצליה',
    quote: 'ניצן הצליח למכור את הדירה שלנו במחיר גבוה בהרבה ממה שציפינו. האסטרטגיה השיווקית שלו והיכולת שלו להביא קונים רציניים הייתה מרשימה. תודה על השירות המעולה!',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // If swipe is significant enough (more than 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped right to left in RTL means previous
        prevTestimonial();
      } else {
        // Swiped left to right in RTL means next
        nextTestimonial();
      }
    }
    
    setTouchStart(null);
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    })
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    } else {
      // Show 3 testimonials on desktop
      const indices = [
        currentIndex,
        (currentIndex + 1) % testimonials.length,
        (currentIndex + 2) % testimonials.length
      ];
      return indices.map(index => testimonials[index]);
    }
  };

  return (
    <section id="testimonials-section" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">לקוחות מספרים</h2>
          <div className="w-20 h-1 bg-[#ffae00] mx-auto"></div>
          <p className="text-[#8c8c8c] mt-4 text-lg">מה אומרים עלינו לקוחות שכבר מצאו את הנכס המושלם</p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto"
          ref={testimonialsRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden px-4">
            <div className={`flex ${isMobile ? 'justify-center' : 'justify-between'} gap-6`}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                {getVisibleTestimonials().map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="bg-white rounded-lg shadow-lg p-6 flex-1 max-w-md mx-auto relative"
                  >
                    <div className="absolute top-6 right-6 text-[#ffae00] opacity-20">
                      <FaQuoteRight size={40} />
                    </div>
                    <div className="flex flex-col items-center text-right">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#ffae00]">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          width={80} 
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-[#8c8c8c] text-sm mb-4">{testimonial.propertyType}</p>
                      <p className="text-gray-600 leading-relaxed text-right">{testimonial.quote}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={nextTestimonial}
              className="bg-white text-[#8c8c8c] hover:text-[#ffae00] p-3 rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ffae00] focus:ring-opacity-50"
              aria-label="הבא"
            >
              <FaChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2 rtl:space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none ${
                    currentIndex === index ? 'bg-[#ffae00]' : 'bg-[#8c8c8c] bg-opacity-30'
                  }`}
                  aria-label={`עבור לעדות ${index + 1}`}
                  aria-current={currentIndex === index ? 'true' : 'false'}
                />
              ))}
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="bg-white text-[#8c8c8c] hover:text-[#ffae00] p-3 rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ffae00] focus:ring-opacity-50"
              aria-label="הקודם"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;