import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Send, Sparkles } from 'lucide-react';

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourseName?: string;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  isOpen,
  onClose,
  selectedCourseName = 'UPSC Foundation Course',
}) => {
  const [course, setCourse] = useState(selectedCourseName);
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');

  if (!isOpen) return null;

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = `Hello Hayagriva Civil Academy,%0A%0A*New Course Enrollment Request*%0A• *Course:* ${encodeURIComponent(course)}%0A• *Student Name:* ${encodeURIComponent(studentName)}%0A• *Phone Number:* ${encodeURIComponent(studentPhone)}`;

    window.open(`https://wa.me/917795662468?text=${payload}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl border border-[#C89B3C]/40 shadow-2xl overflow-hidden"
        >
          {/* Top Header Bar */}
          <div className="p-6 bg-[#0B1F4D] text-white flex items-center justify-between border-b border-[#C89B3C]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient text-[#0B1F4D] flex items-center justify-center font-bold shadow-md">
                <ShieldCheck className="w-6 h-6 text-[#0B1F4D]" />
              </div>
              <div>
                <h3 className="font-serif-brand text-lg font-bold text-white">
                  Academy Course Admission
                </h3>
                <p className="text-xs text-[#F3E5AB]">
                  Direct Mentor Enrollment Portal
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Instant Enrollment Support:</span> Submitting this form will connect you directly with Hayagriva mentors on WhatsApp for fee details, batch timings & trial access.
              </div>
            </div>

            <form onSubmit={handleEnrollSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Selected Course *
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#C89B3C] text-sm font-semibold text-[#0B1F4D]"
                >
                  <option>UPSC Foundation Course</option>
                  <option>KPSC KAS Preparation</option>
                  <option>Daily Current Affairs Program</option>
                  <option>Indian Polity & Governance</option>
                  <option>History & Indian Culture</option>
                  <option>Physical & Indian Geography</option>
                  <option>Indian Economy & Budget</option>
                  <option>Environment & Ecology</option>
                  <option>Science & Technology</option>
                  <option>Ethics, Integrity & Aptitude (GS 4)</option>
                  <option>Essay Writing Masterclass</option>
                  <option>Mains Answer Writing Program</option>
                  <option>All India Mock Test Series</option>
                  <option>Quick Revision Series</option>
                  <option>NCERT Foundation Analysis</option>
                  <option>15-Year PYQ Discussion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#C89B3C] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  WhatsApp Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#C89B3C] text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gold-gradient hover:bg-gold-gradient-hover text-[#0B1F4D] font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#C89B3C]/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4 text-[#0B1F4D]" />
                  <span>Confirm & Send to WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
