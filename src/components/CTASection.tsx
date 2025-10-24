'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaUser, FaHome } from 'react-icons/fa';

type FormData = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
};

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  propertyType?: string;
};

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'נא להזין שם מלא';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
    } else if (!/^0\d{8,9}$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין כתובת אימייל';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }
    
    if (!formData.propertyType) {
      newErrors.propertyType = 'נא לבחור סוג עסקה';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          propertyType: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#ffae00', transition: { duration: 0.2 } },
    blur: { scale: 1, borderColor: '#e2e8f0', transition: { duration: 0.2 } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: '#ffae00', transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
    initial: { scale: 1, backgroundColor: '#8c8c8c', transition: { duration: 0.2 } }
  };

  return (
    <section 
      id="contact-cta" 
      dir="rtl" 
      className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 w-full"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
              alt="נכס יוקרתי בתל אביב" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/30 flex flex-col justify-end p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-white text-xl font-bold mb-2">ניצן ירושלמי</h3>
                <p className="text-gray-200 text-sm">מתווך נדל״ן מקצועי עם ניסיון רחב בשוק הישראלי והאמריקאי</p>
              </motion.div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-right"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">מחפשים את הנכס המושלם?</h2>
              <p className="text-lg text-gray-600 mb-8">השאירו פרטים ואחזור אליכם בהקדם עם הצעות מותאמות אישית</p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">תודה על פנייתך!</h3>
                <p className="text-gray-600">אחזור אליך בהקדם האפשרי.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-right">
                    שם מלא
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus="focus"
                      animate="blur"
                      variants={inputVariants}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none text-right"
                      placeholder="הזן את שמך המלא"
                    />
                    <span className="absolute left-3 top-3 text-gray-400">
                      <FaUser />
                    </span>
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1 text-right">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-right">
                    טלפון
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus="focus"
                      animate="blur"
                      variants={inputVariants}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none text-right"
                      placeholder="הזן את מספר הטלפון שלך"
                      dir="ltr"
                    />
                    <span className="absolute left-3 top-3 text-gray-400">
                      <FaPhone />
                    </span>
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1 text-right">{errors.phone}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right">
                    אימייל
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus="focus"
                      animate="blur"
                      variants={inputVariants}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none text-right"
                      placeholder="הזן את כתובת האימייל שלך"
                      dir="ltr"
                    />
                    <span className="absolute left-3 top-3 text-gray-400">
                      <FaEnvelope />
                    </span>
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1 text-right">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 text-right">
                    סוג עסקה
                  </label>
                  <div className="relative">
                    <motion.select
                      whileFocus="focus"
                      animate="blur"
                      variants={inputVariants}
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none text-right appearance-none"
                    >
                      <option value="">בחר סוג עסקה</option>
                      <option value="purchase">רכישה</option>
                      <option value="rental">השכרה</option>
                      <option value="investment">השקעה</option>
                    </motion.select>
                    <span className="absolute left-3 top-3 text-gray-400">
                      <FaHome />
                    </span>
                  </div>
                  {errors.propertyType && <p className="text-red-500 text-sm mt-1 text-right">{errors.propertyType}</p>}
                </div>

                <motion.button
                  type="submit"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 text-white font-medium rounded-lg shadow-md focus:outline-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      שולח...
                    </span>
                  ) : (
                    'צרו קשר'
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;