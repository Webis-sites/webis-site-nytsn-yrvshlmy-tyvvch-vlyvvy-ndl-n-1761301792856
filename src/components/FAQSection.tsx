'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen, index }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-right focus:outline-none focus:ring-2 focus:ring-[#ffae00] rounded-md"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#ffae00]"
        >
          <FaChevronDown />
        </motion.div>
        <h3 className="text-lg font-medium text-[#8c8c8c] flex-grow text-right">{question}</h3>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-600 text-right">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const RealEstateFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "מהם שיעורי העמלה הסטנדרטיים עבור שירותי תיווך?",
      answer: "העמלה הסטנדרטית בשוק הנדל״ן הישראלי עומדת על 2% מערך העסקה (בתוספת מע״מ) מכל צד. עם זאת, אני מציע מסלולי תמחור גמישים בהתאם לסוג הנכס, מורכבות העסקה והיקף השירותים הנדרשים. לעסקאות השקעה בארה״ב קיים מבנה עמלות שונה - אשמח לפרט בפגישת ייעוץ אישית."
    },
    {
      question: "כמה זמן בממוצע לוקח למכור דירה?",
      answer: "משך הזמן הממוצע למכירת דירה בישראל נע בין חודשיים לארבעה חודשים, אך התהליך מושפע מגורמים רבים כמו מיקום הנכס, מצבו, המחיר המבוקש ותנאי השוק. באמצעות אסטרטגיית שיווק ממוקדת ותמחור נכון, אני שואף לקצר את משך המכירה תוך השגת המחיר האופטימלי עבורכם."
    },
    {
      question: "אילו מסמכים נדרשים לצורך מכירת או רכישת נכס?",
      answer: "לצורך עסקת נדל״ן בישראל נדרשים המסמכים הבאים: נסח טאבו עדכני, אישור זכויות מהחברה המשכנת (אם רלוונטי), אישור עירייה על היעדר חובות ארנונה, אישור ועד בית, היתר בנייה ותוכניות במקרה של שינויים במבנה, אישור מס שבח/רכישה, ותעודות זהות של הצדדים. אני מלווה את לקוחותיי בכל שלבי איסוף המסמכים ומוודא שהכל מוכן לקראת חתימת החוזה."
    },
    {
      question: "מה חשוב לדעת לפני רכישת דירת השקעה?",
      answer: "לפני רכישת דירת השקעה חשוב לבחון: תשואה צפויה (שכירות מול מחיר הנכס), פוטנציאל עליית ערך, מיסוי (מס רכישה, מס שבח, מס הכנסה משכירות), עלויות תחזוקה, מיקום אסטרטגי, נזילות השקעה, ומצב השוק הכללי. אני מספק ניתוח מקיף של כדאיות ההשקעה בישראל ובארה״ב, כולל השוואת אפשרויות והתאמה אישית לפרופיל המשקיע."
    },
    {
      question: "האם כדאי לשפץ את הנכס לפני מכירתו?",
      answer: "ההחלטה לשפץ נכס לפני מכירה תלויה במספר גורמים: מצב הנכס הנוכחי, עלות השיפוץ מול התוספת הצפויה למחיר המכירה, מצב השוק, ולוח הזמנים שלכם. לעיתים, שיפוצים קלים וסטיילינג (Home Staging) יכולים להניב תשואה גבוהה על ההשקעה. אני מציע ייעוץ מקצועי לגבי השיפוצים שכדאי לבצע כדי למקסם את ערך הנכס, ובמידת הצורך, יכול לחבר אתכם לאנשי מקצוע אמינים בתחום."
    },
    {
      question: "איך מתנהל תהליך ליווי משקיעים ברכישת נכסים בארה״ב?",
      answer: "תהליך ליווי משקיעים ברכישת נכסים בארה״ב כולל מספר שלבים: אפיון צרכי המשקיע והגדרת מטרות ההשקעה, איתור שווקים מתאימים בארה״ב, סינון והצגת נכסים פוטנציאליים, ניתוח כדאיות כלכלית מפורט, ליווי בתהליך הרכישה והמימון, חיבור לאנשי מקצוע מקומיים (עו״ד, רו״ח, מנהלי נכסים), וייעוץ מתמשך לאחר הרכישה. הניסיון שלי בשוק האמריקאי מאפשר לי להנגיש את ההזדמנויות תוך הימנעות מהמכשולים הנפוצים בהשקעות בינלאומיות."
    },
    {
      question: "מה כולל שירות התיווך המלא שלך?",
      answer: "שירות התיווך המלא שלי כולל: הערכת שווי מקצועית של הנכס, צילום מקצועי ושיווק דיגיטלי נרחב, סינון רוכשים/מוכרים פוטנציאליים, ניהול הצגות הנכס, ניהול משא ומתן, ליווי בתהליך המשפטי והבירוקרטי, תיאום בין כל הגורמים (עו״ד, בנקים, יועצי משכנתא), וליווי עד לסיום העסקה ומסירת המפתח. אני מאמין בשירות אישי, זמין ומקצועי, תוך שמירה על האינטרסים של לקוחותיי לאורך כל הדרך."
    }
  ];

  return (
    <section id="real-estate-faq" dir="rtl" className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#8c8c8c] mb-4">שאלות נפוצות</h2>
          <div className="w-20 h-1 bg-[#ffae00] mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[#8c8c8c]">יש לכם שאלות נוספות? אשמח לענות עליהן</p>
          <a 
            href="#contact" 
            className="inline-block mt-4 px-6 py-3 bg-[#ffae00] text-white font-medium rounded-md hover:bg-[#e69d00] transition-colors duration-300"
          >
            צרו קשר
          </a>
        </div>
      </div>
    </section>
  );
};

export default RealEstateFAQ;