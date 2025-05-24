import React from 'react';
import { ChevronDown } from 'lucide-react';
import { aboutMe } from '../../data';
import SocialLinks from '../ui/SocialLinks';
import { socialLinks } from '../../data';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden"
    >
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(66, 153, 225, 0.5) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-16 mt-16">
        <div className="text-center">
          <p className="text-blue-400 mb-4 text-lg md:text-xl animate-fadeIn">Hello, I'm</p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {aboutMe.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            {aboutMe.title}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
            {aboutMe.tagline}
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
            >
              Contact Me
            </a>
          </div>
          
          <SocialLinks links={socialLinks} className="flex justify-center gap-4" />
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;