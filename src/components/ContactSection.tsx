'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const ContactSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
        duration: 0.5
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  const contactCardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  return (
    <section id="contact-section" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-right mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">צור קשר</h2>
          <div className="w-20 h-1 bg-[#ffae00] mr-0 ml-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mr-0 ml-auto">
            אנחנו כאן לענות על כל שאלה. צור איתנו קשר באחת מהדרכים הבאות ונחזור אליך בהקדם.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            {/* Contact Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-8 border-r-4 border-[#ffae00]"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">ניצן ירושלמי - תיווך וליווי נדל״ן</h3>
              <p className="text-gray-600 mb-6">
                מתווך נדל״ן מקצועי ובעל ניסיון רחב בשוק הישראלי והאמריקאי. מתמחה במכירת והשכרת דירות בתל אביב ובמרכז הארץ.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#8c8c8c]">
                    <FaPhone />
                  </div>
                  <div className="mr-4">
                    <p className="text-sm text-gray-500">טלפון</p>
                    <p className="font-medium">054-1234567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#8c8c8c]">
                    <FaEnvelope />
                  </div>
                  <div className="mr-4">
                    <p className="text-sm text-gray-500">דוא״ל</p>
                    <p className="font-medium">nitzan@realestate.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#8c8c8c]">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="mr-4">
                    <p className="text-sm text-gray-500">כתובת המשרד</p>
                    <p className="font-medium">רחוב דיזנגוף 150, תל אביב</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">עקבו אחרינו</h3>
              <div className="flex space-x-6 space-x-reverse">
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-12 h-12 rounded-full bg-[#8c8c8c] flex items-center justify-center text-white hover:bg-[#ffae00] transition-colors duration-300"
                >
                  <FaFacebook size={20} />
                </motion.a>
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-12 h-12 rounded-full bg-[#8c8c8c] flex items-center justify-center text-white hover:bg-[#ffae00] transition-colors duration-300"
                >
                  <FaInstagram size={20} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-12 h-12 rounded-full bg-[#8c8c8c] flex items-center justify-center text-white hover:bg-[#ffae00] transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a 
                  href="https://wa.me/9721234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-12 h-12 rounded-full bg-[#8c8c8c] flex items-center justify-center text-white hover:bg-[#ffae00] transition-colors duration-300"
                >
                  <FaWhatsapp size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Method Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <motion.div 
                variants={contactCardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#ffae00]"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-[#8c8c8c] mx-auto mb-4">
                  <FaPhone size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">התקשר אלינו</h4>
                <p className="text-gray-600">זמינים בימים א'-ה', 9:00-18:00</p>
                <a href="tel:+9721234567" className="mt-4 inline-block text-[#ffae00] font-medium hover:underline">
                  054-1234567
                </a>
              </motion.div>
              
              <motion.div 
                variants={contactCardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#ffae00]"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-[#8c8c8c] mx-auto mb-4">
                  <FaEnvelope size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">שלח הודעה</h4>
                <p className="text-gray-600">נחזור אליך תוך 24 שעות</p>
                <a href="mailto:nitzan@realestate.co.il" className="mt-4 inline-block text-[#ffae00] font-medium hover:underline">
                  nitzan@realestate.co.il
                </a>
              </motion.div>
              
              <motion.div 
                variants={contactCardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#ffae00]"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-[#8c8c8c] mx-auto mb-4">
                  <MdLocationOn size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">בקר במשרד</h4>
                <p className="text-gray-600">פגישות בתיאום מראש</p>
                <p className="mt-4 text-[#ffae00] font-medium">
                  רחוב דיזנגוף 150, תל אביב
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-full min-h-[400px] md:min-h-[600px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0581670855!2d34.77398731513164!3d32.08749742636693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b82a6148a07%3A0x9f5e6e5e6f8b38a0!2z15PXmdeW16DXkteV15Ygw5fwn5KbMTUwLCDXqtecINeQ15HXmdeR!5e0!3m2!1siw!2sil!4v1652345678901!5m2!1siw!2sil" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="מיקום המשרד"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>

        {/* Image Banner */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 relative h-64 md:h-80 rounded-lg overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
            alt="תל אביב סקייליין" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">מחפשים את הנכס המושלם?</h3>
              <p className="text-lg mb-4">אנחנו כאן לעזור לכם למצוא את הבית הבא שלכם</p>
              <motion.a 
                href="tel:+9721234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#ffae00] text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                צור קשר עכשיו
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;