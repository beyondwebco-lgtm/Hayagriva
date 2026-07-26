import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Map, Send, Sparkles, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'UPSC Foundation Course',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textPayload = `Hello Hayagriva Civil Academy,%0A%0A*New Student Inquiry*%0A• *Name:* ${encodeURIComponent(formData.name)}%0A• *Phone:* ${encodeURIComponent(formData.phone)}%0A• *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A• *Target Course:* ${encodeURIComponent(formData.course)}%0A• *Message:* ${encodeURIComponent(formData.message || 'I would like to get more information about admission & strategy.')}`;

    const whatsappUrl = `https://wa.me/917795662468?text=${textPayload}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 text-xs font-bold text-[#0B1F4D] uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C89B3C]" />
            GET IN TOUCH WITH US
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold text-[#0B1F4D]">
            Start Your Guidance <span className="text-gold-gradient">Today</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Visit our Mandya administrative center or connect directly on WhatsApp with our mentor team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Address & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Address Card */}
            <div className="p-8 rounded-3xl bg-[#0B1F4D] text-white border border-[#C89B3C]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C89B3C]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-gold-gradient text-[#0B1F4D] flex items-center justify-center mb-6 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-serif-brand text-xl font-bold text-white mb-2">
                Hayagriva Civil Academy
              </h3>
              <p className="text-[#F3E5AB] text-xs font-semibold uppercase tracking-wider mb-4">
                Mandya Administrative Office
              </p>

              <p className="text-slate-200 text-sm leading-relaxed mb-6 font-medium">
                #212, 3rd Cross<br />
                Siddhartha Layout<br />
                Mandya – 571401, Karnataka, India
              </p>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C89B3C]" />
                  <span className="font-bold text-white">+91 77956 62468</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C89B3C]" />
                  <span>contact@hayagrivacivilacademy.com</span>
                </div>
              </div>
            </div>

            {/* Direct Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917795662468?text=Hello%20Hayagriva%20Civil%20Academy%2C%20I%20want%20to%20connect%20with%20a%20mentor."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              {/* Call Button */}
              <a
                href="tel:+917795662468"
                className="p-4 rounded-2xl bg-[#0B1F4D] hover:bg-[#162E6B] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 text-[#C89B3C]" />
                <span>Call Us</span>
              </a>

              {/* Email Button */}
              <a
                href="mailto:contact@hayagrivacivilacademy.com"
                className="p-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-[#0B1F4D]" />
                <span>Email</span>
              </a>

              {/* Google Maps Button */}
              <a
                href="https://maps.google.com/?q=Siddhartha+Layout+Mandya+571401"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <Map className="w-4 h-4 text-[#0B1F4D]" />
                <span>Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl">
              
              <div className="flex items-center gap-2 text-xs font-bold text-[#C89B3C] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                INSTANT WHATSAPP CONNECT
              </div>
              <h3 className="font-serif-brand text-2xl font-bold text-[#0B1F4D] mb-6">
                Send Direct Message to Mentors
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#C89B3C] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#C89B3C] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#C89B3C] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Target Course
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#C89B3C] text-sm font-medium"
                  >
                    <option>UPSC Foundation Course</option>
                    <option>KPSC KAS Preparation</option>
                    <option>Daily Current Affairs Program</option>
                    <option>Mains Answer Writing Program</option>
                    <option>All India Mock Test Series</option>
                    <option>General Inquiry / Mentorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Inquiry Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your background or specific preparation query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#C89B3C] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gold-gradient hover:bg-gold-gradient-hover text-[#0B1F4D] font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#C89B3C]/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#0B1F4D]" />
                  <span>Send Inquiry to WhatsApp Directly</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
