import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Video, Newspaper, Globe, Sparkles } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: string;
  targetNum?: number;
  suffix?: string;
  label: string;
  sublabel: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({
  icon: Icon,
  value,
  targetNum,
  suffix = '',
  label,
  sublabel,
  delay,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !targetNum) return;
    let start = 0;
    const duration = 2000; // ms
    const increment = targetNum / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, targetNum]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-[#C89B3C]/25 shadow-xl hover:shadow-2xl hover:border-[#C89B3C] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
    >
      {/* Top Subtle Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient group-hover:h-2 transition-all duration-300" />
      
      {/* Background Subtle Icon Glow */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-100 group-hover:text-[#C89B3C]/10 transition-colors pointer-events-none">
        <Icon className="w-full h-full" />
      </div>

      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-[#0B1F4D] text-[#C89B3C] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <div className="px-2.5 py-1 rounded-full bg-[#C89B3C]/10 text-[10px] font-bold text-[#9E7422] uppercase tracking-wider">
          Verified
        </div>
      </div>

      <div className="font-serif-brand text-4xl sm:text-5xl font-extrabold text-[#0B1F4D] tracking-tight mb-2 flex items-baseline gap-1">
        {targetNum ? (
          <span>
            {count}
            {suffix}
          </span>
        ) : (
          <span>{value}</span>
        )}
      </div>

      <h3 className="text-base font-bold text-slate-800 tracking-wide mb-1">
        {label}
      </h3>
      <p className="text-xs text-slate-500 font-medium">{sublabel}</p>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const statsList = [
    {
      icon: Clock,
      targetNum: 10,
      suffix: '+',
      value: '10+',
      label: 'Years UPSC Experience',
      sublabel: 'Dedicated preparation & guidance since 2015',
    },
    {
      icon: Video,
      targetNum: 1000,
      suffix: '+',
      value: '1000+',
      label: 'Concept Sessions',
      sublabel: 'In-depth subject modules & discussions',
    },
    {
      icon: Newspaper,
      value: 'Daily',
      label: 'Current Affairs',
      sublabel: 'Exam-oriented notes & news analysis',
    },
    {
      icon: Globe,
      value: '100%',
      label: 'Online Learning',
      sublabel: 'Accessible anytime across Karnataka & India',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 text-xs font-bold text-[#0B1F4D] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            EXCELLENCE IN NUMBERS
          </div>
          <h2 className="font-serif-brand text-2xl sm:text-4xl font-extrabold text-[#0B1F4D]">
            Empowering Aspirants with Proven Guidance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, idx) => (
            <StatItem
              key={idx}
              icon={stat.icon}
              value={stat.value}
              targetNum={stat.targetNum}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
