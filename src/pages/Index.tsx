
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import SponsorsSection from '../components/SponsorsSection';
import ScheduleSection from '../components/ScheduleSection';
import ChecklistSection from '../components/ChecklistSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <SponsorsSection />
      <ScheduleSection />
      <ChecklistSection />
      <Footer />
    </div>
  );
};

export default Index;
