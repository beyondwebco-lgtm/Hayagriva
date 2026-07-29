import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, BookOpen, Newspaper, FileText, Target, Brain, GraduationCap, Users, CheckSquare, Edit3, Shield, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: 'Concept Based Learning',
      desc: 'Focus on first principles to understand the core why and how behind every topic.',
    },
    {
      icon: BookOpen,
      title: 'Simple Explanations',
      desc: 'Complex Polity, Economy, and Science topics explained in simple, clear language.',
    },
    {
      icon: Newspaper,
      title: 'Daily Current Affairs',
      desc: 'Curated daily analysis linking recent news directly with static syllabus topics.',
    },
    {
      icon: FileText,
      title: 'One Page Revision Notes',
      desc: 'Ultra-concise one-page summary sheets designed for rapid last-minute revision.',
    },
    {
      icon: Target,
      title: 'PYQ Based Preparation',
      desc: 'Deep analysis of last 15 years UPSC, KPSC & State PSC questions to decode examiner mindset.',
    },
    {
      icon: Brain,
      title: 'Smart Preparation Strategy',
      desc: 'Maximize scoring efficiency by prioritizing high-yield topics and smart tricks.',
    },
    {
      icon: GraduationCap,
      title: 'Exam Oriented Teaching',
      desc: 'Zero fluff, 100% exam-focused content crafted specifically for CSE standards.',
    },
    {
      icon: Users,
      title: 'Personal Guidance',
      desc: 'Direct mentorship, progress tracking, and strategy adjustments tailored to you.',
    },
    {
      icon: CheckSquare,
      title: 'Mock Tests Series',
      desc: 'Standardized test papers matching exact UPSC, KPSC & State PSC difficulty levels.',
    },
    {
      icon: Edit3,
      title: 'Answer Writing & Interview',
      desc: 'Structured mains evaluation, feedback, and personality test preparation.',
    },
  ];

  return (
    <section className="py-24 bg-[#0B1F4D] text-white relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#162E6B]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C89B3C]/30 text-xs font-bold text-[#F3E5AB] uppercase tracking-widest">
            <Award className="w-4 h-4 text-[#C89B3C]" />
            THE HAYAGRIVA ADVANTAGE
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold tracking-tight">
            Why Choose <span className="text-gold-gradient">Hayagriva Civil Academy?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            We redefine Civil Services preparation through concept clarity, disciplined strategy, and high-yield study resources.
          </p>
        </div>

        {/* 10 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative p-6 rounded-3xl glass-card-dark border border-[#C89B3C]/20 hover:border-[#C89B3C] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Gold Glow Top Border */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gold-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#C89B3C]/40 text-[#C89B3C] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-[#0B1F4D] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-brand text-base font-bold text-white group-hover:text-[#F3E5AB] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#C89B3C] font-semibold tracking-widest uppercase">
                  <span>Core Pillar #{idx + 1}</span>
                  <Shield className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
