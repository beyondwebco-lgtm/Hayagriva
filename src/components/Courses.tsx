import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, Search, GraduationCap } from 'lucide-react';

interface CoursesProps {
  onOpenEnroll: (courseName?: string) => void;
}

export interface Course {
  id: string;
  category: 'upsc' | 'kpsc' | 'subject' | 'skill';
  title: string;
  badge: string;
  description: string;
  duration: string;
  mode: string;
  highlights: string[];
  icon: string;
  isPopular?: boolean;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenEnroll }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'upsc' | 'kpsc' | 'subject' | 'skill'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const courseList: Course[] = [
    {
      id: 'upsc-foundation',
      category: 'upsc',
      title: 'UPSC Foundation Course',
      badge: 'Comprehensive Flagship',
      description: 'End-to-end syllabus coverage for Prelims + Mains + Interview with concept clarity and daily test series.',
      duration: '12 Months',
      mode: 'Live + Recorded',
      highlights: ['GS 1, 2, 3 & 4 Complete Coverage', 'Daily Current Affairs Analysis', 'Mentorship & Answer Writing', 'Prelims & Mains Test Series'],
      icon: '🏛️',
      isPopular: true,
    },
    {
      id: 'kpsc-prep',
      category: 'kpsc',
      title: 'KPSC KAS Preparation',
      badge: 'State Civil Services',
      description: 'Targeted KPSC Gazetted Probationers prelims and mains guidance focused on Karnataka history, geography & administration.',
      duration: '9 Months',
      mode: 'Online Interactive',
      highlights: ['Karnataka Special Polity & Economy', 'State GK & Specific Current Affairs', 'KPSC PYQ Trend Mapping', 'Kannada & English Medium Support'],
      icon: '⚔️',
      isPopular: true,
    },
    {
      id: 'current-affairs',
      category: 'upsc',
      title: 'Daily Current Affairs Program',
      badge: 'High Yield',
      description: 'Daily simplified newspaper analysis (The Hindu, Indian Express, PIB) mapped directly to UPSC/KPSC syllabus.',
      duration: '1 Year Subscription',
      mode: 'Daily Live @ 8 AM',
      highlights: ['Static vs Dynamic Inter-linkages', 'One-Page Daily PDF Summaries', 'Weekly Quiz & Monthly Compilations', 'Mains Issue-Based Analysis'],
      icon: '📰',
      isPopular: true,
    },
    {
      id: 'polity',
      category: 'subject',
      title: 'Indian Polity & Governance',
      badge: 'Subject Special',
      description: 'Master Constitutional Articles, Supreme Court Landmarks, Laxmikanth concepts, and governance frameworks.',
      duration: '60 Hours',
      mode: 'Self-Paced / Live',
      highlights: ['Concept Mindmaps for Constitution', 'Recent Amendments & SC Verdicts', 'Prelims 100+ PYQ Solutions', 'Mains Answer Structuring'],
      icon: '⚖️',
    },
    {
      id: 'history',
      category: 'subject',
      title: 'History & Indian Culture',
      badge: 'Subject Special',
      description: 'Ancient, Medieval, Modern History and Art & Culture simplified with chronological timelines and visual aids.',
      duration: '70 Hours',
      mode: 'Self-Paced / Live',
      highlights: ['Chronological Memory Maps', 'Spectrum & NCERT Synthesis', 'Freedom Struggle Key Events', 'Art & Architecture Visual Notes'],
      icon: '📜',
    },
    {
      id: 'geography',
      category: 'subject',
      title: 'Physical & Indian Geography',
      badge: 'Subject Special',
      description: 'Physical geography, climate systems, oceanography, Indian geography, and mapping tricks for high prelims score.',
      duration: '65 Hours',
      mode: 'Self-Paced / Live',
      highlights: ['Atlas & Map Marking Masterclass', 'Climatology & Geomorphology 3D Models', 'Resources & Industry Location Logic', 'Prelims Elimination Techniques'],
      icon: '🌍',
    },
    {
      id: 'economy',
      category: 'subject',
      title: 'Indian Economy & Budget',
      badge: 'Subject Special',
      description: 'Macroeconomics fundamentals, Union Budget, Economic Survey, banking, inflation, and fiscal policy decoded.',
      duration: '55 Hours',
      mode: 'Self-Paced / Live',
      highlights: ['Banking & Monetary Policy Concepts', 'Economic Survey High Points', 'Key Indices & International Bodies', 'Budget Terminology Decoded'],
      icon: '📈',
    },
    {
      id: 'environment',
      category: 'subject',
      title: 'Environment & Ecology',
      badge: 'High Weightage',
      description: 'Biodiversity, conservation, climate change treaties, national parks, acts, and environmental conventions.',
      duration: '45 Hours',
      mode: 'Self-Paced / Live',
      highlights: ['IUCN Red List & Protected Areas Map', 'Environmental Acts & Bodies', 'Climate Summits & Protocols', 'High Weightage Prelims Drills'],
      icon: '🌱',
    },
    {
      id: 'science-tech',
      category: 'subject',
      title: 'Science & Technology',
      badge: 'Subject Special',
      description: 'Biotechnology, Space Tech, Defense, AI, Quantum Computing, Cyber Security, and Emerging Technologies.',
      duration: '40 Hours',
      mode: 'Self-Paced / Live',
      highlights: ['ISRO & NASA Missions Coverage', 'Defense Indigenization & Weapons', 'Biotech & Gene Editing Basics', 'Recent Tech Nobel Prizes'],
      icon: '⚛️',
    },
    {
      id: 'ethics',
      category: 'skill',
      title: 'Ethics, Integrity & Aptitude (GS 4)',
      badge: 'Mains Booster',
      description: 'Moral philosophy, administrative ethics, emotional intelligence, and real-life case study solving frameworks.',
      duration: '50 Hours',
      mode: 'Live + Case Studies',
      highlights: ['Thinkers & Philosophers Summaries', '30+ Real Civil Servant Case Studies', 'Ethics Terminology Glossary', 'Model Answer Templates'],
      icon: '⚖️',
      isPopular: true,
    },
    {
      id: 'essay-writing',
      category: 'skill',
      title: 'Essay Writing Masterclass',
      badge: 'Mains Booster',
      description: 'Craft high-scoring philosophical, socio-economic, and political essays with multi-dimensional structures.',
      duration: '30 Hours',
      mode: 'Interactive Workshop',
      highlights: ['Brainstorming & Outline Strategy', 'Quotes & Anecdotes Repository', '10+ Evaluated Essay Assignments', 'Philosophical Essay Decoding'],
      icon: '✒️',
    },
    {
      id: 'answer-writing',
      category: 'skill',
      title: 'Mains Answer Writing Program',
      badge: 'Skill Booster',
      description: 'Daily answer writing drills with step-by-step introduction, body paragraphing, diagrams, and conclusions.',
      duration: '3 Months',
      mode: 'Daily Evaluation',
      highlights: ['Daily 2 Questions & Model Answers', 'Direct Feedback by Experienced Mentors', 'Diagrams & Flowcharts Integration', 'Time Management in Mains'],
      icon: '📝',
      isPopular: true,
    },
    {
      id: 'mock-tests',
      category: 'skill',
      title: 'All India Mock Test Series',
      badge: 'Exam Drill',
      description: 'Rigorous Prelims & Mains mock test series with detailed solution keys, rank analysis, and mistake logs.',
      duration: '30 Tests',
      mode: 'Online Portal',
      highlights: ['Sectional + Full Length Tests', 'Detailed Explanations PDF', 'Performance Analytics & Percentile', 'Revision Mindmaps Included'],
      icon: '🎯',
    },
    {
      id: 'revision-series',
      category: 'skill',
      title: 'Quick Revision Series',
      badge: 'Crash Course',
      description: 'High-speed 30-day crash course covering most probable prelims questions and static core notes.',
      duration: '30 Days',
      mode: 'Fast Track Live',
      highlights: ['One-Page Cheat Sheets', 'High Probability Topic Radar', 'Quick Recall Drills', 'Formulae & Data Tables'],
      icon: '⚡',
    },
    {
      id: 'ncert-analysis',
      category: 'upsc',
      title: 'NCERT Foundation Analysis',
      badge: 'Beginner Essential',
      description: 'Class 6th to 12th NCERT summary covering History, Geography, Polity, Science, and Economy for beginners.',
      duration: '80 Hours',
      mode: 'Self-Paced',
      highlights: ['Class-by-Class Chapter Summaries', 'NCERT MCQ Question Bank', 'Base Building for Beginners', 'Downloadable NCERT Notes'],
      icon: '📚',
    },
    {
      id: 'pyq-discussion',
      category: 'skill',
      title: '15-Year PYQ Discussion',
      badge: 'Strategy Must',
      description: 'Topic-wise breakdown of UPSC & KPSC previous year questions with elimination tricks and pattern insights.',
      duration: '40 Hours',
      mode: 'Video Masterclass',
      highlights: ['2000+ Solved PYQ Explanations', 'Option Elimination Logic', 'Repeat Theme Identification', 'Subject-wise Question Trends'],
      icon: '🔍',
    },
  ];

  const filteredCourses = courseList.filter((course) => {
    const matchesTab = activeTab === 'all' || course.category === activeTab;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="courses" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 text-xs font-bold text-[#0B1F4D] uppercase tracking-widest">
            <GraduationCap className="w-4 h-4 text-[#C89B3C]" />
            ACADEMIC PROGRAMS & COURSES
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold text-[#0B1F4D]">
            Master Civil Services with <span className="text-gold-gradient">Concept-Based Courses</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Structured modules designed for Prelims, Mains, and Interview success in UPSC CSE & KPSC KAS.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-2 rounded-2xl bg-white border border-slate-200 shadow-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto p-1">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'upsc', label: 'UPSC Special' },
              { id: 'kpsc', label: 'KPSC Prep' },
              { id: 'subject', label: 'Subject Modules' },
              { id: 'skill', label: 'Skill Boosters' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0B1F4D] text-[#C89B3C] shadow-md'
                    : 'text-slate-600 hover:text-[#0B1F4D] hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 pr-2">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search course or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#C89B3C]"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl bg-white border border-slate-200 hover:border-[#C89B3C] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Popular Badge */}
                {course.isPopular && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gold-gradient text-[#0B1F4D] text-[10px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#0B1F4D]" />
                    FEATURED
                  </div>
                )}

                <div className="p-7">
                  {/* Top Icon & Tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1F4D] text-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {course.icon}
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0B1F4D]/5 text-[10px] font-bold text-[#0B1F4D] border border-[#0B1F4D]/10 uppercase tracking-wider">
                        {course.badge}
                      </span>
                      <div className="text-[11px] text-slate-500 font-semibold mt-1">
                        {course.duration} • {course.mode}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif-brand text-xl font-bold text-[#0B1F4D] group-hover:text-[#9E7422] transition-colors mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
                    {course.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C89B3C] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Enroll CTA Bar */}
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    Concept-Based Guidance
                  </div>
                  <button
                    onClick={() => onOpenEnroll(course.title)}
                    className="px-5 py-2.5 rounded-xl bg-[#0B1F4D] hover:bg-gold-gradient text-white hover:text-[#0B1F4D] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
