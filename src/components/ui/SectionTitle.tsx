import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false 
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
        <span className="text-blue-500">.</span>
      </h2>
      
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      <div className={`h-1 w-20 bg-blue-500 mt-6 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;