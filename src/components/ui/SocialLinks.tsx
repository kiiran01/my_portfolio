import React from 'react';
import { SocialLink } from '../../types';
import * as LucideIcons from 'lucide-react';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => {
  return (
    <div className={className}>
      {links.map((link) => {
        // Dynamically import the icon from lucide-react
        const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
        
        return (
          <a 
            key={link.platform} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label={link.platform}
          >
            {IconComponent && <IconComponent size={20} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;