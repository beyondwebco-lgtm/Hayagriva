import React from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { YoutubeIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06112C] text-white border-t border-[#C89B3C]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl p-1 bg-white border border-[#C89B3C]/50 shadow-lg flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Hayagriva Civil Academy Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif-brand text-xl font-bold tracking-tight text-white">
                  HAYAGRIVA
                </div>
                <div className="font-serif-brand text-xs font-semibold tracking-widest text-[#C89B3C] uppercase">
                  CIVIL ACADEMY
                </div>
                <div className="text-[10px] tracking-widest text-slate-400">
                  LEARN • LEAD • SERVE
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Empowering aspirants through concept-based learning, smart preparation strategies, quality mentorship, and disciplined guidance for UPSC, KPSC, State PSC, and Government Job examinations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com/channel/UCes8Ll8WBIO2uzzXj3wgPNQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-600 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/hayagriva_civil_academy?utm_source=qr&igsh=MWxlbGw4dnl3MmYzdA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-pink-600 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/hayagrivacivilacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-sky-500 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917795662468"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-600 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-brand text-sm font-bold text-[#F3E5AB] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#home" className="hover:text-[#C89B3C] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C89B3C] transition-colors">Meet Your Mentor</a></li>
              <li><a href="#courses" className="hover:text-[#C89B3C] transition-colors">Academic Courses</a></li>
              <li><a href="#features" className="hover:text-[#C89B3C] transition-colors">Study Repository</a></li>
              <li><a href="#testimonials" className="hover:text-[#C89B3C] transition-colors">Student Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#C89B3C] transition-colors">Contact Academy</a></li>
            </ul>
          </div>

          {/* Key Courses */}
          <div className="space-y-3">
            <h4 className="font-serif-brand text-sm font-bold text-[#F3E5AB] uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#courses" className="hover:text-[#C89B3C] transition-colors">UPSC Foundation Course</a></li>
              <li><a href="#courses" className="hover:text-[#C89B3C] transition-colors">KPSC KAS Preparation</a></li>
              <li><a href="#courses" className="hover:text-[#C89B3C] transition-colors">Daily Current Affairs</a></li>
              <li><a href="#courses" className="hover:text-[#C89B3C] transition-colors">Ethics & Case Studies</a></li>
              <li><a href="#courses" className="hover:text-[#C89B3C] transition-colors">Answer Writing Batch</a></li>
              <li><a href="#courses" className="hover:text-[#C89B3C] transition-colors">Mock Test Series</a></li>
              <li><a href="#courses" className="hover:text-[#C89B3C] transition-colors">NCERT Foundation</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3">
            <h4 className="font-serif-brand text-sm font-bold text-[#F3E5AB] uppercase tracking-wider">
              Academy Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <span>#212, 3rd Cross, Siddhartha Layout, Mandya – 571401</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <span className="text-[#F3E5AB] font-semibold">Enquiry: </span>
                    <a href="tel:+917795662468" className="font-bold text-white hover:text-[#C89B3C] transition-colors">+91 77956 62468</a>
                  </div>
                  <div>
                    <span className="text-[#F3E5AB] font-semibold">Contact: </span>
                    <a href="tel:+919008441489" className="font-bold text-white hover:text-[#C89B3C] transition-colors">+91 90084 41489</a>
                  </div>
                  <div>
                    <span className="text-[#F3E5AB] font-semibold">Contact: </span>
                    <a href="tel:+917795667898" className="font-bold text-white hover:text-[#C89B3C] transition-colors">+91 77956 67898</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                <Mail className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>contact@hayagrivacivilacademy.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            © 2026 Hayagriva Civil Academy. All rights reserved.
          </div>
          <div className="font-serif-brand font-bold text-[#C89B3C] tracking-widest uppercase">
            Learn • Lead • Serve
          </div>
        </div>

      </div>
    </footer>
  );
};
