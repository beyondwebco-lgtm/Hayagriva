import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenEnroll: (courseName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active Scroll Spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav-scrolled py-3 shadow-2xl shadow-[#0B1F4D]/20 text-white'
          : 'bg-white/80 backdrop-blur-md py-4 border-b border-[#C89B3C]/20 text-[#0B1F4D]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Info */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-xl p-1 bg-white border border-[#C89B3C]/40 shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Hayagriva Civil Academy Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif-brand text-lg md:text-xl font-bold tracking-tight leading-none ${
                  isScrolled ? 'text-white' : 'text-[#0B1F4D]'
                }`}
              >
                HAYAGRIVA
              </span>
              <span className="font-serif-brand text-[11px] font-semibold tracking-widest text-[#C89B3C] uppercase leading-tight">
                CIVIL ACADEMY
              </span>
              <span
                className={`text-[9px] tracking-widest font-medium ${
                  isScrolled ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                LEARN • LEAD • SERVE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-lg ${
                    isScrolled
                      ? isActive
                        ? 'text-[#C89B3C]'
                        : 'text-slate-200 hover:text-white'
                      : isActive
                      ? 'text-[#0B1F4D] font-bold'
                      : 'text-slate-700 hover:text-[#0B1F4D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold-gradient rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/917795662468?text=Hello%20Hayagriva%20Civil%20Academy%2C%20I%20want%20to%20know%20more%20about%20UPSC%2C%20KPSC%2C%20State%20PSC%20%26%20Govt%20Jobs%20coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl text-emerald-600 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
              <span>WhatsApp</span>
            </a>

            {/* Start Learning Button */}
            <button
              onClick={() => onOpenEnroll('UPSC Foundation Course')}
              className="group relative px-5 py-2.5 rounded-xl bg-gold-gradient text-[#0B1F4D] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C89B3C]/25 hover:shadow-xl hover:shadow-[#C89B3C]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0B1F4D]" />
                Start Learning
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-colors ${
                isScrolled
                  ? 'border-[#C89B3C]/40 text-white bg-white/10'
                  : 'border-slate-300 text-[#0B1F4D] bg-slate-50'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0B1F4D] border-b border-[#C89B3C]/30 text-white shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl font-semibold text-base transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-[#C89B3C]/20 text-[#C89B3C] border border-[#C89B3C]/40'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://wa.me/917795662468?text=Hello%20Hayagriva%20Civil%20Academy%2C%20I%20want%20to%20know%20more%20about%20UPSC%2C%20KPSC%2C%20State%20PSC%20%26%20Govt%20Jobs%20coaching."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  Join WhatsApp Community
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnroll('UPSC Foundation Course');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-gradient text-[#0B1F4D] font-bold text-sm shadow-lg shadow-[#C89B3C]/30"
                >
                  Start Learning Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
