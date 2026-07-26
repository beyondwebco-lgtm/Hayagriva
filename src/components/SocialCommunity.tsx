import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Users, AtSign, ExternalLink, Sparkles } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons';

export const SocialCommunity: React.FC = () => {
  const socialCards = [
    {
      name: 'YouTube',
      tag: 'Video Lectures & Free Concept Classes',
      followers: 'Subscribe Channel',
      gradient: 'from-red-600 to-rose-700',
      icon: YoutubeIcon,
      link: 'https://www.youtube.com/channel/UCes8Ll8WBIO2uzzXj3wgPNQ',
    },
    {
      name: 'Instagram',
      tag: 'Daily Current Affairs Infographics',
      followers: 'Follow Official Handle',
      gradient: 'from-fuchsia-600 via-pink-600 to-amber-500',
      icon: InstagramIcon,
      link: 'https://www.instagram.com/hayagriva_civil_academy?utm_source=qr&igsh=MWxlbGw4dnl3MmYzdA==',
    },
    {
      name: 'Facebook',
      tag: 'Academy Updates & Event Posts',
      followers: 'Visit Facebook Page',
      gradient: 'from-blue-600 to-indigo-700',
      icon: FacebookIcon,
      link: 'https://www.facebook.com/share/1BSqUvT9ZQ/',
    },
    {
      name: 'WhatsApp Channel',
      tag: 'Instant News & Announcement Feed',
      followers: 'Join Broadcast Channel',
      gradient: 'from-emerald-500 to-teal-600',
      icon: MessageCircle,
      link: 'https://whatsapp.com/channel/0029VbD44r6HAdNVFUqYoZ1w',
    },
    {
      name: 'Telegram',
      tag: 'Downloadable Notes & Question Polls',
      followers: 'Join Telegram Channel',
      gradient: 'from-sky-500 to-blue-600',
      icon: Send,
      link: 'https://t.me/hayagrivacivilacademy',
    },
    {
      name: 'WhatsApp Community',
      tag: 'Aspirants Peer Group & Discussion',
      followers: 'Join Aspirants Group',
      gradient: 'from-green-600 to-emerald-700',
      icon: Users,
      link: 'https://chat.whatsapp.com/BAGppV7SHAI0KfSFsbGqnm',
    },
    {
      name: 'X (Twitter)',
      tag: 'National & Global Affairs Analysis',
      followers: 'Follow on X',
      gradient: 'from-slate-900 to-[#0B1F4D]',
      icon: TwitterIcon,
      link: 'https://x.com/HayagrivaCA',
    },
    {
      name: 'Threads',
      tag: 'Key Exam Insights & Micro-Notes',
      followers: 'Follow on Threads',
      gradient: 'from-[#1E293B] to-[#0F172A]',
      icon: AtSign,
      link: 'https://www.threads.com/@hayagriva_civil_academy',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 text-xs font-bold text-[#0B1F4D] uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C89B3C]" />
            STAY CONNECTED EVERYWHERE
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold text-[#0B1F4D]">
            Join the <span className="text-gold-gradient">Hayagriva Community</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Stay updated with daily current affairs, one-page revision notes, PYQ quizzes, and exam strategies on your favorite platform.
          </p>
        </div>

        {/* 8 Card Grid - Entire card is clickable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={idx}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between p-6 bg-slate-900 text-white cursor-pointer block"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 fill-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="font-serif-brand text-xl font-bold text-white mb-1">
                    {card.name}
                  </h3>
                  <p className="text-xs text-white/90 font-medium">
                    {card.tag}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-bold text-amber-200 uppercase tracking-wider">
                  <span>{card.followers}</span>
                  <span>Open Link →</span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
