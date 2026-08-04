import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, Award, CheckCircle2, Sparkles, BookOpen, Landmark, Scale, GraduationCap, Globe, TrendingUp, Leaf, Cpu, Calculator } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

interface HeroProps {
  onOpenEnroll: (courseName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnroll }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Floating Particle Animation Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    const colors = ['rgba(200, 155, 60, ', 'rgba(223, 178, 81, ', 'rgba(255, 255, 255, '];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = '#C89B3C';
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0B1F4D] text-white">
      {/* Background Interactive Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Decorative Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C89B3C]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-[#C89B3C]/40 backdrop-blur-md text-xs sm:text-sm font-semibold text-[#F3E5AB] shadow-inner">
              <Sparkles className="w-4 h-4 text-[#C89B3C] animate-pulse" />
              <span>OFFICIAL UPSC, KPSC, STATE PSC & GOVERNMENT JOBS PLATFORM</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif-brand text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Your Journey to Become a{' '}
              <span className="text-gold-gradient drop-shadow-md block sm:inline">
                Civil Servant
              </span>{' '}
              Starts Here
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Prepare for UPSC, KPSC, State PSC, and Government Jobs with concept-based learning, current affairs, smart strategies, answer writing, and expert guidance.
            </p>

            {/* Micro Highlights Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              {[
                'Concept Clarity',
                'Smart Strategy',
                'Daily Current Affairs',
                '1-on-1 Mentorship',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B3C]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Start Learning Button */}
              <button
                onClick={() => onOpenEnroll('UPSC Foundation Course')}
                className="group relative px-7 py-3.5 rounded-2xl bg-gold-gradient text-[#0B1F4D] font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-[#C89B3C]/30 hover:shadow-2xl hover:shadow-[#C89B3C]/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5 text-[#0B1F4D]" />
                <span>Start Learning</span>
                <div className="w-2 h-2 rounded-full bg-[#0B1F4D] animate-ping" />
              </button>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917795662468?text=Hello%20Hayagriva%20Civil%20Academy%2C%20I%20want%20to%20enroll%20in%20UPSC%2FKPSC%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-400/40 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Join WhatsApp</span>
              </a>

              {/* Watch on YouTube Button */}
              <a
                href="https://www.youtube.com/channel/UCes8Ll8WBIO2uzzXj3wgPNQ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5"
              >
                <YoutubeIcon className="w-5 h-5 text-red-500" />
                <span>Watch YouTube</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Educational & Civil Services Visual (No Human Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center py-6"
          >
            {/* Main Outer Shield Container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl p-1 bg-gradient-to-tr from-[#C89B3C] via-[#DFB251]/40 to-[#0B1F4D] shadow-2xl shadow-[#C89B3C]/30 flex items-center justify-center">
              
              {/* Inner Glassmorphism Card */}
              <div className="relative w-full h-full rounded-[22px] bg-[#06112C]/90 backdrop-blur-xl border border-[#C89B3C]/40 p-6 flex flex-col items-center justify-between text-center overflow-hidden shadow-inner">
                
                {/* Ambient Top Glow */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#C89B3C]/20 rounded-full blur-3xl pointer-events-none" />

                {/* Central Emblem Frame */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-2 bg-white/10 border border-[#C89B3C]/60 shadow-xl flex items-center justify-center backdrop-blur-md mb-2 group">
                  <img
                    src="/images/logo.png"
                    alt="Hayagriva Official Logo"
                    className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute -inset-1 rounded-2xl border border-[#C89B3C]/30 animate-pulse pointer-events-none" />
                </div>

                {/* Center Title Badge */}
                <div className="relative z-10 space-y-1">
                  <h3 className="font-serif-brand text-lg sm:text-xl font-bold tracking-wide text-white">
                    HAYAGRIVA
                  </h3>
                  <p className="font-serif-brand text-xs font-semibold text-[#C89B3C] uppercase tracking-widest">
                    CIVIL ACADEMY
                  </p>
                  <div className="px-3 py-1 rounded-full bg-white/10 border border-[#C89B3C]/30 text-[10px] font-bold text-slate-200 uppercase tracking-widest inline-block mt-1">
                    UPSC, KPSC, STATE PSC & GOVT JOBS CENTER
                  </div>
                </div>

                {/* Bottom Stats Badge Ribbon */}
                <div className="relative z-10 w-full pt-3 border-t border-white/10 flex items-center justify-around text-center text-xs">
                  <div>
                    <div className="font-bold text-[#F3E5AB]">10+ YRS</div>
                    <div className="text-[9px] text-slate-400">Excellence</div>
                  </div>
                  <div className="h-6 w-px bg-white/10" />
                  <div>
                    <div className="font-bold text-emerald-400">100%</div>
                    <div className="text-[9px] text-slate-400">Concept Based</div>
                  </div>
                  <div className="h-6 w-px bg-white/10" />
                  <div>
                    <div className="font-bold text-[#C89B3C]">CSE</div>
                    <div className="text-[9px] text-slate-400">Oriented</div>
                  </div>
                </div>

              </div>

              {/* Orbiting Floating Element 1: Current Affairs */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 px-4 py-2.5 rounded-2xl glass-card-dark border border-[#C89B3C]/50 shadow-2xl flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-gradient text-[#0B1F4D] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-[#0B1F4D]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#F3E5AB]">Current Affairs</div>
                  <div className="text-[10px] text-slate-300 font-medium">Daily News Analysis & Editorials</div>
                </div>
              </motion.div>

              {/* Orbiting Floating Element 2: Concept Mastery */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 px-4 py-2.5 rounded-2xl glass-card-dark border border-[#C89B3C]/50 shadow-2xl flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/80 text-white flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Concept First</div>
                  <div className="text-[10px] text-[#C89B3C] font-medium">Smart Strategy</div>
                </div>
              </motion.div>

              {/* Floating Small Subject Badges */}
              <div className="absolute top-1/2 -right-7 p-3 rounded-full bg-[#0B1F4D] border border-[#C89B3C]/60 text-[#C89B3C] shadow-xl">
                <Scale className="w-5 h-5" />
              </div>
              <div className="absolute top-1/2 -left-7 p-3 rounded-full bg-[#0B1F4D] border border-[#C89B3C]/60 text-[#C89B3C] shadow-xl">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subject Strip Ribbon */}
      <div className="mt-16 pt-6 pb-6 bg-[#06112C]/90 border-y border-[#C89B3C]/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-xs font-semibold text-slate-300">
            {[
              { icon: Landmark, title: 'INDIAN POLITY' },
              { icon: BookOpen, title: 'HISTORY' },
              { icon: Globe, title: 'GEOGRAPHY' },
              { icon: TrendingUp, title: 'ECONOMICS' },
              { icon: Leaf, title: 'ENVIRONMENT & ECOLOGY' },
              { icon: Cpu, title: 'SCIENCE & TECHNOLOGY' },
              { icon: Scale, title: 'ETHICS' },
              { icon: Sparkles, title: 'CURRENT AFFAIRS' },
              { icon: Award, title: 'ANSWER WRITING' },
              { icon: Calculator, title: 'CSAT' },
            ].map((sub, i) => {
              const Icon = sub.icon;
              return (
                <div key={i} className="flex items-center gap-2 hover:text-[#C89B3C] transition-colors cursor-pointer whitespace-nowrap">
                  <Icon className="w-4 h-4 text-[#C89B3C]" />
                  <span className="tracking-wider">{sub.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
