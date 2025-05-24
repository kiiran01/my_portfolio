import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { BarChart2, Database, Code, LineChart } from 'lucide-react';
import { aboutMe } from '../../data';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about my background and approach to data science"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square overflow-hidden rounded-lg">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg overflow-hidden relative group">
                <img 
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt={aboutMe.name} 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-60"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-blue-400"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-blue-400"></div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -right-5 top-10 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg">
              <p className="font-bold text-xl">5+</p>
              <p className="text-sm">Years of<br />Experience</p>
            </div>
          </div>
          
          {/* Bio Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Transforming Data into Valuable Business Insights
            </h3>
            
            <div className="text-gray-300 space-y-4 mb-8">
              {aboutMe.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            {/* Core Skills */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <BarChart2 className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Data Analysis</h4>
                <p className="text-gray-400">Transforming raw data into actionable insights</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-purple-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <LineChart className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Visualization</h4>
                <p className="text-gray-400">Creating compelling visual stories from complex data</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-teal-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <Database className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Data Engineering</h4>
                <p className="text-gray-400">Building robust data pipelines and infrastructure</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-orange-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <Code className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Machine Learning</h4>
                <p className="text-gray-400">Developing predictive models for business decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;