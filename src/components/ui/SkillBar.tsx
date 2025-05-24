import React, { useEffect, useRef, useState } from 'react';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  // Determine color based on skill category
  const getColor = () => {
    switch (skill.category) {
      case 'programming':
        return 'from-blue-600 to-blue-400';
      case 'data-analysis':
        return 'from-purple-600 to-purple-400';
      case 'visualization':
        return 'from-teal-600 to-teal-400';
      case 'database':
        return 'from-green-600 to-green-400';
      case 'tools':
        return 'from-orange-600 to-orange-400';
      default:
        return 'from-blue-600 to-blue-400';
    }
  };

  return (
    <div className="mb-4" ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2.5 w-full bg-gray-700 rounded-full">
        <div 
          className={`h-2.5 rounded-full bg-gradient-to-r ${getColor()} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;