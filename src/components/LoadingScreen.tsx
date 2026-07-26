import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1F4D] text-white"
        >
          {/* Subtle Background Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C89B3C]/10 blur-[120px] pointer-events-none" />

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 text-center"
          >
            <div className="w-28 h-28 mx-auto mb-4 p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C89B3C]/40 shadow-2xl flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Hayagriva Civil Academy Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="font-serif-brand text-2xl md:text-3xl font-bold tracking-wider text-gold-gradient">
              HAYAGRIVA
            </h1>
            <p className="font-serif-brand text-xs tracking-[0.3em] text-[#C89B3C] uppercase mt-1">
              CIVIL ACADEMY
            </p>
            <p className="text-[10px] tracking-[0.25em] text-slate-300 uppercase mt-2 font-medium">
              LEARN • LEAD • SERVE
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 md:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-[#C89B3C]/30 relative">
            <motion.div
              className="h-full rounded-full bg-gold-gradient"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Percentage */}
          <div className="mt-4 text-xs font-mono text-[#C89B3C]">
            {progress}% INITIALIZING ACADEMY PLATFORM
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
