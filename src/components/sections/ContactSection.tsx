import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from '../ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind or interested in working together? Let's connect!"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-400">Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:contact@kiran.com.np" className="text-gray-400 hover:text-blue-400 transition-colors">
                    contact@kiran.com.np
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <a href="tel:+9779841234567" className="text-gray-400 hover:text-blue-400 transition-colors">
                    +977 984-123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Working Hours</h4>
                  <p className="text-gray-400">Sun - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Map or Image */}
            <div className="mt-8 h-48 bg-gray-700 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2907428/pexels-photo-2907428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Location Map" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;