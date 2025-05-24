import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  location: string;
  description: string | string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  subtitle, 
  location, 
  description, 
  isLast = false 
}) => {
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-5 bottom-0 w-0.5 bg-gray-700"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-5 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-900 z-10"></div>
      
      <div className="bg-gray-800 rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300">
        <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full mb-3">
          {date}
        </span>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <div className="flex justify-between items-center mb-4">
          <p className="text-blue-400">{subtitle}</p>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
        <ul className="space-y-2">
          {descriptionArray.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;