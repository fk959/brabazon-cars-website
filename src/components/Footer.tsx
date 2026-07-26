import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import brabazonLogo from '../assets/Brabazon cars logo-1.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const heathrowRoutes = [
    { title: 'Clifton to Heathrow', slug: 'clifton-to-heathrow-taxi' },
    { title: 'Bradley Stoke to Heathrow', slug: 'bradley-stoke-to-heathrow-taxi' },
    { title: 'Bath to Heathrow', slug: 'bath-to-heathrow-transfer' },
    { title: 'Westbury-on-Trym to Heathrow', slug: 'westbury-on-trym-to-heathrow-taxi' },
    { title: 'Portishead to Heathrow', slug: 'portishead-to-heathrow-taxi' },
    { title: 'Bristol to Heathrow', slug: 'bristol-to-heathrow-taxi' },
  ];

  const gatwickRoutes = [
    { title: 'Filton to Gatwick', slug: 'filton-to-gatwick-transfer' },
    { title: 'Henbury to Gatwick', slug: 'henbury-to-gatwick-taxi' },
    { title: 'Bradley Stoke to Gatwick', slug: 'bradley-stoke-to-gatwick-transfer' },
    { title: 'Bristol to Gatwick', slug: 'bristol-to-gatwick-transfer' },
  ];

  const stanstedRoutes = [
    { title: 'Bristol to Stansted', slug: 'bristol-to-stansted-airport-taxi' },
    { title: 'Stoke Gifford to Stansted', slug: 'stoke-gifford-to-stansted-taxi' },
    { title: 'Clifton to Stansted', slug: 'clifton-to-stansted-taxi' },
    { title: 'Bradley Stoke to Stansted', slug: 'bradley-stoke-to-stansted-taxi' },
  ];

  const regionalRoutes = [
    { title: 'Stoke Gifford to Bristol Airport', slug: 'stoke-gifford-to-bristol-airport' },
    { title: 'Keynsham to Bristol Airport', slug: 'keynsham-to-bristol-airport' },
    { title: 'North Bristol to Luton Airport', slug: 'north-bristol-to-luton-airport' },
  ];

  return (
    <footer className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 text-white pt-12 md:pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Brand & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={brabazonLogo} 
                alt="Brabazon Cars Logo"
                className="h-12 w-12 object-contain"
                style={{ 
                  backgroundColor: 'transparent',
                  mixBlendMode: 'normal'
                }}
              />
              <span className="text-xl font-display font-bold group-hover:text-primary-400 transition-colors">Brabazon Cars</span>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Your trusted Bristol private hire company providing professional airport transfers, 
              UK tours, and local journeys with reliability and style.
            </p>
            <div className="flex items-center space-x-2 text-primary-400 text-sm">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Available 24/7 Round the Clock</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-display font-bold text-white uppercase tracking-wider mb-5">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('fleet')}
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                Our Fleet
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                Customer Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-base font-display font-bold text-white uppercase tracking-wider mb-5">Our Services</h3>
            <div className="space-y-3 text-sm text-neutral-300">
              <div>Airport Transfers</div>
              <div>Private UK Tours</div>
              <div>Local Bristol Journeys</div>
              <div>Executive Corporate Travel</div>
              <div>Event Transportation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-display font-bold text-white uppercase tracking-wider mb-5">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-neutral-300 space-y-1">
                  <a href="tel:+447872910318" className="hover:text-primary-400 transition-colors block">+44 7872 910318</a>
                  <a href="tel:+447515347262" className="hover:text-primary-400 transition-colors block">+44 7515 347262</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:brabazoncars@gmail.com" className="text-neutral-300 hover:text-primary-400 transition-colors">brabazoncars@gmail.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">
                  Bristol, UK<br />
                  Serving Heathrow, Gatwick, Stansted & BRS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Organized Muted 4-Column SEO Transfer Section */}
        <div className="py-8 border-b border-neutral-800/80">
          <div className="mb-6">
            <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">
              Popular Direct Routes
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              We provide door-to-door transfers to and from any UK postcode or airport 24/7.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {/* Column 1: Heathrow */}
            <div>
              <h4 className="font-semibold text-neutral-300 text-xs uppercase tracking-wider mb-3">Heathrow (LHR)</h4>
              <ul className="space-y-1.5">
                {heathrowRoutes.map(r => (
                  <li key={r.slug}>
                    <Link to={`/transfers/${r.slug}`} className="text-neutral-400 hover:text-primary-400 transition-colors truncate block">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Gatwick */}
            <div>
              <h4 className="font-semibold text-neutral-300 text-xs uppercase tracking-wider mb-3">Gatwick (LGW)</h4>
              <ul className="space-y-1.5">
                {gatwickRoutes.map(r => (
                  <li key={r.slug}>
                    <Link to={`/transfers/${r.slug}`} className="text-neutral-400 hover:text-primary-400 transition-colors truncate block">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Stansted */}
            <div>
              <h4 className="font-semibold text-neutral-300 text-xs uppercase tracking-wider mb-3">Stansted (STN)</h4>
              <ul className="space-y-1.5">
                {stanstedRoutes.map(r => (
                  <li key={r.slug}>
                    <Link to={`/transfers/${r.slug}`} className="text-neutral-400 hover:text-primary-400 transition-colors truncate block">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Regional */}
            <div>
              <h4 className="font-semibold text-neutral-300 text-xs uppercase tracking-wider mb-3">Bristol & Regional</h4>
              <ul className="space-y-1.5">
                {regionalRoutes.map(r => (
                  <li key={r.slug}>
                    <Link to={`/transfers/${r.slug}`} className="text-neutral-400 hover:text-primary-400 transition-colors truncate block">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400">
          <div className="mb-4 md:mb-0">
            © {currentYear} Brabazon Cars. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
