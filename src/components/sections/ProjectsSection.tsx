import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data';
import { ProjectCategory } from '../../types';

const categories: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'dashboard', label: 'Dashboards' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'data-visualization', label: 'Data Visualization' },
  { value: 'analysis', label: 'Analysis' }
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Explore a selection of my data science and analytics projects"
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
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Interested in working together? Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;