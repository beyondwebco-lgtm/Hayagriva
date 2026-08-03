import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Sparkles, Award } from 'lucide-react';

export const IntroVideoSection: React.FC = () => {
  return (
    <section id="intro-video" className="py-20 bg-[#06112C] text-white relative overflow-hidden border-b border-[#C89B3C]/20">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C89B3C]/10 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C89B3C]/40 text-xs font-semibold text-[#F3E5AB]">
            <Sparkles className="w-4 h-4 text-[#C89B3C]" />
            <span>DISCOVER HAYAGRIVA CIVIL ACADEMY</span>
          </div>

          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Introduction to <span className="text-gold-gradient">Hayagriva Civil Academy</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Learn about our vision, teaching methodology, and how we help aspirants prepare for UPSC, KPSC, State PSC, and Government Jobs.
          </p>
        </motion.div>

        {/* Premium Responsive Video Player Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-[#C89B3C]/60 via-[#DFB251]/30 to-[#0B1F4D] shadow-2xl shadow-[#C89B3C]/20 border border-[#C89B3C]/30">
            <div className="relative rounded-[22px] overflow-hidden bg-black aspect-video shadow-inner flex items-center justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-[22px]"
              >
                <source src="/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Quick Highlight Footer below video */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center gap-3">
              <PlayCircle className="w-5 h-5 text-[#C89B3C]" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">Interactive Video Overview</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center gap-3">
              <Award className="w-5 h-5 text-[#C89B3C]" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">Expert Mentor Vision</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-[#C89B3C]" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">Comprehensive Strategy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
