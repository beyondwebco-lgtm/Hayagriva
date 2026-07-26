import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }

      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Floating WhatsApp Action Button */}
      <motion.a
        href="https://wa.me/917795662468?text=Hello%20Hayagriva%20Civil%20Academy%2C%20I%20have%20an%20inquiry%20regarding%20courses."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-900/50 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40 pointer-events-none" />

        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Chat with Mentor
        </span>
      </motion.a>

      {/* Back to Top Button with Scroll Ring */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="relative w-12 h-12 rounded-full bg-[#0B1F4D] text-[#C89B3C] border border-[#C89B3C]/50 shadow-xl flex items-center justify-center cursor-pointer hover:bg-[#162E6B] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />

            {/* Circular SVG Progress Border */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-slate-700"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-[#C89B3C]"
                fill="none"
                strokeDasharray="125.6"
                strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
