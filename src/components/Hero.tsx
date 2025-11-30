import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import mercedesvclassImg from '../assets/Mercedes-V-Class.jpeg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-accent-100/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url(${mercedesvclassImg})`
        }}
      ></div>

      {/* Below is the old code without the screen reader header */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6 leading-tight fade-in-up">
            Arrive In Style.
            <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Depart With Ease.
            </span>
          </h1> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto"> 

          {/* Real h1 for Google and Screen Readers */}
          <h1 className="sr-only">
            Bristol Airport Transfers & Private Hire Taxi
          </h1>

          {/* Visual heading */}
          <p className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6 leading-tight fade-in-up">
            Arrive In Style.
            <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Depart With Ease.
            </span>
          </p>

          
          <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-1">
            Your trusted local private hire for seamless airport transfers, UK tours, and professional journeys.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-2">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 button-hover"
            >
              <span>Get a Quick Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200 icon-hover" />
            </button>
            
            <div className="flex items-center space-x-4 text-neutral-600">
              <div className="text-center fade-in-up stagger-3">
                <div className="font-bold text-2xl bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm">Available</div>
              </div>
              <div className="h-8 w-px bg-neutral-300"></div>
              <div className="text-center fade-in-up stagger-4">
                <div className="font-bold text-2xl bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">5★</div>
                <div className="text-sm">Rated Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-neutral-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
