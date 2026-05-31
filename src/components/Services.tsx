import React from 'react';
import { Plane, MapPin, Navigation } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Airport Transfers",
      // Added specific airport names and "taxi"
      description: "Stress-free taxi travel to and from Heathrow, Gatwick, Stansted, Bristol Airport and all UK terminals. Punctual, reliable service 24/7.",
      featured: true
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Private UK Tours",
      // Added specific locations
      description: "Discover the Cotswolds, Bath, or London with your own private chauffeur. Bespoke tours tailored to your schedule."
    },
    {
      icon: <Navigation className="h-8 w-8" />,
      title: "Local Journeys",
      // Added "executive" and "chauffeur" keywords
      description: "Comfortable and dependable private hire for all your local Bristol travel needs. A premium executive alternative for important journeys."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 fade-in-up">
            Our Core Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto fade-in-up stagger-1">
            Professional transportation solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 card-hover fade-in-up ${
                index === 0 ? 'stagger-1' : index === 1 ? 'stagger-2' : 'stagger-3'
              } ${
                service.featured 
                  ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-xl' 
                  : 'bg-gradient-to-br from-neutral-50 to-primary-50 hover:from-white hover:to-primary-50 shadow-md'
              }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-6 icon-hover icon-pulse ${
                service.featured 
                  ? 'bg-white/10 backdrop-blur-sm' 
                  : 'bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white'
              } transition-all duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4">
                {service.title}
              </h3>
              
              <p className={`text-lg leading-relaxed ${
                service.featured ? 'text-white/90' : 'text-neutral-600'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;