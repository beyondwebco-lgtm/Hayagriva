import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is UPSC?',
      a: 'UPSC (Union Public Service Commission) is India’s premier central recruiting agency responsible for conducting the Civil Services Examination (CSE) to select candidates for prestigious cadres including IAS, IPS, IFS, IRS, and other central services.',
    },
    {
      q: 'How to start UPSC preparation?',
      a: 'Begin by thoroughly reading the official UPSC syllabus and analyzing past 10 years of PYQs. Focus on building strong basic fundamentals using NCERT textbooks (Classes 6 to 12) alongside standard books like M. Laxmikanth for Indian Polity and daily newspaper reading (The Hindu or Indian Express).',
    },
    {
      q: 'Difference between UPSC & KPSC?',
      a: 'UPSC conducts nationwide examinations for Central Civil Services (IAS, IPS, IFS), whereas KPSC (Karnataka Public Service Commission) conducts state-level examinations (like KAS, Tahsildar, DYSP) with additional weightage on Karnataka state history, geography, economy, and Kannada language.',
    },
    {
      q: 'Which books should beginners read?',
      a: 'Beginners should start with foundational NCERT books for History, Geography, Polity, Science, and Economy. Standard books include M. Laxmikanth (Polity), Spectrum (Modern History), PMF IAS / Shankar IAS (Environment), and Ramesh Singh / Nitin Singhania (Economy & Culture).',
    },
    {
      q: 'How are current affairs taught?',
      a: 'Our academy provides daily concept-based current affairs classes linking dynamic news directly with static syllabus topics. Students receive daily one-page PDF summaries, weekly quizzes, and monthly issue compilations.',
    },
    {
      q: 'Do you provide notes?',
      a: 'Yes! We provide structured, comprehensive, and crisp One-Page Revision Notes, mindmaps, and topic summaries in printable PDF format designed specifically for fast recall before exams.',
    },
    {
      q: 'Is answer writing included?',
      a: 'Absolutely. Answer writing is integral to our curriculum. We conduct daily 2-question answer writing sessions with direct evaluation, structural feedback, and model answers provided by expert mentors.',
    },
    {
      q: 'Are mock tests available?',
      a: 'Yes, we offer complete Prelims Sectional & Full-Length Test Series along with Mains Evaluation Tests matching exact UPSC, KPSC & State PSC difficulty patterns and rank percentile feedback.',
    },
    {
      q: 'How long should I prepare?',
      a: 'A dedicated preparation timeline of 10 to 12 months is generally ideal to cover the foundational syllabus, practice PYQs, write mains answers, and undertake multiple mock test revisions.',
    },
    {
      q: 'How do I contact the academy?',
      a: 'You can reach Hayagriva Civil Academy directly via WhatsApp at +91 77956 62468, call our Mandya administrative office at #212, 3rd Cross, Siddhartha Layout, Mandya – 571401, or submit an inquiry through our contact form.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 text-xs font-bold text-[#0B1F4D] uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-[#C89B3C]" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold text-[#0B1F4D]">
            Have Questions? <span className="text-gold-gradient">We Have Answers</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Find quick answers to common queries regarding UPSC, KPSC, State PSC & Government Jobs preparation, notes, tests, and mentorship.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-[#0B1F4D] text-white border-[#C89B3C] shadow-xl'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`font-serif-brand text-base sm:text-lg font-bold ${
                    isOpen ? 'text-[#F3E5AB]' : 'text-[#0B1F4D]'
                  }`}>
                    {idx + 1}. {faq.q}
                  </span>
                  <div className={`p-2 rounded-xl transition-transform duration-300 ${
                    isOpen ? 'bg-[#C89B3C] text-[#0B1F4D] rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/10"
                    >
                      <div className="pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
