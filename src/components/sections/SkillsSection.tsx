import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SkillBar from '../ui/SkillBar';
import { skills } from '../../data';
import { SkillCategory } from '../../types';

const categories: { value: SkillCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Skills' },
  { value: 'programming', label: 'Programming' },
  { value: 'data-analysis', label: 'Data Analysis' },
  { value: 'visualization', label: 'Visualization' },
  { value: 'database', label: 'Database' },
  { value: 'tools', label: 'Tools' }
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="My technical toolkit and proficiency levels in various data science technologies"
          center
        />
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <SkillBar 
              key={skill.name} 
              skill={skill} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;