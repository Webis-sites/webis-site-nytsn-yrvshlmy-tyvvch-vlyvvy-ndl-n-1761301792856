'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaHome, FaDollarSign, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

interface MarketInsightCardProps {
  title: string;
  description: string;
  statistic: string;
  trend: 'up' | 'down' | 'stable';
  trendValue: string;
  imageSrc: string;
  icon: React.ReactNode;
}

const MarketInsightCard: React.FC<MarketInsightCardProps> = ({
  title,
  description,
  statistic,
  trend,
  trendValue,
  imageSrc,
  icon,
}) => {
  const trendColor = trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-blue-500';
  const trendIcon = trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
    >
      <div className="relative h-40">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 right-4 bg-[#ffae00] text-white p-3 rounded-full">
          {icon}
        </div>
      </div>
      
      <div className="p-5 text-right" dir="rtl">
        <h3 className="text-xl font-bold mb-2 text-[#8c8c8c]">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className={`flex items-center ${trendColor}`}>
            <span className="text-lg font-bold ml-1">{trendValue}</span>
            <span className="text-xl">{trendIcon}</span>
          </div>
          <div className="text-2xl font-bold text-[#8c8c8c]">{statistic}</div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#8c8c8c] hover:bg-[#7a7a7a] text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors"
        >
          <span className="ml-2">למידע נוסף</span>
          <FaArrowLeft size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const MarketInsightsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const marketInsights = [
    {
      title: "מגמות נדל״ן בתל אביב",
      description: "מחירי הדירות בתל אביב ממשיכים לעלות, עם ביקוש גבוה במיוחד לדירות 3-4 חדרים באזורים המרכזיים.",
      statistic: "₪42,500",
      trend: "up" as const,
      trendValue: "5.2%",
      imageSrc: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <FaChartLine size={20} />
    },
    {
      title: "שוק הנדל״ן במרכז הארץ",
      description: "ערים כמו רמת גן, גבעתיים והרצליה מציגות עלייה מתונה במחירים עם התחלות בנייה חדשות.",
      statistic: "₪31,200",
      trend: "stable" as const,
      trendValue: "2.8%",
      imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <FaHome size={20} />
    },
    {
      title: "הזדמנויות השקעה בארה״ב",
      description: "שוק הנדל״ן בערים מרכזיות בארה״ב מציע תשואות אטרקטיביות למשקיעים ישראלים עם תנאי מימון נוחים.",
      statistic: "$2,850",
      trend: "up" as const,
      trendValue: "7.3%",
      imageSrc: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <FaDollarSign size={20} />
    }
  ];

  return (
    <section id="market-insights" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#8c8c8c] mb-2">תובנות שוק הנדל״ן</h2>
          <div className="w-20 h-1 bg-[#ffae00] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ניתוח מעמיק של מגמות שוק הנדל״ן בישראל ובארה״ב, המבוסס על נתונים עדכניים ומחקר מקיף
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {marketInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <MarketInsightCard {...insight} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffae00] hover:bg-[#e69d00] text-white py-3 px-8 rounded-md inline-flex items-center font-bold transition-colors"
          >
            <span className="ml-2">לכל הניתוחים וההמלצות</span>
            <FaArrowLeft size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketInsightsSection;