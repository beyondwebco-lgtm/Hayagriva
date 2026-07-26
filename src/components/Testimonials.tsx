import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      exam: 'UPSC CSE Aspirant',
      rank: 'Prelims Cleared (2025)',
      quote: 'The classes are well-structured and easy to understand. The current affairs notes are concise, exam-oriented, and perfect for quick revision.',
      location: 'Bengaluru',
      avatar: '👩‍🎓',
    },
    {
      id: 2,
      name: 'Kiran Gowda',
      exam: 'KPSC KAS Aspirant',
      rank: 'Rank Candidate',
      quote: 'The one-page revision notes and PYQ-based approach helped me retain important facts and boost my score in mock tests.',
      location: 'Mysuru',
      avatar: '👨‍🎓',
    },
    {
      id: 3,
      name: 'Ananya Rao',
      exam: 'UPSC Foundation Student',
      rank: 'Mains Batch',
      quote: 'The quality of current affairs content is outstanding. Connecting static Laxmikanth chapters with live news made Polity so easy.',
      location: 'Mandya',
      avatar: '👩‍🏫',
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      exam: 'UPSC & KPSC Aspirant',
      rank: 'Selected Candidate',
      quote: 'Hayagriva Civil Academy transformed the way I prepare. Concept-based teaching gives immense confidence in tackling unpredictable questions.',
      location: 'Hubballi',
      avatar: '👨‍💼',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C89B3C]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 text-xs font-bold text-[#0B1F4D] uppercase tracking-widest">
            <Award className="w-4 h-4 text-[#C89B3C]" />
            STUDENT SUCCESS STORIES
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold text-[#0B1F4D]">
            Trusted by <span className="text-gold-gradient">Civil Services Aspirants</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear from students who simplified their preparation and achieved concept clarity with Hayagriva Civil Academy.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl relative overflow-hidden"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gold-gradient" />
              
              {/* Background Quote Icon */}
              <Quote className="w-24 h-24 text-slate-200 absolute -bottom-6 -right-6 pointer-events-none opacity-40" />

              {/* 5-Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  VERIFIED REVIEW
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-2xl font-medium text-slate-800 leading-relaxed italic mb-8">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Student Profile Info */}
              <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1F4D] text-2xl flex items-center justify-center text-white shadow-md">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h3 className="font-serif-brand text-lg font-bold text-[#0B1F4D]">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-xs font-semibold text-[#9E7422]">
                      {testimonials[currentIndex].exam} • {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{testimonials[currentIndex].rank}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#C89B3C]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-white border border-slate-300 text-[#0B1F4D] hover:bg-[#0B1F4D] hover:text-white transition-all shadow-md cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-white border border-slate-300 text-[#0B1F4D] hover:bg-[#0B1F4D] hover:text-white transition-all shadow-md cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
