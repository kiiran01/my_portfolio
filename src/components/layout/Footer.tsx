import React from 'react';
import { socialLinks, aboutMe } from '../../data';
import SocialLinks from '../ui/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{aboutMe.name}</h3>
            <p className="text-gray-400 mb-4">{aboutMe.title}</p>
            <p className="text-gray-400">{aboutMe.tagline}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <SocialLinks links={socialLinks} className="flex flex-wrap gap-4" />
            <p className="text-gray-400 mt-4">contact@kiran.com.np</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} {aboutMe.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;