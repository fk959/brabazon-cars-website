import React from 'react';
import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react';
import brabazonLogo from '../../assets/Brabazon-cars-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={brabazonLogo} 
                alt="Brabazon Cars Logo"
                className="h-12 w-12 object-contain"
                style={{ 
                  backgroundColor: 'transparent',
                  mixBlendMode: 'normal'
                }}
              />
              <span className="text-xl font-display font-bold">Brabazon Cars</span>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Your trusted Bristol private hire company providing professional airport transfers, 
              UK tours, and local journeys with reliability and style.
            </p>
            <div className="flex items-center space-x-2 text-primary-400">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Available 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-hover"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('fleet')}
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-hover"
              >
                Our Fleet
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-hover"
              >
                Customer Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-hover"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Our Services</h3>
            <div className="space-y-3 text-neutral-300">
              <div>Airport Transfers</div>
              <div>Private UK Tours</div>
              <div>Local Journeys</div>
              <div>Corporate Travel</div>
              <div>Event Transportation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-1" />
                <div>
                  <p className="text-neutral-300">+44 7872 910318</p>
                  <p className="text-neutral-300">+44 7515 347262</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-neutral-300">brabazoncars@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-neutral-300">
                  Bristol, UK<br />
                  Serving all UK airports
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 mb-4 md:mb-0">
              © {currentYear} Brabazon Cars. All rights reserved.
            </div>
            <div className="flex space-x-6 text-neutral-400">
              <a href="/Privacy Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors duration-200 text-hover">
                Privacy Policy
              </a>
              <a href="/Terms and Conditions.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors duration-200 text-hover">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
