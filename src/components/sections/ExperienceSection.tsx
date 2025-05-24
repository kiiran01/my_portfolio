import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import { experiences, education } from '../../data';

const ExperienceSection: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short'
    }).format(date);
  };

  const formatDateRange = (startDate: string, endDate: string | null) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} - ${end}`;
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Experience & Education" 
          subtitle="My professional journey and academic background"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
              Work Experience
            </h3>
            <div className="ml-4">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={experience.id}
                  date={formatDateRange(experience.startDate, experience.endDate)}
                  title={experience.role}
                  subtitle={experience.company}
                  location={experience.location}
                  description={experience.description}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
              Education
            </h3>
            <div className="ml-4">
              {education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  date={`${edu.startDate} - ${edu.endDate}`}
                  title={edu.degree}
                  subtitle={edu.institution}
                  location={edu.location}
                  description={edu.description}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;