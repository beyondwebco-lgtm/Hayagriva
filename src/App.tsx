import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { AboutFounder } from './components/AboutFounder';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Courses } from './components/Courses';
import { LearningProcess } from './components/LearningProcess';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { SocialCommunity } from './components/SocialCommunity';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { CourseModal } from './components/CourseModal';

export function App() {
  const [, setIsLoadingComplete] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('UPSC Foundation Course');

  const handleOpenEnroll = (courseName?: string) => {
    if (courseName) setSelectedCourse(courseName);
    setEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#C89B3C] selection:text-[#0B1F4D]">
      {/* Loading Screen */}
      <LoadingScreen onComplete={() => setIsLoadingComplete(true)} />

      {/* Custom Cursor Effect */}
      <CustomCursor />

      {/* Header & Sticky Navbar */}
      <Navbar onOpenEnroll={handleOpenEnroll} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenEnroll={handleOpenEnroll} />

        {/* Animated Statistics Section */}
        <Stats />

        {/* Meet Your Mentor / About Founder */}
        <AboutFounder />

        {/* Why Choose Us - 10 Icon Cards */}
        <WhyChooseUs />

        {/* Courses & Syllabus Section */}
        <Courses onOpenEnroll={handleOpenEnroll} />

        {/* 5-Step Learning Process Timeline */}
        <LearningProcess />

        {/* Features & Study Material Showcase */}
        <Features />

        {/* Student Testimonials Carousel */}
        <Testimonials />

        {/* Social Community Cards */}
        <SocialCommunity />

        {/* FAQ Accordion Section */}
        <FAQ />

        {/* Mandya Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets />

      {/* Interactive Modals */}
      <CourseModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        selectedCourseName={selectedCourse}
      />
    </div>
  );
}

export default App;
