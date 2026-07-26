import React from 'react';
import { motion } from 'framer-motion';
import { Video, Lightbulb, Compass, FileText, Newspaper, Sparkles, Calendar, Download, BookOpen } from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: Video,
      title: 'Daily Videos',
      subtitle: 'High-Definition HD Lectures',
      desc: 'Daily concept-based video lectures breaking down current affairs, static subjects, and answer writing techniques.',
      badge: 'Daily Updates',
    },
    {
      icon: Lightbulb,
      title: 'Concept Clarity',
      subtitle: 'First Principles Approach',
      desc: 'Simplified explanations of tough Indian Polity, Economics, and Environment topics without rote memorization.',
      badge: 'Core Focus',
    },
    {
      icon: Compass,
      title: 'Exam Strategy',
      subtitle: 'Smart Score Optimization',
      desc: 'Proven prelims option elimination, time management in mains, and high-yield topic prioritization.',
      badge: 'High Yield',
    },
    {
      icon: FileText,
      title: 'Revision Notes',
      subtitle: 'Concise & Structured',
      desc: 'To-the-point syllabus revision summaries formatted with mindmaps, flowcharts, and key data points.',
      badge: 'Syllabus Mapped',
    },
    {
      icon: Newspaper,
      title: 'Current Affairs',
      subtitle: 'Static & Dynamic Sync',
      desc: 'Daily Hindu & Indian Express editorial breakdowns mapped directly to GS 1, GS 2, GS 3, and GS 4 papers.',
      badge: 'Exam Oriented',
    },
    {
      icon: Sparkles,
      title: 'One Page Notes',
      subtitle: 'Rapid Memory Aids',
      desc: 'Single page revision sheets for quick last-minute recall right before entering the exam hall.',
      badge: 'Exclusive',
    },
    {
      icon: Calendar,
      title: 'Study Plans',
      subtitle: 'Disciplined Timetables',
      desc: 'Customizable 6-month, 9-month, and 12-month preparation planners tailored for working professionals & full-timers.',
      badge: 'Structured',
    },
    {
      icon: Download,
      title: 'Downloadable PDFs',
      subtitle: 'Printable Materials',
      desc: 'Instant access to high-quality downloadable PDFs, monthly current affairs booklets, and model answer keys.',
      badge: 'Free Downloads',
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#0B1F4D] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C89B3C]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C89B3C]/30 text-xs font-bold text-[#F3E5AB] uppercase tracking-widest">
            <BookOpen className="w-4 h-4 text-[#C89B3C]" />
            STUDENT STUDY REPOSITORY
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold tracking-tight">
            Premium Features & <span className="text-gold-gradient">Learning Resources</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Everything you need to streamline your preparation, build sharp memory recall, and achieve top ranks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((item, idx) => {
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
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold-gradient text-[#0B1F4D] flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-[#F3E5AB] border border-white/10 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-brand text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#C89B3C] font-semibold mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Static Bottom Label */}
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-semibold text-[#C89B3C] uppercase tracking-wider">
                  Included in Courses
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
