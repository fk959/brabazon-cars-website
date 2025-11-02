import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import brabazonLogo from '../../assets/Brabazon-cars-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the compact state when user scrolls past 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-gradient-to-r from-neutral-900 to-neutral-800 shadow-2xl' 
        : 'bg-gradient-to-r from-neutral-900/95 to-neutral-800/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? 'h-16' : 'h-20 md:h-24'
        }`}>
          {/* Logo Section */}
          <div className="flex items-center space-x-3 relative z-10">
            <img 
              src={brabazonLogo} 
              alt="Brabazon Cars Logo"
              className={`object-contain transition-all duration-500 ease-in-out ${
                isScrolled ? 'h-18 w-18' : 'h-24 w-24 md:h-30 md:w-30'
              }`}
              style={{ 
                backgroundColor: 'transparent',
                mixBlendMode: 'normal'
              }}
            />
            <span className={`font-display font-bold text-white transition-all duration-500 ease-in-out ${
              isScrolled ? 'text-2xl' : 'text-2xl md:text-3xl'
            }`}>
              Brabazon Cars
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-neutral-200 hover:text-primary-400 font-medium text-hover nav-item"
              style={{
                fontSize: isScrolled ? '1rem' : '1.125rem',
                padding: isScrolled ? '0.5rem 0' : '0.625rem 0',
                transition: 'all 0.5s ease-in-out'
              }}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('fleet')}
              className="text-neutral-200 hover:text-primary-400 font-medium text-hover nav-item"
              style={{
                fontSize: isScrolled ? '1rem' : '1.125rem',
                padding: isScrolled ? '0.5rem 0' : '0.625rem 0',
                transition: 'all 0.5s ease-in-out'
              }}
            >
              Fleet
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-neutral-200 hover:text-primary-400 font-medium text-hover nav-item"
              style={{
                fontSize: isScrolled ? '1rem' : '1.125rem',
                padding: isScrolled ? '0.5rem 0' : '0.625rem 0',
                transition: 'all 0.5s ease-in-out'
              }}
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-400 hover:to-primary-500 shadow-lg hover:shadow-xl font-medium button-hover ring-2 ring-primary-400/20"
              style={{
                fontSize: isScrolled ? '1rem' : '1.125rem',
                padding: isScrolled ? '0.5rem 1.5rem' : '0.75rem 2rem',
                transition: 'all 0.5s ease-in-out'
              }}
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-200 hover:text-primary-400 icon-hover"
              style={{
                padding: isScrolled ? '0.5rem' : '0.625rem',
                transition: 'all 0.5s ease-in-out'
              }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-all duration-500 ease-in-out" 
                   style={{
                     transform: isScrolled ? 'scale(1)' : 'scale(1.167)',
                     transition: 'transform 0.5s ease-in-out'
                   }}
                />
              ) : (
                <Menu className="h-6 w-6 transition-all duration-500 ease-in-out"
                      style={{
                        transform: isScrolled ? 'scale(1)' : 'scale(1.167)',
                        transition: 'transform 0.5s ease-in-out'
                      }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-neutral-800 to-neutral-700 border-t border-neutral-600 fade-in-up visible">
            <div className="px-2 pb-3 space-y-1"
                 style={{
                   paddingTop: isScrolled ? '0.5rem' : '0.75rem',
                   transition: 'padding 0.5s ease-in-out'
                 }}>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-neutral-200 hover:text-primary-400 font-medium text-hover"
                style={{
                  fontSize: isScrolled ? '1rem' : '1.125rem',
                  padding: isScrolled ? '0.5rem 0.75rem' : '0.625rem 0.75rem',
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('fleet')}
                className="block w-full text-left text-neutral-200 hover:text-primary-400 font-medium text-hover"
                style={{
                  fontSize: isScrolled ? '1rem' : '1.125rem',
                  padding: isScrolled ? '0.5rem 0.75rem' : '0.625rem 0.75rem',
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                Fleet
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-neutral-200 hover:text-primary-400 font-medium text-hover"
                style={{
                  fontSize: isScrolled ? '1rem' : '1.125rem',
                  padding: isScrolled ? '0.5rem 0.75rem' : '0.625rem 0.75rem',
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-400 hover:to-primary-500 font-medium button-hover ring-2 ring-primary-400/20"
                style={{
                  fontSize: isScrolled ? '1rem' : '1.125rem',
                  padding: isScrolled ? '0.5rem 0.75rem' : '0.625rem 0.75rem',
                  marginTop: isScrolled ? '0.5rem' : '0.75rem',
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
