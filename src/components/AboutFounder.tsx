import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Sparkles, UserCheck } from 'lucide-react';

export const AboutFounder: React.FC = () => {
  const highlights = [
    { title: 'UPSC Preparation since 2015', desc: 'Over a decade of direct preparation experience & insights' },
    { title: 'Concept-based Teaching', desc: 'Break down tough topics into simple, relatable mental models' },
    { title: 'Current Affairs Expert', desc: 'Daily targeted analysis connecting Static syllabus with Dynamic news' },
    { title: 'Prelims Strategy', desc: 'Elimination techniques, PYQ trends analysis, and high-yield scoring' },
    { title: 'Mains Strategy', desc: 'Structured answer writing framework & syllabus mapping' },
    { title: 'Interview Guidance', desc: 'Personality development, DAF analysis, and authentic feedback' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gold & Navy Ambient Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1F4D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 text-xs font-bold text-[#0B1F4D] uppercase tracking-widest mb-3">
            <UserCheck className="w-4 h-4 text-[#C89B3C]" />
            EXPERT MENTORSHIP & LEADERSHIP
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold text-[#0B1F4D]">
            Meet Your Mentor
          </h2>
          <div className="w-20 h-1.5 bg-gold-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex flex-col items-center"
          >
            {/* Main Portrait Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-full p-3 bg-gradient-to-b from-[#C89B3C] via-[#DFB251] to-[#0B1F4D] shadow-2xl shadow-[#C89B3C]/20">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner bg-slate-100">
                <img
                  src="/images/founder.jpg"
                  alt="Hayagriva Civil Academy Founder Photo"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Rating Pill */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-[#0B1F4D] text-white border-2 border-[#C89B3C] shadow-2xl flex items-center gap-2 whitespace-nowrap">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#F3E5AB]">10+ Years Mentorship</span>
              </div>
            </div>

            {/* Quote Card below image */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-sm">
              <p className="text-xs sm:text-sm font-medium text-slate-700 italic">
                "Civil Services preparation is not about reading everything under the sun; it's about mastering concepts and applying them with discipline."
              </p>
              <div className="mt-3 font-serif-brand font-bold text-xs text-[#0B1F4D] tracking-wider uppercase">
                - Hayagriva Mentor
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-lg bg-[#C89B3C]/10 text-[#9E7422] font-bold text-xs uppercase tracking-wider">
              FOUNDER & CHIEF MENTOR
            </div>

            <h3 className="font-serif-brand text-2xl sm:text-3xl font-extrabold text-[#0B1F4D] leading-tight">
              Guided by a Decade of Dedicated Preparation & Concept Mastery
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Hayagriva Civil Academy is led by an experienced UPSC aspirant with over a decade of preparation journey since 2015. The academy focuses on simplifying complex concepts, building strong fundamentals, and providing exam-oriented guidance for every stage of the Civil Services Examination.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-[#0B1F4D]/5 border border-slate-200 hover:border-[#C89B3C]/40 transition-all duration-300 flex items-start gap-3.5 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-gold-gradient text-[#0B1F4D] flex items-center justify-center shrink-0 font-bold shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-[#0B1F4D]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F4D] group-hover:text-[#9E7422] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0B1F4D] to-[#162E6B] text-white shadow-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#C89B3C]/20 text-[#C89B3C]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold">Ready to Start Your UPSC/KPSC Journey?</div>
                  <div className="text-xs text-slate-300">Get personalized guidance & concept notes.</div>
                </div>
              </div>
              <a
                href="#courses"
                className="px-4 py-2.5 rounded-xl bg-gold-gradient text-[#0B1F4D] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap shadow-md"
              >
                Explore Courses
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
