import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Edit3, Repeat, Target, Trophy, ArrowDown, Sparkles, CheckCircle } from 'lucide-react';

export const LearningProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: 1,
      title: 'Learn Concepts',
      icon: BookOpen,
      badge: 'Foundation Phase',
      desc: 'Build rock-solid fundamentals through concept-based lectures, Laxmikanth mindmaps, and core NCERT decoding.',
      details: ['First-principles teaching', 'Simplifying complex constitutional & economic theories', 'Integrated Static + Dynamic linking'],
    },
    {
      num: 2,
      title: 'Practice Questions',
      icon: Edit3,
      badge: 'Application Phase',
      desc: 'Solve chapter-wise PYQs and daily mains answer writing prompts to apply learned concepts immediately.',
      details: ['Daily 2 Mains Answer Prompts', 'UPSC, KPSC & State PSC 15-Year PYQ Drills', 'Option elimination logic building'],
    },
    {
      num: 3,
      title: 'Daily Revision',
      icon: Repeat,
      badge: 'Retention Phase',
      desc: 'Consolidate memory with 1-page revision notes, flashcards, and daily current affairs summaries.',
      details: ['1-Page Revision Sheets for each topic', 'Active recall flashcards', 'Weekly cumulative revision tests'],
    },
    {
      num: 4,
      title: 'Mock Tests',
      icon: Target,
      badge: 'Evaluation Phase',
      desc: 'Simulate actual exam conditions with full-length prelims & mains mock test series and performance analytics.',
      details: ['Exam-standard question papers', 'In-depth rank & percentile breakdown', 'Mistake log analysis & gap closing'],
    },
    {
      num: 5,
      title: 'Success',
      icon: Trophy,
      badge: 'Civil Servant',
      desc: 'Crack Prelims, score top marks in Mains, excel in the Personality Interview, and join the Civil Services.',
      details: ['Interview guidance & DAF review', 'Final rank list preparation', 'Pride of serving the Nation'],
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 text-xs font-bold text-[#0B1F4D] uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C89B3C]" />
            5-STEP LEARNING TIMELINE
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold text-[#0B1F4D]">
            Our Proven <span className="text-gold-gradient">Learning Process</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A systematic, disciplined step-by-step roadmap from day-one preparation to final merit list success.
          </p>
        </div>

        {/* Interactive Timeline Stepper */}
        <div className="relative">
          {/* Horizontal Desktop Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div key={idx} className="flex flex-col items-center">
                  {/* Step Button Indicator */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`relative w-20 h-20 rounded-3xl p-1 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-gold-gradient shadow-xl shadow-[#C89B3C]/40 scale-110'
                        : 'bg-[#0B1F4D] hover:scale-105 shadow-md'
                    }`}
                  >
                    <div className={`w-full h-full rounded-2xl flex flex-col items-center justify-center ${
                      isSelected ? 'bg-[#0B1F4D] text-[#C89B3C]' : 'bg-[#0B1F4D] text-white'
                    }`}>
                      <Icon className="w-7 h-7 mb-0.5" />
                      <span className="text-[10px] font-bold tracking-widest">STEP {step.num}</span>
                    </div>

                    {/* Active Pulse Ring */}
                    {isSelected && (
                      <div className="absolute inset-0 rounded-3xl border-2 border-[#C89B3C] animate-ping pointer-events-none opacity-40" />
                    )}
                  </button>

                  {/* Connecting Arrow for Mobile */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden my-3 text-[#C89B3C]">
                      <ArrowDown className="w-5 h-5 animate-bounce" />
                    </div>
                  )}

                  {/* Step Card Details */}
                  <motion.div
                    onClick={() => setActiveStep(idx)}
                    className={`mt-4 w-full p-5 rounded-2xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B1F4D] text-white border-[#C89B3C] shadow-xl'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${
                      isSelected ? 'bg-[#C89B3C] text-[#0B1F4D]' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {step.badge}
                    </span>
                    <h3 className={`font-serif-brand text-base font-bold mb-1.5 ${
                      isSelected ? 'text-[#F3E5AB]' : 'text-[#0B1F4D]'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${
                      isSelected ? 'text-slate-200' : 'text-slate-500'
                    }`}>
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Feature Breakdown Box */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="text-xs font-bold text-[#C89B3C] tracking-widest uppercase">
                DEEP DIVE: STEP {steps[activeStep].num} - {steps[activeStep].title}
              </div>
              <h4 className="font-serif-brand text-2xl font-extrabold text-[#0B1F4D]">
                Key Deliverables & Action Items
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {steps[activeStep].desc}
              </p>
            </div>

            <div className="space-y-2 w-full md:w-auto shrink-0">
              {steps[activeStep].details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-[#C89B3C]" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
